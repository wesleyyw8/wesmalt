import { DataService } from '../data.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { takeWhile } from 'rxjs/operators';

@Component({
  selector: 'app-games',
  templateUrl: './games.component.html',
  styleUrls: ['./games.component.less']
})
export class GamesComponent implements OnInit, OnDestroy {
  public gamesCategories = [];
  public errorFromServer: boolean = false;
  public isLoading = false;
  componentActive = true;

  constructor(private dataService: DataService,
              private router: Router) { }

  ngOnInit() {
    this.loadData();
  }

  ngOnDestroy(): void {
    this.componentActive = false;
  }

  private loadData() {
    this.isLoading = true;
    this.dataService.getGameCategories()
    .pipe(takeWhile(() => this.componentActive))
    .subscribe((data: any) => {
      console.log('here!');
      this.gamesCategories = data;
      this.isLoading = false;
    }, error => {
      this.errorFromServer = true;
      this.isLoading = false;
    });
  }

  private loadFakeData() {
     this.gamesCategories = [
      {
        "name": "Popular Games",
        "order": 0,
        "slug": "popular-games",
        "_embedded": {
          "games": [
            {
              "id": "netent-starburst-old",
              "slug": "starburst-old",
              "background": "//staging-static.cherrycasino.com/img/games/gamebg/starburst-1385396764.jpg?u=1572961063",
              "description": "",
              "game_stakes": null,
              "height": "480",
              "name": "Starburst",
              "width": "640",
              "thumbnail": "//staging-static.cherrycasino.com/media/game/desktop/lobby/150x140-starburst-new2.jpg?u=1572961063",
              "url": null,
              "created_at": {
                "date": "2013-08-06T14:01:58+00:00"
              },
              "screenshot": null,
              "homepage_image": null,
              "vendor": "netent",
              "vendor_properties": null,
              "meta": {
                "description_short": "",
                "currency": "EUR",
                "description_long": "<p>This high-paced energizing <strong>video slot</strong> is a sparkly gem of a game: its bursts of starlight are sure to brighten up your casino experience. Memorable fun features include the Wild symbol, a vast display of dazzling effects and the possibility of stellar wins!</p>\n\n<p><strong>Starburst </strong>is a <strong>video</strong> <strong>slot machine</strong> of five reels, 10 paylines and loads of sparkly action&hellip; and it&rsquo;s not hard to see why it&rsquo;s one of our players&rsquo; favourite games to play. The game is simple to play &ndash; and while it might not have as many bonus features as other <strong>video</strong> <strong>slot machines, </strong>it still manages to keep the pace up with plenty of action, colourful graphics and loads of prizes to win.</p>\n\n<p>The <strong>video</strong> <strong>slot machine</strong> itself is set in a sort of space theme, with shooting stars and glowing lights brightening up the reels. However, there are also plenty of colourful gemstones sparkling up the game, so it&rsquo;s quite an obscure mix of themes&hellip; though it does make for one stunning game. However, this game is not just stunning &ndash; it&rsquo;s fun to play and easy to win, with the help of bonus features!</p>\n\n<p>Wild symbols: This is the main feature of the game, but it&rsquo;s worth keeping an eye out for. Whenever you find a wild symbol on either the second reel, the third reel or the fourth reel, they will substitute themselves for any symbols you might have needed to complete the winning payline. This increases your winning chances greatly, since you don&rsquo;t always need a completed payline to win.</p>\n\n<p>Big win: Whenever you achieve a winning payline in <strong>Starburst</strong>, you&rsquo;ll see a big, flashy animation pop up on the screen to announce that you&rsquo;ve won. It&rsquo;s not actually a bonus feature in itself, but it does help to keep your thrill levels high as you continue to spin for big wins.</p>\n",
                "bonus": true,
                "free_spins": true,
                "lines": 10
              },
              "enabled": false,
              "label": "",
              "cols": 1,
              "rows": 1,
              "pos_x": null,
              "pos_y": null,
              "volatility": 1,
              "rating": 5,
              "backgrounds": [
                "//staging-static.cherrycasino.com/img/games/gamebg/starburst-1385396764.jpg?u=1572961063"
              ],
              "screenshots": [],
              "thumbnails": {
                "legacy": "//staging-static.cherrycasino.com/media/game/desktop/lobby/150x140-starburst-new2.jpg?u=1572961063"
              },
              "jurisdiction": "mga",
              "login_required": false,
              "_links": {
                "self": {
                  "href": "https://staging-frontapi.cherrytech.com/games/netent-starburst-old"
                }
              }
            },
            {
              "id": "yggdrasil-joker-millions",
              "slug": "joker-millions",
              "background": "//staging-static.cherrycasino.com/media/game/GenericCasinoNEW.jpg?u=1546507715",
              "description": "",
              "game_stakes": null,
              "height": "360",
              "name": "Joker Millions",
              "width": "640",
              "thumbnail": "//staging-static.cherrycasino.com/media/game/desktop/lobby/150x140-joker-millions.jpg?u=1546507715",
              "url": null,
              "created_at": {
                "date": "2015-04-13T11:05:48+00:00"
              },
              "screenshot": null,
              "homepage_image": null,
              "vendor": "yggdrasil",
              "vendor_properties": null,
              "meta": {
                "description_short": "",
                "currency": "EUR",
                "bonus": false,
                "free_spins": true
              },
              "enabled": true,
              "label": "Jackpot",
              "cols": 1,
              "rows": 1,
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
            },
            {
              "id": "yggdrasil-incinerator",
              "slug": "incinerator",
              "background": "//staging-static.cherrycasino.com/media/game/GenericCasinoNEW.jpg?u=1557064322",
              "description": "",
              "game_stakes": null,
              "height": "360",
              "name": "Incinerator",
              "width": "640",
              "thumbnail": "//staging-static.cherrycasino.com/media/game/150x140-incinerator-new.jpg?u=1557064322",
              "url": null,
              "created_at": {
                "date": "2016-01-14T10:30:50+00:00"
              },
              "screenshot": null,
              "homepage_image": null,
              "vendor": "yggdrasil",
              "vendor_properties": null,
              "meta": {
                "description_short": "",
                "currency": "EUR",
                "bonus": false,
                "free_spins": true
              },
              "enabled": true,
              "label": "New",
              "cols": 1,
              "rows": 1,
              "pos_x": null,
              "pos_y": null,
              "volatility": 1,
              "rating": 1,
              "backgrounds": [
                "//staging-static.cherrycasino.com/media/games/yggdrasil/7320/yggdrasil-7320-B470x920L.jpg?u=1557064322",
                "//staging-static.cherrycasino.com/media/games/yggdrasil/7320/yggdrasil-7320-B470x920R.jpg?u=1557064322"
              ],
              "screenshots": [],
              "thumbnails": {
                "280x280": "//staging-static.cherrycasino.com/media/games/yggdrasil/7320/yggdrasil-7320-T280x280.jpg?u=1557064322",
                "280x600": "//staging-static.cherrycasino.com/media/games/yggdrasil/7320/yggdrasil-7320-T280x600.jpg?u=1557064322",
                "600x280": "//staging-static.cherrycasino.com/media/games/yggdrasil/7320/yggdrasil-7320-T600x280.jpg?u=1557064322",
                "legacy": "//staging-static.cherrycasino.com/media/game/150x140-incinerator-new.jpg?u=1557064322"
              },
              "jurisdiction": "mga",
              "login_required": false,
              "_links": {
                "self": {
                  "href": "https://staging-frontapi.cherrytech.com/games/yggdrasil-incinerator"
                }
              }
            },
            {
              "id": "netent-guns-n-roses",
              "slug": "guns-n-roses",
              "background": "//staging-static.cherrycasino.com/media/game/GenericCasinoNEW.jpg?u=1562081283",
              "description": "",
              "game_stakes": null,
              "height": "360",
              "name": "Guns N' Roses",
              "width": "640",
              "thumbnail": "//staging-static.cherrycasino.com/media/game/150x140-guns-n-roses-thumb-casino.jpg?u=1562081283",
              "url": null,
              "created_at": {
                "date": "2016-01-21T08:05:44+00:00"
              },
              "screenshot": null,
              "homepage_image": null,
              "vendor": "netent",
              "vendor_properties": null,
              "meta": {
                "description_short": "",
                "currency": "EUR",
                "bonus": false,
                "free_spins": true
              },
              "enabled": true,
              "label": "New",
              "cols": 1,
              "rows": 1,
              "pos_x": null,
              "pos_y": null,
              "volatility": 0,
              "rating": 0,
              "backgrounds": [
                "//staging-static.cherrycasino.com/media/games/netent/gunsnroses_not_mobile_sw/netent-gunsnroses_not_mobile_sw-B470x920L.jpg?u=1562081283",
                "//staging-static.cherrycasino.com/media/games/netent/gunsnroses_not_mobile_sw/netent-gunsnroses_not_mobile_sw-B470x920R.jpg?u=1562081283"
              ],
              "screenshots": [],
              "thumbnails": {
                "280x280": "//staging-static.cherrycasino.com/media/games/netent/gunsnroses_not_mobile_sw/netent-gunsnroses_not_mobile_sw-T280x280.gif?u=1562081283",
                "280x600": "//staging-static.cherrycasino.com/media/games/netent/gunsnroses_not_mobile_sw/netent-gunsnroses_not_mobile_sw-T280x600.gif?u=1562081283",
                "600x280": "//staging-static.cherrycasino.com/media/games/netent/gunsnroses_not_mobile_sw/netent-gunsnroses_not_mobile_sw-T600x280.gif?u=1562081283",
                "legacy": "//staging-static.cherrycasino.com/media/game/150x140-guns-n-roses-thumb-casino.jpg?u=1562081283"
              },
              "jurisdiction": "mga",
              "login_required": false,
              "_links": {
                "self": {
                  "href": "https://staging-frontapi.cherrytech.com/games/netent-guns-n-roses"
                }
              }
            },
            {
              "id": "amaya-esqueleto-explosivo",
              "slug": "esqueleto-explosivo",
              "background": "//staging-static.cherrycasino.com/media/game/GenericCasinoNEW.jpg?u=1508925460",
              "description": "",
              "game_stakes": null,
              "height": "480",
              "name": "Esqueleto Explosivo",
              "width": "800",
              "thumbnail": "//staging-static.cherrycasino.com/media/game/esqueletoexplosivo-150x140.jpg?u=1508925460",
              "url": null,
              "created_at": {
                "date": "2015-12-16T12:04:55+00:00"
              },
              "screenshot": null,
              "homepage_image": null,
              "vendor": "amaya",
              "vendor_properties": null,
              "meta": {
                "description_short": "",
                "currency": "EUR",
                "bonus": false,
                "free_spins": true
              },
              "enabled": false,
              "label": "New",
              "cols": 1,
              "rows": 1,
              "pos_x": null,
              "pos_y": null,
              "volatility": 1,
              "rating": 1,
              "backgrounds": [
                "//staging-static.cherrycasino.com/media/games/amaya/20177/amaya-20177-B470x920L.jpg?u=1508925460",
                "//staging-static.cherrycasino.com/media/games/amaya/20177/amaya-20177-B470x920R.jpg?u=1508925460"
              ],
              "screenshots": [],
              "thumbnails": {
                "legacy": "//staging-static.cherrycasino.com/media/game/esqueletoexplosivo-150x140.jpg?u=1508925460"
              },
              "jurisdiction": "mga",
              "login_required": false,
              "_links": {
                "self": {
                  "href": "https://staging-frontapi.cherrytech.com/games/amaya-esqueleto-explosivo"
                }
              }
            },
            {
              "id": "netent-twin-spinold",
              "slug": "twin-spinold",
              "background": "//staging-static.cherrycasino.com/img/games/gamebg/twin-spin-1385027800.jpg?u=1473779135",
              "description": "",
              "game_stakes": null,
              "height": "480",
              "name": "Twin Spin Old",
              "width": "640",
              "thumbnail": "//staging-static.cherrycasino.com/img/games/150x140/twin-spin.jpg?u=1473779135",
              "url": null,
              "created_at": {
                "date": "2013-11-21T09:56:40+00:00"
              },
              "screenshot": null,
              "homepage_image": null,
              "vendor": "netent",
              "vendor_properties": null,
              "meta": {
                "description_short": "",
                "currency": "EUR",
                "bonus": false,
                "free_spins": true
              },
              "enabled": false,
              "label": "",
              "cols": 1,
              "rows": 1,
              "pos_x": null,
              "pos_y": null,
              "volatility": 0,
              "rating": 0,
              "backgrounds": [
                "//staging-static.cherrycasino.com/media/games/netent/twinspin_sw/netent-twinspin_sw-B470x920L.jpg?u=1473779135",
                "//staging-static.cherrycasino.com/media/games/netent/twinspin_sw/netent-twinspin_sw-B470x920R.jpg?u=1473779135"
              ],
              "screenshots": [],
              "thumbnails": {
                "legacy": "//staging-static.cherrycasino.com/img/games/150x140/twin-spin.jpg?u=1473779135"
              },
              "jurisdiction": "mga",
              "login_required": false,
              "_links": {
                "self": {
                  "href": "https://staging-frontapi.cherrytech.com/games/netent-twin-spinold"
                }
              }
            },
            {
              "id": "netent-koi-princess",
              "slug": "koi-princess",
              "background": "//staging-static.cherrycasino.com/media/game/GenericCasinoNEW.jpg?u=1566828141",
              "description": "",
              "game_stakes": null,
              "height": "360",
              "name": "Koi Princess",
              "width": "640",
              "thumbnail": "//staging-static.cherrycasino.com/media/game/desktop/lobby/150x140-koi-princess.jpg?u=1566828141",
              "url": null,
              "created_at": {
                "date": "2015-11-24T08:26:11+00:00"
              },
              "screenshot": null,
              "homepage_image": null,
              "vendor": "netent",
              "vendor_properties": null,
              "meta": {
                "description_short": "",
                "currency": "EUR",
                "bonus": false,
                "free_spins": true
              },
              "enabled": true,
              "label": "New",
              "cols": 1,
              "rows": 1,
              "pos_x": null,
              "pos_y": null,
              "volatility": 0,
              "rating": 0,
              "backgrounds": [
                "//staging-static.cherrycasino.com/media/games/netent/koiprincess_not_mobile_sw/netent-koiprincess_not_mobile_sw-B470x920L.jpg?u=1566828141",
                "//staging-static.cherrycasino.com/media/games/netent/koiprincess_not_mobile_sw/netent-koiprincess_not_mobile_sw-B470x920R.jpg?u=1566828141"
              ],
              "screenshots": [],
              "thumbnails": {
                "280x280": "//staging-static.cherrycasino.com/media/games/netent/koiprincess_not_mobile_sw/netent-koiprincess_not_mobile_sw-T280x280.gif?u=1566828141",
                "280x600": "//staging-static.cherrycasino.com/media/games/netent/koiprincess_not_mobile_sw/netent-koiprincess_not_mobile_sw-T280x600.gif?u=1566828141",
                "600x280": "//staging-static.cherrycasino.com/media/games/netent/koiprincess_not_mobile_sw/netent-koiprincess_not_mobile_sw-T600x280.gif?u=1566828141",
                "legacy": "//staging-static.cherrycasino.com/media/game/desktop/lobby/150x140-koi-princess.jpg?u=1566828141"
              },
              "jurisdiction": "mga",
              "login_required": false,
              "_links": {
                "self": {
                  "href": "https://staging-frontapi.cherrytech.com/games/netent-koi-princess"
                }
              }
            },
            {
              "id": "amaya-double-play-superbet",
              "slug": "double-play-superbet",
              "background": null,
              "description": "",
              "game_stakes": null,
              "height": "480",
              "name": "Double Play SuperBet",
              "width": "800",
              "thumbnail": "//staging-static.cherrycasino.com/media/game/150x140-doubleplaysuperbet.jpg?u=1449831219",
              "url": null,
              "created_at": {
                "date": "2015-12-11T10:22:28+00:00"
              },
              "screenshot": null,
              "homepage_image": null,
              "vendor": "amaya",
              "vendor_properties": null,
              "meta": {
                "description_short": "",
                "currency": "EUR",
                "bonus": false,
                "free_spins": true
              },
              "enabled": false,
              "label": "New",
              "cols": 1,
              "rows": 1,
              "pos_x": null,
              "pos_y": null,
              "volatility": "1",
              "rating": "1",
              "backgrounds": [],
              "screenshots": [],
              "thumbnails": {
                "280x280": "//staging-static.cherrycasino.com/media/games/amaya/20223/amaya-20223-T280x280.jpg?u=1449831219",
                "280x600": "//staging-static.cherrycasino.com/media/games/amaya/20223/amaya-20223-T280x600.jpg?u=1449831219",
                "600x280": "//staging-static.cherrycasino.com/media/games/amaya/20223/amaya-20223-T600x280.jpg?u=1449831219",
                "legacy": "//staging-static.cherrycasino.com/media/game/150x140-doubleplaysuperbet.jpg?u=1449831219"
              },
              "jurisdiction": "mga",
              "login_required": false,
              "_links": {
                "self": {
                  "href": "https://staging-frontapi.cherrytech.com/games/amaya-double-play-superbet"
                }
              }
            },
            {
              "id": "yggdrasil-nirvana",
              "slug": "nirvana",
              "background": "//staging-static.cherrycasino.com/media/game/GenericCasinoNEW.jpg?u=1570968089",
              "description": "",
              "game_stakes": null,
              "height": "360",
              "name": "Nirvana",
              "width": "640",
              "thumbnail": "//staging-static.cherrycasino.com/media/game/150x140-nirvana.jpg?u=1570968089",
              "url": null,
              "created_at": {
                "date": "2015-11-18T12:06:01+00:00"
              },
              "screenshot": null,
              "homepage_image": null,
              "vendor": "yggdrasil",
              "vendor_properties": null,
              "meta": {
                "description_short": "",
                "currency": "EUR",
                "bonus": false,
                "free_spins": true
              },
              "enabled": true,
              "label": "New",
              "cols": 1,
              "rows": 1,
              "pos_x": null,
              "pos_y": null,
              "volatility": 0,
              "rating": 0,
              "backgrounds": [
                "//staging-static.cherrycasino.com/media/games/yggdrasil/7319/yggdrasil-7319-B470x920L.jpg?u=1570968089",
                "//staging-static.cherrycasino.com/media/games/yggdrasil/7319/yggdrasil-7319-B470x920R.jpg?u=1570968089"
              ],
              "screenshots": [],
              "thumbnails": {
                "280x280": "//staging-static.cherrycasino.com/media/games/yggdrasil/7319/yggdrasil-7319-T280x280.jpg?u=1570968089",
                "280x600": "//staging-static.cherrycasino.com/media/games/yggdrasil/7319/yggdrasil-7319-T280x600.jpg?u=1570968089",
                "600x280": "//staging-static.cherrycasino.com/media/games/yggdrasil/7319/yggdrasil-7319-T600x280.jpg?u=1570968089",
                "legacy": "//staging-static.cherrycasino.com/media/game/150x140-nirvana.jpg?u=1570968089"
              },
              "jurisdiction": "mga",
              "login_required": false,
              "_links": {
                "self": {
                  "href": "https://staging-frontapi.cherrytech.com/games/yggdrasil-nirvana"
                }
              }
            },
            {
              "id": "netent-pyramid-quest-for-immortality",
              "slug": "pyramid-quest-for-immortality",
              "background": null,
              "description": "Cool stuff. Cool stuff. Cool stuff. Cool stuff. Cool stuff. Cool stuff. Cool stuff. Cool stuff. Cool stuff. Cool stuff. Cool stuff. Cool stuff. Cool stuff. Cool stuff. Cool stuff. Cool stuff. Cool stuff. Cool stuff. Cool stuff. Cool stuff. Cool stuff. Cool stuff. Cool stuff. Cool stuff. Cool stuff. Cool stuff. Cool stuff. Cool stuff. Cool stuff. Cool stuff. Cool stuff. Cool stuff. Cool stuff. Cool stuff. Cool stuff. Cool stuff. Cool stuff. Cool stuff. Cool stuff. Cool stuff. Cool stuff. Cool stuff. Cool stuff. Cool stuff. Cool stuff. Cool stuff. Cool stuff. Cool stuff. Cool stuff. Cool stuff. Cool stuff. Cool stuff. Cool stuff. Cool stuff. Cool stuff. Cool stuff. Cool stuff. Cool stuff. Cool stuff. Cool stuff.",
              "game_stakes": null,
              "height": "360",
              "name": "Pyramid: Quest for Immortality",
              "width": "640",
              "thumbnail": "//staging-static.cherrycasino.com/media/game/150x140-pyramid.jpg?u=1566996356",
              "url": null,
              "created_at": {
                "date": "2015-10-20T14:24:57+00:00"
              },
              "screenshot": null,
              "homepage_image": null,
              "vendor": "netent",
              "vendor_properties": null,
              "meta": {
                "description_short": "Cool stuff. Cool stuff. Cool stuff. Cool stuff. Cool stuff. Cool stuff. Cool stuff. Cool stuff. Cool stuff. Cool stuff. Cool stuff. Cool stuff. Cool stuff. Cool stuff. Cool stuff. Cool stuff. Cool stuff. Cool stuff. Cool stuff. Cool stuff. Cool stuff. Cool stuff. Cool stuff. Cool stuff. Cool stuff. Cool stuff. Cool stuff. Cool stuff. Cool stuff. Cool stuff. Cool stuff. Cool stuff. Cool stuff. Cool stuff. Cool stuff. Cool stuff. Cool stuff. Cool stuff. Cool stuff. Cool stuff. Cool stuff. Cool stuff. Cool stuff. Cool stuff. Cool stuff. Cool stuff. Cool stuff. Cool stuff. Cool stuff. Cool stuff. Cool stuff. Cool stuff. Cool stuff. Cool stuff. Cool stuff. Cool stuff. Cool stuff. Cool stuff. Cool stuff. Cool stuff.",
                "currency": "EUR",
                "description_long": "<p>Enter the ancient world of Pharaohs and Gods in your search for endless richness worth <strong>&euro;7.2 million</strong> in <strong>Pyramid: Quest for Immortality.</strong> A 720 ways to win <strong>video slot</strong> with a powerful avalanche multiplier hiding in the dark that can multiply your winnings by 10.</p>\n\n<p>In a wondrous and breath-taking journey back in time, this video slot will take you on a challenging quest that will lead to wild adventures in a long-lost pyramid full of treasures. Expect it to be guarded by the ancient Gods of Light and Darkness.</p>\n\n<p>On your journey back in time to visit the mighty Egyptian Pharaohs in this pyramid shaped video slot, you have a chance to win up to 36,000 times the bet per spin.</p>\n\n<p>This video slot really has it all. Not only amazing graphics but some pretty great bonus features, wilds, wild generation and the avalanche multiplier.</p>\n\n<p>Wild symbols substitutes for all symbols and substitute for the highest possible winning combination. The wild generation appears as a symbol that lands on the top of reels 2, 3 or 4 and is part of a winning combination. This will turn into a wild symbol for the next avalanche. The avalanche will drop symbols from top to bottom (like an avalanche) to their positions in the 5 columns (instead of the spinning reels). The multiplier increases by 1 with every 3 successive avalanches containing at least one bet wins up to maximum multiplier of x10!</p>\n\n<p>Also, whenever you get a winning combination, that combination will explode and create a new avalanche, very much like a free spin round. As long as winning combinations are formed in consecutive game rounds, you could have an infinity of avalanches.</p>\n\n<p>If you dare take a step into the wondrous world of ancient Egypt, with amazing opportunities to win big, <strong>Pyramid Quest for Immortality</strong> is the game for you.</p>\n",
                "max_bet": 200,
                "bonus": true,
                "free_spins": true,
                "lines": 1
              },
              "enabled": true,
              "label": "",
              "cols": 1,
              "rows": 1,
              "pos_x": null,
              "pos_y": null,
              "volatility": 3,
              "rating": 2,
              "backgrounds": [
                "//staging-static.cherrycasino.com/media/games/netent/pyramid_not_mobile_sw/netent-pyramid_not_mobile_sw-B470x920L.jpg?u=1566996356",
                "//staging-static.cherrycasino.com/media/games/netent/pyramid_not_mobile_sw/netent-pyramid_not_mobile_sw-B470x920R.jpg?u=1566996356"
              ],
              "screenshots": [],
              "thumbnails": {
                "280x280": "//staging-static.cherrycasino.com/media/games/netent/pyramid_not_mobile_sw/netent-pyramid_not_mobile_sw-T280x280.jpg?u=1566996356",
                "280x600": "//staging-static.cherrycasino.com/media/games/netent/pyramid_not_mobile_sw/netent-pyramid_not_mobile_sw-T280x600.jpg?u=1566996356",
                "600x280": "//staging-static.cherrycasino.com/media/games/netent/pyramid_not_mobile_sw/netent-pyramid_not_mobile_sw-T600x280.jpg?u=1566996356",
                "legacy": "//staging-static.cherrycasino.com/media/game/150x140-pyramid.jpg?u=1566996356"
              },
              "jurisdiction": "mga",
              "login_required": false,
              "_links": {
                "self": {
                  "href": "https://staging-frontapi.cherrytech.com/games/netent-pyramid-quest-for-immortality"
                }
              }
            },
            {
              "id": "yggdrasil-vikings-go-wild",
              "slug": "vikings-go-wild",
              "background": "//staging-static.cherrycasino.com/media/game/GenericCasinoNEW.jpg?u=1557065697",
              "description": "",
              "game_stakes": null,
              "height": "360",
              "name": "Vikings Go Wild",
              "width": "640",
              "thumbnail": "//staging-static.cherrycasino.com/media/game/desktop/lobby/150x140-vikings-go-wild.jpg?u=1557065697",
              "url": null,
              "created_at": {
                "date": "2015-08-20T07:36:00+00:00"
              },
              "screenshot": null,
              "homepage_image": null,
              "vendor": "yggdrasil",
              "vendor_properties": null,
              "meta": {
                "description_short": "",
                "currency": "EUR",
                "bonus": false,
                "free_spins": true
              },
              "enabled": true,
              "label": "",
              "cols": 1,
              "rows": 1,
              "pos_x": null,
              "pos_y": null,
              "volatility": 0,
              "rating": 0,
              "backgrounds": [
                "//staging-static.cherrycasino.com/media/game/GenericCasinoNEW.jpg?u=1557065697"
              ],
              "screenshots": [],
              "thumbnails": {
                "280x280": "//staging-static.cherrycasino.com/media/games/yggdrasil/7316/yggdrasil-7316-T280x280.jpg?u=1557065697",
                "280x600": "//staging-static.cherrycasino.com/media/games/yggdrasil/7316/yggdrasil-7316-T280x600.jpg?u=1557065697",
                "600x280": "//staging-static.cherrycasino.com/media/games/yggdrasil/7316/yggdrasil-7316-T600x280.jpg?u=1557065697",
                "legacy": "//staging-static.cherrycasino.com/media/game/desktop/lobby/150x140-vikings-go-wild.jpg?u=1557065697"
              },
              "jurisdiction": "mga",
              "login_required": false,
              "_links": {
                "self": {
                  "href": "https://staging-frontapi.cherrytech.com/games/yggdrasil-vikings-go-wild"
                }
              }
            },
            {
              "id": "netent-king-of-slots-old",
              "slug": "king-of-slots-old",
              "background": null,
              "description": "",
              "game_stakes": null,
              "height": "360",
              "name": "King of Slots old",
              "width": "640",
              "thumbnail": "//staging-static.cherrycasino.com/media/game/150x140-king-of-slots.jpg?u=1572960594",
              "url": null,
              "created_at": {
                "date": "2015-11-12T09:44:55+00:00"
              },
              "screenshot": null,
              "homepage_image": null,
              "vendor": "netent",
              "vendor_properties": null,
              "meta": {
                "description_short": "",
                "currency": "EUR",
                "bonus": false,
                "free_spins": true
              },
              "enabled": false,
              "label": "",
              "cols": 1,
              "rows": 1,
              "pos_x": null,
              "pos_y": null,
              "volatility": 0,
              "rating": 0,
              "backgrounds": [
                "//staging-static.cherrycasino.com/media/games/netent/kingofslots_sw/netent-kingofslots_sw-B470x920L.jpg?u=1572960594",
                "//staging-static.cherrycasino.com/media/games/netent/kingofslots_sw/netent-kingofslots_sw-B470x920R.jpg?u=1572960594"
              ],
              "screenshots": [],
              "thumbnails": {
                "legacy": "//staging-static.cherrycasino.com/media/game/150x140-king-of-slots.jpg?u=1572960594"
              },
              "jurisdiction": "mga",
              "login_required": false,
              "_links": {
                "self": {
                  "href": "https://staging-frontapi.cherrytech.com/games/netent-king-of-slots-old"
                }
              }
            },
            {
              "id": "amaya-merlins-magic-respins",
              "slug": "merlins-magic-respins",
              "background": "//staging-static.cherrycasino.com/media/game/GenericCasinoNEW.jpg?u=1478186399",
              "description": "",
              "game_stakes": null,
              "height": "600",
              "name": "Merlin's Magic Respins",
              "width": "1066",
              "thumbnail": "//staging-static.cherrycasino.com/media/game/desktop/lobby/150x140-merlins-magic-respins.jpg?u=1478186399",
              "url": null,
              "created_at": {
                "date": "2015-09-18T14:25:13+00:00"
              },
              "screenshot": null,
              "homepage_image": null,
              "vendor": "amaya",
              "vendor_properties": null,
              "meta": {
                "description_short": "",
                "currency": "EUR",
                "description_long": "<p>Watch Merlin charm the reels with a dazzling display of magical mastery as he invites you into his magic lab in, <strong>Merlin&rsquo;s Magic Respins</strong>. Here he mixes colourful potions together with respins, stacking wilds and ton of new wacky curiosities! The Great Merlin is back!</p>\n\n<p>High up on a hill, where the sky shimmers with magic, Merlin has spent the last couple of years studying the magical arts, and he has now perfected powerful new spells that will make your head spin. &nbsp;</p>\n\n<p>Not only is he the Wild symbol here and will fill in for any other symbol to complete any winning combinations. He will also allow players to adjust the gameplay in the wild respins feature, to suit their type of play style. The betting options will transform the game from mild to wild with this superbet feature. Higher bets give more respins and bigger wins! With the all new Wild Respin feature, any full stack of wilds appearing will be held and the rest of the reels retriggered for a free chance at scoring magical wins!</p>\n\n<p>Merlin has some additional special skills up his sleeve, he can whip up a full stack of wilds with one quick zap with his staff and trigger respins at any moment, as he is the legendary Merlin after all!</p>\n\n<p>In this 50 line game, you want to look for the spellbinding Goblet, Telescope, Magic Spells Book, Magic Scrolls, and Magic Cauldrons. The Cauldron acts is the scatter for this game and appears only on reels 2, 3 and 4. Three scattered Cauldrons will give you 2x the bet size plus an initial seven free spins.</p>\n",
                "max_bet": 200,
                "bonus": false,
                "free_spins": true,
                "lines": 50
              },
              "enabled": false,
              "label": "",
              "cols": 1,
              "rows": 1,
              "pos_x": null,
              "pos_y": null,
              "volatility": 0,
              "rating": 0,
              "backgrounds": [
                "//staging-static.cherrycasino.com/media/game/GenericCasinoNEW.jpg?u=1478186399"
              ],
              "screenshots": [],
              "thumbnails": {
                "280x280": "//staging-static.cherrycasino.com/media/games/amaya/20082/amaya-20082-T280x280.jpg?u=1478186399",
                "280x600": "//staging-static.cherrycasino.com/media/games/amaya/20082/amaya-20082-T280x600.jpg?u=1478186399",
                "600x280": "//staging-static.cherrycasino.com/media/games/amaya/20082/amaya-20082-T600x280.jpg?u=1478186399",
                "legacy": "//staging-static.cherrycasino.com/media/game/desktop/lobby/150x140-merlins-magic-respins.jpg?u=1478186399"
              },
              "jurisdiction": "mga",
              "login_required": false,
              "_links": {
                "self": {
                  "href": "https://staging-frontapi.cherrytech.com/games/amaya-merlins-magic-respins"
                }
              }
            },
            {
              "id": "microgaming-immortal-romance",
              "slug": "immortal-romance",
              "background": "//staging-static.cherrycasino.com/img/games/gamebg/immortal-romance-1385743632.jpg?u=1562763699",
              "description": "",
              "game_stakes": null,
              "height": "480",
              "name": "Immortal Romance",
              "width": "640",
              "thumbnail": "//staging-static.cherrycasino.com/img/games/150x140/immortal-romance.jpg?u=1562763699",
              "url": null,
              "created_at": {
                "date": "2013-08-06T14:01:58+00:00"
              },
              "screenshot": null,
              "homepage_image": null,
              "vendor": "microgaming",
              "vendor_properties": null,
              "meta": {
                "description_short": "",
                "currency": "EUR",
                "description_long": "<p>Fall in love with our five reel <strong>video</strong> <strong>slot machine</strong> that&rsquo;s packed with bonus rounds, enticing thrills and 243 ways to win. <strong>Immortal Romance</strong> features a forbidden love&hellip; along with bonus rounds of wilds, free spins, multipliers and more to help you win massive prizes.</p>\n\n<p>In this intriguing <strong>video</strong> <strong>slot machine</strong> adventure, you&rsquo;ll be enchanted by beautiful graphics, fascinating immortal creatures and paranormal activity. In a game with 243 supernatural ways to win, you&rsquo;ll encounter loads of different beings - vampires, werewolves and more &ndash; who will each introduce you to a darker side of life&hellip; as well as loads of thrilling bonus features to help you win alluring cash prizes!</p>\n\n<p>Wild Desire: This bonus round can be activated at any time during gameplay of the <strong>video</strong> <strong>slot machine</strong> and it will turn up to five of your reels wild, giving you ample opportunity to substitute the symbols you need for wilds, complete matching paylines and achieve massive prizes!</p>\n\n<p>Chamber of Spins: If you find either three scatter symbols, four scatter symbols or five scatter symbols along the reels, you&rsquo;ll enter the Chamber of Spins bonus round, where plenty of winning opportunities await you. Down here, you&rsquo;ll meet one of several different characters of the game &ndash; and each of them has a different bonus round for you with varying prizes and risks.</p>\n\n<p>Amber the Witch: This friendly witch will award you with 10 free spins, each with a multiplier of five times applied to them.</p>\n\n<p>Troy the Vampire: This handsome monster will not only give you 15 free spins &ndash; he&rsquo;ll also multiply any win made with them by six times.</p>\n\n<p>Michael the other vampire: Michael is an older vampire than Troy, and he&rsquo;s acquired quite a few more free spins in his time. In fact, he&rsquo;ll give you 20 free spins, each with a multiplier of five times your prize!</p>\n\n<p>Sarah the heroine: Sarah is the most generous of the characters and will award you with 25 free spins, extra wilds and the chance to retrigger the bonus round for more chances to win.&nbsp;</p>\n",
                "max_bet": 6,
                "bonus": true,
                "free_spins": true,
                "lines": 243
              },
              "enabled": true,
              "label": "",
              "cols": 1,
              "rows": 1,
              "pos_x": null,
              "pos_y": null,
              "volatility": 0,
              "rating": 0,
              "backgrounds": [
                "//staging-static.cherrycasino.com/media/games/microgaming/immortalromance/microgaming-immortalromance-B470x920L.jpg?u=1562763699",
                "//staging-static.cherrycasino.com/media/games/microgaming/immortalromance/microgaming-immortalromance-B470x920R.jpg?u=1562763699"
              ],
              "screenshots": [],
              "thumbnails": {
                "280x280": "//staging-static.cherrycasino.com/media/games/microgaming/immortalromance/microgaming-immortalromance-T280x280.jpg?u=1562763699",
                "280x600": "//staging-static.cherrycasino.com/media/games/microgaming/immortalromance/microgaming-immortalromance-T280x600.jpg?u=1562763699",
                "600x280": "//staging-static.cherrycasino.com/media/games/microgaming/immortalromance/microgaming-immortalromance-T600x280.jpg?u=1562763699",
                "legacy": "//staging-static.cherrycasino.com/img/games/150x140/immortal-romance.jpg?u=1562763699"
              },
              "jurisdiction": "mga",
              "login_required": false,
              "_links": {
                "self": {
                  "href": "https://staging-frontapi.cherrytech.com/games/microgaming-immortal-romance"
                }
              }
            },
            {
              "id": "yggdrasil-holmes-and-the-stolen-stones",
              "slug": "holmes-and-the-stolen-stones",
              "background": "//staging-static.cherrycasino.com/media/game/GenericCasinoNEW.jpg?u=1580468523",
              "description": "",
              "game_stakes": null,
              "height": "360",
              "name": "Holmes and the Stolen Stones",
              "width": "640",
              "thumbnail": "//staging-static.cherrycasino.com/media/game/desktop/lobby/150x140-holmes.jpg?u=1580468523",
              "url": null,
              "created_at": {
                "date": "2015-09-17T08:12:42+00:00"
              },
              "screenshot": null,
              "homepage_image": null,
              "vendor": "yggdrasil",
              "vendor_properties": null,
              "meta": {
                "description_short": "",
                "currency": "EUR",
                "description_long": "<p>Sharpen your detective skills with <strong>Holmes and the Stolen Stones </strong>as he searches for the missing stones in this 5 reels and 20 paylines video slot. Adventure is always near with 5 jackpots hiding around the corner.</p>\n\n<p>Follow Holmes to the warehouse bonus game to collect stones to increase your chances in the free spin jackpot game. Five progressive jackpots is up for grabs in this action packed adventure. The jackpots are won when you collect 5 diamonds of the same colour in the Jackpot Free Spin mode.</p>\n\n<p>There is also another way to trigger Jackpot Free Spins. You can, during the main game, collect shards on each reel. When 5 shards of the same colour is collected, the free spin mode is triggered with an additional bonus: the Jackpot Free Spin mode starts with one diamond already collected. Only 4 more diamonds are needed to win that particular jackpot. All shards are saved between each game sessions.</p>\n\n<p>The bonus game is triggered with 3 bonus game symbols. In the bonus game there is 18 boxes with coin wins, smoke bombs and jewel shards. As long as you do not find the smoke bomb, you can continue to open boxes and keep winning</p>\n\n<p>Holmes and the Stolen Stones offers eight different types of regular symbols. The first four are the standard icons from a deck of cards which include heart, spades, diamonds and clubs. The most paying symbol is Sherlock Holmes, you will recognise him by the white shirt and the brown cap.&nbsp;</p>\n\n<p>You are never far away from the next jackpot, so join Holmes in the search for the missing stones and diamonds in <strong>Holmes and the Stolen Stones.&nbsp;</strong></p>\n",
                "max_bet": 40,
                "bonus": true,
                "free_spins": true,
                "lines": 20
              },
              "enabled": true,
              "label": "Jackpot",
              "cols": 1,
              "rows": 1,
              "pos_x": null,
              "pos_y": null,
              "volatility": 0,
              "rating": 0,
              "backgrounds": [
                "//staging-static.cherrycasino.com/media/games/yggdrasil/7317/yggdrasil-7317-B470x920L.jpg?u=1580468523",
                "//staging-static.cherrycasino.com/media/games/yggdrasil/7317/yggdrasil-7317-B470x920R.jpg?u=1580468523"
              ],
              "screenshots": [],
              "thumbnails": {
                "280x280": "//staging-static.cherrycasino.com/media/games/yggdrasil/7317/yggdrasil-7317-T280x280.jpg?u=1580468523",
                "280x600": "//staging-static.cherrycasino.com/media/games/yggdrasil/7317/yggdrasil-7317-T280x600.jpg?u=1580468523",
                "600x280": "//staging-static.cherrycasino.com/media/games/yggdrasil/7317/yggdrasil-7317-T600x280.jpg?u=1580468523",
                "legacy": "//staging-static.cherrycasino.com/media/game/desktop/lobby/150x140-holmes.jpg?u=1580468523"
              },
              "jurisdiction": "mga",
              "login_required": false,
              "_links": {
                "self": {
                  "href": "https://staging-frontapi.cherrytech.com/games/yggdrasil-holmes-and-the-stolen-stones"
                }
              }
            },
            {
              "id": "microgaming-game-of-thrones-243-ways",
              "slug": "game-of-thrones-243-ways",
              "background": "//staging-static.cherrycasino.com/media/game/desktop/background/got-640x360-a-final-2.jpg?u=1473758455",
              "description": "",
              "game_stakes": null,
              "height": "360",
              "name": "Game of Thrones - 243 Ways",
              "width": "640",
              "thumbnail": "//staging-static.cherrycasino.com/media/game/desktop/lobby/gameofthrones-150x140-243ways.jpg?u=1473758455",
              "url": null,
              "created_at": {
                "date": "2014-12-01T08:06:06+00:00"
              },
              "screenshot": null,
              "homepage_image": null,
              "vendor": "microgaming",
              "vendor_properties": null,
              "meta": {
                "description_short": "",
                "currency": "EUR",
                "description_long": "<p>Brace yourselves&hellip; the <strong>Game of Thrones video slot machine</strong> you&rsquo;ve been waiting for is here &ndash; and it will give you 243 ways to win! Packed with bonus features, thrilling graphics and massive prizes, this five reel <strong>video slot</strong> is sure to make you hungry for big wins.</p>\n\n<p>It wasn&rsquo;t long before this popular book series about several families fighting to the death for their chance to rule the fictional kingdom of Westeros was turned into an even more popular HBO series, complete with blood and action. Now the hit series has been turned into something even more exciting: a <strong>video</strong> <strong>slot machine</strong> that offers you 243 ways to win exciting prizes!</p>\n\n<p>As well as plenty of action, <strong>Game of Thrones</strong> is also packed with plenty of bonus features to discover along the way to help you pick up the prizes with even more ease.</p>\n\n<p>Wild symbols: As well as substituting themselves for other symbols that you&rsquo;d need in order to complete your winning combinations, wild symbols in this <strong>video</strong> <strong>slot machine</strong> can also stack together along your reels to give you more chances to win.</p>\n\n<p>Scatter symbols: The Iron Throne symbol &ndash; the one that each family of the series is fighting to sit at &ndash; is the scatter symbol in this game. Whenever you find two of them, a red dragon egg will appear at the bottom of the screen and randomly burst into a flame of cash prizes. Finding three scatter symbols will go one better and trigger the free spins bonus round.</p>\n\n<p>Free spins bonus round: Here, you&rsquo;ll have the chance to select one of four different free spins bonus rounds, each offering you a different amount of free spins with a different multiplier applied to any wins. You could earn up to 18 free spins in total to play with!</p>\n",
                "max_bet": 6,
                "bonus": false,
                "free_spins": true,
                "lines": 243
              },
              "enabled": true,
              "label": "",
              "cols": 1,
              "rows": 1,
              "pos_x": null,
              "pos_y": null,
              "volatility": 0,
              "rating": 0,
              "backgrounds": [
                "//staging-static.cherrycasino.com/media/games/microgaming/GameOfThronesWays/microgaming-GameOfThronesWays-B470x920L.jpg?u=1473758455",
                "//staging-static.cherrycasino.com/media/games/microgaming/GameOfThronesWays/microgaming-GameOfThronesWays-B470x920R.jpg?u=1473758455"
              ],
              "screenshots": [],
              "thumbnails": {
                "280x280": "//staging-static.cherrycasino.com/media/games/microgaming/GameOfThronesWays/microgaming-GameOfThronesWays-T280x280.jpg?u=1473758455",
                "280x600": "//staging-static.cherrycasino.com/media/games/microgaming/GameOfThronesWays/microgaming-GameOfThronesWays-T280x600.jpg?u=1473758455",
                "600x280": "//staging-static.cherrycasino.com/media/games/microgaming/GameOfThronesWays/microgaming-GameOfThronesWays-T600x280.jpg?u=1473758455",
                "legacy": "//staging-static.cherrycasino.com/media/game/desktop/lobby/gameofthrones-150x140-243ways.jpg?u=1473758455"
              },
              "jurisdiction": "mga",
              "login_required": false,
              "_links": {
                "self": {
                  "href": "https://staging-frontapi.cherrytech.com/games/microgaming-game-of-thrones-243-ways"
                }
              }
            },
            {
              "id": "netent-gonzos-qu",
              "slug": "gonzos-qu",
              "background": "//staging-static.cherrycasino.com/img/games/gamebg/gonzos-quest1381304301.jpg?u=1476089747",
              "description": "",
              "game_stakes": null,
              "height": "480",
              "name": "Gonzo's Quest",
              "width": "640",
              "thumbnail": "//staging-static.cherrycasino.com/img/games/150x140/gonzos-quest.jpg?u=1476089747",
              "url": null,
              "created_at": {
                "date": "2013-08-06T14:01:58+00:00"
              },
              "screenshot": null,
              "homepage_image": null,
              "vendor": "netent",
              "vendor_properties": null,
              "meta": {
                "description_short": "",
                "currency": "EUR",
                "description_long": "<p>A <strong>video slot</strong> which has the makings of a truly golden adventure. <strong>Gonzo</strong>, our conquistador, is about to set off to find the lost city of gold and assist you with your own quest... so get those Avalanche symbols moving, as the Free Falls are what you need to unlock your own gold!</p>\n\n<p><strong>Gonzo&rsquo;s Quest</strong> is a five reel, 20 payline <strong>video</strong> <strong>slot machine</strong> that takes you on an adventure through South America to discover the ancient Inca riches. As you follow Gonzo, a short but fierce animated character based on the legendary Spanish conquistador Gonzalo Pizarro, you&rsquo;ll experience many exciting features. First and foremost is the avalanche feature, a feature unique to Net Entertainment that makes the symbols appear to fall down the reels rather than spin. <strong>Gonzo&rsquo;s Quest </strong>was one of the first <strong>video</strong> <strong>slot machines</strong> to implement this feature, and it has since become quite popular amongst players. This is simply because the feature is beneficial, since whenever a win is achieved, the symbols will disappear from the reels, allowing more symbols to fall into their place with the potential for another win without having to place an additional bet.</p>\n\n<p>On top of this, <strong>Gonzo&rsquo;s Quest </strong>is packed with a wide variety of bonus features to keep you interested throughout the game.</p>\n\n<p>Free spins bonus round: Whenever three, four or five free fall symbols appear on a winning payline, you&rsquo;ll trigger the free spins bonus round. Here, the symbols will free fall multiple times, giving you free chances to win. Any win achieved from a free spin will also be awarded a multiplier of up to 15 times, giving you the chance to take your prize to the next level.</p>\n\n<p>Wilds: Wild symbols are important to look out for in this <strong>video</strong> <strong>slot machine</strong> &ndash; as well as finishing your winning paylines, they&rsquo;ll also help you to trigger extra free spins.&nbsp;</p>\n",
                "max_bet": 50,
                "bonus": false,
                "free_spins": true,
                "lines": 20
              },
              "enabled": false,
              "label": "",
              "cols": 1,
              "rows": 1,
              "pos_x": null,
              "pos_y": null,
              "volatility": 0,
              "rating": 0,
              "backgrounds": [
                "//staging-static.cherrycasino.com/img/games/gamebg/gonzos-quest1381304301.jpg?u=1476089747"
              ],
              "screenshots": [],
              "thumbnails": {
                "legacy": "//staging-static.cherrycasino.com/img/games/150x140/gonzos-quest.jpg?u=1476089747"
              },
              "jurisdiction": "mga",
              "login_required": false,
              "_links": {
                "self": {
                  "href": "https://staging-frontapi.cherrytech.com/games/netent-gonzos-qu"
                }
              }
            },
            {
              "id": "microgaming-european-roulette-gold",
              "slug": "european-roulette-gold",
              "background": "//staging-static.cherrycasino.com/img/games/gamebg/generic.jpg?u=1522405031",
              "description": "",
              "game_stakes": null,
              "height": "480",
              "name": "European Roulette Gold",
              "width": "640",
              "thumbnail": "//staging-static.cherrycasino.com/img/games/150x140/european-roulette-gold.jpg?u=1522405031",
              "url": null,
              "created_at": {
                "date": "2013-08-06T14:01:58+00:00"
              },
              "screenshot": null,
              "homepage_image": null,
              "vendor": "microgaming",
              "vendor_properties": null,
              "meta": {
                "description_short": "",
                "currency": "EUR",
                "bonus": false,
                "free_spins": true
              },
              "enabled": false,
              "label": "",
              "cols": 1,
              "rows": 1,
              "pos_x": null,
              "pos_y": null,
              "volatility": 0,
              "rating": 0,
              "backgrounds": [
                "//staging-static.cherrycasino.com/media/games/microgaming/euroroulettegold/microgaming-euroroulettegold-B470x920L.jpg?u=1522405031",
                "//staging-static.cherrycasino.com/media/games/microgaming/euroroulettegold/microgaming-euroroulettegold-B470x920R.jpg?u=1522405031"
              ],
              "screenshots": [],
              "thumbnails": {
                "280x280": "//staging-static.cherrycasino.com/media/games/microgaming/euroroulettegold/microgaming-euroroulettegold-T280x280.jpg?u=1522405031",
                "280x600": "//staging-static.cherrycasino.com/media/games/microgaming/euroroulettegold/microgaming-euroroulettegold-T280x600.jpg?u=1522405031",
                "600x280": "//staging-static.cherrycasino.com/media/games/microgaming/euroroulettegold/microgaming-euroroulettegold-T600x280.jpg?u=1522405031",
                "legacy": "//staging-static.cherrycasino.com/img/games/150x140/european-roulette-gold.jpg?u=1522405031"
              },
              "jurisdiction": "mga",
              "login_required": false,
              "_links": {
                "self": {
                  "href": "https://staging-frontapi.cherrytech.com/games/microgaming-european-roulette-gold"
                }
              }
            },
            {
              "id": "microgaming-thunderstruck-ii",
              "slug": "thunderstruck-ii",
              "background": "//staging-static.cherrycasino.com/img/games/gamebg/thunderstruck-ii-1385396805.jpg?u=1393255874",
              "description": "",
              "game_stakes": null,
              "height": "480",
              "name": "Thunderstruck II",
              "width": "640",
              "thumbnail": "//staging-static.cherrycasino.com/img/games/150x140/thunderstruck-ii.jpg?u=1393255874",
              "url": null,
              "created_at": {
                "date": "2013-08-06T14:01:58+00:00"
              },
              "screenshot": null,
              "homepage_image": null,
              "vendor": "microgaming",
              "vendor_properties": null,
              "meta": {
                "description_short": "",
                "currency": "EUR",
                "bonus": true,
                "free_spins": true
              },
              "enabled": true,
              "label": "",
              "cols": 1,
              "rows": 1,
              "pos_x": null,
              "pos_y": null,
              "volatility": 0,
              "rating": 0,
              "backgrounds": [
                "//staging-static.cherrycasino.com/media/games/microgaming/thunderstruck2/microgaming-thunderstruck2-B470x920L.jpg?u=1393255874",
                "//staging-static.cherrycasino.com/media/games/microgaming/thunderstruck2/microgaming-thunderstruck2-B470x920R.jpg?u=1393255874"
              ],
              "screenshots": [],
              "thumbnails": {
                "280x280": "//staging-static.cherrycasino.com/media/games/microgaming/thunderstruck2/microgaming-thunderstruck2-T280x280.jpg?u=1393255874",
                "280x600": "//staging-static.cherrycasino.com/media/games/microgaming/thunderstruck2/microgaming-thunderstruck2-T280x600.jpg?u=1393255874",
                "600x280": "//staging-static.cherrycasino.com/media/games/microgaming/thunderstruck2/microgaming-thunderstruck2-T600x280.jpg?u=1393255874",
                "legacy": "//staging-static.cherrycasino.com/img/games/150x140/thunderstruck-ii.jpg?u=1393255874"
              },
              "jurisdiction": "mga",
              "login_required": false,
              "_links": {
                "self": {
                  "href": "https://staging-frontapi.cherrytech.com/games/microgaming-thunderstruck-ii"
                }
              }
            },
            {
              "id": "microgaming-european-blackjack-gold",
              "slug": "european-blackjack-gold",
              "background": "//staging-static.cherrycasino.com/img/games/gamebg/european-blackjack-gold-1385723018.jpg?u=1522403412",
              "description": "",
              "game_stakes": null,
              "height": "480",
              "name": "European Blackjack Gold",
              "width": "640",
              "thumbnail": "//staging-static.cherrycasino.com/img/games/150x140/european-blackjack-gold.jpg?u=1522403412",
              "url": null,
              "created_at": {
                "date": "2013-08-06T14:01:58+00:00"
              },
              "screenshot": null,
              "homepage_image": null,
              "vendor": "microgaming",
              "vendor_properties": null,
              "meta": {
                "description_short": "",
                "currency": "EUR",
                "bonus": false,
                "free_spins": true
              },
              "enabled": false,
              "label": "",
              "cols": 1,
              "rows": 1,
              "pos_x": null,
              "pos_y": null,
              "volatility": 0,
              "rating": 0,
              "backgrounds": [
                "//staging-static.cherrycasino.com/img/games/gamebg/european-blackjack-gold-1385723018.jpg?u=1522403412"
              ],
              "screenshots": [],
              "thumbnails": {
                "280x280": "//staging-static.cherrycasino.com/media/games/microgaming/europeanbjgold/microgaming-europeanbjgold-T280x280.jpg?u=1522403412",
                "280x600": "//staging-static.cherrycasino.com/media/games/microgaming/europeanbjgold/microgaming-europeanbjgold-T280x600.jpg?u=1522403412",
                "600x280": "//staging-static.cherrycasino.com/media/games/microgaming/europeanbjgold/microgaming-europeanbjgold-T600x280.jpg?u=1522403412",
                "legacy": "//staging-static.cherrycasino.com/img/games/150x140/european-blackjack-gold.jpg?u=1522403412"
              },
              "jurisdiction": "mga",
              "login_required": false,
              "_links": {
                "self": {
                  "href": "https://staging-frontapi.cherrytech.com/games/microgaming-european-blackjack-gold"
                }
              }
            }
          ]
        },
        "_links": {
          "self": {
            "href": "https://staging-frontapi.cherrytech.com/game-categories/popular-games"
          }
        }
      }
    ];
  }

  onViewDetails(id) {
    this.router.navigateByUrl('/games/'+id);
  }

}
