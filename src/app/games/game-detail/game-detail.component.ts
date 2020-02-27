import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-game-detail',
  templateUrl: './game-detail.component.html',
  styleUrls: ['./game-detail.component.less']
})
export class GameDetailComponent implements OnInit {
  public game;
  public errorFromServer: boolean = false;
  public isLoading = true;

  constructor(private dataService: DataService,
              private router: Router,
              private route: ActivatedRoute) { }

  ngOnInit() {
    const gameId = this.route.snapshot.params['id'];
    this.game = {
      "id": "yggdrasil-joker-millions",
      "slug": "joker-millions",
      "background": "//staging-static.cherrycasino.com/media/game/GenericCasinoNEW.jpg?u=1546507715",
      "description": "",
      "game_stakes": null,
      "height": "360",
      "name": "Joker Millions",
      "width": "640",
      "thumbnail": "//staging-static.cherrycasino.com/media/game/desktop/lobby/150x140-joker-millions.jpg?u=1546507715",
      "url": "https://staticpff.yggdrasilgaming.com/init/launchClient.html?gameid=7312&lang=en&currency=EUR&org=CherryCasino&channel=pc&key=&skin=cherry",
      "created_at": {
        "date": "2015-04-13T11:05:48+00:00"
      },
      "screenshot": null,
      "homepage_image": null,
      "vendor": "yggdrasil",
      "vendor_properties": {
        "gameid": "7312",
        "lang": "en",
        "currency": "EUR",
        "org": "CherryCasino",
        "channel": "pc",
        "key": "",
        "skin": "cherry",
        "launch_url": "https://staticpff.yggdrasilgaming.com/init/launchClient.html?gameid=7312&lang=en&currency=EUR&org=CherryCasino&channel=pc&key=&skin=cherry"
      },
      "meta": {
        "description_short": "",
        "currency": "EUR",
        "bonus": false,
        "free_spins": true
      },
      "enabled": true,
      "label": null,
      "cols": null,
      "rows": null,
      "pos_x": null,
      "pos_y": null,
      "volatility": 0,
      "rating": 0,
      "backgrounds": [
        "//staging-static.cherrycasino.com/media/game/GenericCasinoNEW.jpg?u=1546507715"
      ],
      "screenshots": [],
      "thumbnails": {
        "280x280": "//staging-static.cherrycasino.com/media/games/yggdrasil/7312/yggdrasil-7312-T280x280.jpg?u=1546507715",
        "280x600": "//staging-static.cherrycasino.com/media/games/yggdrasil/7312/yggdrasil-7312-T280x600.jpg?u=1546507715",
        "500x375": "//staging-static.cherrycasino.com/media/games/yggdrasil/7312/yggdrasil-7312-T500x375.jpg?u=1546507715",
        "600x280": "//staging-static.cherrycasino.com/media/games/yggdrasil/7312/yggdrasil-7312-T600x280.jpg?u=1546507715",
        "legacy": "//staging-static.cherrycasino.com/media/game/desktop/lobby/150x140-joker-millions.jpg?u=1546507715"
      },
      "jurisdiction": "mga",
      "login_required": false,
      "_links": {
        "self": {
          "href": "https://staging-frontapi.cherrytech.com/games/yggdrasil-joker-millions"
        }
      }
    };
    this.dataService.getGameById(gameId).subscribe((data: any) => {
      this.game = data;
      // console.log(data);
    }, error => {
      this.errorFromServer = true;
    });
  }

  goBack() {
    this.router.navigateByUrl('/');
  }
}
