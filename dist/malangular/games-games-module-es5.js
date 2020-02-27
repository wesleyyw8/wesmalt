function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _possibleConstructorReturn(self, call) { if (call && (typeof call === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["games-games-module"], {
  /***/
  "./node_modules/@angular/forms/fesm2015/forms.js":
  /*!*******************************************************!*\
    !*** ./node_modules/@angular/forms/fesm2015/forms.js ***!
    \*******************************************************/

  /*! exports provided: ɵangular_packages_forms_forms_d, ɵInternalFormsSharedModule, ɵangular_packages_forms_forms_c, ɵangular_packages_forms_forms_a, ɵangular_packages_forms_forms_b, ɵangular_packages_forms_forms_e, ɵangular_packages_forms_forms_f, ɵangular_packages_forms_forms_g, ɵangular_packages_forms_forms_h, ɵangular_packages_forms_forms_i, ɵangular_packages_forms_forms_j, ɵangular_packages_forms_forms_k, ɵangular_packages_forms_forms_l, ɵangular_packages_forms_forms_z, ɵNgNoValidate, ɵangular_packages_forms_forms_m, ɵangular_packages_forms_forms_n, ɵangular_packages_forms_forms_o, ɵangular_packages_forms_forms_p, ɵangular_packages_forms_forms_q, ɵangular_packages_forms_forms_r, ɵangular_packages_forms_forms_s, ɵangular_packages_forms_forms_t, ɵangular_packages_forms_forms_v, ɵangular_packages_forms_forms_u, ɵangular_packages_forms_forms_w, ɵangular_packages_forms_forms_y, ɵNgSelectMultipleOption, ɵangular_packages_forms_forms_x, ɵangular_packages_forms_forms_bb, ɵangular_packages_forms_forms_bc, ɵangular_packages_forms_forms_be, ɵangular_packages_forms_forms_bd, ɵangular_packages_forms_forms_bf, ɵangular_packages_forms_forms_ba, AbstractControlDirective, AbstractFormGroupDirective, CheckboxControlValueAccessor, ControlContainer, NG_VALUE_ACCESSOR, COMPOSITION_BUFFER_MODE, DefaultValueAccessor, NgControl, NgControlStatus, NgControlStatusGroup, NgForm, NgFormSelectorWarning, NgModel, NgModelGroup, NumberValueAccessor, RadioControlValueAccessor, RangeValueAccessor, FormControlDirective, FormControlName, FormGroupDirective, FormArrayName, FormGroupName, NgSelectOption, SelectControlValueAccessor, SelectMultipleControlValueAccessor, CheckboxRequiredValidator, EmailValidator, MaxLengthValidator, MinLengthValidator, PatternValidator, RequiredValidator, FormBuilder, AbstractControl, FormArray, FormControl, FormGroup, NG_ASYNC_VALIDATORS, NG_VALIDATORS, Validators, VERSION, FormsModule, ReactiveFormsModule */

  /***/
  function node_modulesAngularFormsFesm2015FormsJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ɵangular_packages_forms_forms_d", function () {
      return ɵInternalFormsSharedModule;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ɵInternalFormsSharedModule", function () {
      return ɵInternalFormsSharedModule;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ɵangular_packages_forms_forms_c", function () {
      return REACTIVE_DRIVEN_DIRECTIVES;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ɵangular_packages_forms_forms_a", function () {
      return SHARED_FORM_DIRECTIVES;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ɵangular_packages_forms_forms_b", function () {
      return TEMPLATE_DRIVEN_DIRECTIVES;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ɵangular_packages_forms_forms_e", function () {
      return CHECKBOX_VALUE_ACCESSOR;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ɵangular_packages_forms_forms_f", function () {
      return DEFAULT_VALUE_ACCESSOR;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ɵangular_packages_forms_forms_g", function () {
      return AbstractControlStatus;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ɵangular_packages_forms_forms_h", function () {
      return ngControlStatusHost;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ɵangular_packages_forms_forms_i", function () {
      return formDirectiveProvider;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ɵangular_packages_forms_forms_j", function () {
      return NG_FORM_SELECTOR_WARNING;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ɵangular_packages_forms_forms_k", function () {
      return formControlBinding;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ɵangular_packages_forms_forms_l", function () {
      return modelGroupProvider;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ɵangular_packages_forms_forms_z", function () {
      return ɵNgNoValidate;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ɵNgNoValidate", function () {
      return ɵNgNoValidate;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ɵangular_packages_forms_forms_m", function () {
      return NUMBER_VALUE_ACCESSOR;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ɵangular_packages_forms_forms_n", function () {
      return RADIO_VALUE_ACCESSOR;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ɵangular_packages_forms_forms_o", function () {
      return RadioControlRegistry;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ɵangular_packages_forms_forms_p", function () {
      return RANGE_VALUE_ACCESSOR;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ɵangular_packages_forms_forms_q", function () {
      return NG_MODEL_WITH_FORM_CONTROL_WARNING;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ɵangular_packages_forms_forms_r", function () {
      return formControlBinding$1;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ɵangular_packages_forms_forms_s", function () {
      return controlNameBinding;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ɵangular_packages_forms_forms_t", function () {
      return formDirectiveProvider$1;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ɵangular_packages_forms_forms_v", function () {
      return formArrayNameProvider;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ɵangular_packages_forms_forms_u", function () {
      return formGroupNameProvider;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ɵangular_packages_forms_forms_w", function () {
      return SELECT_VALUE_ACCESSOR;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ɵangular_packages_forms_forms_y", function () {
      return ɵNgSelectMultipleOption;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ɵNgSelectMultipleOption", function () {
      return ɵNgSelectMultipleOption;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ɵangular_packages_forms_forms_x", function () {
      return SELECT_MULTIPLE_VALUE_ACCESSOR;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ɵangular_packages_forms_forms_bb", function () {
      return CHECKBOX_REQUIRED_VALIDATOR;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ɵangular_packages_forms_forms_bc", function () {
      return EMAIL_VALIDATOR;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ɵangular_packages_forms_forms_be", function () {
      return MAX_LENGTH_VALIDATOR;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ɵangular_packages_forms_forms_bd", function () {
      return MIN_LENGTH_VALIDATOR;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ɵangular_packages_forms_forms_bf", function () {
      return PATTERN_VALIDATOR;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ɵangular_packages_forms_forms_ba", function () {
      return REQUIRED_VALIDATOR;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AbstractControlDirective", function () {
      return AbstractControlDirective;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AbstractFormGroupDirective", function () {
      return AbstractFormGroupDirective;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CheckboxControlValueAccessor", function () {
      return CheckboxControlValueAccessor;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ControlContainer", function () {
      return ControlContainer;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NG_VALUE_ACCESSOR", function () {
      return NG_VALUE_ACCESSOR;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "COMPOSITION_BUFFER_MODE", function () {
      return COMPOSITION_BUFFER_MODE;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DefaultValueAccessor", function () {
      return DefaultValueAccessor;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NgControl", function () {
      return NgControl;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NgControlStatus", function () {
      return NgControlStatus;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NgControlStatusGroup", function () {
      return NgControlStatusGroup;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NgForm", function () {
      return NgForm;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NgFormSelectorWarning", function () {
      return NgFormSelectorWarning;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NgModel", function () {
      return NgModel;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NgModelGroup", function () {
      return NgModelGroup;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NumberValueAccessor", function () {
      return NumberValueAccessor;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RadioControlValueAccessor", function () {
      return RadioControlValueAccessor;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RangeValueAccessor", function () {
      return RangeValueAccessor;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FormControlDirective", function () {
      return FormControlDirective;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FormControlName", function () {
      return FormControlName;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FormGroupDirective", function () {
      return FormGroupDirective;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FormArrayName", function () {
      return FormArrayName;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FormGroupName", function () {
      return FormGroupName;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NgSelectOption", function () {
      return NgSelectOption;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SelectControlValueAccessor", function () {
      return SelectControlValueAccessor;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SelectMultipleControlValueAccessor", function () {
      return SelectMultipleControlValueAccessor;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CheckboxRequiredValidator", function () {
      return CheckboxRequiredValidator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "EmailValidator", function () {
      return EmailValidator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MaxLengthValidator", function () {
      return MaxLengthValidator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MinLengthValidator", function () {
      return MinLengthValidator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PatternValidator", function () {
      return PatternValidator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RequiredValidator", function () {
      return RequiredValidator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FormBuilder", function () {
      return FormBuilder;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AbstractControl", function () {
      return AbstractControl;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FormArray", function () {
      return FormArray;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FormControl", function () {
      return FormControl;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FormGroup", function () {
      return FormGroup;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NG_ASYNC_VALIDATORS", function () {
      return NG_ASYNC_VALIDATORS;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NG_VALIDATORS", function () {
      return NG_VALIDATORS;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Validators", function () {
      return Validators;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "VERSION", function () {
      return VERSION;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FormsModule", function () {
      return FormsModule;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ReactiveFormsModule", function () {
      return ReactiveFormsModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /**
     * @license Angular v8.2.14
     * (c) 2010-2019 Google LLC. https://angular.io/
     * License: MIT
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * \@description
     * Defines an interface that acts as a bridge between the Angular forms API and a
     * native element in the DOM.
     *
     * Implement this interface to create a custom form control directive
     * that integrates with Angular forms.
     *
     * @see DefaultValueAccessor
     *
     * \@publicApi
     * @record
     */


    function ControlValueAccessor() {}

    if (false) {}
    /**
     * Used to provide a `ControlValueAccessor` for form controls.
     *
     * See `DefaultValueAccessor` for how to implement one.
     *
     * \@publicApi
     * @type {?}
     */


    var NG_VALUE_ACCESSOR = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["InjectionToken"]('NgValueAccessor');
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /** @type {?} */

    var CHECKBOX_VALUE_ACCESSOR = {
      provide: NG_VALUE_ACCESSOR,
      useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(
      /**
      * @return {?}
      */
      function () {
        return CheckboxControlValueAccessor;
      }),
      multi: true
    };
    /**
     * \@description
     * A `ControlValueAccessor` for writing a value and listening to changes on a checkbox input
     * element.
     *
     * \@usageNotes
     *
     * ### Using a checkbox with a reactive form.
     *
     * The following example shows how to use a checkbox with a reactive form.
     *
     * ```ts
     * const rememberLoginControl = new FormControl();
     * ```
     *
     * ```
     * <input type="checkbox" [formControl]="rememberLoginControl">
     * ```
     *
     * \@ngModule ReactiveFormsModule
     * \@ngModule FormsModule
     * \@publicApi
     */

    var CheckboxControlValueAccessor =
    /*#__PURE__*/
    function () {
      /**
       * @param {?} _renderer
       * @param {?} _elementRef
       */
      function CheckboxControlValueAccessor(_renderer, _elementRef) {
        _classCallCheck(this, CheckboxControlValueAccessor);

        this._renderer = _renderer;
        this._elementRef = _elementRef;
        /**
         * \@description
         * The registered callback function called when a change event occurs on the input element.
         */

        this.onChange =
        /**
        * @param {?} _
        * @return {?}
        */
        function (_) {};
        /**
         * \@description
         * The registered callback function called when a blur event occurs on the input element.
         */


        this.onTouched =
        /**
        * @return {?}
        */
        function () {};
      }
      /**
       * Sets the "checked" property on the input element.
       *
       * @param {?} value The checked value
       * @return {?}
       */


      _createClass(CheckboxControlValueAccessor, [{
        key: "writeValue",
        value: function writeValue(value) {
          this._renderer.setProperty(this._elementRef.nativeElement, 'checked', value);
        }
        /**
         * \@description
         * Registers a function called when the control value changes.
         *
         * @param {?} fn The callback function
         * @return {?}
         */

      }, {
        key: "registerOnChange",
        value: function registerOnChange(fn) {
          this.onChange = fn;
        }
        /**
         * \@description
         * Registers a function called when the control is touched.
         *
         * @param {?} fn The callback function
         * @return {?}
         */

      }, {
        key: "registerOnTouched",
        value: function registerOnTouched(fn) {
          this.onTouched = fn;
        }
        /**
         * Sets the "disabled" property on the input element.
         *
         * @param {?} isDisabled The disabled value
         * @return {?}
         */

      }, {
        key: "setDisabledState",
        value: function setDisabledState(isDisabled) {
          this._renderer.setProperty(this._elementRef.nativeElement, 'disabled', isDisabled);
        }
      }]);

      return CheckboxControlValueAccessor;
    }();

    CheckboxControlValueAccessor.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
      args: [{
        selector: 'input[type=checkbox][formControlName],input[type=checkbox][formControl],input[type=checkbox][ngModel]',
        host: {
          '(change)': 'onChange($event.target.checked)',
          '(blur)': 'onTouched()'
        },
        providers: [CHECKBOX_VALUE_ACCESSOR]
      }]
    }];
    /** @nocollapse */

    CheckboxControlValueAccessor.ctorParameters = function () {
      return [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
      }];
    };

    if (false) {}
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /** @type {?} */


    var DEFAULT_VALUE_ACCESSOR = {
      provide: NG_VALUE_ACCESSOR,
      useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(
      /**
      * @return {?}
      */
      function () {
        return DefaultValueAccessor;
      }),
      multi: true
    };
    /**
     * We must check whether the agent is Android because composition events
     * behave differently between iOS and Android.
     * @return {?}
     */

    function _isAndroid() {
      /** @type {?} */
      var userAgent = Object(_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["ɵgetDOM"])() ? Object(_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["ɵgetDOM"])().getUserAgent() : '';
      return /android (\d+)/.test(userAgent.toLowerCase());
    }
    /**
     * \@description
     * Provide this token to control if form directives buffer IME input until
     * the "compositionend" event occurs.
     * \@publicApi
     * @type {?}
     */


    var COMPOSITION_BUFFER_MODE = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["InjectionToken"]('CompositionEventMode');
    /**
     * \@description
     * The default `ControlValueAccessor` for writing a value and listening to changes on input
     * elements. The accessor is used by the `FormControlDirective`, `FormControlName`, and
     * `NgModel` directives.
     *
     * \@usageNotes
     *
     * ### Using the default value accessor
     *
     * The following example shows how to use an input element that activates the default value accessor
     * (in this case, a text field).
     *
     * ```ts
     * const firstNameControl = new FormControl();
     * ```
     *
     * ```
     * <input type="text" [formControl]="firstNameControl">
     * ```
     *
     * \@ngModule ReactiveFormsModule
     * \@ngModule FormsModule
     * \@publicApi
     */

    var DefaultValueAccessor =
    /*#__PURE__*/
    function () {
      /**
       * @param {?} _renderer
       * @param {?} _elementRef
       * @param {?} _compositionMode
       */
      function DefaultValueAccessor(_renderer, _elementRef, _compositionMode) {
        _classCallCheck(this, DefaultValueAccessor);

        this._renderer = _renderer;
        this._elementRef = _elementRef;
        this._compositionMode = _compositionMode;
        /**
         * \@description
         * The registered callback function called when an input event occurs on the input element.
         */

        this.onChange =
        /**
        * @param {?} _
        * @return {?}
        */
        function (_) {};
        /**
         * \@description
         * The registered callback function called when a blur event occurs on the input element.
         */


        this.onTouched =
        /**
        * @return {?}
        */
        function () {};
        /**
         * Whether the user is creating a composition string (IME events).
         */


        this._composing = false;

        if (this._compositionMode == null) {
          this._compositionMode = !_isAndroid();
        }
      }
      /**
       * Sets the "value" property on the input element.
       *
       * @param {?} value The checked value
       * @return {?}
       */


      _createClass(DefaultValueAccessor, [{
        key: "writeValue",
        value: function writeValue(value) {
          /** @type {?} */
          var normalizedValue = value == null ? '' : value;

          this._renderer.setProperty(this._elementRef.nativeElement, 'value', normalizedValue);
        }
        /**
         * \@description
         * Registers a function called when the control value changes.
         *
         * @param {?} fn The callback function
         * @return {?}
         */

      }, {
        key: "registerOnChange",
        value: function registerOnChange(fn) {
          this.onChange = fn;
        }
        /**
         * \@description
         * Registers a function called when the control is touched.
         *
         * @param {?} fn The callback function
         * @return {?}
         */

      }, {
        key: "registerOnTouched",
        value: function registerOnTouched(fn) {
          this.onTouched = fn;
        }
        /**
         * Sets the "disabled" property on the input element.
         *
         * @param {?} isDisabled The disabled value
         * @return {?}
         */

      }, {
        key: "setDisabledState",
        value: function setDisabledState(isDisabled) {
          this._renderer.setProperty(this._elementRef.nativeElement, 'disabled', isDisabled);
        }
        /**
         * \@internal
         * @param {?} value
         * @return {?}
         */

      }, {
        key: "_handleInput",
        value: function _handleInput(value) {
          if (!this._compositionMode || this._compositionMode && !this._composing) {
            this.onChange(value);
          }
        }
        /**
         * \@internal
         * @return {?}
         */

      }, {
        key: "_compositionStart",
        value: function _compositionStart() {
          this._composing = true;
        }
        /**
         * \@internal
         * @param {?} value
         * @return {?}
         */

      }, {
        key: "_compositionEnd",
        value: function _compositionEnd(value) {
          this._composing = false;
          this._compositionMode && this.onChange(value);
        }
      }]);

      return DefaultValueAccessor;
    }();

    DefaultValueAccessor.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
      args: [{
        selector: 'input:not([type=checkbox])[formControlName],textarea[formControlName],input:not([type=checkbox])[formControl],textarea[formControl],input:not([type=checkbox])[ngModel],textarea[ngModel],[ngDefaultControl]',
        // TODO: vsavkin replace the above selector with the one below it once
        // https://github.com/angular/angular/issues/3011 is implemented
        // selector: '[ngModel],[formControl],[formControlName]',
        host: {
          '(input)': '$any(this)._handleInput($event.target.value)',
          '(blur)': 'onTouched()',
          '(compositionstart)': '$any(this)._compositionStart()',
          '(compositionend)': '$any(this)._compositionEnd($event.target.value)'
        },
        providers: [DEFAULT_VALUE_ACCESSOR]
      }]
    }];
    /** @nocollapse */

    DefaultValueAccessor.ctorParameters = function () {
      return [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
      }, {
        type: Boolean,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
          args: [COMPOSITION_BUFFER_MODE]
        }]
      }];
    };

    if (false) {}
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @license
     * Copyright Google Inc. All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */

    /**
     * \@description
     * Base class for control directives.
     *
     * This class is only used internally in the `ReactiveFormsModule` and the `FormsModule`.
     *
     * \@publicApi
     * @abstract
     */


    var AbstractControlDirective =
    /*#__PURE__*/
    function () {
      function AbstractControlDirective() {
        _classCallCheck(this, AbstractControlDirective);
      }

      _createClass(AbstractControlDirective, [{
        key: "reset",

        /**
         * \@description
         * Resets the control with the provided value if the control is present.
         * @param {?=} value
         * @return {?}
         */
        value: function reset() {
          var value = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : undefined;
          if (this.control) this.control.reset(value);
        }
        /**
         * \@description
         * Reports whether the control with the given path has the error specified.
         *
         * \@usageNotes
         * For example, for the following `FormGroup`:
         *
         * ```
         * form = new FormGroup({
         *   address: new FormGroup({ street: new FormControl() })
         * });
         * ```
         *
         * The path to the 'street' control from the root form would be 'address' -> 'street'.
         *
         * It can be provided to this method in one of two formats:
         *
         * 1. An array of string control names, e.g. `['address', 'street']`
         * 1. A period-delimited list of control names in one string, e.g. `'address.street'`
         *
         * If no path is given, this method checks for the error on the current control.
         *
         * @param {?} errorCode The code of the error to check
         * @param {?=} path A list of control names that designates how to move from the current control
         * to the control that should be queried for errors.
         *
         * @return {?} whether the given error is present in the control at the given path.
         *
         * If the control is not present, false is returned.
         */

      }, {
        key: "hasError",
        value: function hasError(errorCode, path) {
          return this.control ? this.control.hasError(errorCode, path) : false;
        }
        /**
         * \@description
         * Reports error data for the control with the given path.
         *
         * \@usageNotes
         * For example, for the following `FormGroup`:
         *
         * ```
         * form = new FormGroup({
         *   address: new FormGroup({ street: new FormControl() })
         * });
         * ```
         *
         * The path to the 'street' control from the root form would be 'address' -> 'street'.
         *
         * It can be provided to this method in one of two formats:
         *
         * 1. An array of string control names, e.g. `['address', 'street']`
         * 1. A period-delimited list of control names in one string, e.g. `'address.street'`
         *
         * @param {?} errorCode The code of the error to check
         * @param {?=} path A list of control names that designates how to move from the current control
         * to the control that should be queried for errors.
         *
         * @return {?} error data for that particular error. If the control or error is not present,
         * null is returned.
         */

      }, {
        key: "getError",
        value: function getError(errorCode, path) {
          return this.control ? this.control.getError(errorCode, path) : null;
        }
      }, {
        key: "value",

        /**
         * \@description
         * Reports the value of the control if it is present, otherwise null.
         * @return {?}
         */
        get: function get() {
          return this.control ? this.control.value : null;
        }
        /**
         * \@description
         * Reports whether the control is valid. A control is considered valid if no
         * validation errors exist with the current value.
         * If the control is not present, null is returned.
         * @return {?}
         */

      }, {
        key: "valid",
        get: function get() {
          return this.control ? this.control.valid : null;
        }
        /**
         * \@description
         * Reports whether the control is invalid, meaning that an error exists in the input value.
         * If the control is not present, null is returned.
         * @return {?}
         */

      }, {
        key: "invalid",
        get: function get() {
          return this.control ? this.control.invalid : null;
        }
        /**
         * \@description
         * Reports whether a control is pending, meaning that that async validation is occurring and
         * errors are not yet available for the input value. If the control is not present, null is
         * returned.
         * @return {?}
         */

      }, {
        key: "pending",
        get: function get() {
          return this.control ? this.control.pending : null;
        }
        /**
         * \@description
         * Reports whether the control is disabled, meaning that the control is disabled
         * in the UI and is exempt from validation checks and excluded from aggregate
         * values of ancestor controls. If the control is not present, null is returned.
         * @return {?}
         */

      }, {
        key: "disabled",
        get: function get() {
          return this.control ? this.control.disabled : null;
        }
        /**
         * \@description
         * Reports whether the control is enabled, meaning that the control is included in ancestor
         * calculations of validity or value. If the control is not present, null is returned.
         * @return {?}
         */

      }, {
        key: "enabled",
        get: function get() {
          return this.control ? this.control.enabled : null;
        }
        /**
         * \@description
         * Reports the control's validation errors. If the control is not present, null is returned.
         * @return {?}
         */

      }, {
        key: "errors",
        get: function get() {
          return this.control ? this.control.errors : null;
        }
        /**
         * \@description
         * Reports whether the control is pristine, meaning that the user has not yet changed
         * the value in the UI. If the control is not present, null is returned.
         * @return {?}
         */

      }, {
        key: "pristine",
        get: function get() {
          return this.control ? this.control.pristine : null;
        }
        /**
         * \@description
         * Reports whether the control is dirty, meaning that the user has changed
         * the value in the UI. If the control is not present, null is returned.
         * @return {?}
         */

      }, {
        key: "dirty",
        get: function get() {
          return this.control ? this.control.dirty : null;
        }
        /**
         * \@description
         * Reports whether the control is touched, meaning that the user has triggered
         * a `blur` event on it. If the control is not present, null is returned.
         * @return {?}
         */

      }, {
        key: "touched",
        get: function get() {
          return this.control ? this.control.touched : null;
        }
        /**
         * \@description
         * Reports the validation status of the control. Possible values include:
         * 'VALID', 'INVALID', 'DISABLED', and 'PENDING'.
         * If the control is not present, null is returned.
         * @return {?}
         */

      }, {
        key: "status",
        get: function get() {
          return this.control ? this.control.status : null;
        }
        /**
         * \@description
         * Reports whether the control is untouched, meaning that the user has not yet triggered
         * a `blur` event on it. If the control is not present, null is returned.
         * @return {?}
         */

      }, {
        key: "untouched",
        get: function get() {
          return this.control ? this.control.untouched : null;
        }
        /**
         * \@description
         * Returns a multicasting observable that emits a validation status whenever it is
         * calculated for the control. If the control is not present, null is returned.
         * @return {?}
         */

      }, {
        key: "statusChanges",
        get: function get() {
          return this.control ? this.control.statusChanges : null;
        }
        /**
         * \@description
         * Returns a multicasting observable of value changes for the control that emits every time the
         * value of the control changes in the UI or programmatically.
         * If the control is not present, null is returned.
         * @return {?}
         */

      }, {
        key: "valueChanges",
        get: function get() {
          return this.control ? this.control.valueChanges : null;
        }
        /**
         * \@description
         * Returns an array that represents the path from the top-level form to this control.
         * Each index is the string name of the control on that level.
         * @return {?}
         */

      }, {
        key: "path",
        get: function get() {
          return null;
        }
      }]);

      return AbstractControlDirective;
    }();

    if (false) {}
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * \@description
     * A base class for directives that contain multiple registered instances of `NgControl`.
     * Only used by the forms module.
     *
     * \@publicApi
     * @abstract
     */


    var ControlContainer =
    /*#__PURE__*/
    function (_AbstractControlDirec) {
      _inherits(ControlContainer, _AbstractControlDirec);

      function ControlContainer() {
        _classCallCheck(this, ControlContainer);

        return _possibleConstructorReturn(this, _getPrototypeOf(ControlContainer).apply(this, arguments));
      }

      _createClass(ControlContainer, [{
        key: "formDirective",

        /**
         * \@description
         * The top-level form directive for the control.
         * @return {?}
         */
        get: function get() {
          return null;
        }
        /**
         * \@description
         * The path to this group.
         * @return {?}
         */

      }, {
        key: "path",
        get: function get() {
          return null;
        }
      }]);

      return ControlContainer;
    }(AbstractControlDirective);

    if (false) {}
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @return {?}
     */


    function unimplemented() {
      throw new Error('unimplemented');
    }
    /**
     * \@description
     * A base class that all control `FormControl`-based directives extend. It binds a `FormControl`
     * object to a DOM element.
     *
     * \@publicApi
     * @abstract
     */


    var NgControl =
    /*#__PURE__*/
    function (_AbstractControlDirec2) {
      _inherits(NgControl, _AbstractControlDirec2);

      function NgControl() {
        var _this;

        _classCallCheck(this, NgControl);

        _this = _possibleConstructorReturn(this, _getPrototypeOf(NgControl).apply(this, arguments));
        /**
         * \@description
         * The parent form for the control.
         *
         * \@internal
         */

        _this._parent = null;
        /**
         * \@description
         * The name for the control
         */

        _this.name = null;
        /**
         * \@description
         * The value accessor for the control
         */

        _this.valueAccessor = null;
        /**
         * \@description
         * The uncomposed array of synchronous validators for the control
         *
         * \@internal
         */

        _this._rawValidators = [];
        /**
         * \@description
         * The uncomposed array of async validators for the control
         *
         * \@internal
         */

        _this._rawAsyncValidators = [];
        return _this;
      }
      /**
       * \@description
       * The registered synchronous validator function for the control
       *
       * @throws An exception that this method is not implemented
       * @return {?}
       */


      _createClass(NgControl, [{
        key: "validator",
        get: function get() {
          return (
            /** @type {?} */
            unimplemented()
          );
        }
        /**
         * \@description
         * The registered async validator function for the control
         *
         * @throws An exception that this method is not implemented
         * @return {?}
         */

      }, {
        key: "asyncValidator",
        get: function get() {
          return (
            /** @type {?} */
            unimplemented()
          );
        }
      }]);

      return NgControl;
    }(AbstractControlDirective);

    if (false) {}
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */


    var AbstractControlStatus =
    /*#__PURE__*/
    function () {
      /**
       * @param {?} cd
       */
      function AbstractControlStatus(cd) {
        _classCallCheck(this, AbstractControlStatus);

        this._cd = cd;
      }
      /**
       * @return {?}
       */


      _createClass(AbstractControlStatus, [{
        key: "ngClassUntouched",
        get: function get() {
          return this._cd.control ? this._cd.control.untouched : false;
        }
        /**
         * @return {?}
         */

      }, {
        key: "ngClassTouched",
        get: function get() {
          return this._cd.control ? this._cd.control.touched : false;
        }
        /**
         * @return {?}
         */

      }, {
        key: "ngClassPristine",
        get: function get() {
          return this._cd.control ? this._cd.control.pristine : false;
        }
        /**
         * @return {?}
         */

      }, {
        key: "ngClassDirty",
        get: function get() {
          return this._cd.control ? this._cd.control.dirty : false;
        }
        /**
         * @return {?}
         */

      }, {
        key: "ngClassValid",
        get: function get() {
          return this._cd.control ? this._cd.control.valid : false;
        }
        /**
         * @return {?}
         */

      }, {
        key: "ngClassInvalid",
        get: function get() {
          return this._cd.control ? this._cd.control.invalid : false;
        }
        /**
         * @return {?}
         */

      }, {
        key: "ngClassPending",
        get: function get() {
          return this._cd.control ? this._cd.control.pending : false;
        }
      }]);

      return AbstractControlStatus;
    }();

    if (false) {}
    /** @type {?} */


    var ngControlStatusHost = {
      '[class.ng-untouched]': 'ngClassUntouched',
      '[class.ng-touched]': 'ngClassTouched',
      '[class.ng-pristine]': 'ngClassPristine',
      '[class.ng-dirty]': 'ngClassDirty',
      '[class.ng-valid]': 'ngClassValid',
      '[class.ng-invalid]': 'ngClassInvalid',
      '[class.ng-pending]': 'ngClassPending'
    };
    /**
     * \@description
     * Directive automatically applied to Angular form controls that sets CSS classes
     * based on control status.
     *
     * \@usageNotes
     *
     * ### CSS classes applied
     *
     * The following classes are applied as the properties become true:
     *
     * * ng-valid
     * * ng-invalid
     * * ng-pending
     * * ng-pristine
     * * ng-dirty
     * * ng-untouched
     * * ng-touched
     *
     * \@ngModule ReactiveFormsModule
     * \@ngModule FormsModule
     * \@publicApi
     */

    var NgControlStatus =
    /*#__PURE__*/
    function (_AbstractControlStatu) {
      _inherits(NgControlStatus, _AbstractControlStatu);

      /**
       * @param {?} cd
       */
      function NgControlStatus(cd) {
        _classCallCheck(this, NgControlStatus);

        return _possibleConstructorReturn(this, _getPrototypeOf(NgControlStatus).call(this, cd));
      }

      return NgControlStatus;
    }(AbstractControlStatus);

    NgControlStatus.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
      args: [{
        selector: '[formControlName],[ngModel],[formControl]',
        host: ngControlStatusHost
      }]
    }];
    /** @nocollapse */

    NgControlStatus.ctorParameters = function () {
      return [{
        type: NgControl,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Self"]
        }]
      }];
    };
    /**
     * \@description
     * Directive automatically applied to Angular form groups that sets CSS classes
     * based on control status (valid/invalid/dirty/etc).
     *
     * @see `NgControlStatus`
     *
     * \@ngModule ReactiveFormsModule
     * \@ngModule FormsModule
     * \@publicApi
     */


    var NgControlStatusGroup =
    /*#__PURE__*/
    function (_AbstractControlStatu2) {
      _inherits(NgControlStatusGroup, _AbstractControlStatu2);

      /**
       * @param {?} cd
       */
      function NgControlStatusGroup(cd) {
        _classCallCheck(this, NgControlStatusGroup);

        return _possibleConstructorReturn(this, _getPrototypeOf(NgControlStatusGroup).call(this, cd));
      }

      return NgControlStatusGroup;
    }(AbstractControlStatus);

    NgControlStatusGroup.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
      args: [{
        selector: '[formGroupName],[formArrayName],[ngModelGroup],[formGroup],form:not([ngNoForm]),[ngForm]',
        host: ngControlStatusHost
      }]
    }];
    /** @nocollapse */

    NgControlStatusGroup.ctorParameters = function () {
      return [{
        type: ControlContainer,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Self"]
        }]
      }];
    };
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @param {?} value
     * @return {?}
     */


    function isEmptyInputValue(value) {
      // we don't check for string here so it also works with arrays
      return value == null || value.length === 0;
    }
    /**
     * \@description
     * An `InjectionToken` for registering additional synchronous validators used with `AbstractControl`s.
     *
     * @see `NG_ASYNC_VALIDATORS`
     *
     * \@usageNotes
     *
     * ### Providing a custom validator
     *
     * The following example registers a custom validator directive. Adding the validator to the
     * existing collection of validators requires the `multi: true` option.
     *
     * ```typescript
     * \@Directive({
     *   selector: '[customValidator]',
     *   providers: [{provide: NG_VALIDATORS, useExisting: CustomValidatorDirective, multi: true}]
     * })
     * class CustomValidatorDirective implements Validator {
     *   validate(control: AbstractControl): ValidationErrors | null {
     *     return { 'custom': true };
     *   }
     * }
     * ```
     *
     * \@publicApi
     * @type {?}
     */


    var NG_VALIDATORS = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["InjectionToken"]('NgValidators');
    /**
     * \@description
     * An `InjectionToken` for registering additional asynchronous validators used with `AbstractControl`s.
     *
     * @see `NG_VALIDATORS`
     *
     * \@publicApi
     * @type {?}
     */

    var NG_ASYNC_VALIDATORS = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["InjectionToken"]('NgAsyncValidators');
    /**
     * A regular expression that matches valid e-mail addresses.
     *
     * At a high level, this regexp matches e-mail addresses of the format `local-part\@tld`, where:
     * - `local-part` consists of one or more of the allowed characters (alphanumeric and some
     *   punctuation symbols).
     * - `local-part` cannot begin or end with a period (`.`).
     * - `local-part` cannot be longer than 64 characters.
     * - `tld` consists of one or more `labels` separated by periods (`.`). For example `localhost` or
     *   `foo.com`.
     * - A `label` consists of one or more of the allowed characters (alphanumeric, dashes (`-`) and
     *   periods (`.`)).
     * - A `label` cannot begin or end with a dash (`-`) or a period (`.`).
     * - A `label` cannot be longer than 63 characters.
     * - The whole address cannot be longer than 254 characters.
     *
     * ## Implementation background
     *
     * This regexp was ported over from AngularJS (see there for git history):
     * https://github.com/angular/angular.js/blob/c133ef836/src/ng/directive/input.js#L27
     * It is based on the
     * [WHATWG version](https://html.spec.whatwg.org/multipage/input.html#valid-e-mail-address) with
     * some enhancements to incorporate more RFC rules (such as rules related to domain names and the
     * lengths of different parts of the address). The main differences from the WHATWG version are:
     *   - Disallow `local-part` to begin or end with a period (`.`).
     *   - Disallow `local-part` length to exceed 64 characters.
     *   - Disallow total address length to exceed 254 characters.
     *
     * See [this commit](https://github.com/angular/angular.js/commit/f3f5cf72e) for more details.
     * @type {?}
     */

    var EMAIL_REGEXP = /^(?=.{1,254}$)(?=.{1,64}@)[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+)*@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
    /**
     * \@description
     * Provides a set of built-in validators that can be used by form controls.
     *
     * A validator is a function that processes a `FormControl` or collection of
     * controls and returns an error map or null. A null map means that validation has passed.
     *
     * @see [Form Validation](/guide/form-validation)
     *
     * \@publicApi
     */

    var Validators =
    /*#__PURE__*/
    function () {
      function Validators() {
        _classCallCheck(this, Validators);
      }

      _createClass(Validators, null, [{
        key: "min",

        /**
         * \@description
         * Validator that requires the control's value to be greater than or equal to the provided number.
         * The validator exists only as a function and not as a directive.
         *
         * \@usageNotes
         *
         * ### Validate against a minimum of 3
         *
         * ```typescript
         * const control = new FormControl(2, Validators.min(3));
         *
         * console.log(control.errors); // {min: {min: 3, actual: 2}}
         * ```
         *
         * @see `updateValueAndValidity()`
         *
         * @param {?} min
         * @return {?} A validator function that returns an error map with the
         * `min` property if the validation check fails, otherwise `null`.
         *
         */
        value: function min(_min) {
          return (
            /**
            * @param {?} control
            * @return {?}
            */
            function (control) {
              if (isEmptyInputValue(control.value) || isEmptyInputValue(_min)) {
                return null; // don't validate empty values to allow optional controls
              }
              /** @type {?} */


              var value = parseFloat(control.value); // Controls with NaN values after parsing should be treated as not having a
              // minimum, per the HTML forms spec: https://www.w3.org/TR/html5/forms.html#attr-input-min

              return !isNaN(value) && value < _min ? {
                'min': {
                  'min': _min,
                  'actual': control.value
                }
              } : null;
            }
          );
        }
        /**
         * \@description
         * Validator that requires the control's value to be less than or equal to the provided number.
         * The validator exists only as a function and not as a directive.
         *
         * \@usageNotes
         *
         * ### Validate against a maximum of 15
         *
         * ```typescript
         * const control = new FormControl(16, Validators.max(15));
         *
         * console.log(control.errors); // {max: {max: 15, actual: 16}}
         * ```
         *
         * @see `updateValueAndValidity()`
         *
         * @param {?} max
         * @return {?} A validator function that returns an error map with the
         * `max` property if the validation check fails, otherwise `null`.
         *
         */

      }, {
        key: "max",
        value: function max(_max) {
          return (
            /**
            * @param {?} control
            * @return {?}
            */
            function (control) {
              if (isEmptyInputValue(control.value) || isEmptyInputValue(_max)) {
                return null; // don't validate empty values to allow optional controls
              }
              /** @type {?} */


              var value = parseFloat(control.value); // Controls with NaN values after parsing should be treated as not having a
              // maximum, per the HTML forms spec: https://www.w3.org/TR/html5/forms.html#attr-input-max

              return !isNaN(value) && value > _max ? {
                'max': {
                  'max': _max,
                  'actual': control.value
                }
              } : null;
            }
          );
        }
        /**
         * \@description
         * Validator that requires the control have a non-empty value.
         *
         * \@usageNotes
         *
         * ### Validate that the field is non-empty
         *
         * ```typescript
         * const control = new FormControl('', Validators.required);
         *
         * console.log(control.errors); // {required: true}
         * ```
         *
         * @see `updateValueAndValidity()`
         *
         * @param {?} control
         * @return {?} An error map with the `required` property
         * if the validation check fails, otherwise `null`.
         *
         */

      }, {
        key: "required",
        value: function required(control) {
          return isEmptyInputValue(control.value) ? {
            'required': true
          } : null;
        }
        /**
         * \@description
         * Validator that requires the control's value be true. This validator is commonly
         * used for required checkboxes.
         *
         * \@usageNotes
         *
         * ### Validate that the field value is true
         *
         * ```typescript
         * const control = new FormControl('', Validators.requiredTrue);
         *
         * console.log(control.errors); // {required: true}
         * ```
         *
         * @see `updateValueAndValidity()`
         *
         * @param {?} control
         * @return {?} An error map that contains the `required` property
         * set to `true` if the validation check fails, otherwise `null`.
         *
         */

      }, {
        key: "requiredTrue",
        value: function requiredTrue(control) {
          return control.value === true ? null : {
            'required': true
          };
        }
        /**
         * \@description
         * Validator that requires the control's value pass an email validation test.
         *
         * Tests the value using a [regular expression](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions)
         * pattern suitable for common usecases. The pattern is based on the definition of a valid email
         * address in the [WHATWG HTML specification](https://html.spec.whatwg.org/multipage/input.html#valid-e-mail-address)
         * with some enhancements to incorporate more RFC rules (such as rules related to domain names and
         * the lengths of different parts of the address).
         *
         * The differences from the WHATWG version include:
         * - Disallow `local-part` (the part before the `\@` symbol) to begin or end with a period (`.`).
         * - Disallow `local-part` to be longer than 64 characters.
         * - Disallow the whole address to be longer than 254 characters.
         *
         * If this pattern does not satisfy your business needs, you can use `Validators.pattern()` to
         * validate the value against a different pattern.
         *
         * \@usageNotes
         *
         * ### Validate that the field matches a valid email pattern
         *
         * ```typescript
         * const control = new FormControl('bad\@', Validators.email);
         *
         * console.log(control.errors); // {email: true}
         * ```
         *
         * @see `updateValueAndValidity()`
         *
         * @param {?} control
         * @return {?} An error map with the `email` property
         * if the validation check fails, otherwise `null`.
         *
         */

      }, {
        key: "email",
        value: function email(control) {
          if (isEmptyInputValue(control.value)) {
            return null; // don't validate empty values to allow optional controls
          }

          return EMAIL_REGEXP.test(control.value) ? null : {
            'email': true
          };
        }
        /**
         * \@description
         * Validator that requires the length of the control's value to be greater than or equal
         * to the provided minimum length. This validator is also provided by default if you use the
         * the HTML5 `minlength` attribute.
         *
         * \@usageNotes
         *
         * ### Validate that the field has a minimum of 3 characters
         *
         * ```typescript
         * const control = new FormControl('ng', Validators.minLength(3));
         *
         * console.log(control.errors); // {minlength: {requiredLength: 3, actualLength: 2}}
         * ```
         *
         * ```html
         * <input minlength="5">
         * ```
         *
         * @see `updateValueAndValidity()`
         *
         * @param {?} minLength
         * @return {?} A validator function that returns an error map with the
         * `minlength` if the validation check fails, otherwise `null`.
         *
         */

      }, {
        key: "minLength",
        value: function minLength(_minLength) {
          return (
            /**
            * @param {?} control
            * @return {?}
            */
            function (control) {
              if (isEmptyInputValue(control.value)) {
                return null; // don't validate empty values to allow optional controls
              }
              /** @type {?} */


              var length = control.value ? control.value.length : 0;
              return length < _minLength ? {
                'minlength': {
                  'requiredLength': _minLength,
                  'actualLength': length
                }
              } : null;
            }
          );
        }
        /**
         * \@description
         * Validator that requires the length of the control's value to be less than or equal
         * to the provided maximum length. This validator is also provided by default if you use the
         * the HTML5 `maxlength` attribute.
         *
         * \@usageNotes
         *
         * ### Validate that the field has maximum of 5 characters
         *
         * ```typescript
         * const control = new FormControl('Angular', Validators.maxLength(5));
         *
         * console.log(control.errors); // {maxlength: {requiredLength: 5, actualLength: 7}}
         * ```
         *
         * ```html
         * <input maxlength="5">
         * ```
         *
         * @see `updateValueAndValidity()`
         *
         * @param {?} maxLength
         * @return {?} A validator function that returns an error map with the
         * `maxlength` property if the validation check fails, otherwise `null`.
         *
         */

      }, {
        key: "maxLength",
        value: function maxLength(_maxLength) {
          return (
            /**
            * @param {?} control
            * @return {?}
            */
            function (control) {
              /** @type {?} */
              var length = control.value ? control.value.length : 0;
              return length > _maxLength ? {
                'maxlength': {
                  'requiredLength': _maxLength,
                  'actualLength': length
                }
              } : null;
            }
          );
        }
        /**
         * \@description
         * Validator that requires the control's value to match a regex pattern. This validator is also
         * provided by default if you use the HTML5 `pattern` attribute.
         *
         * \@usageNotes
         *
         * ### Validate that the field only contains letters or spaces
         *
         * ```typescript
         * const control = new FormControl('1', Validators.pattern('[a-zA-Z ]*'));
         *
         * console.log(control.errors); // {pattern: {requiredPattern: '^[a-zA-Z ]*$', actualValue: '1'}}
         * ```
         *
         * ```html
         * <input pattern="[a-zA-Z ]*">
         * ```
         *
         * @see `updateValueAndValidity()`
         *
         * @param {?} pattern A regular expression to be used as is to test the values, or a string.
         * If a string is passed, the `^` character is prepended and the `$` character is
         * appended to the provided string (if not already present), and the resulting regular
         * expression is used to test the values.
         *
         * @return {?} A validator function that returns an error map with the
         * `pattern` property if the validation check fails, otherwise `null`.
         *
         */

      }, {
        key: "pattern",
        value: function pattern(_pattern) {
          if (!_pattern) return Validators.nullValidator;
          /** @type {?} */

          var regex;
          /** @type {?} */

          var regexStr;

          if (typeof _pattern === 'string') {
            regexStr = '';
            if (_pattern.charAt(0) !== '^') regexStr += '^';
            regexStr += _pattern;
            if (_pattern.charAt(_pattern.length - 1) !== '$') regexStr += '$';
            regex = new RegExp(regexStr);
          } else {
            regexStr = _pattern.toString();
            regex = _pattern;
          }

          return (
            /**
            * @param {?} control
            * @return {?}
            */
            function (control) {
              if (isEmptyInputValue(control.value)) {
                return null; // don't validate empty values to allow optional controls
              }
              /** @type {?} */


              var value = control.value;
              return regex.test(value) ? null : {
                'pattern': {
                  'requiredPattern': regexStr,
                  'actualValue': value
                }
              };
            }
          );
        }
        /**
         * \@description
         * Validator that performs no operation.
         *
         * @see `updateValueAndValidity()`
         *
         * @param {?} control
         * @return {?}
         */

      }, {
        key: "nullValidator",
        value: function nullValidator(control) {
          return null;
        }
        /**
         * @param {?} validators
         * @return {?}
         */

      }, {
        key: "compose",
        value: function compose(validators) {
          if (!validators) return null;
          /** @type {?} */

          var presentValidators =
          /** @type {?} */
          validators.filter(isPresent);
          if (presentValidators.length == 0) return null;
          return (
            /**
            * @param {?} control
            * @return {?}
            */
            function (control) {
              return _mergeErrors(_executeValidators(control, presentValidators));
            }
          );
        }
        /**
         * \@description
         * Compose multiple async validators into a single function that returns the union
         * of the individual error objects for the provided control.
         *
         * @see `updateValueAndValidity()`
         *
         * @param {?} validators
         * @return {?} A validator function that returns an error map with the
         * merged error objects of the async validators if the validation check fails, otherwise `null`.
         *
         */

      }, {
        key: "composeAsync",
        value: function composeAsync(validators) {
          if (!validators) return null;
          /** @type {?} */

          var presentValidators =
          /** @type {?} */
          validators.filter(isPresent);
          if (presentValidators.length == 0) return null;
          return (
            /**
            * @param {?} control
            * @return {?}
            */
            function (control) {
              /** @type {?} */
              var observables = _executeAsyncValidators(control, presentValidators).map(toObservable);

              return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["forkJoin"])(observables).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(_mergeErrors));
            }
          );
        }
      }]);

      return Validators;
    }();
    /**
     * @param {?} o
     * @return {?}
     */


    function isPresent(o) {
      return o != null;
    }
    /**
     * @param {?} r
     * @return {?}
     */


    function toObservable(r) {
      /** @type {?} */
      var obs = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵisPromise"])(r) ? Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["from"])(r) : r;

      if (!Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵisObservable"])(obs)) {
        throw new Error("Expected validator to return Promise or Observable.");
      }

      return obs;
    }
    /**
     * @param {?} control
     * @param {?} validators
     * @return {?}
     */


    function _executeValidators(control, validators) {
      return validators.map(
      /**
      * @param {?} v
      * @return {?}
      */
      function (v) {
        return v(control);
      });
    }
    /**
     * @param {?} control
     * @param {?} validators
     * @return {?}
     */


    function _executeAsyncValidators(control, validators) {
      return validators.map(
      /**
      * @param {?} v
      * @return {?}
      */
      function (v) {
        return v(control);
      });
    }
    /**
     * @param {?} arrayOfErrors
     * @return {?}
     */


    function _mergeErrors(arrayOfErrors) {
      /** @type {?} */
      var res = arrayOfErrors.reduce(
      /**
      * @param {?} res
      * @param {?} errors
      * @return {?}
      */
      function (res, errors) {
        return errors != null ? Object.assign({},
        /** @type {?} */
        res, errors) :
        /** @type {?} */
        res;
      }, {});
      return Object.keys(res).length === 0 ? null : res;
    }
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @license
     * Copyright Google Inc. All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */

    /**
     * @param {?} validator
     * @return {?}
     */


    function normalizeValidator(validator) {
      if (
      /** @type {?} */
      validator.validate) {
        return (
          /**
          * @param {?} c
          * @return {?}
          */
          function (c) {
            return (
              /** @type {?} */
              validator.validate(c)
            );
          }
        );
      } else {
        return (
          /** @type {?} */
          validator
        );
      }
    }
    /**
     * @param {?} validator
     * @return {?}
     */


    function normalizeAsyncValidator(validator) {
      if (
      /** @type {?} */
      validator.validate) {
        return (
          /**
          * @param {?} c
          * @return {?}
          */
          function (c) {
            return (
              /** @type {?} */
              validator.validate(c)
            );
          }
        );
      } else {
        return (
          /** @type {?} */
          validator
        );
      }
    }
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /** @type {?} */


    var NUMBER_VALUE_ACCESSOR = {
      provide: NG_VALUE_ACCESSOR,
      useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(
      /**
      * @return {?}
      */
      function () {
        return NumberValueAccessor;
      }),
      multi: true
    };
    /**
     * \@description
     * The `ControlValueAccessor` for writing a number value and listening to number input changes.
     * The value accessor is used by the `FormControlDirective`, `FormControlName`, and  `NgModel`
     * directives.
     *
     * \@usageNotes
     *
     * ### Using a number input with a reactive form.
     *
     * The following example shows how to use a number input with a reactive form.
     *
     * ```ts
     * const totalCountControl = new FormControl();
     * ```
     *
     * ```
     * <input type="number" [formControl]="totalCountControl">
     * ```
     *
     * \@ngModule ReactiveFormsModule
     * \@ngModule FormsModule
     * \@publicApi
     */

    var NumberValueAccessor =
    /*#__PURE__*/
    function () {
      /**
       * @param {?} _renderer
       * @param {?} _elementRef
       */
      function NumberValueAccessor(_renderer, _elementRef) {
        _classCallCheck(this, NumberValueAccessor);

        this._renderer = _renderer;
        this._elementRef = _elementRef;
        /**
         * \@description
         * The registered callback function called when a change or input event occurs on the input
         * element.
         */

        this.onChange =
        /**
        * @param {?} _
        * @return {?}
        */
        function (_) {};
        /**
         * \@description
         * The registered callback function called when a blur event occurs on the input element.
         */


        this.onTouched =
        /**
        * @return {?}
        */
        function () {};
      }
      /**
       * Sets the "value" property on the input element.
       *
       * @param {?} value The checked value
       * @return {?}
       */


      _createClass(NumberValueAccessor, [{
        key: "writeValue",
        value: function writeValue(value) {
          // The value needs to be normalized for IE9, otherwise it is set to 'null' when null

          /** @type {?} */
          var normalizedValue = value == null ? '' : value;

          this._renderer.setProperty(this._elementRef.nativeElement, 'value', normalizedValue);
        }
        /**
         * \@description
         * Registers a function called when the control value changes.
         *
         * @param {?} fn The callback function
         * @return {?}
         */

      }, {
        key: "registerOnChange",
        value: function registerOnChange(fn) {
          this.onChange =
          /**
          * @param {?} value
          * @return {?}
          */
          function (value) {
            fn(value == '' ? null : parseFloat(value));
          };
        }
        /**
         * \@description
         * Registers a function called when the control is touched.
         *
         * @param {?} fn The callback function
         * @return {?}
         */

      }, {
        key: "registerOnTouched",
        value: function registerOnTouched(fn) {
          this.onTouched = fn;
        }
        /**
         * Sets the "disabled" property on the input element.
         *
         * @param {?} isDisabled The disabled value
         * @return {?}
         */

      }, {
        key: "setDisabledState",
        value: function setDisabledState(isDisabled) {
          this._renderer.setProperty(this._elementRef.nativeElement, 'disabled', isDisabled);
        }
      }]);

      return NumberValueAccessor;
    }();

    NumberValueAccessor.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
      args: [{
        selector: 'input[type=number][formControlName],input[type=number][formControl],input[type=number][ngModel]',
        host: {
          '(change)': 'onChange($event.target.value)',
          '(input)': 'onChange($event.target.value)',
          '(blur)': 'onTouched()'
        },
        providers: [NUMBER_VALUE_ACCESSOR]
      }]
    }];
    /** @nocollapse */

    NumberValueAccessor.ctorParameters = function () {
      return [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
      }];
    };

    if (false) {}
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /** @type {?} */


    var RADIO_VALUE_ACCESSOR = {
      provide: NG_VALUE_ACCESSOR,
      useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(
      /**
      * @return {?}
      */
      function () {
        return RadioControlValueAccessor;
      }),
      multi: true
    };
    /**
     * \@description
     * Class used by Angular to track radio buttons. For internal use only.
     */

    var RadioControlRegistry =
    /*#__PURE__*/
    function () {
      function RadioControlRegistry() {
        _classCallCheck(this, RadioControlRegistry);

        this._accessors = [];
      }
      /**
       * \@description
       * Adds a control to the internal registry. For internal use only.
       * @param {?} control
       * @param {?} accessor
       * @return {?}
       */


      _createClass(RadioControlRegistry, [{
        key: "add",
        value: function add(control, accessor) {
          this._accessors.push([control, accessor]);
        }
        /**
         * \@description
         * Removes a control from the internal registry. For internal use only.
         * @param {?} accessor
         * @return {?}
         */

      }, {
        key: "remove",
        value: function remove(accessor) {
          for (var i = this._accessors.length - 1; i >= 0; --i) {
            if (this._accessors[i][1] === accessor) {
              this._accessors.splice(i, 1);

              return;
            }
          }
        }
        /**
         * \@description
         * Selects a radio button. For internal use only.
         * @param {?} accessor
         * @return {?}
         */

      }, {
        key: "select",
        value: function select(accessor) {
          var _this2 = this;

          this._accessors.forEach(
          /**
          * @param {?} c
          * @return {?}
          */
          function (c) {
            if (_this2._isSameGroup(c, accessor) && c[1] !== accessor) {
              c[1].fireUncheck(accessor.value);
            }
          });
        }
        /**
         * @private
         * @param {?} controlPair
         * @param {?} accessor
         * @return {?}
         */

      }, {
        key: "_isSameGroup",
        value: function _isSameGroup(controlPair, accessor) {
          if (!controlPair[0].control) return false;
          return controlPair[0]._parent === accessor._control._parent && controlPair[1].name === accessor.name;
        }
      }]);

      return RadioControlRegistry;
    }();

    RadioControlRegistry.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }];

    if (false) {}
    /**
     * \@description
     * The `ControlValueAccessor` for writing radio control values and listening to radio control
     * changes. The value accessor is used by the `FormControlDirective`, `FormControlName`, and
     * `NgModel` directives.
     *
     * \@usageNotes
     *
     * ### Using radio buttons with reactive form directives
     *
     * The follow example shows how to use radio buttons in a reactive form. When using radio buttons in
     * a reactive form, radio buttons in the same group should have the same `formControlName`.
     * Providing a `name` attribute is optional.
     *
     * {\@example forms/ts/reactiveRadioButtons/reactive_radio_button_example.ts region='Reactive'}
     *
     * \@ngModule ReactiveFormsModule
     * \@ngModule FormsModule
     * \@publicApi
     */


    var RadioControlValueAccessor =
    /*#__PURE__*/
    function () {
      /**
       * @param {?} _renderer
       * @param {?} _elementRef
       * @param {?} _registry
       * @param {?} _injector
       */
      function RadioControlValueAccessor(_renderer, _elementRef, _registry, _injector) {
        _classCallCheck(this, RadioControlValueAccessor);

        this._renderer = _renderer;
        this._elementRef = _elementRef;
        this._registry = _registry;
        this._injector = _injector;
        /**
         * \@description
         * The registered callback function called when a change event occurs on the input element.
         */

        this.onChange =
        /**
        * @return {?}
        */
        function () {};
        /**
         * \@description
         * The registered callback function called when a blur event occurs on the input element.
         */


        this.onTouched =
        /**
        * @return {?}
        */
        function () {};
      }
      /**
       * \@description
       * A lifecycle method called when the directive is initialized. For internal use only.
       * @return {?}
       */


      _createClass(RadioControlValueAccessor, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this._control = this._injector.get(NgControl);

          this._checkName();

          this._registry.add(this._control, this);
        }
        /**
         * \@description
         * Lifecycle method called before the directive's instance is destroyed. For internal use only.
         * @return {?}
         */

      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this._registry.remove(this);
        }
        /**
         * \@description
         * Sets the "checked" property value on the radio input element.
         *
         * @param {?} value The checked value
         * @return {?}
         */

      }, {
        key: "writeValue",
        value: function writeValue(value) {
          this._state = value === this.value;

          this._renderer.setProperty(this._elementRef.nativeElement, 'checked', this._state);
        }
        /**
         * \@description
         * Registers a function called when the control value changes.
         *
         * @param {?} fn The callback function
         * @return {?}
         */

      }, {
        key: "registerOnChange",
        value: function registerOnChange(fn) {
          var _this3 = this;

          this._fn = fn;

          this.onChange =
          /**
          * @return {?}
          */
          function () {
            fn(_this3.value);

            _this3._registry.select(_this3);
          };
        }
        /**
         * Sets the "value" on the radio input element and unchecks it.
         *
         * @param {?} value
         * @return {?}
         */

      }, {
        key: "fireUncheck",
        value: function fireUncheck(value) {
          this.writeValue(value);
        }
        /**
         * \@description
         * Registers a function called when the control is touched.
         *
         * @param {?} fn The callback function
         * @return {?}
         */

      }, {
        key: "registerOnTouched",
        value: function registerOnTouched(fn) {
          this.onTouched = fn;
        }
        /**
         * Sets the "disabled" property on the input element.
         *
         * @param {?} isDisabled The disabled value
         * @return {?}
         */

      }, {
        key: "setDisabledState",
        value: function setDisabledState(isDisabled) {
          this._renderer.setProperty(this._elementRef.nativeElement, 'disabled', isDisabled);
        }
        /**
         * @private
         * @return {?}
         */

      }, {
        key: "_checkName",
        value: function _checkName() {
          if (this.name && this.formControlName && this.name !== this.formControlName) {
            this._throwNameError();
          }

          if (!this.name && this.formControlName) this.name = this.formControlName;
        }
        /**
         * @private
         * @return {?}
         */

      }, {
        key: "_throwNameError",
        value: function _throwNameError() {
          throw new Error("\n      If you define both a name and a formControlName attribute on your radio button, their values\n      must match. Ex: <input type=\"radio\" formControlName=\"food\" name=\"food\">\n    ");
        }
      }]);

      return RadioControlValueAccessor;
    }();

    RadioControlValueAccessor.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
      args: [{
        selector: 'input[type=radio][formControlName],input[type=radio][formControl],input[type=radio][ngModel]',
        host: {
          '(change)': 'onChange()',
          '(blur)': 'onTouched()'
        },
        providers: [RADIO_VALUE_ACCESSOR]
      }]
    }];
    /** @nocollapse */

    RadioControlValueAccessor.ctorParameters = function () {
      return [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
      }, {
        type: RadioControlRegistry
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"]
      }];
    };

    RadioControlValueAccessor.propDecorators = {
      name: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      formControlName: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      value: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }]
    };

    if (false) {}
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /** @type {?} */


    var RANGE_VALUE_ACCESSOR = {
      provide: NG_VALUE_ACCESSOR,
      useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(
      /**
      * @return {?}
      */
      function () {
        return RangeValueAccessor;
      }),
      multi: true
    };
    /**
     * \@description
     * The `ControlValueAccessor` for writing a range value and listening to range input changes.
     * The value accessor is used by the `FormControlDirective`, `FormControlName`, and  `NgModel`
     * directives.
     *
     * \@usageNotes
     *
     * ### Using a range input with a reactive form
     *
     * The following example shows how to use a range input with a reactive form.
     *
     * ```ts
     * const ageControl = new FormControl();
     * ```
     *
     * ```
     * <input type="range" [formControl]="ageControl">
     * ```
     *
     * \@ngModule ReactiveFormsModule
     * \@ngModule FormsModule
     * \@publicApi
     */

    var RangeValueAccessor =
    /*#__PURE__*/
    function () {
      /**
       * @param {?} _renderer
       * @param {?} _elementRef
       */
      function RangeValueAccessor(_renderer, _elementRef) {
        _classCallCheck(this, RangeValueAccessor);

        this._renderer = _renderer;
        this._elementRef = _elementRef;
        /**
         * \@description
         * The registered callback function called when a change or input event occurs on the input
         * element.
         */

        this.onChange =
        /**
        * @param {?} _
        * @return {?}
        */
        function (_) {};
        /**
         * \@description
         * The registered callback function called when a blur event occurs on the input element.
         */


        this.onTouched =
        /**
        * @return {?}
        */
        function () {};
      }
      /**
       * Sets the "value" property on the input element.
       *
       * @param {?} value The checked value
       * @return {?}
       */


      _createClass(RangeValueAccessor, [{
        key: "writeValue",
        value: function writeValue(value) {
          this._renderer.setProperty(this._elementRef.nativeElement, 'value', parseFloat(value));
        }
        /**
         * \@description
         * Registers a function called when the control value changes.
         *
         * @param {?} fn The callback function
         * @return {?}
         */

      }, {
        key: "registerOnChange",
        value: function registerOnChange(fn) {
          this.onChange =
          /**
          * @param {?} value
          * @return {?}
          */
          function (value) {
            fn(value == '' ? null : parseFloat(value));
          };
        }
        /**
         * \@description
         * Registers a function called when the control is touched.
         *
         * @param {?} fn The callback function
         * @return {?}
         */

      }, {
        key: "registerOnTouched",
        value: function registerOnTouched(fn) {
          this.onTouched = fn;
        }
        /**
         * Sets the "disabled" property on the range input element.
         *
         * @param {?} isDisabled The disabled value
         * @return {?}
         */

      }, {
        key: "setDisabledState",
        value: function setDisabledState(isDisabled) {
          this._renderer.setProperty(this._elementRef.nativeElement, 'disabled', isDisabled);
        }
      }]);

      return RangeValueAccessor;
    }();

    RangeValueAccessor.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
      args: [{
        selector: 'input[type=range][formControlName],input[type=range][formControl],input[type=range][ngModel]',
        host: {
          '(change)': 'onChange($event.target.value)',
          '(input)': 'onChange($event.target.value)',
          '(blur)': 'onTouched()'
        },
        providers: [RANGE_VALUE_ACCESSOR]
      }]
    }];
    /** @nocollapse */

    RangeValueAccessor.ctorParameters = function () {
      return [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
      }];
    };

    if (false) {}
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @license
     * Copyright Google Inc. All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */

    /** @type {?} */


    var FormErrorExamples = {
      formControlName: "\n    <div [formGroup]=\"myGroup\">\n      <input formControlName=\"firstName\">\n    </div>\n\n    In your class:\n\n    this.myGroup = new FormGroup({\n       firstName: new FormControl()\n    });",
      formGroupName: "\n    <div [formGroup]=\"myGroup\">\n       <div formGroupName=\"person\">\n          <input formControlName=\"firstName\">\n       </div>\n    </div>\n\n    In your class:\n\n    this.myGroup = new FormGroup({\n       person: new FormGroup({ firstName: new FormControl() })\n    });",
      formArrayName: "\n    <div [formGroup]=\"myGroup\">\n      <div formArrayName=\"cities\">\n        <div *ngFor=\"let city of cityArray.controls; index as i\">\n          <input [formControlName]=\"i\">\n        </div>\n      </div>\n    </div>\n\n    In your class:\n\n    this.cityArray = new FormArray([new FormControl('SF')]);\n    this.myGroup = new FormGroup({\n      cities: this.cityArray\n    });",
      ngModelGroup: "\n    <form>\n       <div ngModelGroup=\"person\">\n          <input [(ngModel)]=\"person.name\" name=\"firstName\">\n       </div>\n    </form>",
      ngModelWithFormGroup: "\n    <div [formGroup]=\"myGroup\">\n       <input formControlName=\"firstName\">\n       <input [(ngModel)]=\"showMoreControls\" [ngModelOptions]=\"{standalone: true}\">\n    </div>\n  "
    };
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    var ReactiveErrors =
    /*#__PURE__*/
    function () {
      function ReactiveErrors() {
        _classCallCheck(this, ReactiveErrors);
      }

      _createClass(ReactiveErrors, null, [{
        key: "controlParentException",

        /**
         * @return {?}
         */
        value: function controlParentException() {
          throw new Error("formControlName must be used with a parent formGroup directive.  You'll want to add a formGroup\n       directive and pass it an existing FormGroup instance (you can create one in your class).\n\n      Example:\n\n      ".concat(FormErrorExamples.formControlName));
        }
        /**
         * @return {?}
         */

      }, {
        key: "ngModelGroupException",
        value: function ngModelGroupException() {
          throw new Error("formControlName cannot be used with an ngModelGroup parent. It is only compatible with parents\n       that also have a \"form\" prefix: formGroupName, formArrayName, or formGroup.\n\n       Option 1:  Update the parent to be formGroupName (reactive form strategy)\n\n        ".concat(FormErrorExamples.formGroupName, "\n\n        Option 2: Use ngModel instead of formControlName (template-driven strategy)\n\n        ").concat(FormErrorExamples.ngModelGroup));
        }
        /**
         * @return {?}
         */

      }, {
        key: "missingFormException",
        value: function missingFormException() {
          throw new Error("formGroup expects a FormGroup instance. Please pass one in.\n\n       Example:\n\n       ".concat(FormErrorExamples.formControlName));
        }
        /**
         * @return {?}
         */

      }, {
        key: "groupParentException",
        value: function groupParentException() {
          throw new Error("formGroupName must be used with a parent formGroup directive.  You'll want to add a formGroup\n      directive and pass it an existing FormGroup instance (you can create one in your class).\n\n      Example:\n\n      ".concat(FormErrorExamples.formGroupName));
        }
        /**
         * @return {?}
         */

      }, {
        key: "arrayParentException",
        value: function arrayParentException() {
          throw new Error("formArrayName must be used with a parent formGroup directive.  You'll want to add a formGroup\n       directive and pass it an existing FormGroup instance (you can create one in your class).\n\n        Example:\n\n        ".concat(FormErrorExamples.formArrayName));
        }
        /**
         * @return {?}
         */

      }, {
        key: "disabledAttrWarning",
        value: function disabledAttrWarning() {
          console.warn("\n      It looks like you're using the disabled attribute with a reactive form directive. If you set disabled to true\n      when you set up this control in your component class, the disabled attribute will actually be set in the DOM for\n      you. We recommend using this approach to avoid 'changed after checked' errors.\n       \n      Example: \n      form = new FormGroup({\n        first: new FormControl({value: 'Nancy', disabled: true}, Validators.required),\n        last: new FormControl('Drew', Validators.required)\n      });\n    ");
        }
        /**
         * @param {?} directiveName
         * @return {?}
         */

      }, {
        key: "ngModelWarning",
        value: function ngModelWarning(directiveName) {
          console.warn("\n    It looks like you're using ngModel on the same form field as ".concat(directiveName, ". \n    Support for using the ngModel input property and ngModelChange event with \n    reactive form directives has been deprecated in Angular v6 and will be removed \n    in Angular v7.\n    \n    For more information on this, see our API docs here:\n    https://angular.io/api/forms/").concat(directiveName === 'formControl' ? 'FormControlDirective' : 'FormControlName', "#use-with-ngmodel\n    "));
        }
      }]);

      return ReactiveErrors;
    }();
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /** @type {?} */


    var SELECT_VALUE_ACCESSOR = {
      provide: NG_VALUE_ACCESSOR,
      useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(
      /**
      * @return {?}
      */
      function () {
        return SelectControlValueAccessor;
      }),
      multi: true
    };
    /**
     * @param {?} id
     * @param {?} value
     * @return {?}
     */

    function _buildValueString(id, value) {
      if (id == null) return "".concat(value);
      if (value && typeof value === 'object') value = 'Object';
      return "".concat(id, ": ").concat(value).slice(0, 50);
    }
    /**
     * @param {?} valueString
     * @return {?}
     */


    function _extractId(valueString) {
      return valueString.split(':')[0];
    }
    /**
     * \@description
     * The `ControlValueAccessor` for writing select control values and listening to select control
     * changes. The value accessor is used by the `FormControlDirective`, `FormControlName`, and
     * `NgModel` directives.
     *
     * \@usageNotes
     *
     * ### Using select controls in a reactive form
     *
     * The following examples show how to use a select control in a reactive form.
     *
     * {\@example forms/ts/reactiveSelectControl/reactive_select_control_example.ts region='Component'}
     *
     * ### Using select controls in a template-driven form
     *
     * To use a select in a template-driven form, simply add an `ngModel` and a `name`
     * attribute to the main `<select>` tag.
     *
     * {\@example forms/ts/selectControl/select_control_example.ts region='Component'}
     *
     * ### Customizing option selection
     *
     * Angular uses object identity to select option. It's possible for the identities of items
     * to change while the data does not. This can happen, for example, if the items are produced
     * from an RPC to the server, and that RPC is re-run. Even if the data hasn't changed, the
     * second response will produce objects with different identities.
     *
     * To customize the default option comparison algorithm, `<select>` supports `compareWith` input.
     * `compareWith` takes a **function** which has two arguments: `option1` and `option2`.
     * If `compareWith` is given, Angular selects option by the return value of the function.
     *
     * ```ts
     * const selectedCountriesControl = new FormControl();
     * ```
     *
     * ```
     * <select [compareWith]="compareFn"  [formControl]="selectedCountriesControl">
     *     <option *ngFor="let country of countries" [ngValue]="country">
     *         {{country.name}}
     *     </option>
     * </select>
     *
     * compareFn(c1: Country, c2: Country): boolean {
     *     return c1 && c2 ? c1.id === c2.id : c1 === c2;
     * }
     * ```
     *
     * **Note:** We listen to the 'change' event because 'input' events aren't fired
     * for selects in Firefox and IE:
     * https://bugzilla.mozilla.org/show_bug.cgi?id=1024350
     * https://developer.microsoft.com/en-us/microsoft-edge/platform/issues/4660045/
     *
     * \@ngModule ReactiveFormsModule
     * \@ngModule FormsModule
     * \@publicApi
     */


    var SelectControlValueAccessor =
    /*#__PURE__*/
    function () {
      /**
       * @param {?} _renderer
       * @param {?} _elementRef
       */
      function SelectControlValueAccessor(_renderer, _elementRef) {
        _classCallCheck(this, SelectControlValueAccessor);

        this._renderer = _renderer;
        this._elementRef = _elementRef;
        /**
         * \@internal
         */

        this._optionMap = new Map();
        /**
         * \@internal
         */

        this._idCounter = 0;
        /**
         * \@description
         * The registered callback function called when a change event occurs on the input element.
         */

        this.onChange =
        /**
        * @param {?} _
        * @return {?}
        */
        function (_) {};
        /**
         * \@description
         * The registered callback function called when a blur event occurs on the input element.
         */


        this.onTouched =
        /**
        * @return {?}
        */
        function () {};

        this._compareWith = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵlooseIdentical"];
      }
      /**
       * \@description
       * Tracks the option comparison algorithm for tracking identities when
       * checking for changes.
       * @param {?} fn
       * @return {?}
       */


      _createClass(SelectControlValueAccessor, [{
        key: "writeValue",

        /**
         * Sets the "value" property on the input element. The "selectedIndex"
         * property is also set if an ID is provided on the option element.
         *
         * @param {?} value The checked value
         * @return {?}
         */
        value: function writeValue(value) {
          this.value = value;
          /** @type {?} */

          var id = this._getOptionId(value);

          if (id == null) {
            this._renderer.setProperty(this._elementRef.nativeElement, 'selectedIndex', -1);
          }
          /** @type {?} */


          var valueString = _buildValueString(id, value);

          this._renderer.setProperty(this._elementRef.nativeElement, 'value', valueString);
        }
        /**
         * \@description
         * Registers a function called when the control value changes.
         *
         * @param {?} fn The callback function
         * @return {?}
         */

      }, {
        key: "registerOnChange",
        value: function registerOnChange(fn) {
          var _this4 = this;

          this.onChange =
          /**
          * @param {?} valueString
          * @return {?}
          */
          function (valueString) {
            _this4.value = _this4._getOptionValue(valueString);
            fn(_this4.value);
          };
        }
        /**
         * \@description
         * Registers a function called when the control is touched.
         *
         * @param {?} fn The callback function
         * @return {?}
         */

      }, {
        key: "registerOnTouched",
        value: function registerOnTouched(fn) {
          this.onTouched = fn;
        }
        /**
         * Sets the "disabled" property on the select input element.
         *
         * @param {?} isDisabled The disabled value
         * @return {?}
         */

      }, {
        key: "setDisabledState",
        value: function setDisabledState(isDisabled) {
          this._renderer.setProperty(this._elementRef.nativeElement, 'disabled', isDisabled);
        }
        /**
         * \@internal
         * @return {?}
         */

      }, {
        key: "_registerOption",
        value: function _registerOption() {
          return (this._idCounter++).toString();
        }
        /**
         * \@internal
         * @param {?} value
         * @return {?}
         */

      }, {
        key: "_getOptionId",
        value: function _getOptionId(value) {
          for (var _i = 0, _Array$from = Array.from(this._optionMap.keys()); _i < _Array$from.length; _i++) {
            var id = _Array$from[_i];
            if (this._compareWith(this._optionMap.get(id), value)) return id;
          }

          return null;
        }
        /**
         * \@internal
         * @param {?} valueString
         * @return {?}
         */

      }, {
        key: "_getOptionValue",
        value: function _getOptionValue(valueString) {
          /** @type {?} */
          var id = _extractId(valueString);

          return this._optionMap.has(id) ? this._optionMap.get(id) : valueString;
        }
      }, {
        key: "compareWith",
        set: function set(fn) {
          if (typeof fn !== 'function') {
            throw new Error("compareWith must be a function, but received ".concat(JSON.stringify(fn)));
          }

          this._compareWith = fn;
        }
      }]);

      return SelectControlValueAccessor;
    }();

    SelectControlValueAccessor.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
      args: [{
        selector: 'select:not([multiple])[formControlName],select:not([multiple])[formControl],select:not([multiple])[ngModel]',
        host: {
          '(change)': 'onChange($event.target.value)',
          '(blur)': 'onTouched()'
        },
        providers: [SELECT_VALUE_ACCESSOR]
      }]
    }];
    /** @nocollapse */

    SelectControlValueAccessor.ctorParameters = function () {
      return [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
      }];
    };

    SelectControlValueAccessor.propDecorators = {
      compareWith: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }]
    };

    if (false) {}
    /**
     * \@description
     * Marks `<option>` as dynamic, so Angular can be notified when options change.
     *
     * @see `SelectControlValueAccessor`
     *
     * \@ngModule ReactiveFormsModule
     * \@ngModule FormsModule
     * \@publicApi
     */


    var NgSelectOption =
    /*#__PURE__*/
    function () {
      /**
       * @param {?} _element
       * @param {?} _renderer
       * @param {?} _select
       */
      function NgSelectOption(_element, _renderer, _select) {
        _classCallCheck(this, NgSelectOption);

        this._element = _element;
        this._renderer = _renderer;
        this._select = _select;
        if (this._select) this.id = this._select._registerOption();
      }
      /**
       * \@description
       * Tracks the value bound to the option element. Unlike the value binding,
       * ngValue supports binding to objects.
       * @param {?} value
       * @return {?}
       */


      _createClass(NgSelectOption, [{
        key: "_setElementValue",

        /**
         * \@internal
         * @param {?} value
         * @return {?}
         */
        value: function _setElementValue(value) {
          this._renderer.setProperty(this._element.nativeElement, 'value', value);
        }
        /**
         * \@description
         * Lifecycle method called before the directive's instance is destroyed. For internal use only.
         * @return {?}
         */

      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          if (this._select) {
            this._select._optionMap.delete(this.id);

            this._select.writeValue(this._select.value);
          }
        }
      }, {
        key: "ngValue",
        set: function set(value) {
          if (this._select == null) return;

          this._select._optionMap.set(this.id, value);

          this._setElementValue(_buildValueString(this.id, value));

          this._select.writeValue(this._select.value);
        }
        /**
         * \@description
         * Tracks simple string values bound to the option element.
         * For objects, use the `ngValue` input binding.
         * @param {?} value
         * @return {?}
         */

      }, {
        key: "value",
        set: function set(value) {
          this._setElementValue(value);

          if (this._select) this._select.writeValue(this._select.value);
        }
      }]);

      return NgSelectOption;
    }();

    NgSelectOption.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
      args: [{
        selector: 'option'
      }]
    }];
    /** @nocollapse */

    NgSelectOption.ctorParameters = function () {
      return [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"]
      }, {
        type: SelectControlValueAccessor,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Host"]
        }]
      }];
    };

    NgSelectOption.propDecorators = {
      ngValue: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
        args: ['ngValue']
      }],
      value: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
        args: ['value']
      }]
    };

    if (false) {}
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /** @type {?} */


    var SELECT_MULTIPLE_VALUE_ACCESSOR = {
      provide: NG_VALUE_ACCESSOR,
      useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(
      /**
      * @return {?}
      */
      function () {
        return SelectMultipleControlValueAccessor;
      }),
      multi: true
    };
    /**
     * @param {?} id
     * @param {?} value
     * @return {?}
     */

    function _buildValueString$1(id, value) {
      if (id == null) return "".concat(value);
      if (typeof value === 'string') value = "'".concat(value, "'");
      if (value && typeof value === 'object') value = 'Object';
      return "".concat(id, ": ").concat(value).slice(0, 50);
    }
    /**
     * @param {?} valueString
     * @return {?}
     */


    function _extractId$1(valueString) {
      return valueString.split(':')[0];
    }
    /**
     * Mock interface for HTML Options
     * @record
     */


    function HTMLOption() {}

    if (false) {}
    /**
     * Mock interface for HTMLCollection
     * @abstract
     */


    var HTMLCollection = function HTMLCollection() {
      _classCallCheck(this, HTMLCollection);
    };

    if (false) {}
    /**
     * \@description
     * The `ControlValueAccessor` for writing multi-select control values and listening to multi-select control
     * changes. The value accessor is used by the `FormControlDirective`, `FormControlName`, and `NgModel`
     * directives.
     *
     * @see `SelectControlValueAccessor`
     *
     * \@usageNotes
     *
     * ### Using a multi-select control
     *
     * The follow example shows you how to use a multi-select control with a reactive form.
     *
     * ```ts
     * const countryControl = new FormControl();
     * ```
     *
     * ```
     * <select multiple name="countries" [formControl]="countryControl">
     *   <option *ngFor="let country of countries" [ngValue]="country">
     *     {{ country.name }}
     *   </option>
     * </select>
     * ```
     *
     * ### Customizing option selection
     *
     * To customize the default option comparison algorithm, `<select>` supports `compareWith` input.
     * See the `SelectControlValueAccessor` for usage.
     *
     * \@ngModule ReactiveFormsModule
     * \@ngModule FormsModule
     * \@publicApi
     */


    var SelectMultipleControlValueAccessor =
    /*#__PURE__*/
    function () {
      /**
       * @param {?} _renderer
       * @param {?} _elementRef
       */
      function SelectMultipleControlValueAccessor(_renderer, _elementRef) {
        _classCallCheck(this, SelectMultipleControlValueAccessor);

        this._renderer = _renderer;
        this._elementRef = _elementRef;
        /**
         * \@internal
         */

        this._optionMap = new Map();
        /**
         * \@internal
         */

        this._idCounter = 0;
        /**
         * \@description
         * The registered callback function called when a change event occurs on the input element.
         */

        this.onChange =
        /**
        * @param {?} _
        * @return {?}
        */
        function (_) {};
        /**
         * \@description
         * The registered callback function called when a blur event occurs on the input element.
         */


        this.onTouched =
        /**
        * @return {?}
        */
        function () {};

        this._compareWith = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵlooseIdentical"];
      }
      /**
       * \@description
       * Tracks the option comparison algorithm for tracking identities when
       * checking for changes.
       * @param {?} fn
       * @return {?}
       */


      _createClass(SelectMultipleControlValueAccessor, [{
        key: "writeValue",

        /**
         * \@description
         * Sets the "value" property on one or of more
         * of the select's options.
         *
         * @param {?} value The value
         * @return {?}
         */
        value: function writeValue(value) {
          var _this5 = this;

          this.value = value;
          /** @type {?} */

          var optionSelectedStateSetter;

          if (Array.isArray(value)) {
            // convert values to ids

            /** @type {?} */
            var ids = value.map(
            /**
            * @param {?} v
            * @return {?}
            */
            function (v) {
              return _this5._getOptionId(v);
            });

            optionSelectedStateSetter =
            /**
            * @param {?} opt
            * @param {?} o
            * @return {?}
            */
            function optionSelectedStateSetter(opt, o) {
              opt._setSelected(ids.indexOf(o.toString()) > -1);
            };
          } else {
            optionSelectedStateSetter =
            /**
            * @param {?} opt
            * @param {?} o
            * @return {?}
            */
            function optionSelectedStateSetter(opt, o) {
              opt._setSelected(false);
            };
          }

          this._optionMap.forEach(optionSelectedStateSetter);
        }
        /**
         * \@description
         * Registers a function called when the control value changes
         * and writes an array of the selected options.
         *
         * @param {?} fn The callback function
         * @return {?}
         */

      }, {
        key: "registerOnChange",
        value: function registerOnChange(fn) {
          var _this6 = this;

          this.onChange =
          /**
          * @param {?} _
          * @return {?}
          */
          function (_) {
            /** @type {?} */
            var selected = [];

            if (_.hasOwnProperty('selectedOptions')) {
              /** @type {?} */
              var options = _.selectedOptions;

              for (var i = 0; i < options.length; i++) {
                /** @type {?} */
                var opt = options.item(i);
                /** @type {?} */

                var val = _this6._getOptionValue(opt.value);

                selected.push(val);
              }
            } // Degrade on IE
            else {
                /** @type {?} */
                var _options =
                /** @type {?} */
                _.options;

                for (var _i2 = 0; _i2 < _options.length; _i2++) {
                  /** @type {?} */
                  var _opt = _options.item(_i2);

                  if (_opt.selected) {
                    /** @type {?} */
                    var _val = _this6._getOptionValue(_opt.value);

                    selected.push(_val);
                  }
                }
              }

            _this6.value = selected;
            fn(selected);
          };
        }
        /**
         * \@description
         * Registers a function called when the control is touched.
         *
         * @param {?} fn The callback function
         * @return {?}
         */

      }, {
        key: "registerOnTouched",
        value: function registerOnTouched(fn) {
          this.onTouched = fn;
        }
        /**
         * Sets the "disabled" property on the select input element.
         *
         * @param {?} isDisabled The disabled value
         * @return {?}
         */

      }, {
        key: "setDisabledState",
        value: function setDisabledState(isDisabled) {
          this._renderer.setProperty(this._elementRef.nativeElement, 'disabled', isDisabled);
        }
        /**
         * \@internal
         * @param {?} value
         * @return {?}
         */

      }, {
        key: "_registerOption",
        value: function _registerOption(value) {
          /** @type {?} */
          var id = (this._idCounter++).toString();

          this._optionMap.set(id, value);

          return id;
        }
        /**
         * \@internal
         * @param {?} value
         * @return {?}
         */

      }, {
        key: "_getOptionId",
        value: function _getOptionId(value) {
          for (var _i3 = 0, _Array$from2 = Array.from(this._optionMap.keys()); _i3 < _Array$from2.length; _i3++) {
            var id = _Array$from2[_i3];
            if (this._compareWith(
            /** @type {?} */
            this._optionMap.get(id)._value, value)) return id;
          }

          return null;
        }
        /**
         * \@internal
         * @param {?} valueString
         * @return {?}
         */

      }, {
        key: "_getOptionValue",
        value: function _getOptionValue(valueString) {
          /** @type {?} */
          var id = _extractId$1(valueString);

          return this._optionMap.has(id) ?
          /** @type {?} */
          this._optionMap.get(id)._value : valueString;
        }
      }, {
        key: "compareWith",
        set: function set(fn) {
          if (typeof fn !== 'function') {
            throw new Error("compareWith must be a function, but received ".concat(JSON.stringify(fn)));
          }

          this._compareWith = fn;
        }
      }]);

      return SelectMultipleControlValueAccessor;
    }();

    SelectMultipleControlValueAccessor.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
      args: [{
        selector: 'select[multiple][formControlName],select[multiple][formControl],select[multiple][ngModel]',
        host: {
          '(change)': 'onChange($event.target)',
          '(blur)': 'onTouched()'
        },
        providers: [SELECT_MULTIPLE_VALUE_ACCESSOR]
      }]
    }];
    /** @nocollapse */

    SelectMultipleControlValueAccessor.ctorParameters = function () {
      return [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
      }];
    };

    SelectMultipleControlValueAccessor.propDecorators = {
      compareWith: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }]
    };

    if (false) {}
    /**
     * \@description
     * Marks `<option>` as dynamic, so Angular can be notified when options change.
     *
     * @see `SelectMultipleControlValueAccessor`
     *
     * \@ngModule ReactiveFormsModule
     * \@ngModule FormsModule
     * \@publicApi
     */


    var ɵNgSelectMultipleOption =
    /*#__PURE__*/
    function () {
      /**
       * @param {?} _element
       * @param {?} _renderer
       * @param {?} _select
       */
      function ɵNgSelectMultipleOption(_element, _renderer, _select) {
        _classCallCheck(this, ɵNgSelectMultipleOption);

        this._element = _element;
        this._renderer = _renderer;
        this._select = _select;

        if (this._select) {
          this.id = this._select._registerOption(this);
        }
      }
      /**
       * \@description
       * Tracks the value bound to the option element. Unlike the value binding,
       * ngValue supports binding to objects.
       * @param {?} value
       * @return {?}
       */


      _createClass(ɵNgSelectMultipleOption, [{
        key: "_setElementValue",

        /**
         * \@internal
         * @param {?} value
         * @return {?}
         */
        value: function _setElementValue(value) {
          this._renderer.setProperty(this._element.nativeElement, 'value', value);
        }
        /**
         * \@internal
         * @param {?} selected
         * @return {?}
         */

      }, {
        key: "_setSelected",
        value: function _setSelected(selected) {
          this._renderer.setProperty(this._element.nativeElement, 'selected', selected);
        }
        /**
         * \@description
         * Lifecycle method called before the directive's instance is destroyed. For internal use only.
         * @return {?}
         */

      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          if (this._select) {
            this._select._optionMap.delete(this.id);

            this._select.writeValue(this._select.value);
          }
        }
      }, {
        key: "ngValue",
        set: function set(value) {
          if (this._select == null) return;
          this._value = value;

          this._setElementValue(_buildValueString$1(this.id, value));

          this._select.writeValue(this._select.value);
        }
        /**
         * \@description
         * Tracks simple string values bound to the option element.
         * For objects, use the `ngValue` input binding.
         * @param {?} value
         * @return {?}
         */

      }, {
        key: "value",
        set: function set(value) {
          if (this._select) {
            this._value = value;

            this._setElementValue(_buildValueString$1(this.id, value));

            this._select.writeValue(this._select.value);
          } else {
            this._setElementValue(value);
          }
        }
      }]);

      return ɵNgSelectMultipleOption;
    }();

    ɵNgSelectMultipleOption.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
      args: [{
        selector: 'option'
      }]
    }];
    /** @nocollapse */

    ɵNgSelectMultipleOption.ctorParameters = function () {
      return [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"]
      }, {
        type: SelectMultipleControlValueAccessor,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Host"]
        }]
      }];
    };

    ɵNgSelectMultipleOption.propDecorators = {
      ngValue: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
        args: ['ngValue']
      }],
      value: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
        args: ['value']
      }]
    };

    if (false) {}
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @param {?} name
     * @param {?} parent
     * @return {?}
     */


    function controlPath(name, parent) {
      return [].concat(_toConsumableArray(
      /** @type {?} */
      parent.path), [name]);
    }
    /**
     * @param {?} control
     * @param {?} dir
     * @return {?}
     */


    function setUpControl(control, dir) {
      if (!control) _throwError(dir, 'Cannot find control with');
      if (!dir.valueAccessor) _throwError(dir, 'No value accessor for form control with');
      control.validator = Validators.compose([
      /** @type {?} */
      control.validator, dir.validator]);
      control.asyncValidator = Validators.composeAsync([
      /** @type {?} */
      control.asyncValidator, dir.asyncValidator]);

      /** @type {?} */
      dir.valueAccessor.writeValue(control.value);
      setUpViewChangePipeline(control, dir);
      setUpModelChangePipeline(control, dir);
      setUpBlurPipeline(control, dir);

      if (
      /** @type {?} */
      dir.valueAccessor.setDisabledState) {
        control.registerOnDisabledChange(
        /**
        * @param {?} isDisabled
        * @return {?}
        */
        function (isDisabled) {
          /** @type {?} */

          /** @type {?} */
          dir.valueAccessor.setDisabledState(isDisabled);
        });
      } // re-run validation when validator binding changes, e.g. minlength=3 -> minlength=4


      dir._rawValidators.forEach(
      /**
      * @param {?} validator
      * @return {?}
      */
      function (validator) {
        if (
        /** @type {?} */
        validator.registerOnValidatorChange)
        /** @type {?} */

        /** @type {?} */
        validator.registerOnValidatorChange(
        /**
        * @return {?}
        */
        function () {
          return control.updateValueAndValidity();
        });
      });

      dir._rawAsyncValidators.forEach(
      /**
      * @param {?} validator
      * @return {?}
      */
      function (validator) {
        if (
        /** @type {?} */
        validator.registerOnValidatorChange)
        /** @type {?} */

        /** @type {?} */
        validator.registerOnValidatorChange(
        /**
        * @return {?}
        */
        function () {
          return control.updateValueAndValidity();
        });
      });
    }
    /**
     * @param {?} control
     * @param {?} dir
     * @return {?}
     */


    function cleanUpControl(control, dir) {
      /** @type {?} */
      dir.valueAccessor.registerOnChange(
      /**
      * @return {?}
      */
      function () {
        return _noControlError(dir);
      });

      /** @type {?} */
      dir.valueAccessor.registerOnTouched(
      /**
      * @return {?}
      */
      function () {
        return _noControlError(dir);
      });

      dir._rawValidators.forEach(
      /**
      * @param {?} validator
      * @return {?}
      */
      function (validator) {
        if (validator.registerOnValidatorChange) {
          validator.registerOnValidatorChange(null);
        }
      });

      dir._rawAsyncValidators.forEach(
      /**
      * @param {?} validator
      * @return {?}
      */
      function (validator) {
        if (validator.registerOnValidatorChange) {
          validator.registerOnValidatorChange(null);
        }
      });

      if (control) control._clearChangeFns();
    }
    /**
     * @param {?} control
     * @param {?} dir
     * @return {?}
     */


    function setUpViewChangePipeline(control, dir) {
      /** @type {?} */
      dir.valueAccessor.registerOnChange(
      /**
      * @param {?} newValue
      * @return {?}
      */
      function (newValue) {
        control._pendingValue = newValue;
        control._pendingChange = true;
        control._pendingDirty = true;
        if (control.updateOn === 'change') updateControl(control, dir);
      });
    }
    /**
     * @param {?} control
     * @param {?} dir
     * @return {?}
     */


    function setUpBlurPipeline(control, dir) {
      /** @type {?} */
      dir.valueAccessor.registerOnTouched(
      /**
      * @return {?}
      */
      function () {
        control._pendingTouched = true;
        if (control.updateOn === 'blur' && control._pendingChange) updateControl(control, dir);
        if (control.updateOn !== 'submit') control.markAsTouched();
      });
    }
    /**
     * @param {?} control
     * @param {?} dir
     * @return {?}
     */


    function updateControl(control, dir) {
      if (control._pendingDirty) control.markAsDirty();
      control.setValue(control._pendingValue, {
        emitModelToViewChange: false
      });
      dir.viewToModelUpdate(control._pendingValue);
      control._pendingChange = false;
    }
    /**
     * @param {?} control
     * @param {?} dir
     * @return {?}
     */


    function setUpModelChangePipeline(control, dir) {
      control.registerOnChange(
      /**
      * @param {?} newValue
      * @param {?} emitModelEvent
      * @return {?}
      */
      function (newValue, emitModelEvent) {
        // control -> view

        /** @type {?} */
        dir.valueAccessor.writeValue(newValue); // control -> ngModel

        if (emitModelEvent) dir.viewToModelUpdate(newValue);
      });
    }
    /**
     * @param {?} control
     * @param {?} dir
     * @return {?}
     */


    function setUpFormContainer(control, dir) {
      if (control == null) _throwError(dir, 'Cannot find control with');
      control.validator = Validators.compose([control.validator, dir.validator]);
      control.asyncValidator = Validators.composeAsync([control.asyncValidator, dir.asyncValidator]);
    }
    /**
     * @param {?} dir
     * @return {?}
     */


    function _noControlError(dir) {
      return _throwError(dir, 'There is no FormControl instance attached to form control element with');
    }
    /**
     * @param {?} dir
     * @param {?} message
     * @return {?}
     */


    function _throwError(dir, message) {
      /** @type {?} */
      var messageEnd;

      if (
      /** @type {?} */
      dir.path.length > 1) {
        messageEnd = "path: '".concat(
        /** @type {?} */
        dir.path.join(' -> '), "'");
      } else if (
      /** @type {?} */
      dir.path[0]) {
        messageEnd = "name: '".concat(dir.path, "'");
      } else {
        messageEnd = 'unspecified name attribute';
      }

      throw new Error("".concat(message, " ").concat(messageEnd));
    }
    /**
     * @param {?} validators
     * @return {?}
     */


    function composeValidators(validators) {
      return validators != null ? Validators.compose(validators.map(normalizeValidator)) : null;
    }
    /**
     * @param {?} validators
     * @return {?}
     */


    function composeAsyncValidators(validators) {
      return validators != null ? Validators.composeAsync(validators.map(normalizeAsyncValidator)) : null;
    }
    /**
     * @param {?} changes
     * @param {?} viewModel
     * @return {?}
     */


    function isPropertyUpdated(changes, viewModel) {
      if (!changes.hasOwnProperty('model')) return false;
      /** @type {?} */

      var change = changes['model'];
      if (change.isFirstChange()) return true;
      return !Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵlooseIdentical"])(viewModel, change.currentValue);
    }
    /** @type {?} */


    var BUILTIN_ACCESSORS = [CheckboxControlValueAccessor, RangeValueAccessor, NumberValueAccessor, SelectControlValueAccessor, SelectMultipleControlValueAccessor, RadioControlValueAccessor];
    /**
     * @param {?} valueAccessor
     * @return {?}
     */

    function isBuiltInAccessor(valueAccessor) {
      return BUILTIN_ACCESSORS.some(
      /**
      * @param {?} a
      * @return {?}
      */
      function (a) {
        return valueAccessor.constructor === a;
      });
    }
    /**
     * @param {?} form
     * @param {?} directives
     * @return {?}
     */


    function syncPendingControls(form, directives) {
      form._syncPendingControls();

      directives.forEach(
      /**
      * @param {?} dir
      * @return {?}
      */
      function (dir) {
        /** @type {?} */
        var control =
        /** @type {?} */
        dir.control;

        if (control.updateOn === 'submit' && control._pendingChange) {
          dir.viewToModelUpdate(control._pendingValue);
          control._pendingChange = false;
        }
      });
    } // TODO: vsavkin remove it once https://github.com/angular/angular/issues/3011 is implemented

    /**
     * @param {?} dir
     * @param {?} valueAccessors
     * @return {?}
     */


    function selectValueAccessor(dir, valueAccessors) {
      if (!valueAccessors) return null;
      if (!Array.isArray(valueAccessors)) _throwError(dir, 'Value accessor was not provided as an array for form control with');
      /** @type {?} */

      var defaultAccessor = undefined;
      /** @type {?} */

      var builtinAccessor = undefined;
      /** @type {?} */

      var customAccessor = undefined;
      valueAccessors.forEach(
      /**
      * @param {?} v
      * @return {?}
      */
      function (v) {
        if (v.constructor === DefaultValueAccessor) {
          defaultAccessor = v;
        } else if (isBuiltInAccessor(v)) {
          if (builtinAccessor) _throwError(dir, 'More than one built-in value accessor matches form control with');
          builtinAccessor = v;
        } else {
          if (customAccessor) _throwError(dir, 'More than one custom value accessor matches form control with');
          customAccessor = v;
        }
      });
      if (customAccessor) return customAccessor;
      if (builtinAccessor) return builtinAccessor;
      if (defaultAccessor) return defaultAccessor;

      _throwError(dir, 'No valid value accessor for form control with');

      return null;
    }
    /**
     * @template T
     * @param {?} list
     * @param {?} el
     * @return {?}
     */


    function removeDir(list, el) {
      /** @type {?} */
      var index = list.indexOf(el);
      if (index > -1) list.splice(index, 1);
    } // TODO(kara): remove after deprecation period

    /**
     * @param {?} name
     * @param {?} type
     * @param {?} instance
     * @param {?} warningConfig
     * @return {?}
     */


    function _ngModelWarning(name, type, instance, warningConfig) {
      if (!Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["isDevMode"])() || warningConfig === 'never') return;

      if ((warningConfig === null || warningConfig === 'once') && !type._ngModelWarningSentOnce || warningConfig === 'always' && !instance._ngModelWarningSent) {
        ReactiveErrors.ngModelWarning(name);
        type._ngModelWarningSentOnce = true;
        instance._ngModelWarningSent = true;
      }
    }
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * Reports that a FormControl is valid, meaning that no errors exist in the input value.
     *
     * @see `status`
     * @type {?}
     */


    var VALID = 'VALID';
    /**
     * Reports that a FormControl is invalid, meaning that an error exists in the input value.
     *
     * @see `status`
     * @type {?}
     */

    var INVALID = 'INVALID';
    /**
     * Reports that a FormControl is pending, meaning that that async validation is occurring and
     * errors are not yet available for the input value.
     *
     * @see `markAsPending`
     * @see `status`
     * @type {?}
     */

    var PENDING = 'PENDING';
    /**
     * Reports that a FormControl is disabled, meaning that the control is exempt from ancestor
     * calculations of validity or value.
     *
     * @see `markAsDisabled`
     * @see `status`
     * @type {?}
     */

    var DISABLED = 'DISABLED';
    /**
     * @param {?} control
     * @param {?} path
     * @param {?} delimiter
     * @return {?}
     */

    function _find(control, path, delimiter) {
      if (path == null) return null;

      if (!(path instanceof Array)) {
        path =
        /** @type {?} */
        path.split(delimiter);
      }

      if (path instanceof Array && path.length === 0) return null;
      return (
        /** @type {?} */
        path.reduce(
        /**
        * @param {?} v
        * @param {?} name
        * @return {?}
        */
        function (v, name) {
          if (v instanceof FormGroup) {
            return v.controls.hasOwnProperty(
            /** @type {?} */
            name) ? v.controls[name] : null;
          }

          if (v instanceof FormArray) {
            return v.at(
            /** @type {?} */
            name) || null;
          }

          return null;
        }, control)
      );
    }
    /**
     * @param {?=} validatorOrOpts
     * @return {?}
     */


    function coerceToValidator(validatorOrOpts) {
      /** @type {?} */
      var validator =
      /** @type {?} */
      isOptionsObj(validatorOrOpts) ?
      /** @type {?} */
      validatorOrOpts.validators : validatorOrOpts;
      return Array.isArray(validator) ? composeValidators(validator) : validator || null;
    }
    /**
     * @param {?=} asyncValidator
     * @param {?=} validatorOrOpts
     * @return {?}
     */


    function coerceToAsyncValidator(asyncValidator, validatorOrOpts) {
      /** @type {?} */
      var origAsyncValidator =
      /** @type {?} */
      isOptionsObj(validatorOrOpts) ?
      /** @type {?} */
      validatorOrOpts.asyncValidators : asyncValidator;
      return Array.isArray(origAsyncValidator) ? composeAsyncValidators(origAsyncValidator) : origAsyncValidator || null;
    }
    /**
     * Interface for options provided to an `AbstractControl`.
     *
     * \@publicApi
     * @record
     */


    function AbstractControlOptions() {}

    if (false) {}
    /**
     * @param {?=} validatorOrOpts
     * @return {?}
     */


    function isOptionsObj(validatorOrOpts) {
      return validatorOrOpts != null && !Array.isArray(validatorOrOpts) && typeof validatorOrOpts === 'object';
    }
    /**
     * This is the base class for `FormControl`, `FormGroup`, and `FormArray`.
     *
     * It provides some of the shared behavior that all controls and groups of controls have, like
     * running validators, calculating status, and resetting state. It also defines the properties
     * that are shared between all sub-classes, like `value`, `valid`, and `dirty`. It shouldn't be
     * instantiated directly.
     *
     * @see [Forms Guide](/guide/forms)
     * @see [Reactive Forms Guide](/guide/reactive-forms)
     * @see [Dynamic Forms Guide](/guide/dynamic-form)
     *
     * \@publicApi
     * @abstract
     */


    var AbstractControl =
    /*#__PURE__*/
    function () {
      /**
       * Initialize the AbstractControl instance.
       *
       * @param {?} validator The function that determines the synchronous validity of this control.
       * @param {?} asyncValidator The function that determines the asynchronous validity of this
       * control.
       */
      function AbstractControl(validator, asyncValidator) {
        _classCallCheck(this, AbstractControl);

        this.validator = validator;
        this.asyncValidator = asyncValidator;
        /**
         * \@internal
         */

        this._onCollectionChange =
        /**
        * @return {?}
        */
        function () {};
        /**
         * A control is `pristine` if the user has not yet changed
         * the value in the UI.
         *
         * @return True if the user has not yet changed the value in the UI; compare `dirty`.
         * Programmatic changes to a control's value do not mark it dirty.
         */


        this.pristine = true;
        /**
         * True if the control is marked as `touched`.
         *
         * A control is marked `touched` once the user has triggered
         * a `blur` event on it.
         */

        this.touched = false;
        /**
         * \@internal
         */

        this._onDisabledChange = [];
      }
      /**
       * The parent control.
       * @return {?}
       */


      _createClass(AbstractControl, [{
        key: "setValidators",

        /**
         * Sets the synchronous validators that are active on this control.  Calling
         * this overwrites any existing sync validators.
         *
         * When you add or remove a validator at run time, you must call
         * `updateValueAndValidity()` for the new validation to take effect.
         *
         * @param {?} newValidator
         * @return {?}
         */
        value: function setValidators(newValidator) {
          this.validator = coerceToValidator(newValidator);
        }
        /**
         * Sets the async validators that are active on this control. Calling this
         * overwrites any existing async validators.
         *
         * When you add or remove a validator at run time, you must call
         * `updateValueAndValidity()` for the new validation to take effect.
         *
         * @param {?} newValidator
         * @return {?}
         */

      }, {
        key: "setAsyncValidators",
        value: function setAsyncValidators(newValidator) {
          this.asyncValidator = coerceToAsyncValidator(newValidator);
        }
        /**
         * Empties out the sync validator list.
         *
         * When you add or remove a validator at run time, you must call
         * `updateValueAndValidity()` for the new validation to take effect.
         *
         * @return {?}
         */

      }, {
        key: "clearValidators",
        value: function clearValidators() {
          this.validator = null;
        }
        /**
         * Empties out the async validator list.
         *
         * When you add or remove a validator at run time, you must call
         * `updateValueAndValidity()` for the new validation to take effect.
         *
         * @return {?}
         */

      }, {
        key: "clearAsyncValidators",
        value: function clearAsyncValidators() {
          this.asyncValidator = null;
        }
        /**
         * Marks the control as `touched`. A control is touched by focus and
         * blur events that do not change the value.
         *
         * @see `markAsUntouched()` / `markAsDirty()` / `markAsPristine()`
         *
         * @param {?=} opts Configuration options that determine how the control propagates changes
         * and emits events events after marking is applied.
         * * `onlySelf`: When true, mark only this control. When false or not supplied,
         * marks all direct ancestors. Default is false.
         * @return {?}
         */

      }, {
        key: "markAsTouched",
        value: function markAsTouched() {
          var opts = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

          /** @type {?} */
          this.touched = true;

          if (this._parent && !opts.onlySelf) {
            this._parent.markAsTouched(opts);
          }
        }
        /**
         * Marks the control and all its descendant controls as `touched`.
         * @see `markAsTouched()`
         * @return {?}
         */

      }, {
        key: "markAllAsTouched",
        value: function markAllAsTouched() {
          this.markAsTouched({
            onlySelf: true
          });

          this._forEachChild(
          /**
          * @param {?} control
          * @return {?}
          */
          function (control) {
            return control.markAllAsTouched();
          });
        }
        /**
         * Marks the control as `untouched`.
         *
         * If the control has any children, also marks all children as `untouched`
         * and recalculates the `touched` status of all parent controls.
         *
         * @see `markAsTouched()` / `markAsDirty()` / `markAsPristine()`
         *
         * @param {?=} opts Configuration options that determine how the control propagates changes
         * and emits events after the marking is applied.
         * * `onlySelf`: When true, mark only this control. When false or not supplied,
         * marks all direct ancestors. Default is false.
         * @return {?}
         */

      }, {
        key: "markAsUntouched",
        value: function markAsUntouched() {
          var opts = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

          /** @type {?} */
          this.touched = false;
          this._pendingTouched = false;

          this._forEachChild(
          /**
          * @param {?} control
          * @return {?}
          */
          function (control) {
            control.markAsUntouched({
              onlySelf: true
            });
          });

          if (this._parent && !opts.onlySelf) {
            this._parent._updateTouched(opts);
          }
        }
        /**
         * Marks the control as `dirty`. A control becomes dirty when
         * the control's value is changed through the UI; compare `markAsTouched`.
         *
         * @see `markAsTouched()` / `markAsUntouched()` / `markAsPristine()`
         *
         * @param {?=} opts Configuration options that determine how the control propagates changes
         * and emits events after marking is applied.
         * * `onlySelf`: When true, mark only this control. When false or not supplied,
         * marks all direct ancestors. Default is false.
         * @return {?}
         */

      }, {
        key: "markAsDirty",
        value: function markAsDirty() {
          var opts = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

          /** @type {?} */
          this.pristine = false;

          if (this._parent && !opts.onlySelf) {
            this._parent.markAsDirty(opts);
          }
        }
        /**
         * Marks the control as `pristine`.
         *
         * If the control has any children, marks all children as `pristine`,
         * and recalculates the `pristine` status of all parent
         * controls.
         *
         * @see `markAsTouched()` / `markAsUntouched()` / `markAsDirty()`
         *
         * @param {?=} opts Configuration options that determine how the control emits events after
         * marking is applied.
         * * `onlySelf`: When true, mark only this control. When false or not supplied,
         * marks all direct ancestors. Default is false..
         * @return {?}
         */

      }, {
        key: "markAsPristine",
        value: function markAsPristine() {
          var opts = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

          /** @type {?} */
          this.pristine = true;
          this._pendingDirty = false;

          this._forEachChild(
          /**
          * @param {?} control
          * @return {?}
          */
          function (control) {
            control.markAsPristine({
              onlySelf: true
            });
          });

          if (this._parent && !opts.onlySelf) {
            this._parent._updatePristine(opts);
          }
        }
        /**
         * Marks the control as `pending`.
         *
         * A control is pending while the control performs async validation.
         *
         * @see {\@link AbstractControl.status}
         *
         * @param {?=} opts Configuration options that determine how the control propagates changes and
         * emits events after marking is applied.
         * * `onlySelf`: When true, mark only this control. When false or not supplied,
         * marks all direct ancestors. Default is false..
         * * `emitEvent`: When true or not supplied (the default), the `statusChanges`
         * observable emits an event with the latest status the control is marked pending.
         * When false, no events are emitted.
         *
         * @return {?}
         */

      }, {
        key: "markAsPending",
        value: function markAsPending() {
          var opts = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

          /** @type {?} */
          this.status = PENDING;

          if (opts.emitEvent !== false) {
            /** @type {?} */
            this.statusChanges.emit(this.status);
          }

          if (this._parent && !opts.onlySelf) {
            this._parent.markAsPending(opts);
          }
        }
        /**
         * Disables the control. This means the control is exempt from validation checks and
         * excluded from the aggregate value of any parent. Its status is `DISABLED`.
         *
         * If the control has children, all children are also disabled.
         *
         * @see {\@link AbstractControl.status}
         *
         * @param {?=} opts Configuration options that determine how the control propagates
         * changes and emits events after the control is disabled.
         * * `onlySelf`: When true, mark only this control. When false or not supplied,
         * marks all direct ancestors. Default is false..
         * * `emitEvent`: When true or not supplied (the default), both the `statusChanges` and
         * `valueChanges`
         * observables emit events with the latest status and value when the control is disabled.
         * When false, no events are emitted.
         * @return {?}
         */

      }, {
        key: "disable",
        value: function disable() {
          var opts = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

          // If parent has been marked artificially dirty we don't want to re-calculate the
          // parent's dirtiness based on the children.

          /** @type {?} */
          var skipPristineCheck = this._parentMarkedDirty(opts.onlySelf);

          /** @type {?} */
          this.status = DISABLED;

          /** @type {?} */
          this.errors = null;

          this._forEachChild(
          /**
          * @param {?} control
          * @return {?}
          */
          function (control) {
            control.disable(Object.assign({}, opts, {
              onlySelf: true
            }));
          });

          this._updateValue();

          if (opts.emitEvent !== false) {
            /** @type {?} */
            this.valueChanges.emit(this.value);

            /** @type {?} */
            this.statusChanges.emit(this.status);
          }

          this._updateAncestors(Object.assign({}, opts, {
            skipPristineCheck: skipPristineCheck
          }));

          this._onDisabledChange.forEach(
          /**
          * @param {?} changeFn
          * @return {?}
          */
          function (changeFn) {
            return changeFn(true);
          });
        }
        /**
         * Enables the control. This means the control is included in validation checks and
         * the aggregate value of its parent. Its status recalculates based on its value and
         * its validators.
         *
         * By default, if the control has children, all children are enabled.
         *
         * @see {\@link AbstractControl.status}
         *
         * @param {?=} opts Configure options that control how the control propagates changes and
         * emits events when marked as untouched
         * * `onlySelf`: When true, mark only this control. When false or not supplied,
         * marks all direct ancestors. Default is false..
         * * `emitEvent`: When true or not supplied (the default), both the `statusChanges` and
         * `valueChanges`
         * observables emit events with the latest status and value when the control is enabled.
         * When false, no events are emitted.
         * @return {?}
         */

      }, {
        key: "enable",
        value: function enable() {
          var opts = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

          // If parent has been marked artificially dirty we don't want to re-calculate the
          // parent's dirtiness based on the children.

          /** @type {?} */
          var skipPristineCheck = this._parentMarkedDirty(opts.onlySelf);

          /** @type {?} */
          this.status = VALID;

          this._forEachChild(
          /**
          * @param {?} control
          * @return {?}
          */
          function (control) {
            control.enable(Object.assign({}, opts, {
              onlySelf: true
            }));
          });

          this.updateValueAndValidity({
            onlySelf: true,
            emitEvent: opts.emitEvent
          });

          this._updateAncestors(Object.assign({}, opts, {
            skipPristineCheck: skipPristineCheck
          }));

          this._onDisabledChange.forEach(
          /**
          * @param {?} changeFn
          * @return {?}
          */
          function (changeFn) {
            return changeFn(false);
          });
        }
        /**
         * @private
         * @param {?} opts
         * @return {?}
         */

      }, {
        key: "_updateAncestors",
        value: function _updateAncestors(opts) {
          if (this._parent && !opts.onlySelf) {
            this._parent.updateValueAndValidity(opts);

            if (!opts.skipPristineCheck) {
              this._parent._updatePristine();
            }

            this._parent._updateTouched();
          }
        }
        /**
         * @param {?} parent Sets the parent of the control
         * @return {?}
         */

      }, {
        key: "setParent",
        value: function setParent(parent) {
          this._parent = parent;
        }
        /**
         * Recalculates the value and validation status of the control.
         *
         * By default, it also updates the value and validity of its ancestors.
         *
         * @param {?=} opts Configuration options determine how the control propagates changes and emits events
         * after updates and validity checks are applied.
         * * `onlySelf`: When true, only update this control. When false or not supplied,
         * update all direct ancestors. Default is false..
         * * `emitEvent`: When true or not supplied (the default), both the `statusChanges` and
         * `valueChanges`
         * observables emit events with the latest status and value when the control is updated.
         * When false, no events are emitted.
         * @return {?}
         */

      }, {
        key: "updateValueAndValidity",
        value: function updateValueAndValidity() {
          var opts = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

          this._setInitialStatus();

          this._updateValue();

          if (this.enabled) {
            this._cancelExistingSubscription();

            /** @type {?} */
            this.errors = this._runValidator();

            /** @type {?} */
            this.status = this._calculateStatus();

            if (this.status === VALID || this.status === PENDING) {
              this._runAsyncValidator(opts.emitEvent);
            }
          }

          if (opts.emitEvent !== false) {
            /** @type {?} */
            this.valueChanges.emit(this.value);

            /** @type {?} */
            this.statusChanges.emit(this.status);
          }

          if (this._parent && !opts.onlySelf) {
            this._parent.updateValueAndValidity(opts);
          }
        }
        /**
         * \@internal
         * @param {?=} opts
         * @return {?}
         */

      }, {
        key: "_updateTreeValidity",
        value: function _updateTreeValidity() {
          var opts = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {
            emitEvent: true
          };

          this._forEachChild(
          /**
          * @param {?} ctrl
          * @return {?}
          */
          function (ctrl) {
            return ctrl._updateTreeValidity(opts);
          });

          this.updateValueAndValidity({
            onlySelf: true,
            emitEvent: opts.emitEvent
          });
        }
        /**
         * @private
         * @return {?}
         */

      }, {
        key: "_setInitialStatus",
        value: function _setInitialStatus() {
          /** @type {?} */
          this.status = this._allControlsDisabled() ? DISABLED : VALID;
        }
        /**
         * @private
         * @return {?}
         */

      }, {
        key: "_runValidator",
        value: function _runValidator() {
          return this.validator ? this.validator(this) : null;
        }
        /**
         * @private
         * @param {?=} emitEvent
         * @return {?}
         */

      }, {
        key: "_runAsyncValidator",
        value: function _runAsyncValidator(emitEvent) {
          var _this7 = this;

          if (this.asyncValidator) {
            /** @type {?} */
            this.status = PENDING;
            /** @type {?} */

            var obs = toObservable(this.asyncValidator(this));
            this._asyncValidationSubscription = obs.subscribe(
            /**
            * @param {?} errors
            * @return {?}
            */
            function (errors) {
              return _this7.setErrors(errors, {
                emitEvent: emitEvent
              });
            });
          }
        }
        /**
         * @private
         * @return {?}
         */

      }, {
        key: "_cancelExistingSubscription",
        value: function _cancelExistingSubscription() {
          if (this._asyncValidationSubscription) {
            this._asyncValidationSubscription.unsubscribe();
          }
        }
        /**
         * Sets errors on a form control when running validations manually, rather than automatically.
         *
         * Calling `setErrors` also updates the validity of the parent control.
         *
         * \@usageNotes
         * ### Manually set the errors for a control
         *
         * ```
         * const login = new FormControl('someLogin');
         * login.setErrors({
         *   notUnique: true
         * });
         *
         * expect(login.valid).toEqual(false);
         * expect(login.errors).toEqual({ notUnique: true });
         *
         * login.setValue('someOtherLogin');
         *
         * expect(login.valid).toEqual(true);
         * ```
         * @param {?} errors
         * @param {?=} opts
         * @return {?}
         */

      }, {
        key: "setErrors",
        value: function setErrors(errors) {
          var opts = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

          /** @type {?} */
          this.errors = errors;

          this._updateControlsErrors(opts.emitEvent !== false);
        }
        /**
         * Retrieves a child control given the control's name or path.
         *
         * \@usageNotes
         * ### Retrieve a nested control
         *
         * For example, to get a `name` control nested within a `person` sub-group:
         *
         * * `this.form.get('person.name');`
         *
         * -OR-
         *
         * * `this.form.get(['person', 'name']);`
         * @param {?} path A dot-delimited string or array of string/number values that define the path to the
         * control.
         *
         * @return {?}
         */

      }, {
        key: "get",
        value: function get(path) {
          return _find(this, path, '.');
        }
        /**
         * \@description
         * Reports error data for the control with the given path.
         *
         * \@usageNotes
         * For example, for the following `FormGroup`:
         *
         * ```
         * form = new FormGroup({
         *   address: new FormGroup({ street: new FormControl() })
         * });
         * ```
         *
         * The path to the 'street' control from the root form would be 'address' -> 'street'.
         *
         * It can be provided to this method in one of two formats:
         *
         * 1. An array of string control names, e.g. `['address', 'street']`
         * 1. A period-delimited list of control names in one string, e.g. `'address.street'`
         *
         * @param {?} errorCode The code of the error to check
         * @param {?=} path A list of control names that designates how to move from the current control
         * to the control that should be queried for errors.
         *
         * @return {?} error data for that particular error. If the control or error is not present,
         * null is returned.
         */

      }, {
        key: "getError",
        value: function getError(errorCode, path) {
          /** @type {?} */
          var control = path ? this.get(path) : this;
          return control && control.errors ? control.errors[errorCode] : null;
        }
        /**
         * \@description
         * Reports whether the control with the given path has the error specified.
         *
         * \@usageNotes
         * For example, for the following `FormGroup`:
         *
         * ```
         * form = new FormGroup({
         *   address: new FormGroup({ street: new FormControl() })
         * });
         * ```
         *
         * The path to the 'street' control from the root form would be 'address' -> 'street'.
         *
         * It can be provided to this method in one of two formats:
         *
         * 1. An array of string control names, e.g. `['address', 'street']`
         * 1. A period-delimited list of control names in one string, e.g. `'address.street'`
         *
         * If no path is given, this method checks for the error on the current control.
         *
         * @param {?} errorCode The code of the error to check
         * @param {?=} path A list of control names that designates how to move from the current control
         * to the control that should be queried for errors.
         *
         * @return {?} whether the given error is present in the control at the given path.
         *
         * If the control is not present, false is returned.
         */

      }, {
        key: "hasError",
        value: function hasError(errorCode, path) {
          return !!this.getError(errorCode, path);
        }
        /**
         * Retrieves the top-level ancestor of this control.
         * @return {?}
         */

      }, {
        key: "_updateControlsErrors",

        /**
         * \@internal
         * @param {?} emitEvent
         * @return {?}
         */
        value: function _updateControlsErrors(emitEvent) {
          /** @type {?} */
          this.status = this._calculateStatus();

          if (emitEvent) {
            /** @type {?} */
            this.statusChanges.emit(this.status);
          }

          if (this._parent) {
            this._parent._updateControlsErrors(emitEvent);
          }
        }
        /**
         * \@internal
         * @return {?}
         */

      }, {
        key: "_initObservables",
        value: function _initObservables() {
          /** @type {?} */
          this.valueChanges = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();

          /** @type {?} */
          this.statusChanges = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        }
        /**
         * @private
         * @return {?}
         */

      }, {
        key: "_calculateStatus",
        value: function _calculateStatus() {
          if (this._allControlsDisabled()) return DISABLED;
          if (this.errors) return INVALID;
          if (this._anyControlsHaveStatus(PENDING)) return PENDING;
          if (this._anyControlsHaveStatus(INVALID)) return INVALID;
          return VALID;
        }
        /**
         * \@internal
         * @param {?} status
         * @return {?}
         */

      }, {
        key: "_anyControlsHaveStatus",
        value: function _anyControlsHaveStatus(status) {
          return this._anyControls(
          /**
          * @param {?} control
          * @return {?}
          */
          function (control) {
            return control.status === status;
          });
        }
        /**
         * \@internal
         * @return {?}
         */

      }, {
        key: "_anyControlsDirty",
        value: function _anyControlsDirty() {
          return this._anyControls(
          /**
          * @param {?} control
          * @return {?}
          */
          function (control) {
            return control.dirty;
          });
        }
        /**
         * \@internal
         * @return {?}
         */

      }, {
        key: "_anyControlsTouched",
        value: function _anyControlsTouched() {
          return this._anyControls(
          /**
          * @param {?} control
          * @return {?}
          */
          function (control) {
            return control.touched;
          });
        }
        /**
         * \@internal
         * @param {?=} opts
         * @return {?}
         */

      }, {
        key: "_updatePristine",
        value: function _updatePristine() {
          var opts = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

          /** @type {?} */
          this.pristine = !this._anyControlsDirty();

          if (this._parent && !opts.onlySelf) {
            this._parent._updatePristine(opts);
          }
        }
        /**
         * \@internal
         * @param {?=} opts
         * @return {?}
         */

      }, {
        key: "_updateTouched",
        value: function _updateTouched() {
          var opts = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

          /** @type {?} */
          this.touched = this._anyControlsTouched();

          if (this._parent && !opts.onlySelf) {
            this._parent._updateTouched(opts);
          }
        }
        /**
         * \@internal
         * @param {?} formState
         * @return {?}
         */

      }, {
        key: "_isBoxedValue",
        value: function _isBoxedValue(formState) {
          return typeof formState === 'object' && formState !== null && Object.keys(formState).length === 2 && 'value' in formState && 'disabled' in formState;
        }
        /**
         * \@internal
         * @param {?} fn
         * @return {?}
         */

      }, {
        key: "_registerOnCollectionChange",
        value: function _registerOnCollectionChange(fn) {
          this._onCollectionChange = fn;
        }
        /**
         * \@internal
         * @param {?=} opts
         * @return {?}
         */

      }, {
        key: "_setUpdateStrategy",
        value: function _setUpdateStrategy(opts) {
          if (isOptionsObj(opts) &&
          /** @type {?} */
          opts.updateOn != null) {
            this._updateOn =
            /** @type {?} */

            /** @type {?} */
            opts.updateOn;
          }
        }
        /**
         * Check to see if parent has been marked artificially dirty.
         *
         * \@internal
         * @private
         * @param {?=} onlySelf
         * @return {?}
         */

      }, {
        key: "_parentMarkedDirty",
        value: function _parentMarkedDirty(onlySelf) {
          /** @type {?} */
          var parentDirty = this._parent && this._parent.dirty;
          return !onlySelf && parentDirty && !this._parent._anyControlsDirty();
        }
      }, {
        key: "parent",
        get: function get() {
          return this._parent;
        }
        /**
         * A control is `valid` when its `status` is `VALID`.
         *
         * @see {\@link AbstractControl.status}
         *
         * @return {?} True if the control has passed all of its validation tests,
         * false otherwise.
         */

      }, {
        key: "valid",
        get: function get() {
          return this.status === VALID;
        }
        /**
         * A control is `invalid` when its `status` is `INVALID`.
         *
         * @see {\@link AbstractControl.status}
         *
         * @return {?} True if this control has failed one or more of its validation checks,
         * false otherwise.
         */

      }, {
        key: "invalid",
        get: function get() {
          return this.status === INVALID;
        }
        /**
         * A control is `pending` when its `status` is `PENDING`.
         *
         * @see {\@link AbstractControl.status}
         *
         * @return {?} True if this control is in the process of conducting a validation check,
         * false otherwise.
         */

      }, {
        key: "pending",
        get: function get() {
          return this.status == PENDING;
        }
        /**
         * A control is `disabled` when its `status` is `DISABLED`.
         *
         * Disabled controls are exempt from validation checks and
         * are not included in the aggregate value of their ancestor
         * controls.
         *
         * @see {\@link AbstractControl.status}
         *
         * @return {?} True if the control is disabled, false otherwise.
         */

      }, {
        key: "disabled",
        get: function get() {
          return this.status === DISABLED;
        }
        /**
         * A control is `enabled` as long as its `status` is not `DISABLED`.
         *
         * @see {\@link AbstractControl.status}
         *
         * @return {?} True if the control has any status other than 'DISABLED',
         * false if the status is 'DISABLED'.
         *
         */

      }, {
        key: "enabled",
        get: function get() {
          return this.status !== DISABLED;
        }
        /**
         * A control is `dirty` if the user has changed the value
         * in the UI.
         *
         * @return {?} True if the user has changed the value of this control in the UI; compare `pristine`.
         * Programmatic changes to a control's value do not mark it dirty.
         */

      }, {
        key: "dirty",
        get: function get() {
          return !this.pristine;
        }
        /**
         * True if the control has not been marked as touched
         *
         * A control is `untouched` if the user has not yet triggered
         * a `blur` event on it.
         * @return {?}
         */

      }, {
        key: "untouched",
        get: function get() {
          return !this.touched;
        }
        /**
         * Reports the update strategy of the `AbstractControl` (meaning
         * the event on which the control updates itself).
         * Possible values: `'change'` | `'blur'` | `'submit'`
         * Default value: `'change'`
         * @return {?}
         */

      }, {
        key: "updateOn",
        get: function get() {
          return this._updateOn ? this._updateOn : this.parent ? this.parent.updateOn : 'change';
        }
      }, {
        key: "root",
        get: function get() {
          /** @type {?} */
          var x = this;

          while (x._parent) {
            x = x._parent;
          }

          return x;
        }
      }]);

      return AbstractControl;
    }();

    if (false) {}
    /**
     * Tracks the value and validation status of an individual form control.
     *
     * This is one of the three fundamental building blocks of Angular forms, along with
     * `FormGroup` and `FormArray`. It extends the `AbstractControl` class that
     * implements most of the base functionality for accessing the value, validation status,
     * user interactions and events.
     *
     * @see `AbstractControl`
     * @see [Reactive Forms Guide](guide/reactive-forms)
     * @see [Usage Notes](#usage-notes)
     *
     * \@usageNotes
     *
     * ### Initializing Form Controls
     *
     * Instantiate a `FormControl`, with an initial value.
     *
     * ```ts
     * const control = new FormControl('some value');
     * console.log(control.value);     // 'some value'
     * ```
     *
     * The following example initializes the control with a form state object. The `value`
     * and `disabled` keys are required in this case.
     *
     * ```ts
     * const control = new FormControl({ value: 'n/a', disabled: true });
     * console.log(control.value);     // 'n/a'
     * console.log(control.status);    // 'DISABLED'
     * ```
     *
     * The following example initializes the control with a sync validator.
     *
     * ```ts
     * const control = new FormControl('', Validators.required);
     * console.log(control.value);      // ''
     * console.log(control.status);     // 'INVALID'
     * ```
     *
     * The following example initializes the control using an options object.
     *
     * ```ts
     * const control = new FormControl('', {
     *    validators: Validators.required,
     *    asyncValidators: myAsyncValidator
     * });
     * ```
     *
     * ### Configure the control to update on a blur event
     *
     * Set the `updateOn` option to `'blur'` to update on the blur `event`.
     *
     * ```ts
     * const control = new FormControl('', { updateOn: 'blur' });
     * ```
     *
     * ### Configure the control to update on a submit event
     *
     * Set the `updateOn` option to `'submit'` to update on a submit `event`.
     *
     * ```ts
     * const control = new FormControl('', { updateOn: 'submit' });
     * ```
     *
     * ### Reset the control back to an initial value
     *
     * You reset to a specific form state by passing through a standalone
     * value or a form state object that contains both a value and a disabled state
     * (these are the only two properties that cannot be calculated).
     *
     * ```ts
     * const control = new FormControl('Nancy');
     *
     * console.log(control.value); // 'Nancy'
     *
     * control.reset('Drew');
     *
     * console.log(control.value); // 'Drew'
     * ```
     *
     * ### Reset the control back to an initial value and disabled
     *
     * ```
     * const control = new FormControl('Nancy');
     *
     * console.log(control.value); // 'Nancy'
     * console.log(control.status); // 'VALID'
     *
     * control.reset({ value: 'Drew', disabled: true });
     *
     * console.log(control.value); // 'Drew'
     * console.log(control.status); // 'DISABLED'
     * ```
     *
     * \@publicApi
     */


    var FormControl =
    /*#__PURE__*/
    function (_AbstractControl) {
      _inherits(FormControl, _AbstractControl);

      /**
       * Creates a new `FormControl` instance.
       *
       * @param {?=} formState Initializes the control with an initial value,
       * or an object that defines the initial value and disabled state.
       *
       * @param {?=} validatorOrOpts A synchronous validator function, or an array of
       * such functions, or an `AbstractControlOptions` object that contains validation functions
       * and a validation trigger.
       *
       * @param {?=} asyncValidator A single async validator or array of async validator functions
       *
       */
      function FormControl() {
        var _this8;

        var formState = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
        var validatorOrOpts = arguments.length > 1 ? arguments[1] : undefined;
        var asyncValidator = arguments.length > 2 ? arguments[2] : undefined;

        _classCallCheck(this, FormControl);

        _this8 = _possibleConstructorReturn(this, _getPrototypeOf(FormControl).call(this, coerceToValidator(validatorOrOpts), coerceToAsyncValidator(asyncValidator, validatorOrOpts)));
        /**
         * \@internal
         */

        _this8._onChange = [];

        _this8._applyFormState(formState);

        _this8._setUpdateStrategy(validatorOrOpts);

        _this8.updateValueAndValidity({
          onlySelf: true,
          emitEvent: false
        });

        _this8._initObservables();

        return _this8;
      }
      /**
       * Sets a new value for the form control.
       *
       * @param {?} value The new value for the control.
       * @param {?=} options Configuration options that determine how the control propagates changes
       * and emits events when the value changes.
       * The configuration options are passed to the {\@link AbstractControl#updateValueAndValidity
       * updateValueAndValidity} method.
       *
       * * `onlySelf`: When true, each change only affects this control, and not its parent. Default is
       * false.
       * * `emitEvent`: When true or not supplied (the default), both the `statusChanges` and
       * `valueChanges`
       * observables emit events with the latest status and value when the control value is updated.
       * When false, no events are emitted.
       * * `emitModelToViewChange`: When true or not supplied  (the default), each change triggers an
       * `onChange` event to
       * update the view.
       * * `emitViewToModelChange`: When true or not supplied (the default), each change triggers an
       * `ngModelChange`
       * event to update the model.
       *
       * @return {?}
       */


      _createClass(FormControl, [{
        key: "setValue",
        value: function setValue(value) {
          var _this9 = this;

          var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

          /** @type {?} */
          this.value = this._pendingValue = value;

          if (this._onChange.length && options.emitModelToViewChange !== false) {
            this._onChange.forEach(
            /**
            * @param {?} changeFn
            * @return {?}
            */
            function (changeFn) {
              return changeFn(_this9.value, options.emitViewToModelChange !== false);
            });
          }

          this.updateValueAndValidity(options);
        }
        /**
         * Patches the value of a control.
         *
         * This function is functionally the same as {\@link FormControl#setValue setValue} at this level.
         * It exists for symmetry with {\@link FormGroup#patchValue patchValue} on `FormGroups` and
         * `FormArrays`, where it does behave differently.
         *
         * @see `setValue` for options
         * @param {?} value
         * @param {?=} options
         * @return {?}
         */

      }, {
        key: "patchValue",
        value: function patchValue(value) {
          var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
          this.setValue(value, options);
        }
        /**
         * Resets the form control, marking it `pristine` and `untouched`, and setting
         * the value to null.
         *
         * @param {?=} formState Resets the control with an initial value,
         * or an object that defines the initial value and disabled state.
         *
         * @param {?=} options Configuration options that determine how the control propagates changes
         * and emits events after the value changes.
         *
         * * `onlySelf`: When true, each change only affects this control, and not its parent. Default is
         * false.
         * * `emitEvent`: When true or not supplied (the default), both the `statusChanges` and
         * `valueChanges`
         * observables emit events with the latest status and value when the control is reset.
         * When false, no events are emitted.
         *
         * @return {?}
         */

      }, {
        key: "reset",
        value: function reset() {
          var formState = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
          var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

          this._applyFormState(formState);

          this.markAsPristine(options);
          this.markAsUntouched(options);
          this.setValue(this.value, options);
          this._pendingChange = false;
        }
        /**
         * \@internal
         * @return {?}
         */

      }, {
        key: "_updateValue",
        value: function _updateValue() {}
        /**
         * \@internal
         * @param {?} condition
         * @return {?}
         */

      }, {
        key: "_anyControls",
        value: function _anyControls(condition) {
          return false;
        }
        /**
         * \@internal
         * @return {?}
         */

      }, {
        key: "_allControlsDisabled",
        value: function _allControlsDisabled() {
          return this.disabled;
        }
        /**
         * Register a listener for change events.
         *
         * @param {?} fn The method that is called when the value changes
         * @return {?}
         */

      }, {
        key: "registerOnChange",
        value: function registerOnChange(fn) {
          this._onChange.push(fn);
        }
        /**
         * \@internal
         * @return {?}
         */

      }, {
        key: "_clearChangeFns",
        value: function _clearChangeFns() {
          this._onChange = [];
          this._onDisabledChange = [];

          this._onCollectionChange =
          /**
          * @return {?}
          */
          function () {};
        }
        /**
         * Register a listener for disabled events.
         *
         * @param {?} fn The method that is called when the disabled status changes.
         * @return {?}
         */

      }, {
        key: "registerOnDisabledChange",
        value: function registerOnDisabledChange(fn) {
          this._onDisabledChange.push(fn);
        }
        /**
         * \@internal
         * @param {?} cb
         * @return {?}
         */

      }, {
        key: "_forEachChild",
        value: function _forEachChild(cb) {}
        /**
         * \@internal
         * @return {?}
         */

      }, {
        key: "_syncPendingControls",
        value: function _syncPendingControls() {
          if (this.updateOn === 'submit') {
            if (this._pendingDirty) this.markAsDirty();
            if (this._pendingTouched) this.markAsTouched();

            if (this._pendingChange) {
              this.setValue(this._pendingValue, {
                onlySelf: true,
                emitModelToViewChange: false
              });
              return true;
            }
          }

          return false;
        }
        /**
         * @private
         * @param {?} formState
         * @return {?}
         */

      }, {
        key: "_applyFormState",
        value: function _applyFormState(formState) {
          if (this._isBoxedValue(formState)) {
            /** @type {?} */
            this.value = this._pendingValue = formState.value;
            formState.disabled ? this.disable({
              onlySelf: true,
              emitEvent: false
            }) : this.enable({
              onlySelf: true,
              emitEvent: false
            });
          } else {
            /** @type {?} */
            this.value = this._pendingValue = formState;
          }
        }
      }]);

      return FormControl;
    }(AbstractControl);

    if (false) {}
    /**
     * Tracks the value and validity state of a group of `FormControl` instances.
     *
     * A `FormGroup` aggregates the values of each child `FormControl` into one object,
     * with each control name as the key.  It calculates its status by reducing the status values
     * of its children. For example, if one of the controls in a group is invalid, the entire
     * group becomes invalid.
     *
     * `FormGroup` is one of the three fundamental building blocks used to define forms in Angular,
     * along with `FormControl` and `FormArray`.
     *
     * When instantiating a `FormGroup`, pass in a collection of child controls as the first
     * argument. The key for each child registers the name for the control.
     *
     * \@usageNotes
     *
     * ### Create a form group with 2 controls
     *
     * ```
     * const form = new FormGroup({
     *   first: new FormControl('Nancy', Validators.minLength(2)),
     *   last: new FormControl('Drew'),
     * });
     *
     * console.log(form.value);   // {first: 'Nancy', last; 'Drew'}
     * console.log(form.status);  // 'VALID'
     * ```
     *
     * ### Create a form group with a group-level validator
     *
     * You include group-level validators as the second arg, or group-level async
     * validators as the third arg. These come in handy when you want to perform validation
     * that considers the value of more than one child control.
     *
     * ```
     * const form = new FormGroup({
     *   password: new FormControl('', Validators.minLength(2)),
     *   passwordConfirm: new FormControl('', Validators.minLength(2)),
     * }, passwordMatchValidator);
     *
     *
     * function passwordMatchValidator(g: FormGroup) {
     *    return g.get('password').value === g.get('passwordConfirm').value
     *       ? null : {'mismatch': true};
     * }
     * ```
     *
     * Like `FormControl` instances, you choose to pass in
     * validators and async validators as part of an options object.
     *
     * ```
     * const form = new FormGroup({
     *   password: new FormControl('')
     *   passwordConfirm: new FormControl('')
     * }, { validators: passwordMatchValidator, asyncValidators: otherValidator });
     * ```
     *
     * ### Set the updateOn property for all controls in a form group
     *
     * The options object is used to set a default value for each child
     * control's `updateOn` property. If you set `updateOn` to `'blur'` at the
     * group level, all child controls default to 'blur', unless the child
     * has explicitly specified a different `updateOn` value.
     *
     * ```ts
     * const c = new FormGroup({
     *   one: new FormControl()
     * }, { updateOn: 'blur' });
     * ```
     *
     * \@publicApi
     */


    var FormGroup =
    /*#__PURE__*/
    function (_AbstractControl2) {
      _inherits(FormGroup, _AbstractControl2);

      /**
       * Creates a new `FormGroup` instance.
       *
       * @param {?} controls A collection of child controls. The key for each child is the name
       * under which it is registered.
       *
       * @param {?=} validatorOrOpts A synchronous validator function, or an array of
       * such functions, or an `AbstractControlOptions` object that contains validation functions
       * and a validation trigger.
       *
       * @param {?=} asyncValidator A single async validator or array of async validator functions
       *
       */
      function FormGroup(controls, validatorOrOpts, asyncValidator) {
        var _this10;

        _classCallCheck(this, FormGroup);

        _this10 = _possibleConstructorReturn(this, _getPrototypeOf(FormGroup).call(this, coerceToValidator(validatorOrOpts), coerceToAsyncValidator(asyncValidator, validatorOrOpts)));
        _this10.controls = controls;

        _this10._initObservables();

        _this10._setUpdateStrategy(validatorOrOpts);

        _this10._setUpControls();

        _this10.updateValueAndValidity({
          onlySelf: true,
          emitEvent: false
        });

        return _this10;
      }
      /**
       * Registers a control with the group's list of controls.
       *
       * This method does not update the value or validity of the control.
       * Use {\@link FormGroup#addControl addControl} instead.
       *
       * @param {?} name The control name to register in the collection
       * @param {?} control Provides the control for the given name
       * @return {?}
       */


      _createClass(FormGroup, [{
        key: "registerControl",
        value: function registerControl(name, control) {
          if (this.controls[name]) return this.controls[name];
          this.controls[name] = control;
          control.setParent(this);

          control._registerOnCollectionChange(this._onCollectionChange);

          return control;
        }
        /**
         * Add a control to this group.
         *
         * This method also updates the value and validity of the control.
         *
         * @param {?} name The control name to add to the collection
         * @param {?} control Provides the control for the given name
         * @return {?}
         */

      }, {
        key: "addControl",
        value: function addControl(name, control) {
          this.registerControl(name, control);
          this.updateValueAndValidity();

          this._onCollectionChange();
        }
        /**
         * Remove a control from this group.
         *
         * @param {?} name The control name to remove from the collection
         * @return {?}
         */

      }, {
        key: "removeControl",
        value: function removeControl(name) {
          if (this.controls[name]) this.controls[name]._registerOnCollectionChange(
          /**
          * @return {?}
          */
          function () {});
          delete this.controls[name];
          this.updateValueAndValidity();

          this._onCollectionChange();
        }
        /**
         * Replace an existing control.
         *
         * @param {?} name The control name to replace in the collection
         * @param {?} control Provides the control for the given name
         * @return {?}
         */

      }, {
        key: "setControl",
        value: function setControl(name, control) {
          if (this.controls[name]) this.controls[name]._registerOnCollectionChange(
          /**
          * @return {?}
          */
          function () {});
          delete this.controls[name];
          if (control) this.registerControl(name, control);
          this.updateValueAndValidity();

          this._onCollectionChange();
        }
        /**
         * Check whether there is an enabled control with the given name in the group.
         *
         * Reports false for disabled controls. If you'd like to check for existence in the group
         * only, use {\@link AbstractControl#get get} instead.
         *
         * @param {?} controlName The control name to check for existence in the collection
         *
         * @return {?} false for disabled controls, true otherwise.
         */

      }, {
        key: "contains",
        value: function contains(controlName) {
          return this.controls.hasOwnProperty(controlName) && this.controls[controlName].enabled;
        }
        /**
         * Sets the value of the `FormGroup`. It accepts an object that matches
         * the structure of the group, with control names as keys.
         *
         * \@usageNotes
         * ### Set the complete value for the form group
         *
         * ```
         * const form = new FormGroup({
         *   first: new FormControl(),
         *   last: new FormControl()
         * });
         *
         * console.log(form.value);   // {first: null, last: null}
         *
         * form.setValue({first: 'Nancy', last: 'Drew'});
         * console.log(form.value);   // {first: 'Nancy', last: 'Drew'}
         * ```
         *
         * @throws When strict checks fail, such as setting the value of a control
         * that doesn't exist or if you exclude a value of a control that does exist.
         *
         * @param {?} value The new value for the control that matches the structure of the group.
         * @param {?=} options Configuration options that determine how the control propagates changes
         * and emits events after the value changes.
         * The configuration options are passed to the {\@link AbstractControl#updateValueAndValidity
         * updateValueAndValidity} method.
         *
         * * `onlySelf`: When true, each change only affects this control, and not its parent. Default is
         * false.
         * * `emitEvent`: When true or not supplied (the default), both the `statusChanges` and
         * `valueChanges`
         * observables emit events with the latest status and value when the control value is updated.
         * When false, no events are emitted.
         * @return {?}
         */

      }, {
        key: "setValue",
        value: function setValue(value) {
          var _this11 = this;

          var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

          this._checkAllValuesPresent(value);

          Object.keys(value).forEach(
          /**
          * @param {?} name
          * @return {?}
          */
          function (name) {
            _this11._throwIfControlMissing(name);

            _this11.controls[name].setValue(value[name], {
              onlySelf: true,
              emitEvent: options.emitEvent
            });
          });
          this.updateValueAndValidity(options);
        }
        /**
         * Patches the value of the `FormGroup`. It accepts an object with control
         * names as keys, and does its best to match the values to the correct controls
         * in the group.
         *
         * It accepts both super-sets and sub-sets of the group without throwing an error.
         *
         * \@usageNotes
         * ### Patch the value for a form group
         *
         * ```
         * const form = new FormGroup({
         *    first: new FormControl(),
         *    last: new FormControl()
         * });
         * console.log(form.value);   // {first: null, last: null}
         *
         * form.patchValue({first: 'Nancy'});
         * console.log(form.value);   // {first: 'Nancy', last: null}
         * ```
         *
         * @param {?} value The object that matches the structure of the group.
         * @param {?=} options Configuration options that determine how the control propagates changes and
         * emits events after the value is patched.
         * * `onlySelf`: When true, each change only affects this control and not its parent. Default is
         * true.
         * * `emitEvent`: When true or not supplied (the default), both the `statusChanges` and
         * `valueChanges`
         * observables emit events with the latest status and value when the control value is updated.
         * When false, no events are emitted.
         * The configuration options are passed to the {\@link AbstractControl#updateValueAndValidity
         * updateValueAndValidity} method.
         * @return {?}
         */

      }, {
        key: "patchValue",
        value: function patchValue(value) {
          var _this12 = this;

          var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
          Object.keys(value).forEach(
          /**
          * @param {?} name
          * @return {?}
          */
          function (name) {
            if (_this12.controls[name]) {
              _this12.controls[name].patchValue(value[name], {
                onlySelf: true,
                emitEvent: options.emitEvent
              });
            }
          });
          this.updateValueAndValidity(options);
        }
        /**
         * Resets the `FormGroup`, marks all descendants are marked `pristine` and `untouched`, and
         * the value of all descendants to null.
         *
         * You reset to a specific form state by passing in a map of states
         * that matches the structure of your form, with control names as keys. The state
         * is a standalone value or a form state object with both a value and a disabled
         * status.
         *
         * \@usageNotes
         *
         * ### Reset the form group values
         *
         * ```ts
         * const form = new FormGroup({
         *   first: new FormControl('first name'),
         *   last: new FormControl('last name')
         * });
         *
         * console.log(form.value);  // {first: 'first name', last: 'last name'}
         *
         * form.reset({ first: 'name', last: 'last name' });
         *
         * console.log(form.value);  // {first: 'name', last: 'last name'}
         * ```
         *
         * ### Reset the form group values and disabled status
         *
         * ```
         * const form = new FormGroup({
         *   first: new FormControl('first name'),
         *   last: new FormControl('last name')
         * });
         *
         * form.reset({
         *   first: {value: 'name', disabled: true},
         *   last: 'last'
         * });
         *
         * console.log(this.form.value);  // {first: 'name', last: 'last name'}
         * console.log(this.form.get('first').status);  // 'DISABLED'
         * ```
         * @param {?=} value Resets the control with an initial value,
         * or an object that defines the initial value and disabled state.
         *
         * @param {?=} options Configuration options that determine how the control propagates changes
         * and emits events when the group is reset.
         * * `onlySelf`: When true, each change only affects this control, and not its parent. Default is
         * false.
         * * `emitEvent`: When true or not supplied (the default), both the `statusChanges` and
         * `valueChanges`
         * observables emit events with the latest status and value when the control is reset.
         * When false, no events are emitted.
         * The configuration options are passed to the {\@link AbstractControl#updateValueAndValidity
         * updateValueAndValidity} method.
         *
         * @return {?}
         */

      }, {
        key: "reset",
        value: function reset() {
          var value = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
          var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

          this._forEachChild(
          /**
          * @param {?} control
          * @param {?} name
          * @return {?}
          */
          function (control, name) {
            control.reset(value[name], {
              onlySelf: true,
              emitEvent: options.emitEvent
            });
          });

          this._updatePristine(options);

          this._updateTouched(options);

          this.updateValueAndValidity(options);
        }
        /**
         * The aggregate value of the `FormGroup`, including any disabled controls.
         *
         * Retrieves all values regardless of disabled status.
         * The `value` property is the best way to get the value of the group, because
         * it excludes disabled controls in the `FormGroup`.
         * @return {?}
         */

      }, {
        key: "getRawValue",
        value: function getRawValue() {
          return this._reduceChildren({},
          /**
          * @param {?} acc
          * @param {?} control
          * @param {?} name
          * @return {?}
          */
          function (acc, control, name) {
            acc[name] = control instanceof FormControl ? control.value :
            /** @type {?} */
            control.getRawValue();
            return acc;
          });
        }
        /**
         * \@internal
         * @return {?}
         */

      }, {
        key: "_syncPendingControls",
        value: function _syncPendingControls() {
          /** @type {?} */
          var subtreeUpdated = this._reduceChildren(false,
          /**
          * @param {?} updated
          * @param {?} child
          * @return {?}
          */
          function (updated, child) {
            return child._syncPendingControls() ? true : updated;
          });

          if (subtreeUpdated) this.updateValueAndValidity({
            onlySelf: true
          });
          return subtreeUpdated;
        }
        /**
         * \@internal
         * @param {?} name
         * @return {?}
         */

      }, {
        key: "_throwIfControlMissing",
        value: function _throwIfControlMissing(name) {
          if (!Object.keys(this.controls).length) {
            throw new Error("\n        There are no form controls registered with this group yet.  If you're using ngModel,\n        you may want to check next tick (e.g. use setTimeout).\n      ");
          }

          if (!this.controls[name]) {
            throw new Error("Cannot find form control with name: ".concat(name, "."));
          }
        }
        /**
         * \@internal
         * @param {?} cb
         * @return {?}
         */

      }, {
        key: "_forEachChild",
        value: function _forEachChild(cb) {
          var _this13 = this;

          Object.keys(this.controls).forEach(
          /**
          * @param {?} k
          * @return {?}
          */
          function (k) {
            return cb(_this13.controls[k], k);
          });
        }
        /**
         * \@internal
         * @return {?}
         */

      }, {
        key: "_setUpControls",
        value: function _setUpControls() {
          var _this14 = this;

          this._forEachChild(
          /**
          * @param {?} control
          * @return {?}
          */
          function (control) {
            control.setParent(_this14);

            control._registerOnCollectionChange(_this14._onCollectionChange);
          });
        }
        /**
         * \@internal
         * @return {?}
         */

      }, {
        key: "_updateValue",
        value: function _updateValue() {
          /** @type {?} */
          this.value = this._reduceValue();
        }
        /**
         * \@internal
         * @param {?} condition
         * @return {?}
         */

      }, {
        key: "_anyControls",
        value: function _anyControls(condition) {
          var _this15 = this;

          /** @type {?} */
          var res = false;

          this._forEachChild(
          /**
          * @param {?} control
          * @param {?} name
          * @return {?}
          */
          function (control, name) {
            res = res || _this15.contains(name) && condition(control);
          });

          return res;
        }
        /**
         * \@internal
         * @return {?}
         */

      }, {
        key: "_reduceValue",
        value: function _reduceValue() {
          var _this16 = this;

          return this._reduceChildren({},
          /**
          * @param {?} acc
          * @param {?} control
          * @param {?} name
          * @return {?}
          */
          function (acc, control, name) {
            if (control.enabled || _this16.disabled) {
              acc[name] = control.value;
            }

            return acc;
          });
        }
        /**
         * \@internal
         * @param {?} initValue
         * @param {?} fn
         * @return {?}
         */

      }, {
        key: "_reduceChildren",
        value: function _reduceChildren(initValue, fn) {
          /** @type {?} */
          var res = initValue;

          this._forEachChild(
          /**
          * @param {?} control
          * @param {?} name
          * @return {?}
          */
          function (control, name) {
            res = fn(res, control, name);
          });

          return res;
        }
        /**
         * \@internal
         * @return {?}
         */

      }, {
        key: "_allControlsDisabled",
        value: function _allControlsDisabled() {
          for (var _i4 = 0, _Object$keys = Object.keys(this.controls); _i4 < _Object$keys.length; _i4++) {
            var controlName = _Object$keys[_i4];

            if (this.controls[controlName].enabled) {
              return false;
            }
          }

          return Object.keys(this.controls).length > 0 || this.disabled;
        }
        /**
         * \@internal
         * @param {?} value
         * @return {?}
         */

      }, {
        key: "_checkAllValuesPresent",
        value: function _checkAllValuesPresent(value) {
          this._forEachChild(
          /**
          * @param {?} control
          * @param {?} name
          * @return {?}
          */
          function (control, name) {
            if (value[name] === undefined) {
              throw new Error("Must supply a value for form control with name: '".concat(name, "'."));
            }
          });
        }
      }]);

      return FormGroup;
    }(AbstractControl);

    if (false) {}
    /**
     * Tracks the value and validity state of an array of `FormControl`,
     * `FormGroup` or `FormArray` instances.
     *
     * A `FormArray` aggregates the values of each child `FormControl` into an array.
     * It calculates its status by reducing the status values of its children. For example, if one of
     * the controls in a `FormArray` is invalid, the entire array becomes invalid.
     *
     * `FormArray` is one of the three fundamental building blocks used to define forms in Angular,
     * along with `FormControl` and `FormGroup`.
     *
     * \@usageNotes
     *
     * ### Create an array of form controls
     *
     * ```
     * const arr = new FormArray([
     *   new FormControl('Nancy', Validators.minLength(2)),
     *   new FormControl('Drew'),
     * ]);
     *
     * console.log(arr.value);   // ['Nancy', 'Drew']
     * console.log(arr.status);  // 'VALID'
     * ```
     *
     * ### Create a form array with array-level validators
     *
     * You include array-level validators and async validators. These come in handy
     * when you want to perform validation that considers the value of more than one child
     * control.
     *
     * The two types of validators are passed in separately as the second and third arg
     * respectively, or together as part of an options object.
     *
     * ```
     * const arr = new FormArray([
     *   new FormControl('Nancy'),
     *   new FormControl('Drew')
     * ], {validators: myValidator, asyncValidators: myAsyncValidator});
     * ```
     *
     * ### Set the updateOn property for all controls in a form array
     *
     * The options object is used to set a default value for each child
     * control's `updateOn` property. If you set `updateOn` to `'blur'` at the
     * array level, all child controls default to 'blur', unless the child
     * has explicitly specified a different `updateOn` value.
     *
     * ```ts
     * const arr = new FormArray([
     *    new FormControl()
     * ], {updateOn: 'blur'});
     * ```
     *
     * ### Adding or removing controls from a form array
     *
     * To change the controls in the array, use the `push`, `insert`, `removeAt` or `clear` methods
     * in `FormArray` itself. These methods ensure the controls are properly tracked in the
     * form's hierarchy. Do not modify the array of `AbstractControl`s used to instantiate
     * the `FormArray` directly, as that result in strange and unexpected behavior such
     * as broken change detection.
     *
     * \@publicApi
     */


    var FormArray =
    /*#__PURE__*/
    function (_AbstractControl3) {
      _inherits(FormArray, _AbstractControl3);

      /**
       * Creates a new `FormArray` instance.
       *
       * @param {?} controls An array of child controls. Each child control is given an index
       * where it is registered.
       *
       * @param {?=} validatorOrOpts A synchronous validator function, or an array of
       * such functions, or an `AbstractControlOptions` object that contains validation functions
       * and a validation trigger.
       *
       * @param {?=} asyncValidator A single async validator or array of async validator functions
       *
       */
      function FormArray(controls, validatorOrOpts, asyncValidator) {
        var _this17;

        _classCallCheck(this, FormArray);

        _this17 = _possibleConstructorReturn(this, _getPrototypeOf(FormArray).call(this, coerceToValidator(validatorOrOpts), coerceToAsyncValidator(asyncValidator, validatorOrOpts)));
        _this17.controls = controls;

        _this17._initObservables();

        _this17._setUpdateStrategy(validatorOrOpts);

        _this17._setUpControls();

        _this17.updateValueAndValidity({
          onlySelf: true,
          emitEvent: false
        });

        return _this17;
      }
      /**
       * Get the `AbstractControl` at the given `index` in the array.
       *
       * @param {?} index Index in the array to retrieve the control
       * @return {?}
       */


      _createClass(FormArray, [{
        key: "at",
        value: function at(index) {
          return this.controls[index];
        }
        /**
         * Insert a new `AbstractControl` at the end of the array.
         *
         * @param {?} control Form control to be inserted
         * @return {?}
         */

      }, {
        key: "push",
        value: function push(control) {
          this.controls.push(control);

          this._registerControl(control);

          this.updateValueAndValidity();

          this._onCollectionChange();
        }
        /**
         * Insert a new `AbstractControl` at the given `index` in the array.
         *
         * @param {?} index Index in the array to insert the control
         * @param {?} control Form control to be inserted
         * @return {?}
         */

      }, {
        key: "insert",
        value: function insert(index, control) {
          this.controls.splice(index, 0, control);

          this._registerControl(control);

          this.updateValueAndValidity();
        }
        /**
         * Remove the control at the given `index` in the array.
         *
         * @param {?} index Index in the array to remove the control
         * @return {?}
         */

      }, {
        key: "removeAt",
        value: function removeAt(index) {
          if (this.controls[index]) this.controls[index]._registerOnCollectionChange(
          /**
          * @return {?}
          */
          function () {});
          this.controls.splice(index, 1);
          this.updateValueAndValidity();
        }
        /**
         * Replace an existing control.
         *
         * @param {?} index Index in the array to replace the control
         * @param {?} control The `AbstractControl` control to replace the existing control
         * @return {?}
         */

      }, {
        key: "setControl",
        value: function setControl(index, control) {
          if (this.controls[index]) this.controls[index]._registerOnCollectionChange(
          /**
          * @return {?}
          */
          function () {});
          this.controls.splice(index, 1);

          if (control) {
            this.controls.splice(index, 0, control);

            this._registerControl(control);
          }

          this.updateValueAndValidity();

          this._onCollectionChange();
        }
        /**
         * Length of the control array.
         * @return {?}
         */

      }, {
        key: "setValue",

        /**
         * Sets the value of the `FormArray`. It accepts an array that matches
         * the structure of the control.
         *
         * This method performs strict checks, and throws an error if you try
         * to set the value of a control that doesn't exist or if you exclude the
         * value of a control.
         *
         * \@usageNotes
         * ### Set the values for the controls in the form array
         *
         * ```
         * const arr = new FormArray([
         *   new FormControl(),
         *   new FormControl()
         * ]);
         * console.log(arr.value);   // [null, null]
         *
         * arr.setValue(['Nancy', 'Drew']);
         * console.log(arr.value);   // ['Nancy', 'Drew']
         * ```
         *
         * @param {?} value Array of values for the controls
         * @param {?=} options Configure options that determine how the control propagates changes and
         * emits events after the value changes
         *
         * * `onlySelf`: When true, each change only affects this control, and not its parent. Default
         * is false.
         * * `emitEvent`: When true or not supplied (the default), both the `statusChanges` and
         * `valueChanges`
         * observables emit events with the latest status and value when the control value is updated.
         * When false, no events are emitted.
         * The configuration options are passed to the {\@link AbstractControl#updateValueAndValidity
         * updateValueAndValidity} method.
         * @return {?}
         */
        value: function setValue(value) {
          var _this18 = this;

          var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

          this._checkAllValuesPresent(value);

          value.forEach(
          /**
          * @param {?} newValue
          * @param {?} index
          * @return {?}
          */
          function (newValue, index) {
            _this18._throwIfControlMissing(index);

            _this18.at(index).setValue(newValue, {
              onlySelf: true,
              emitEvent: options.emitEvent
            });
          });
          this.updateValueAndValidity(options);
        }
        /**
         * Patches the value of the `FormArray`. It accepts an array that matches the
         * structure of the control, and does its best to match the values to the correct
         * controls in the group.
         *
         * It accepts both super-sets and sub-sets of the array without throwing an error.
         *
         * \@usageNotes
         * ### Patch the values for controls in a form array
         *
         * ```
         * const arr = new FormArray([
         *    new FormControl(),
         *    new FormControl()
         * ]);
         * console.log(arr.value);   // [null, null]
         *
         * arr.patchValue(['Nancy']);
         * console.log(arr.value);   // ['Nancy', null]
         * ```
         *
         * @param {?} value Array of latest values for the controls
         * @param {?=} options Configure options that determine how the control propagates changes and
         * emits events after the value changes
         *
         * * `onlySelf`: When true, each change only affects this control, and not its parent. Default
         * is false.
         * * `emitEvent`: When true or not supplied (the default), both the `statusChanges` and
         * `valueChanges`
         * observables emit events with the latest status and value when the control value is updated.
         * When false, no events are emitted.
         * The configuration options are passed to the {\@link AbstractControl#updateValueAndValidity
         * updateValueAndValidity} method.
         * @return {?}
         */

      }, {
        key: "patchValue",
        value: function patchValue(value) {
          var _this19 = this;

          var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
          value.forEach(
          /**
          * @param {?} newValue
          * @param {?} index
          * @return {?}
          */
          function (newValue, index) {
            if (_this19.at(index)) {
              _this19.at(index).patchValue(newValue, {
                onlySelf: true,
                emitEvent: options.emitEvent
              });
            }
          });
          this.updateValueAndValidity(options);
        }
        /**
         * Resets the `FormArray` and all descendants are marked `pristine` and `untouched`, and the
         * value of all descendants to null or null maps.
         *
         * You reset to a specific form state by passing in an array of states
         * that matches the structure of the control. The state is a standalone value
         * or a form state object with both a value and a disabled status.
         *
         * \@usageNotes
         * ### Reset the values in a form array
         *
         * ```ts
         * const arr = new FormArray([
         *    new FormControl(),
         *    new FormControl()
         * ]);
         * arr.reset(['name', 'last name']);
         *
         * console.log(this.arr.value);  // ['name', 'last name']
         * ```
         *
         * ### Reset the values in a form array and the disabled status for the first control
         *
         * ```
         * this.arr.reset([
         *   {value: 'name', disabled: true},
         *   'last'
         * ]);
         *
         * console.log(this.arr.value);  // ['name', 'last name']
         * console.log(this.arr.get(0).status);  // 'DISABLED'
         * ```
         *
         * @param {?=} value Array of values for the controls
         * @param {?=} options Configure options that determine how the control propagates changes and
         * emits events after the value changes
         *
         * * `onlySelf`: When true, each change only affects this control, and not its parent. Default
         * is false.
         * * `emitEvent`: When true or not supplied (the default), both the `statusChanges` and
         * `valueChanges`
         * observables emit events with the latest status and value when the control is reset.
         * When false, no events are emitted.
         * The configuration options are passed to the {\@link AbstractControl#updateValueAndValidity
         * updateValueAndValidity} method.
         * @return {?}
         */

      }, {
        key: "reset",
        value: function reset() {
          var value = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
          var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

          this._forEachChild(
          /**
          * @param {?} control
          * @param {?} index
          * @return {?}
          */
          function (control, index) {
            control.reset(value[index], {
              onlySelf: true,
              emitEvent: options.emitEvent
            });
          });

          this._updatePristine(options);

          this._updateTouched(options);

          this.updateValueAndValidity(options);
        }
        /**
         * The aggregate value of the array, including any disabled controls.
         *
         * Reports all values regardless of disabled status.
         * For enabled controls only, the `value` property is the best way to get the value of the array.
         * @return {?}
         */

      }, {
        key: "getRawValue",
        value: function getRawValue() {
          return this.controls.map(
          /**
          * @param {?} control
          * @return {?}
          */
          function (control) {
            return control instanceof FormControl ? control.value :
            /** @type {?} */
            control.getRawValue();
          });
        }
        /**
         * Remove all controls in the `FormArray`.
         *
         * \@usageNotes
         * ### Remove all elements from a FormArray
         *
         * ```ts
         * const arr = new FormArray([
         *    new FormControl(),
         *    new FormControl()
         * ]);
         * console.log(arr.length);  // 2
         *
         * arr.clear();
         * console.log(arr.length);  // 0
         * ```
         *
         * It's a simpler and more efficient alternative to removing all elements one by one:
         *
         * ```ts
         * const arr = new FormArray([
         *    new FormControl(),
         *    new FormControl()
         * ]);
         *
         * while (arr.length) {
         *    arr.removeAt(0);
         * }
         * ```
         * @return {?}
         */

      }, {
        key: "clear",
        value: function clear() {
          if (this.controls.length < 1) return;

          this._forEachChild(
          /**
          * @param {?} control
          * @return {?}
          */
          function (control) {
            return control._registerOnCollectionChange(
            /**
            * @return {?}
            */
            function () {});
          });

          this.controls.splice(0);
          this.updateValueAndValidity();
        }
        /**
         * \@internal
         * @return {?}
         */

      }, {
        key: "_syncPendingControls",
        value: function _syncPendingControls() {
          /** @type {?} */
          var subtreeUpdated = this.controls.reduce(
          /**
          * @param {?} updated
          * @param {?} child
          * @return {?}
          */
          function (updated, child) {
            return child._syncPendingControls() ? true : updated;
          }, false);
          if (subtreeUpdated) this.updateValueAndValidity({
            onlySelf: true
          });
          return subtreeUpdated;
        }
        /**
         * \@internal
         * @param {?} index
         * @return {?}
         */

      }, {
        key: "_throwIfControlMissing",
        value: function _throwIfControlMissing(index) {
          if (!this.controls.length) {
            throw new Error("\n        There are no form controls registered with this array yet.  If you're using ngModel,\n        you may want to check next tick (e.g. use setTimeout).\n      ");
          }

          if (!this.at(index)) {
            throw new Error("Cannot find form control at index ".concat(index));
          }
        }
        /**
         * \@internal
         * @param {?} cb
         * @return {?}
         */

      }, {
        key: "_forEachChild",
        value: function _forEachChild(cb) {
          this.controls.forEach(
          /**
          * @param {?} control
          * @param {?} index
          * @return {?}
          */
          function (control, index) {
            cb(control, index);
          });
        }
        /**
         * \@internal
         * @return {?}
         */

      }, {
        key: "_updateValue",
        value: function _updateValue() {
          var _this20 = this;

          /** @type {?} */
          this.value = this.controls.filter(
          /**
          * @param {?} control
          * @return {?}
          */
          function (control) {
            return control.enabled || _this20.disabled;
          }).map(
          /**
          * @param {?} control
          * @return {?}
          */
          function (control) {
            return control.value;
          });
        }
        /**
         * \@internal
         * @param {?} condition
         * @return {?}
         */

      }, {
        key: "_anyControls",
        value: function _anyControls(condition) {
          return this.controls.some(
          /**
          * @param {?} control
          * @return {?}
          */
          function (control) {
            return control.enabled && condition(control);
          });
        }
        /**
         * \@internal
         * @return {?}
         */

      }, {
        key: "_setUpControls",
        value: function _setUpControls() {
          var _this21 = this;

          this._forEachChild(
          /**
          * @param {?} control
          * @return {?}
          */
          function (control) {
            return _this21._registerControl(control);
          });
        }
        /**
         * \@internal
         * @param {?} value
         * @return {?}
         */

      }, {
        key: "_checkAllValuesPresent",
        value: function _checkAllValuesPresent(value) {
          this._forEachChild(
          /**
          * @param {?} control
          * @param {?} i
          * @return {?}
          */
          function (control, i) {
            if (value[i] === undefined) {
              throw new Error("Must supply a value for form control at index: ".concat(i, "."));
            }
          });
        }
        /**
         * \@internal
         * @return {?}
         */

      }, {
        key: "_allControlsDisabled",
        value: function _allControlsDisabled() {
          var _iteratorNormalCompletion = true;
          var _didIteratorError = false;
          var _iteratorError = undefined;

          try {
            for (var _iterator = this.controls[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
              var control = _step.value;
              if (control.enabled) return false;
            }
          } catch (err) {
            _didIteratorError = true;
            _iteratorError = err;
          } finally {
            try {
              if (!_iteratorNormalCompletion && _iterator.return != null) {
                _iterator.return();
              }
            } finally {
              if (_didIteratorError) {
                throw _iteratorError;
              }
            }
          }

          return this.controls.length > 0 || this.disabled;
        }
        /**
         * @private
         * @param {?} control
         * @return {?}
         */

      }, {
        key: "_registerControl",
        value: function _registerControl(control) {
          control.setParent(this);

          control._registerOnCollectionChange(this._onCollectionChange);
        }
      }, {
        key: "length",
        get: function get() {
          return this.controls.length;
        }
      }]);

      return FormArray;
    }(AbstractControl);

    if (false) {}
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /** @type {?} */


    var formDirectiveProvider = {
      provide: ControlContainer,
      useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(
      /**
      * @return {?}
      */
      function () {
        return NgForm;
      })
    };

    var ɵ0 =
    /**
    * @return {?}
    */
    function ɵ0() {
      return Promise.resolve(null);
    };
    /** @type {?} */


    var resolvedPromise = ɵ0();
    /**
     * \@description
     * Creates a top-level `FormGroup` instance and binds it to a form
     * to track aggregate form value and validation status.
     *
     * As soon as you import the `FormsModule`, this directive becomes active by default on
     * all `<form>` tags.  You don't need to add a special selector.
     *
     * You optionally export the directive into a local template variable using `ngForm` as the key
     * (ex: `#myForm="ngForm"`). This is optional, but useful.  Many properties from the underlying
     * `FormGroup` instance are duplicated on the directive itself, so a reference to it
     * gives you access to the aggregate value and validity status of the form, as well as
     * user interaction properties like `dirty` and `touched`.
     *
     * To register child controls with the form, use `NgModel` with a `name`
     * attribute. You may use `NgModelGroup` to create sub-groups within the form.
     *
     * If necessary, listen to the directive's `ngSubmit` event to be notified when the user has
     * triggered a form submission. The `ngSubmit` event emits the original form
     * submission event.
     *
     * In template driven forms, all `<form>` tags are automatically tagged as `NgForm`.
     * To import the `FormsModule` but skip its usage in some forms,
     * for example, to use native HTML5 validation, add the `ngNoForm` and the `<form>`
     * tags won't create an `NgForm` directive. In reactive forms, using `ngNoForm` is
     * unnecessary because the `<form>` tags are inert. In that case, you would
     * refrain from using the `formGroup` directive.
     *
     * \@usageNotes
     *
     * ### Migrating from deprecated ngForm selector
     *
     * Support for using `ngForm` element selector has been deprecated in Angular v6 and will be removed
     * in Angular v9.
     *
     * This has been deprecated to keep selectors consistent with other core Angular selectors,
     * as element selectors are typically written in kebab-case.
     *
     * Now deprecated:
     * ```html
     * <ngForm #myForm="ngForm">
     * ```
     *
     * After:
     * ```html
     * <ng-form #myForm="ngForm">
     * ```
     *
     * ### Listening for form submission
     *
     * The following example shows how to capture the form values from the "ngSubmit" event.
     *
     * {\@example forms/ts/simpleForm/simple_form_example.ts region='Component'}
     *
     * ### Setting the update options
     *
     * The following example shows you how to change the "updateOn" option from its default using
     * ngFormOptions.
     *
     * ```html
     * <form [ngFormOptions]="{updateOn: 'blur'}">
     *    <input name="one" ngModel>  <!-- this ngModel will update on blur -->
     * </form>
     * ```
     *
     * \@ngModule FormsModule
     * \@publicApi
     */

    var NgForm =
    /*#__PURE__*/
    function (_ControlContainer) {
      _inherits(NgForm, _ControlContainer);

      /**
       * @param {?} validators
       * @param {?} asyncValidators
       */
      function NgForm(validators, asyncValidators) {
        var _this22;

        _classCallCheck(this, NgForm);

        _this22 = _possibleConstructorReturn(this, _getPrototypeOf(NgForm).call(this));
        /**
         * \@description
         * Returns whether the form submission has been triggered.
         */

        _this22.submitted = false;
        _this22._directives = [];
        /**
         * \@description
         * Event emitter for the "ngSubmit" event
         */

        _this22.ngSubmit = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        _this22.form = new FormGroup({}, composeValidators(validators), composeAsyncValidators(asyncValidators));
        return _this22;
      }
      /**
       * \@description
       * Lifecycle method called after the view is initialized. For internal use only.
       * @return {?}
       */


      _createClass(NgForm, [{
        key: "ngAfterViewInit",
        value: function ngAfterViewInit() {
          this._setUpdateStrategy();
        }
        /**
         * \@description
         * The directive instance.
         * @return {?}
         */

      }, {
        key: "addControl",

        /**
         * \@description
         * Method that sets up the control directive in this group, re-calculates its value
         * and validity, and adds the instance to the internal list of directives.
         *
         * @param {?} dir The `NgModel` directive instance.
         * @return {?}
         */
        value: function addControl(dir) {
          var _this23 = this;

          resolvedPromise.then(
          /**
          * @return {?}
          */
          function () {
            /** @type {?} */
            var container = _this23._findContainer(dir.path);

            /** @type {?} */
            dir.control =
            /** @type {?} */
            container.registerControl(dir.name, dir.control);
            setUpControl(dir.control, dir);
            dir.control.updateValueAndValidity({
              emitEvent: false
            });

            _this23._directives.push(dir);
          });
        }
        /**
         * \@description
         * Retrieves the `FormControl` instance from the provided `NgModel` directive.
         *
         * @param {?} dir The `NgModel` directive instance.
         * @return {?}
         */

      }, {
        key: "getControl",
        value: function getControl(dir) {
          return (
            /** @type {?} */
            this.form.get(dir.path)
          );
        }
        /**
         * \@description
         * Removes the `NgModel` instance from the internal list of directives
         *
         * @param {?} dir The `NgModel` directive instance.
         * @return {?}
         */

      }, {
        key: "removeControl",
        value: function removeControl(dir) {
          var _this24 = this;

          resolvedPromise.then(
          /**
          * @return {?}
          */
          function () {
            /** @type {?} */
            var container = _this24._findContainer(dir.path);

            if (container) {
              container.removeControl(dir.name);
            }

            removeDir(_this24._directives, dir);
          });
        }
        /**
         * \@description
         * Adds a new `NgModelGroup` directive instance to the form.
         *
         * @param {?} dir The `NgModelGroup` directive instance.
         * @return {?}
         */

      }, {
        key: "addFormGroup",
        value: function addFormGroup(dir) {
          var _this25 = this;

          resolvedPromise.then(
          /**
          * @return {?}
          */
          function () {
            /** @type {?} */
            var container = _this25._findContainer(dir.path);
            /** @type {?} */


            var group = new FormGroup({});
            setUpFormContainer(group, dir);
            container.registerControl(dir.name, group);
            group.updateValueAndValidity({
              emitEvent: false
            });
          });
        }
        /**
         * \@description
         * Removes the `NgModelGroup` directive instance from the form.
         *
         * @param {?} dir The `NgModelGroup` directive instance.
         * @return {?}
         */

      }, {
        key: "removeFormGroup",
        value: function removeFormGroup(dir) {
          var _this26 = this;

          resolvedPromise.then(
          /**
          * @return {?}
          */
          function () {
            /** @type {?} */
            var container = _this26._findContainer(dir.path);

            if (container) {
              container.removeControl(dir.name);
            }
          });
        }
        /**
         * \@description
         * Retrieves the `FormGroup` for a provided `NgModelGroup` directive instance
         *
         * @param {?} dir The `NgModelGroup` directive instance.
         * @return {?}
         */

      }, {
        key: "getFormGroup",
        value: function getFormGroup(dir) {
          return (
            /** @type {?} */
            this.form.get(dir.path)
          );
        }
        /**
         * Sets the new value for the provided `NgControl` directive.
         *
         * @param {?} dir The `NgControl` directive instance.
         * @param {?} value The new value for the directive's control.
         * @return {?}
         */

      }, {
        key: "updateModel",
        value: function updateModel(dir, value) {
          var _this27 = this;

          resolvedPromise.then(
          /**
          * @return {?}
          */
          function () {
            /** @type {?} */
            var ctrl =
            /** @type {?} */
            _this27.form.get(
            /** @type {?} */
            dir.path);

            ctrl.setValue(value);
          });
        }
        /**
         * \@description
         * Sets the value for this `FormGroup`.
         *
         * @param {?} value The new value
         * @return {?}
         */

      }, {
        key: "setValue",
        value: function setValue(value) {
          this.control.setValue(value);
        }
        /**
         * \@description
         * Method called when the "submit" event is triggered on the form.
         * Triggers the `ngSubmit` emitter to emit the "submit" event as its payload.
         *
         * @param {?} $event The "submit" event object
         * @return {?}
         */

      }, {
        key: "onSubmit",
        value: function onSubmit($event) {
          /** @type {?} */
          this.submitted = true;
          syncPendingControls(this.form, this._directives);
          this.ngSubmit.emit($event);
          return false;
        }
        /**
         * \@description
         * Method called when the "reset" event is triggered on the form.
         * @return {?}
         */

      }, {
        key: "onReset",
        value: function onReset() {
          this.resetForm();
        }
        /**
         * \@description
         * Resets the form to an initial value and resets its submitted status.
         *
         * @param {?=} value The new value for the form.
         * @return {?}
         */

      }, {
        key: "resetForm",
        value: function resetForm() {
          var value = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : undefined;
          this.form.reset(value);

          /** @type {?} */
          this.submitted = false;
        }
        /**
         * @private
         * @return {?}
         */

      }, {
        key: "_setUpdateStrategy",
        value: function _setUpdateStrategy() {
          if (this.options && this.options.updateOn != null) {
            this.form._updateOn = this.options.updateOn;
          }
        }
        /**
         * \@internal
         * @param {?} path
         * @return {?}
         */

      }, {
        key: "_findContainer",
        value: function _findContainer(path) {
          path.pop();
          return path.length ?
          /** @type {?} */
          this.form.get(path) : this.form;
        }
      }, {
        key: "formDirective",
        get: function get() {
          return this;
        }
        /**
         * \@description
         * The internal `FormGroup` instance.
         * @return {?}
         */

      }, {
        key: "control",
        get: function get() {
          return this.form;
        }
        /**
         * \@description
         * Returns an array representing the path to this group. Because this directive
         * always lives at the top level of a form, it is always an empty array.
         * @return {?}
         */

      }, {
        key: "path",
        get: function get() {
          return [];
        }
        /**
         * \@description
         * Returns a map of the controls in this group.
         * @return {?}
         */

      }, {
        key: "controls",
        get: function get() {
          return this.form.controls;
        }
      }]);

      return NgForm;
    }(ControlContainer);

    NgForm.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
      args: [{
        selector: 'form:not([ngNoForm]):not([formGroup]),ngForm,ng-form,[ngForm]',
        providers: [formDirectiveProvider],
        host: {
          '(submit)': 'onSubmit($event)',
          '(reset)': 'onReset()'
        },
        outputs: ['ngSubmit'],
        exportAs: 'ngForm'
      }]
    }];
    /** @nocollapse */

    NgForm.ctorParameters = function () {
      return [{
        type: Array,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Self"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
          args: [NG_VALIDATORS]
        }]
      }, {
        type: Array,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Self"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
          args: [NG_ASYNC_VALIDATORS]
        }]
      }];
    };

    NgForm.propDecorators = {
      options: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
        args: ['ngFormOptions']
      }]
    };

    if (false) {}
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */


    var TemplateDrivenErrors =
    /*#__PURE__*/
    function () {
      function TemplateDrivenErrors() {
        _classCallCheck(this, TemplateDrivenErrors);
      }

      _createClass(TemplateDrivenErrors, null, [{
        key: "modelParentException",

        /**
         * @return {?}
         */
        value: function modelParentException() {
          throw new Error("\n      ngModel cannot be used to register form controls with a parent formGroup directive.  Try using\n      formGroup's partner directive \"formControlName\" instead.  Example:\n\n      ".concat(FormErrorExamples.formControlName, "\n\n      Or, if you'd like to avoid registering this form control, indicate that it's standalone in ngModelOptions:\n\n      Example:\n\n      ").concat(FormErrorExamples.ngModelWithFormGroup));
        }
        /**
         * @return {?}
         */

      }, {
        key: "formGroupNameException",
        value: function formGroupNameException() {
          throw new Error("\n      ngModel cannot be used to register form controls with a parent formGroupName or formArrayName directive.\n\n      Option 1: Use formControlName instead of ngModel (reactive strategy):\n\n      ".concat(FormErrorExamples.formGroupName, "\n\n      Option 2:  Update ngModel's parent be ngModelGroup (template-driven strategy):\n\n      ").concat(FormErrorExamples.ngModelGroup));
        }
        /**
         * @return {?}
         */

      }, {
        key: "missingNameException",
        value: function missingNameException() {
          throw new Error("If ngModel is used within a form tag, either the name attribute must be set or the form\n      control must be defined as 'standalone' in ngModelOptions.\n\n      Example 1: <input [(ngModel)]=\"person.firstName\" name=\"first\">\n      Example 2: <input [(ngModel)]=\"person.firstName\" [ngModelOptions]=\"{standalone: true}\">");
        }
        /**
         * @return {?}
         */

      }, {
        key: "modelGroupParentException",
        value: function modelGroupParentException() {
          throw new Error("\n      ngModelGroup cannot be used with a parent formGroup directive.\n\n      Option 1: Use formGroupName instead of ngModelGroup (reactive strategy):\n\n      ".concat(FormErrorExamples.formGroupName, "\n\n      Option 2:  Use a regular form tag instead of the formGroup directive (template-driven strategy):\n\n      ").concat(FormErrorExamples.ngModelGroup));
        }
        /**
         * @return {?}
         */

      }, {
        key: "ngFormWarning",
        value: function ngFormWarning() {
          console.warn("\n    It looks like you're using 'ngForm'.\n\n    Support for using the 'ngForm' element selector has been deprecated in Angular v6 and will be removed\n    in Angular v9.\n\n    Use 'ng-form' instead.\n\n    Before:\n    <ngForm #myForm=\"ngForm\">\n\n    After:\n    <ng-form #myForm=\"ngForm\">\n    ");
        }
      }]);

      return TemplateDrivenErrors;
    }();
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * \@description
     * `InjectionToken` to provide to turn off the warning when using 'ngForm' deprecated selector.
     * @type {?}
     */


    var NG_FORM_SELECTOR_WARNING = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["InjectionToken"]('NgFormSelectorWarning');
    /**
     * This directive is solely used to display warnings when the deprecated `ngForm` selector is used.
     *
     * @deprecated in Angular v6 and will be removed in Angular v9.
     * \@ngModule FormsModule
     * \@publicApi
     */

    var NgFormSelectorWarning =
    /**
     * @param {?} ngFormWarning
     */
    function NgFormSelectorWarning(ngFormWarning) {
      _classCallCheck(this, NgFormSelectorWarning);

      if ((!ngFormWarning || ngFormWarning === 'once') && !NgFormSelectorWarning._ngFormWarning || ngFormWarning === 'always') {
        TemplateDrivenErrors.ngFormWarning();
        NgFormSelectorWarning._ngFormWarning = true;
      }
    };
    /**
     * Static property used to track whether the deprecation warning for this selector has been sent.
     * Used to support warning config of "once".
     *
     * \@internal
     */


    NgFormSelectorWarning._ngFormWarning = false;
    NgFormSelectorWarning.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
      args: [{
        selector: 'ngForm'
      }]
    }];
    /** @nocollapse */

    NgFormSelectorWarning.ctorParameters = function () {
      return [{
        type: undefined,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
          args: [NG_FORM_SELECTOR_WARNING]
        }]
      }];
    };

    if (false) {}
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * \@description
     * A base class for code shared between the `NgModelGroup` and `FormGroupName` directives.
     *
     * \@publicApi
     */


    var AbstractFormGroupDirective =
    /*#__PURE__*/
    function (_ControlContainer2) {
      _inherits(AbstractFormGroupDirective, _ControlContainer2);

      function AbstractFormGroupDirective() {
        _classCallCheck(this, AbstractFormGroupDirective);

        return _possibleConstructorReturn(this, _getPrototypeOf(AbstractFormGroupDirective).apply(this, arguments));
      }

      _createClass(AbstractFormGroupDirective, [{
        key: "ngOnInit",

        /**
         * \@description
         * An internal callback method triggered on the instance after the inputs are set.
         * Registers the group with its parent group.
         * @return {?}
         */
        value: function ngOnInit() {
          this._checkParentType();

          /** @type {?} */
          this.formDirective.addFormGroup(this);
        }
        /**
         * \@description
         * An internal callback method triggered before the instance is destroyed.
         * Removes the group from its parent group.
         * @return {?}
         */

      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          if (this.formDirective) {
            this.formDirective.removeFormGroup(this);
          }
        }
        /**
         * \@description
         * The `FormGroup` bound to this directive.
         * @return {?}
         */

      }, {
        key: "_checkParentType",

        /**
         * \@internal
         * @return {?}
         */
        value: function _checkParentType() {}
      }, {
        key: "control",
        get: function get() {
          return (
            /** @type {?} */
            this.formDirective.getFormGroup(this)
          );
        }
        /**
         * \@description
         * The path to this group from the top-level directive.
         * @return {?}
         */

      }, {
        key: "path",
        get: function get() {
          return controlPath(this.name, this._parent);
        }
        /**
         * \@description
         * The top-level directive for this group if present, otherwise null.
         * @return {?}
         */

      }, {
        key: "formDirective",
        get: function get() {
          return this._parent ? this._parent.formDirective : null;
        }
        /**
         * \@description
         * The synchronous validators registered with this group.
         * @return {?}
         */

      }, {
        key: "validator",
        get: function get() {
          return composeValidators(this._validators);
        }
        /**
         * \@description
         * The async validators registered with this group.
         * @return {?}
         */

      }, {
        key: "asyncValidator",
        get: function get() {
          return composeAsyncValidators(this._asyncValidators);
        }
      }]);

      return AbstractFormGroupDirective;
    }(ControlContainer);

    if (false) {}
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /** @type {?} */


    var modelGroupProvider = {
      provide: ControlContainer,
      useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(
      /**
      * @return {?}
      */
      function () {
        return NgModelGroup;
      })
    };
    /**
     * \@description
     * Creates and binds a `FormGroup` instance to a DOM element.
     *
     * This directive can only be used as a child of `NgForm` (within `<form>` tags).
     *
     * Use this directive to validate a sub-group of your form separately from the
     * rest of your form, or if some values in your domain model make more sense
     * to consume together in a nested object.
     *
     * Provide a name for the sub-group and it will become the key
     * for the sub-group in the form's full value. If you need direct access, export the directive into
     * a local template variable using `ngModelGroup` (ex: `#myGroup="ngModelGroup"`).
     *
     * \@usageNotes
     *
     * ### Consuming controls in a grouping
     *
     * The following example shows you how to combine controls together in a sub-group
     * of the form.
     *
     * {\@example forms/ts/ngModelGroup/ng_model_group_example.ts region='Component'}
     *
     * \@ngModule FormsModule
     * \@publicApi
     */

    var NgModelGroup =
    /*#__PURE__*/
    function (_AbstractFormGroupDir) {
      _inherits(NgModelGroup, _AbstractFormGroupDir);

      /**
       * @param {?} parent
       * @param {?} validators
       * @param {?} asyncValidators
       */
      function NgModelGroup(parent, validators, asyncValidators) {
        var _this28;

        _classCallCheck(this, NgModelGroup);

        _this28 = _possibleConstructorReturn(this, _getPrototypeOf(NgModelGroup).call(this));
        _this28._parent = parent;
        _this28._validators = validators;
        _this28._asyncValidators = asyncValidators;
        return _this28;
      }
      /**
       * \@internal
       * @return {?}
       */


      _createClass(NgModelGroup, [{
        key: "_checkParentType",
        value: function _checkParentType() {
          if (!(this._parent instanceof NgModelGroup) && !(this._parent instanceof NgForm)) {
            TemplateDrivenErrors.modelGroupParentException();
          }
        }
      }]);

      return NgModelGroup;
    }(AbstractFormGroupDirective);

    NgModelGroup.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
      args: [{
        selector: '[ngModelGroup]',
        providers: [modelGroupProvider],
        exportAs: 'ngModelGroup'
      }]
    }];
    /** @nocollapse */

    NgModelGroup.ctorParameters = function () {
      return [{
        type: ControlContainer,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Host"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["SkipSelf"]
        }]
      }, {
        type: Array,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Self"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
          args: [NG_VALIDATORS]
        }]
      }, {
        type: Array,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Self"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
          args: [NG_ASYNC_VALIDATORS]
        }]
      }];
    };

    NgModelGroup.propDecorators = {
      name: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
        args: ['ngModelGroup']
      }]
    };

    if (false) {}
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /** @type {?} */


    var formControlBinding = {
      provide: NgControl,
      useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(
      /**
      * @return {?}
      */
      function () {
        return NgModel;
      })
    };

    var ɵ0$1 =
    /**
    * @return {?}
    */
    function ɵ0$1() {
      return Promise.resolve(null);
    };
    /**
     * `ngModel` forces an additional change detection run when its inputs change:
     * E.g.:
     * ```
     * <div>{{myModel.valid}}</div>
     * <input [(ngModel)]="myValue" #myModel="ngModel">
     * ```
     * I.e. `ngModel` can export itself on the element and then be used in the template.
     * Normally, this would result in expressions before the `input` that use the exported directive
     * to have and old value as they have been
     * dirty checked before. As this is a very common case for `ngModel`, we added this second change
     * detection run.
     *
     * Notes:
     * - this is just one extra run no matter how many `ngModel` have been changed.
     * - this is a general problem when using `exportAs` for directives!
     * @type {?}
     */


    var resolvedPromise$1 = ɵ0$1();
    /**
     * \@description
     * Creates a `FormControl` instance from a domain model and binds it
     * to a form control element.
     *
     * The `FormControl` instance tracks the value, user interaction, and
     * validation status of the control and keeps the view synced with the model. If used
     * within a parent form, the directive also registers itself with the form as a child
     * control.
     *
     * This directive is used by itself or as part of a larger form. Use the
     * `ngModel` selector to activate it.
     *
     * It accepts a domain model as an optional `Input`. If you have a one-way binding
     * to `ngModel` with `[]` syntax, changing the value of the domain model in the component
     * class sets the value in the view. If you have a two-way binding with `[()]` syntax
     * (also known as 'banana-box syntax'), the value in the UI always syncs back to
     * the domain model in your class.
     *
     * To inspect the properties of the associated `FormControl` (like validity state),
     * export the directive into a local template variable using `ngModel` as the key (ex: `#myVar="ngModel"`).
     * You then access the control using the directive's `control` property,
     * but most properties used (like `valid` and `dirty`) fall through to the control anyway for direct access.
     * See a full list of properties directly available in `AbstractControlDirective`.
     *
     * @see `RadioControlValueAccessor`
     * @see `SelectControlValueAccessor`
     *
     * \@usageNotes
     *
     * ### Using ngModel on a standalone control
     *
     * The following examples show a simple standalone control using `ngModel`:
     *
     * {\@example forms/ts/simpleNgModel/simple_ng_model_example.ts region='Component'}
     *
     * When using the `ngModel` within `<form>` tags, you'll also need to supply a `name` attribute
     * so that the control can be registered with the parent form under that name.
     *
     * In the context of a parent form, it's often unnecessary to include one-way or two-way binding,
     * as the parent form syncs the value for you. You access its properties by exporting it into a
     * local template variable using `ngForm` such as (`#f="ngForm"`). Use the variable where
     * needed on form submission.
     *
     * If you do need to populate initial values into your form, using a one-way binding for
     * `ngModel` tends to be sufficient as long as you use the exported form's value rather
     * than the domain model's value on submit.
     *
     * ### Using ngModel within a form
     *
     * The following example shows controls using `ngModel` within a form:
     *
     * {\@example forms/ts/simpleForm/simple_form_example.ts region='Component'}
     *
     * ### Using a standalone ngModel within a group
     *
     * The following example shows you how to use a standalone ngModel control
     * within a form. This controls the display of the form, but doesn't contain form data.
     *
     * ```html
     * <form>
     *   <input name="login" ngModel placeholder="Login">
     *   <input type="checkbox" ngModel [ngModelOptions]="{standalone: true}"> Show more options?
     * </form>
     * <!-- form value: {login: ''} -->
     * ```
     *
     * ### Setting the ngModel name attribute through options
     *
     * The following example shows you an alternate way to set the name attribute. The name attribute is used
     * within a custom form component, and the name `\@Input` property serves a different purpose.
     *
     * ```html
     * <form>
     *   <my-person-control name="Nancy" ngModel [ngModelOptions]="{name: 'user'}">
     *   </my-person-control>
     * </form>
     * <!-- form value: {user: ''} -->
     * ```
     *
     * \@ngModule FormsModule
     * \@publicApi
     */

    var NgModel =
    /*#__PURE__*/
    function (_NgControl) {
      _inherits(NgModel, _NgControl);

      /**
       * @param {?} parent
       * @param {?} validators
       * @param {?} asyncValidators
       * @param {?} valueAccessors
       */
      function NgModel(parent, validators, asyncValidators, valueAccessors) {
        var _this29;

        _classCallCheck(this, NgModel);

        _this29 = _possibleConstructorReturn(this, _getPrototypeOf(NgModel).call(this));
        _this29.control = new FormControl();
        /**
         * \@internal
         */

        _this29._registered = false;
        /**
         * \@description
         * Event emitter for producing the `ngModelChange` event after
         * the view model updates.
         */

        _this29.update = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        _this29._parent = parent;
        _this29._rawValidators = validators || [];
        _this29._rawAsyncValidators = asyncValidators || [];
        _this29.valueAccessor = selectValueAccessor(_assertThisInitialized(_this29), valueAccessors);
        return _this29;
      }
      /**
       * \@description
       * A lifecycle method called when the directive's inputs change. For internal use
       * only.
       *
       * @param {?} changes A object of key/value pairs for the set of changed inputs.
       * @return {?}
       */


      _createClass(NgModel, [{
        key: "ngOnChanges",
        value: function ngOnChanges(changes) {
          this._checkForErrors();

          if (!this._registered) this._setUpControl();

          if ('isDisabled' in changes) {
            this._updateDisabled(changes);
          }

          if (isPropertyUpdated(changes, this.viewModel)) {
            this._updateValue(this.model);

            this.viewModel = this.model;
          }
        }
        /**
         * \@description
         * Lifecycle method called before the directive's instance is destroyed. For internal
         * use only.
         * @return {?}
         */

      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this.formDirective && this.formDirective.removeControl(this);
        }
        /**
         * \@description
         * Returns an array that represents the path from the top-level form to this control.
         * Each index is the string name of the control on that level.
         * @return {?}
         */

      }, {
        key: "viewToModelUpdate",

        /**
         * \@description
         * Sets the new value for the view model and emits an `ngModelChange` event.
         *
         * @param {?} newValue The new value emitted by `ngModelChange`.
         * @return {?}
         */
        value: function viewToModelUpdate(newValue) {
          this.viewModel = newValue;
          this.update.emit(newValue);
        }
        /**
         * @private
         * @return {?}
         */

      }, {
        key: "_setUpControl",
        value: function _setUpControl() {
          this._setUpdateStrategy();

          this._isStandalone() ? this._setUpStandalone() : this.formDirective.addControl(this);
          this._registered = true;
        }
        /**
         * @private
         * @return {?}
         */

      }, {
        key: "_setUpdateStrategy",
        value: function _setUpdateStrategy() {
          if (this.options && this.options.updateOn != null) {
            this.control._updateOn = this.options.updateOn;
          }
        }
        /**
         * @private
         * @return {?}
         */

      }, {
        key: "_isStandalone",
        value: function _isStandalone() {
          return !this._parent || !!(this.options && this.options.standalone);
        }
        /**
         * @private
         * @return {?}
         */

      }, {
        key: "_setUpStandalone",
        value: function _setUpStandalone() {
          setUpControl(this.control, this);
          this.control.updateValueAndValidity({
            emitEvent: false
          });
        }
        /**
         * @private
         * @return {?}
         */

      }, {
        key: "_checkForErrors",
        value: function _checkForErrors() {
          if (!this._isStandalone()) {
            this._checkParentType();
          }

          this._checkName();
        }
        /**
         * @private
         * @return {?}
         */

      }, {
        key: "_checkParentType",
        value: function _checkParentType() {
          if (!(this._parent instanceof NgModelGroup) && this._parent instanceof AbstractFormGroupDirective) {
            TemplateDrivenErrors.formGroupNameException();
          } else if (!(this._parent instanceof NgModelGroup) && !(this._parent instanceof NgForm)) {
            TemplateDrivenErrors.modelParentException();
          }
        }
        /**
         * @private
         * @return {?}
         */

      }, {
        key: "_checkName",
        value: function _checkName() {
          if (this.options && this.options.name) this.name = this.options.name;

          if (!this._isStandalone() && !this.name) {
            TemplateDrivenErrors.missingNameException();
          }
        }
        /**
         * @private
         * @param {?} value
         * @return {?}
         */

      }, {
        key: "_updateValue",
        value: function _updateValue(value) {
          var _this30 = this;

          resolvedPromise$1.then(
          /**
          * @return {?}
          */
          function () {
            _this30.control.setValue(value, {
              emitViewToModelChange: false
            });
          });
        }
        /**
         * @private
         * @param {?} changes
         * @return {?}
         */

      }, {
        key: "_updateDisabled",
        value: function _updateDisabled(changes) {
          var _this31 = this;

          /** @type {?} */
          var disabledValue = changes['isDisabled'].currentValue;
          /** @type {?} */

          var isDisabled = disabledValue === '' || disabledValue && disabledValue !== 'false';
          resolvedPromise$1.then(
          /**
          * @return {?}
          */
          function () {
            if (isDisabled && !_this31.control.disabled) {
              _this31.control.disable();
            } else if (!isDisabled && _this31.control.disabled) {
              _this31.control.enable();
            }
          });
        }
      }, {
        key: "path",
        get: function get() {
          return this._parent ? controlPath(this.name, this._parent) : [this.name];
        }
        /**
         * \@description
         * The top-level directive for this control if present, otherwise null.
         * @return {?}
         */

      }, {
        key: "formDirective",
        get: function get() {
          return this._parent ? this._parent.formDirective : null;
        }
        /**
         * \@description
         * Synchronous validator function composed of all the synchronous validators
         * registered with this directive.
         * @return {?}
         */

      }, {
        key: "validator",
        get: function get() {
          return composeValidators(this._rawValidators);
        }
        /**
         * \@description
         * Async validator function composed of all the async validators registered with this
         * directive.
         * @return {?}
         */

      }, {
        key: "asyncValidator",
        get: function get() {
          return composeAsyncValidators(this._rawAsyncValidators);
        }
      }]);

      return NgModel;
    }(NgControl);

    NgModel.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
      args: [{
        selector: '[ngModel]:not([formControlName]):not([formControl])',
        providers: [formControlBinding],
        exportAs: 'ngModel'
      }]
    }];
    /** @nocollapse */

    NgModel.ctorParameters = function () {
      return [{
        type: ControlContainer,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Host"]
        }]
      }, {
        type: Array,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Self"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
          args: [NG_VALIDATORS]
        }]
      }, {
        type: Array,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Self"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
          args: [NG_ASYNC_VALIDATORS]
        }]
      }, {
        type: Array,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Self"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
          args: [NG_VALUE_ACCESSOR]
        }]
      }];
    };

    NgModel.propDecorators = {
      name: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      isDisabled: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
        args: ['disabled']
      }],
      model: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
        args: ['ngModel']
      }],
      options: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
        args: ['ngModelOptions']
      }],
      update: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"],
        args: ['ngModelChange']
      }]
    };

    if (false) {}
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * \@description
     *
     * Adds `novalidate` attribute to all forms by default.
     *
     * `novalidate` is used to disable browser's native form validation.
     *
     * If you want to use native validation with Angular forms, just add `ngNativeValidate` attribute:
     *
     * ```
     * <form ngNativeValidate></form>
     * ```
     *
     * \@publicApi
     * \@ngModule ReactiveFormsModule
     * \@ngModule FormsModule
     */


    var ɵNgNoValidate = function ɵNgNoValidate() {
      _classCallCheck(this, ɵNgNoValidate);
    };

    ɵNgNoValidate.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
      args: [{
        selector: 'form:not([ngNoForm]):not([ngNativeValidate])',
        host: {
          'novalidate': ''
        }
      }]
    }];
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * Token to provide to turn off the ngModel warning on formControl and formControlName.
     * @type {?}
     */

    var NG_MODEL_WITH_FORM_CONTROL_WARNING = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["InjectionToken"]('NgModelWithFormControlWarning');
    /** @type {?} */

    var formControlBinding$1 = {
      provide: NgControl,
      useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(
      /**
      * @return {?}
      */
      function () {
        return FormControlDirective;
      })
    };
    /**
     * \@description
     * * Syncs a standalone `FormControl` instance to a form control element.
     *
     * @see [Reactive Forms Guide](guide/reactive-forms)
     * @see `FormControl`
     * @see `AbstractControl`
     *
     * \@usageNotes
     *
     * ### Registering a single form control
     *
     * The following examples shows how to register a standalone control and set its value.
     *
     * {\@example forms/ts/simpleFormControl/simple_form_control_example.ts region='Component'}
     *
     * ### Use with ngModel
     *
     * Support for using the `ngModel` input property and `ngModelChange` event with reactive
     * form directives has been deprecated in Angular v6 and will be removed in Angular v7.
     *
     * Now deprecated:
     *
     * ```html
     * <input [formControl]="control" [(ngModel)]="value">
     * ```
     *
     * ```ts
     * this.value = 'some value';
     * ```
     *
     * This has been deprecated for a few reasons. First, developers have found this pattern
     * confusing. It seems like the actual `ngModel` directive is being used, but in fact it's
     * an input/output property named `ngModel` on the reactive form directive that simply
     * approximates (some of) its behavior. Specifically, it allows getting/setting the value
     * and intercepting value events. However, some of `ngModel`'s other features - like
     * delaying updates with`ngModelOptions` or exporting the directive - simply don't work,
     * which has understandably caused some confusion.
     *
     * In addition, this pattern mixes template-driven and reactive forms strategies, which
     * we generally don't recommend because it doesn't take advantage of the full benefits of
     * either strategy. Setting the value in the template violates the template-agnostic
     * principles behind reactive forms, whereas adding a `FormControl`/`FormGroup` layer in
     * the class removes the convenience of defining forms in the template.
     *
     * To update your code before v7, you'll want to decide whether to stick with reactive form
     * directives (and get/set values using reactive forms patterns) or switch over to
     * template-driven directives.
     *
     * After (choice 1 - use reactive forms):
     *
     * ```html
     * <input [formControl]="control">
     * ```
     *
     * ```ts
     * this.control.setValue('some value');
     * ```
     *
     * After (choice 2 - use template-driven forms):
     *
     * ```html
     * <input [(ngModel)]="value">
     * ```
     *
     * ```ts
     * this.value = 'some value';
     * ```
     *
     * By default, when you use this pattern, you will see a deprecation warning once in dev
     * mode. You can choose to silence this warning by providing a config for
     * `ReactiveFormsModule` at import time:
     *
     * ```ts
     * imports: [
     *   ReactiveFormsModule.withConfig({warnOnNgModelWithFormControl: 'never'});
     * ]
     * ```
     *
     * Alternatively, you can choose to surface a separate warning for each instance of this
     * pattern with a config value of `"always"`. This may help to track down where in the code
     * the pattern is being used as the code is being updated.
     *
     * \@ngModule ReactiveFormsModule
     * \@publicApi
     */

    var FormControlDirective =
    /*#__PURE__*/
    function (_NgControl2) {
      _inherits(FormControlDirective, _NgControl2);

      /**
       * @param {?} validators
       * @param {?} asyncValidators
       * @param {?} valueAccessors
       * @param {?} _ngModelWarningConfig
       */
      function FormControlDirective(validators, asyncValidators, valueAccessors, _ngModelWarningConfig) {
        var _this32;

        _classCallCheck(this, FormControlDirective);

        _this32 = _possibleConstructorReturn(this, _getPrototypeOf(FormControlDirective).call(this));
        _this32._ngModelWarningConfig = _ngModelWarningConfig;
        /**
         * @deprecated as of v6
         */

        _this32.update = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        /**
         * \@description
         * Instance property used to track whether an ngModel warning has been sent out for this
         * particular `FormControlDirective` instance. Used to support warning config of "always".
         *
         * \@internal
         */

        _this32._ngModelWarningSent = false;
        _this32._rawValidators = validators || [];
        _this32._rawAsyncValidators = asyncValidators || [];
        _this32.valueAccessor = selectValueAccessor(_assertThisInitialized(_this32), valueAccessors);
        return _this32;
      }
      /**
       * \@description
       * Triggers a warning that this input should not be used with reactive forms.
       * @param {?} isDisabled
       * @return {?}
       */


      _createClass(FormControlDirective, [{
        key: "ngOnChanges",

        /**
         * \@description
         * A lifecycle method called when the directive's inputs change. For internal use
         * only.
         *
         * @param {?} changes A object of key/value pairs for the set of changed inputs.
         * @return {?}
         */
        value: function ngOnChanges(changes) {
          if (this._isControlChanged(changes)) {
            setUpControl(this.form, this);

            if (this.control.disabled &&
            /** @type {?} */
            this.valueAccessor.setDisabledState) {
              /** @type {?} */

              /** @type {?} */
              this.valueAccessor.setDisabledState(true);
            }

            this.form.updateValueAndValidity({
              emitEvent: false
            });
          }

          if (isPropertyUpdated(changes, this.viewModel)) {
            _ngModelWarning('formControl', FormControlDirective, this, this._ngModelWarningConfig);

            this.form.setValue(this.model);
            this.viewModel = this.model;
          }
        }
        /**
         * \@description
         * Returns an array that represents the path from the top-level form to this control.
         * Each index is the string name of the control on that level.
         * @return {?}
         */

      }, {
        key: "viewToModelUpdate",

        /**
         * \@description
         * Sets the new value for the view model and emits an `ngModelChange` event.
         *
         * @param {?} newValue The new value for the view model.
         * @return {?}
         */
        value: function viewToModelUpdate(newValue) {
          this.viewModel = newValue;
          this.update.emit(newValue);
        }
        /**
         * @private
         * @param {?} changes
         * @return {?}
         */

      }, {
        key: "_isControlChanged",
        value: function _isControlChanged(changes) {
          return changes.hasOwnProperty('form');
        }
      }, {
        key: "isDisabled",
        set: function set(isDisabled) {
          ReactiveErrors.disabledAttrWarning();
        }
      }, {
        key: "path",
        get: function get() {
          return [];
        }
        /**
         * \@description
         * Synchronous validator function composed of all the synchronous validators
         * registered with this directive.
         * @return {?}
         */

      }, {
        key: "validator",
        get: function get() {
          return composeValidators(this._rawValidators);
        }
        /**
         * \@description
         * Async validator function composed of all the async validators registered with this
         * directive.
         * @return {?}
         */

      }, {
        key: "asyncValidator",
        get: function get() {
          return composeAsyncValidators(this._rawAsyncValidators);
        }
        /**
         * \@description
         * The `FormControl` bound to this directive.
         * @return {?}
         */

      }, {
        key: "control",
        get: function get() {
          return this.form;
        }
      }]);

      return FormControlDirective;
    }(NgControl);
    /**
     * \@description
     * Static property used to track whether any ngModel warnings have been sent across
     * all instances of FormControlDirective. Used to support warning config of "once".
     *
     * \@internal
     */


    FormControlDirective._ngModelWarningSentOnce = false;
    FormControlDirective.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
      args: [{
        selector: '[formControl]',
        providers: [formControlBinding$1],
        exportAs: 'ngForm'
      }]
    }];
    /** @nocollapse */

    FormControlDirective.ctorParameters = function () {
      return [{
        type: Array,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Self"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
          args: [NG_VALIDATORS]
        }]
      }, {
        type: Array,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Self"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
          args: [NG_ASYNC_VALIDATORS]
        }]
      }, {
        type: Array,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Self"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
          args: [NG_VALUE_ACCESSOR]
        }]
      }, {
        type: undefined,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
          args: [NG_MODEL_WITH_FORM_CONTROL_WARNING]
        }]
      }];
    };

    FormControlDirective.propDecorators = {
      form: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
        args: ['formControl']
      }],
      isDisabled: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
        args: ['disabled']
      }],
      model: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
        args: ['ngModel']
      }],
      update: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"],
        args: ['ngModelChange']
      }]
    };

    if (false) {}
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /** @type {?} */


    var formDirectiveProvider$1 = {
      provide: ControlContainer,
      useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(
      /**
      * @return {?}
      */
      function () {
        return FormGroupDirective;
      })
    };
    /**
     * \@description
     *
     * Binds an existing `FormGroup` to a DOM element.
     *
     * This directive accepts an existing `FormGroup` instance. It will then use this
     * `FormGroup` instance to match any child `FormControl`, `FormGroup`,
     * and `FormArray` instances to child `FormControlName`, `FormGroupName`,
     * and `FormArrayName` directives.
     *
     * @see [Reactive Forms Guide](guide/reactive-forms)
     * @see `AbstractControl`
     *
     * ### Register Form Group
     *
     * The following example registers a `FormGroup` with first name and last name controls,
     * and listens for the *ngSubmit* event when the button is clicked.
     *
     * {\@example forms/ts/simpleFormGroup/simple_form_group_example.ts region='Component'}
     *
     * \@ngModule ReactiveFormsModule
     * \@publicApi
     */

    var FormGroupDirective =
    /*#__PURE__*/
    function (_ControlContainer3) {
      _inherits(FormGroupDirective, _ControlContainer3);

      /**
       * @param {?} _validators
       * @param {?} _asyncValidators
       */
      function FormGroupDirective(_validators, _asyncValidators) {
        var _this33;

        _classCallCheck(this, FormGroupDirective);

        _this33 = _possibleConstructorReturn(this, _getPrototypeOf(FormGroupDirective).call(this));
        _this33._validators = _validators;
        _this33._asyncValidators = _asyncValidators;
        /**
         * \@description
         * Reports whether the form submission has been triggered.
         */

        _this33.submitted = false;
        /**
         * \@description
         * Tracks the list of added `FormControlName` instances
         */

        _this33.directives = [];
        /**
         * \@description
         * Tracks the `FormGroup` bound to this directive.
         */

        _this33.form =
        /** @type {?} */
        null;
        /**
         * \@description
         * Emits an event when the form submission has been triggered.
         */

        _this33.ngSubmit = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        return _this33;
      }
      /**
       * \@description
       * A lifecycle method called when the directive's inputs change. For internal use only.
       *
       * @param {?} changes A object of key/value pairs for the set of changed inputs.
       * @return {?}
       */


      _createClass(FormGroupDirective, [{
        key: "ngOnChanges",
        value: function ngOnChanges(changes) {
          this._checkFormPresent();

          if (changes.hasOwnProperty('form')) {
            this._updateValidators();

            this._updateDomValue();

            this._updateRegistrations();
          }
        }
        /**
         * \@description
         * Returns this directive's instance.
         * @return {?}
         */

      }, {
        key: "addControl",

        /**
         * \@description
         * Method that sets up the control directive in this group, re-calculates its value
         * and validity, and adds the instance to the internal list of directives.
         *
         * @param {?} dir The `FormControlName` directive instance.
         * @return {?}
         */
        value: function addControl(dir) {
          /** @type {?} */
          var ctrl = this.form.get(dir.path);
          setUpControl(ctrl, dir);
          ctrl.updateValueAndValidity({
            emitEvent: false
          });
          this.directives.push(dir);
          return ctrl;
        }
        /**
         * \@description
         * Retrieves the `FormControl` instance from the provided `FormControlName` directive
         *
         * @param {?} dir The `FormControlName` directive instance.
         * @return {?}
         */

      }, {
        key: "getControl",
        value: function getControl(dir) {
          return (
            /** @type {?} */
            this.form.get(dir.path)
          );
        }
        /**
         * \@description
         * Removes the `FormControlName` instance from the internal list of directives
         *
         * @param {?} dir The `FormControlName` directive instance.
         * @return {?}
         */

      }, {
        key: "removeControl",
        value: function removeControl(dir) {
          removeDir(this.directives, dir);
        }
        /**
         * Adds a new `FormGroupName` directive instance to the form.
         *
         * @param {?} dir The `FormGroupName` directive instance.
         * @return {?}
         */

      }, {
        key: "addFormGroup",
        value: function addFormGroup(dir) {
          /** @type {?} */
          var ctrl = this.form.get(dir.path);
          setUpFormContainer(ctrl, dir);
          ctrl.updateValueAndValidity({
            emitEvent: false
          });
        }
        /**
         * No-op method to remove the form group.
         *
         * @param {?} dir The `FormGroupName` directive instance.
         * @return {?}
         */

      }, {
        key: "removeFormGroup",
        value: function removeFormGroup(dir) {}
        /**
         * \@description
         * Retrieves the `FormGroup` for a provided `FormGroupName` directive instance
         *
         * @param {?} dir The `FormGroupName` directive instance.
         * @return {?}
         */

      }, {
        key: "getFormGroup",
        value: function getFormGroup(dir) {
          return (
            /** @type {?} */
            this.form.get(dir.path)
          );
        }
        /**
         * Adds a new `FormArrayName` directive instance to the form.
         *
         * @param {?} dir The `FormArrayName` directive instance.
         * @return {?}
         */

      }, {
        key: "addFormArray",
        value: function addFormArray(dir) {
          /** @type {?} */
          var ctrl = this.form.get(dir.path);
          setUpFormContainer(ctrl, dir);
          ctrl.updateValueAndValidity({
            emitEvent: false
          });
        }
        /**
         * No-op method to remove the form array.
         *
         * @param {?} dir The `FormArrayName` directive instance.
         * @return {?}
         */

      }, {
        key: "removeFormArray",
        value: function removeFormArray(dir) {}
        /**
         * \@description
         * Retrieves the `FormArray` for a provided `FormArrayName` directive instance.
         *
         * @param {?} dir The `FormArrayName` directive instance.
         * @return {?}
         */

      }, {
        key: "getFormArray",
        value: function getFormArray(dir) {
          return (
            /** @type {?} */
            this.form.get(dir.path)
          );
        }
        /**
         * Sets the new value for the provided `FormControlName` directive.
         *
         * @param {?} dir The `FormControlName` directive instance.
         * @param {?} value The new value for the directive's control.
         * @return {?}
         */

      }, {
        key: "updateModel",
        value: function updateModel(dir, value) {
          /** @type {?} */
          var ctrl =
          /** @type {?} */
          this.form.get(dir.path);
          ctrl.setValue(value);
        }
        /**
         * \@description
         * Method called with the "submit" event is triggered on the form.
         * Triggers the `ngSubmit` emitter to emit the "submit" event as its payload.
         *
         * @param {?} $event The "submit" event object
         * @return {?}
         */

      }, {
        key: "onSubmit",
        value: function onSubmit($event) {
          /** @type {?} */
          this.submitted = true;
          syncPendingControls(this.form, this.directives);
          this.ngSubmit.emit($event);
          return false;
        }
        /**
         * \@description
         * Method called when the "reset" event is triggered on the form.
         * @return {?}
         */

      }, {
        key: "onReset",
        value: function onReset() {
          this.resetForm();
        }
        /**
         * \@description
         * Resets the form to an initial value and resets its submitted status.
         *
         * @param {?=} value The new value for the form.
         * @return {?}
         */

      }, {
        key: "resetForm",
        value: function resetForm() {
          var value = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : undefined;
          this.form.reset(value);

          /** @type {?} */
          this.submitted = false;
        }
        /**
         * \@internal
         * @return {?}
         */

      }, {
        key: "_updateDomValue",
        value: function _updateDomValue() {
          var _this34 = this;

          this.directives.forEach(
          /**
          * @param {?} dir
          * @return {?}
          */
          function (dir) {
            /** @type {?} */
            var newCtrl = _this34.form.get(dir.path);

            if (dir.control !== newCtrl) {
              cleanUpControl(dir.control, dir);
              if (newCtrl) setUpControl(newCtrl, dir);

              /** @type {?} */
              dir.control = newCtrl;
            }
          });

          this.form._updateTreeValidity({
            emitEvent: false
          });
        }
        /**
         * @private
         * @return {?}
         */

      }, {
        key: "_updateRegistrations",
        value: function _updateRegistrations() {
          var _this35 = this;

          this.form._registerOnCollectionChange(
          /**
          * @return {?}
          */
          function () {
            return _this35._updateDomValue();
          });

          if (this._oldForm) this._oldForm._registerOnCollectionChange(
          /**
          * @return {?}
          */
          function () {});
          this._oldForm = this.form;
        }
        /**
         * @private
         * @return {?}
         */

      }, {
        key: "_updateValidators",
        value: function _updateValidators() {
          /** @type {?} */
          var sync = composeValidators(this._validators);
          this.form.validator = Validators.compose([
          /** @type {?} */
          this.form.validator,
          /** @type {?} */
          sync]);
          /** @type {?} */

          var async = composeAsyncValidators(this._asyncValidators);
          this.form.asyncValidator = Validators.composeAsync([
          /** @type {?} */
          this.form.asyncValidator,
          /** @type {?} */
          async]);
        }
        /**
         * @private
         * @return {?}
         */

      }, {
        key: "_checkFormPresent",
        value: function _checkFormPresent() {
          if (!this.form) {
            ReactiveErrors.missingFormException();
          }
        }
      }, {
        key: "formDirective",
        get: function get() {
          return this;
        }
        /**
         * \@description
         * Returns the `FormGroup` bound to this directive.
         * @return {?}
         */

      }, {
        key: "control",
        get: function get() {
          return this.form;
        }
        /**
         * \@description
         * Returns an array representing the path to this group. Because this directive
         * always lives at the top level of a form, it always an empty array.
         * @return {?}
         */

      }, {
        key: "path",
        get: function get() {
          return [];
        }
      }]);

      return FormGroupDirective;
    }(ControlContainer);

    FormGroupDirective.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
      args: [{
        selector: '[formGroup]',
        providers: [formDirectiveProvider$1],
        host: {
          '(submit)': 'onSubmit($event)',
          '(reset)': 'onReset()'
        },
        exportAs: 'ngForm'
      }]
    }];
    /** @nocollapse */

    FormGroupDirective.ctorParameters = function () {
      return [{
        type: Array,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Self"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
          args: [NG_VALIDATORS]
        }]
      }, {
        type: Array,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Self"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
          args: [NG_ASYNC_VALIDATORS]
        }]
      }];
    };

    FormGroupDirective.propDecorators = {
      form: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
        args: ['formGroup']
      }],
      ngSubmit: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
      }]
    };

    if (false) {}
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /** @type {?} */


    var formGroupNameProvider = {
      provide: ControlContainer,
      useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(
      /**
      * @return {?}
      */
      function () {
        return FormGroupName;
      })
    };
    /**
     * \@description
     *
     * Syncs a nested `FormGroup` to a DOM element.
     *
     * This directive can only be used with a parent `FormGroupDirective`.
     *
     * It accepts the string name of the nested `FormGroup` to link, and
     * looks for a `FormGroup` registered with that name in the parent
     * `FormGroup` instance you passed into `FormGroupDirective`.
     *
     * Use nested form groups to validate a sub-group of a
     * form separately from the rest or to group the values of certain
     * controls into their own nested object.
     *
     * @see [Reactive Forms Guide](guide/reactive-forms)
     *
     * \@usageNotes
     *
     * ### Access the group by name
     *
     * The following example uses the {\@link AbstractControl#get get} method to access the
     * associated `FormGroup`
     *
     * ```ts
     *   this.form.get('name');
     * ```
     *
     * ### Access individual controls in the group
     *
     * The following example uses the {\@link AbstractControl#get get} method to access
     * individual controls within the group using dot syntax.
     *
     * ```ts
     *   this.form.get('name.first');
     * ```
     *
     * ### Register a nested `FormGroup`.
     *
     * The following example registers a nested *name* `FormGroup` within an existing `FormGroup`,
     * and provides methods to retrieve the nested `FormGroup` and individual controls.
     *
     * {\@example forms/ts/nestedFormGroup/nested_form_group_example.ts region='Component'}
     *
     * \@ngModule ReactiveFormsModule
     * \@publicApi
     */

    var FormGroupName =
    /*#__PURE__*/
    function (_AbstractFormGroupDir2) {
      _inherits(FormGroupName, _AbstractFormGroupDir2);

      /**
       * @param {?} parent
       * @param {?} validators
       * @param {?} asyncValidators
       */
      function FormGroupName(parent, validators, asyncValidators) {
        var _this36;

        _classCallCheck(this, FormGroupName);

        _this36 = _possibleConstructorReturn(this, _getPrototypeOf(FormGroupName).call(this));
        _this36._parent = parent;
        _this36._validators = validators;
        _this36._asyncValidators = asyncValidators;
        return _this36;
      }
      /**
       * \@internal
       * @return {?}
       */


      _createClass(FormGroupName, [{
        key: "_checkParentType",
        value: function _checkParentType() {
          if (_hasInvalidParent(this._parent)) {
            ReactiveErrors.groupParentException();
          }
        }
      }]);

      return FormGroupName;
    }(AbstractFormGroupDirective);

    FormGroupName.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
      args: [{
        selector: '[formGroupName]',
        providers: [formGroupNameProvider]
      }]
    }];
    /** @nocollapse */

    FormGroupName.ctorParameters = function () {
      return [{
        type: ControlContainer,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Host"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["SkipSelf"]
        }]
      }, {
        type: Array,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Self"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
          args: [NG_VALIDATORS]
        }]
      }, {
        type: Array,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Self"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
          args: [NG_ASYNC_VALIDATORS]
        }]
      }];
    };

    FormGroupName.propDecorators = {
      name: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
        args: ['formGroupName']
      }]
    };

    if (false) {}
    /** @type {?} */


    var formArrayNameProvider = {
      provide: ControlContainer,
      useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(
      /**
      * @return {?}
      */
      function () {
        return FormArrayName;
      })
    };
    /**
     * \@description
     *
     * Syncs a nested `FormArray` to a DOM element.
     *
     * This directive is designed to be used with a parent `FormGroupDirective` (selector:
     * `[formGroup]`).
     *
     * It accepts the string name of the nested `FormArray` you want to link, and
     * will look for a `FormArray` registered with that name in the parent
     * `FormGroup` instance you passed into `FormGroupDirective`.
     *
     * @see [Reactive Forms Guide](guide/reactive-forms)
     * @see `AbstractControl`
     *
     * \@usageNotes
     *
     * ### Example
     *
     * {\@example forms/ts/nestedFormArray/nested_form_array_example.ts region='Component'}
     *
     * \@ngModule ReactiveFormsModule
     * \@publicApi
     */

    var FormArrayName =
    /*#__PURE__*/
    function (_ControlContainer4) {
      _inherits(FormArrayName, _ControlContainer4);

      /**
       * @param {?} parent
       * @param {?} validators
       * @param {?} asyncValidators
       */
      function FormArrayName(parent, validators, asyncValidators) {
        var _this37;

        _classCallCheck(this, FormArrayName);

        _this37 = _possibleConstructorReturn(this, _getPrototypeOf(FormArrayName).call(this));
        _this37._parent = parent;
        _this37._validators = validators;
        _this37._asyncValidators = asyncValidators;
        return _this37;
      }
      /**
       * \@description
       * A lifecycle method called when the directive's inputs are initialized. For internal use only.
       *
       * @throws If the directive does not have a valid parent.
       * @return {?}
       */


      _createClass(FormArrayName, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this._checkParentType();

          /** @type {?} */
          this.formDirective.addFormArray(this);
        }
        /**
         * \@description
         * A lifecycle method called before the directive's instance is destroyed. For internal use only.
         * @return {?}
         */

      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          if (this.formDirective) {
            this.formDirective.removeFormArray(this);
          }
        }
        /**
         * \@description
         * The `FormArray` bound to this directive.
         * @return {?}
         */

      }, {
        key: "_checkParentType",

        /**
         * @private
         * @return {?}
         */
        value: function _checkParentType() {
          if (_hasInvalidParent(this._parent)) {
            ReactiveErrors.arrayParentException();
          }
        }
      }, {
        key: "control",
        get: function get() {
          return (
            /** @type {?} */
            this.formDirective.getFormArray(this)
          );
        }
        /**
         * \@description
         * The top-level directive for this group if present, otherwise null.
         * @return {?}
         */

      }, {
        key: "formDirective",
        get: function get() {
          return this._parent ?
          /** @type {?} */
          this._parent.formDirective : null;
        }
        /**
         * \@description
         * Returns an array that represents the path from the top-level form to this control.
         * Each index is the string name of the control on that level.
         * @return {?}
         */

      }, {
        key: "path",
        get: function get() {
          return controlPath(this.name, this._parent);
        }
        /**
         * \@description
         * Synchronous validator function composed of all the synchronous validators registered with this
         * directive.
         * @return {?}
         */

      }, {
        key: "validator",
        get: function get() {
          return composeValidators(this._validators);
        }
        /**
         * \@description
         * Async validator function composed of all the async validators registered with this directive.
         * @return {?}
         */

      }, {
        key: "asyncValidator",
        get: function get() {
          return composeAsyncValidators(this._asyncValidators);
        }
      }]);

      return FormArrayName;
    }(ControlContainer);

    FormArrayName.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
      args: [{
        selector: '[formArrayName]',
        providers: [formArrayNameProvider]
      }]
    }];
    /** @nocollapse */

    FormArrayName.ctorParameters = function () {
      return [{
        type: ControlContainer,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Host"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["SkipSelf"]
        }]
      }, {
        type: Array,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Self"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
          args: [NG_VALIDATORS]
        }]
      }, {
        type: Array,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Self"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
          args: [NG_ASYNC_VALIDATORS]
        }]
      }];
    };

    FormArrayName.propDecorators = {
      name: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
        args: ['formArrayName']
      }]
    };

    if (false) {}
    /**
     * @param {?} parent
     * @return {?}
     */


    function _hasInvalidParent(parent) {
      return !(parent instanceof FormGroupName) && !(parent instanceof FormGroupDirective) && !(parent instanceof FormArrayName);
    }
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /** @type {?} */


    var controlNameBinding = {
      provide: NgControl,
      useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(
      /**
      * @return {?}
      */
      function () {
        return FormControlName;
      })
    };
    /**
     * \@description
     * Syncs a `FormControl` in an existing `FormGroup` to a form control
     * element by name.
     *
     * @see [Reactive Forms Guide](guide/reactive-forms)
     * @see `FormControl`
     * @see `AbstractControl`
     *
     * \@usageNotes
     *
     * ### Register `FormControl` within a group
     *
     * The following example shows how to register multiple form controls within a form group
     * and set their value.
     *
     * {\@example forms/ts/simpleFormGroup/simple_form_group_example.ts region='Component'}
     *
     * To see `formControlName` examples with different form control types, see:
     *
     * * Radio buttons: `RadioControlValueAccessor`
     * * Selects: `SelectControlValueAccessor`
     *
     * ### Use with ngModel
     *
     * Support for using the `ngModel` input property and `ngModelChange` event with reactive
     * form directives has been deprecated in Angular v6 and will be removed in Angular v7.
     *
     * Now deprecated:
     *
     * ```html
     * <form [formGroup]="form">
     *   <input formControlName="first" [(ngModel)]="value">
     * </form>
     * ```
     *
     * ```ts
     * this.value = 'some value';
     * ```
     *
     * This has been deprecated for a few reasons. First, developers have found this pattern
     * confusing. It seems like the actual `ngModel` directive is being used, but in fact it's
     * an input/output property named `ngModel` on the reactive form directive that simply
     * approximates (some of) its behavior. Specifically, it allows getting/setting the value
     * and intercepting value events. However, some of `ngModel`'s other features - like
     * delaying updates with`ngModelOptions` or exporting the directive - simply don't work,
     * which has understandably caused some confusion.
     *
     * In addition, this pattern mixes template-driven and reactive forms strategies, which
     * we generally don't recommend because it doesn't take advantage of the full benefits of
     * either strategy. Setting the value in the template violates the template-agnostic
     * principles behind reactive forms, whereas adding a `FormControl`/`FormGroup` layer in
     * the class removes the convenience of defining forms in the template.
     *
     * To update your code before v7, you'll want to decide whether to stick with reactive form
     * directives (and get/set values using reactive forms patterns) or switch over to
     * template-driven directives.
     *
     * After (choice 1 - use reactive forms):
     *
     * ```html
     * <form [formGroup]="form">
     *   <input formControlName="first">
     * </form>
     * ```
     *
     * ```ts
     * this.form.get('first').setValue('some value');
     * ```
     *
     * After (choice 2 - use template-driven forms):
     *
     * ```html
     * <input [(ngModel)]="value">
     * ```
     *
     * ```ts
     * this.value = 'some value';
     * ```
     *
     * By default, when you use this pattern, you will see a deprecation warning once in dev
     * mode. You can choose to silence this warning by providing a config for
     * `ReactiveFormsModule` at import time:
     *
     * ```ts
     * imports: [
     *   ReactiveFormsModule.withConfig({warnOnNgModelWithFormControl: 'never'})
     * ]
     * ```
     *
     * Alternatively, you can choose to surface a separate warning for each instance of this
     * pattern with a config value of `"always"`. This may help to track down where in the code
     * the pattern is being used as the code is being updated.
     *
     * \@ngModule ReactiveFormsModule
     * \@publicApi
     */

    var FormControlName =
    /*#__PURE__*/
    function (_NgControl3) {
      _inherits(FormControlName, _NgControl3);

      /**
       * @param {?} parent
       * @param {?} validators
       * @param {?} asyncValidators
       * @param {?} valueAccessors
       * @param {?} _ngModelWarningConfig
       */
      function FormControlName(parent, validators, asyncValidators, valueAccessors, _ngModelWarningConfig) {
        var _this38;

        _classCallCheck(this, FormControlName);

        _this38 = _possibleConstructorReturn(this, _getPrototypeOf(FormControlName).call(this));
        _this38._ngModelWarningConfig = _ngModelWarningConfig;
        _this38._added = false;
        /**
         * @deprecated as of v6
         */

        _this38.update = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        /**
         * \@description
         * Instance property used to track whether an ngModel warning has been sent out for this
         * particular FormControlName instance. Used to support warning config of "always".
         *
         * \@internal
         */

        _this38._ngModelWarningSent = false;
        _this38._parent = parent;
        _this38._rawValidators = validators || [];
        _this38._rawAsyncValidators = asyncValidators || [];
        _this38.valueAccessor = selectValueAccessor(_assertThisInitialized(_this38), valueAccessors);
        return _this38;
      }
      /**
       * \@description
       * Triggers a warning that this input should not be used with reactive forms.
       * @param {?} isDisabled
       * @return {?}
       */


      _createClass(FormControlName, [{
        key: "ngOnChanges",

        /**
         * \@description
         * A lifecycle method called when the directive's inputs change. For internal use only.
         *
         * @param {?} changes A object of key/value pairs for the set of changed inputs.
         * @return {?}
         */
        value: function ngOnChanges(changes) {
          if (!this._added) this._setUpControl();

          if (isPropertyUpdated(changes, this.viewModel)) {
            _ngModelWarning('formControlName', FormControlName, this, this._ngModelWarningConfig);

            this.viewModel = this.model;
            this.formDirective.updateModel(this, this.model);
          }
        }
        /**
         * \@description
         * Lifecycle method called before the directive's instance is destroyed. For internal use only.
         * @return {?}
         */

      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          if (this.formDirective) {
            this.formDirective.removeControl(this);
          }
        }
        /**
         * \@description
         * Sets the new value for the view model and emits an `ngModelChange` event.
         *
         * @param {?} newValue The new value for the view model.
         * @return {?}
         */

      }, {
        key: "viewToModelUpdate",
        value: function viewToModelUpdate(newValue) {
          this.viewModel = newValue;
          this.update.emit(newValue);
        }
        /**
         * \@description
         * Returns an array that represents the path from the top-level form to this control.
         * Each index is the string name of the control on that level.
         * @return {?}
         */

      }, {
        key: "_checkParentType",

        /**
         * @private
         * @return {?}
         */
        value: function _checkParentType() {
          if (!(this._parent instanceof FormGroupName) && this._parent instanceof AbstractFormGroupDirective) {
            ReactiveErrors.ngModelGroupException();
          } else if (!(this._parent instanceof FormGroupName) && !(this._parent instanceof FormGroupDirective) && !(this._parent instanceof FormArrayName)) {
            ReactiveErrors.controlParentException();
          }
        }
        /**
         * @private
         * @return {?}
         */

      }, {
        key: "_setUpControl",
        value: function _setUpControl() {
          this._checkParentType();

          /** @type {?} */
          this.control = this.formDirective.addControl(this);

          if (this.control.disabled &&
          /** @type {?} */
          this.valueAccessor.setDisabledState) {
            /** @type {?} */

            /** @type {?} */
            this.valueAccessor.setDisabledState(true);
          }

          this._added = true;
        }
      }, {
        key: "isDisabled",
        set: function set(isDisabled) {
          ReactiveErrors.disabledAttrWarning();
        }
      }, {
        key: "path",
        get: function get() {
          return controlPath(this.name,
          /** @type {?} */
          this._parent);
        }
        /**
         * \@description
         * The top-level directive for this group if present, otherwise null.
         * @return {?}
         */

      }, {
        key: "formDirective",
        get: function get() {
          return this._parent ? this._parent.formDirective : null;
        }
        /**
         * \@description
         * Synchronous validator function composed of all the synchronous validators
         * registered with this directive.
         * @return {?}
         */

      }, {
        key: "validator",
        get: function get() {
          return composeValidators(this._rawValidators);
        }
        /**
         * \@description
         * Async validator function composed of all the async validators registered with this
         * directive.
         * @return {?}
         */

      }, {
        key: "asyncValidator",
        get: function get() {
          return (
            /** @type {?} */
            composeAsyncValidators(this._rawAsyncValidators)
          );
        }
      }]);

      return FormControlName;
    }(NgControl);
    /**
     * \@description
     * Static property used to track whether any ngModel warnings have been sent across
     * all instances of FormControlName. Used to support warning config of "once".
     *
     * \@internal
     */


    FormControlName._ngModelWarningSentOnce = false;
    FormControlName.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
      args: [{
        selector: '[formControlName]',
        providers: [controlNameBinding]
      }]
    }];
    /** @nocollapse */

    FormControlName.ctorParameters = function () {
      return [{
        type: ControlContainer,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Host"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["SkipSelf"]
        }]
      }, {
        type: Array,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Self"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
          args: [NG_VALIDATORS]
        }]
      }, {
        type: Array,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Self"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
          args: [NG_ASYNC_VALIDATORS]
        }]
      }, {
        type: Array,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Self"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
          args: [NG_VALUE_ACCESSOR]
        }]
      }, {
        type: undefined,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
          args: [NG_MODEL_WITH_FORM_CONTROL_WARNING]
        }]
      }];
    };

    FormControlName.propDecorators = {
      name: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
        args: ['formControlName']
      }],
      isDisabled: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
        args: ['disabled']
      }],
      model: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
        args: ['ngModel']
      }],
      update: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"],
        args: ['ngModelChange']
      }]
    };

    if (false) {}
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * \@description
     * An interface implemented by classes that perform synchronous validation.
     *
     * \@usageNotes
     *
     * ### Provide a custom validator
     *
     * The following example implements the `Validator` interface to create a
     * validator directive with a custom error key.
     *
     * ```typescript
     * \@Directive({
     *   selector: '[customValidator]',
     *   providers: [{provide: NG_VALIDATORS, useExisting: CustomValidatorDirective, multi: true}]
     * })
     * class CustomValidatorDirective implements Validator {
     *   validate(control: AbstractControl): ValidationErrors|null {
     *     return {'custom': true};
     *   }
     * }
     * ```
     *
     * \@publicApi
     * @record
     */


    function Validator() {}

    if (false) {}
    /**
     * \@description
     * An interface implemented by classes that perform asynchronous validation.
     *
     * \@usageNotes
     *
     * ### Provide a custom async validator directive
     *
     * The following example implements the `AsyncValidator` interface to create an
     * async validator directive with a custom error key.
     *
     * ```typescript
     * import { of as observableOf } from 'rxjs';
     *
     * \@Directive({
     *   selector: '[customAsyncValidator]',
     *   providers: [{provide: NG_ASYNC_VALIDATORS, useExisting: CustomAsyncValidatorDirective, multi:
     * true}]
     * })
     * class CustomAsyncValidatorDirective implements AsyncValidator {
     *   validate(control: AbstractControl): Observable<ValidationErrors|null> {
     *     return observableOf({'custom': true});
     *   }
     * }
     * ```
     *
     * \@publicApi
     * @record
     */


    function AsyncValidator() {}

    if (false) {}
    /**
     * \@description
     * Provider which adds `RequiredValidator` to the `NG_VALIDATORS` multi-provider list.
     * @type {?}
     */


    var REQUIRED_VALIDATOR = {
      provide: NG_VALIDATORS,
      useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(
      /**
      * @return {?}
      */
      function () {
        return RequiredValidator;
      }),
      multi: true
    };
    /**
     * \@description
     * Provider which adds `CheckboxRequiredValidator` to the `NG_VALIDATORS` multi-provider list.
     * @type {?}
     */

    var CHECKBOX_REQUIRED_VALIDATOR = {
      provide: NG_VALIDATORS,
      useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(
      /**
      * @return {?}
      */
      function () {
        return CheckboxRequiredValidator;
      }),
      multi: true
    };
    /**
     * \@description
     * A directive that adds the `required` validator to any controls marked with the
     * `required` attribute. The directive is provided with the `NG_VALIDATORS` multi-provider list.
     *
     * @see [Form Validation](guide/form-validation)
     *
     * \@usageNotes
     *
     * ### Adding a required validator using template-driven forms
     *
     * ```
     * <input name="fullName" ngModel required>
     * ```
     *
     * \@ngModule FormsModule
     * \@ngModule ReactiveFormsModule
     * \@publicApi
     */

    var RequiredValidator =
    /*#__PURE__*/
    function () {
      function RequiredValidator() {
        _classCallCheck(this, RequiredValidator);
      }

      _createClass(RequiredValidator, [{
        key: "validate",

        /**
         * \@description
         * Method that validates whether the control is empty.
         * Returns the validation result if enabled, otherwise null.
         * @param {?} control
         * @return {?}
         */
        value: function validate(control) {
          return this.required ? Validators.required(control) : null;
        }
        /**
         * \@description
         * Registers a callback function to call when the validator inputs change.
         *
         * @param {?} fn The callback function
         * @return {?}
         */

      }, {
        key: "registerOnValidatorChange",
        value: function registerOnValidatorChange(fn) {
          this._onChange = fn;
        }
      }, {
        key: "required",

        /**
         * \@description
         * Tracks changes to the required attribute bound to this directive.
         * @return {?}
         */
        get: function get() {
          return this._required;
        }
        /**
         * @param {?} value
         * @return {?}
         */
        ,
        set: function set(value) {
          this._required = value != null && value !== false && "".concat(value) !== 'false';
          if (this._onChange) this._onChange();
        }
      }]);

      return RequiredValidator;
    }();

    RequiredValidator.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
      args: [{
        selector: ':not([type=checkbox])[required][formControlName],:not([type=checkbox])[required][formControl],:not([type=checkbox])[required][ngModel]',
        providers: [REQUIRED_VALIDATOR],
        host: {
          '[attr.required]': 'required ? "" : null'
        }
      }]
    }];
    RequiredValidator.propDecorators = {
      required: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }]
    };

    if (false) {}
    /**
     * A Directive that adds the `required` validator to checkbox controls marked with the
     * `required` attribute. The directive is provided with the `NG_VALIDATORS` multi-provider list.
     *
     * @see [Form Validation](guide/form-validation)
     *
     * \@usageNotes
     *
     * ### Adding a required checkbox validator using template-driven forms
     *
     * The following example shows how to add a checkbox required validator to an input attached to an ngModel binding.
     *
     * ```
     * <input type="checkbox" name="active" ngModel required>
     * ```
     *
     * \@publicApi
     * \@ngModule FormsModule
     * \@ngModule ReactiveFormsModule
     */


    var CheckboxRequiredValidator =
    /*#__PURE__*/
    function (_RequiredValidator) {
      _inherits(CheckboxRequiredValidator, _RequiredValidator);

      function CheckboxRequiredValidator() {
        _classCallCheck(this, CheckboxRequiredValidator);

        return _possibleConstructorReturn(this, _getPrototypeOf(CheckboxRequiredValidator).apply(this, arguments));
      }

      _createClass(CheckboxRequiredValidator, [{
        key: "validate",

        /**
         * \@description
         * Method that validates whether or not the checkbox has been checked.
         * Returns the validation result if enabled, otherwise null.
         * @param {?} control
         * @return {?}
         */
        value: function validate(control) {
          return this.required ? Validators.requiredTrue(control) : null;
        }
      }]);

      return CheckboxRequiredValidator;
    }(RequiredValidator);

    CheckboxRequiredValidator.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
      args: [{
        selector: 'input[type=checkbox][required][formControlName],input[type=checkbox][required][formControl],input[type=checkbox][required][ngModel]',
        providers: [CHECKBOX_REQUIRED_VALIDATOR],
        host: {
          '[attr.required]': 'required ? "" : null'
        }
      }]
    }];
    /**
     * \@description
     * Provider which adds `EmailValidator` to the `NG_VALIDATORS` multi-provider list.
     * @type {?}
     */

    var EMAIL_VALIDATOR = {
      provide: NG_VALIDATORS,
      useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(
      /**
      * @return {?}
      */
      function () {
        return EmailValidator;
      }),
      multi: true
    };
    /**
     * A directive that adds the `email` validator to controls marked with the
     * `email` attribute. The directive is provided with the `NG_VALIDATORS` multi-provider list.
     *
     * @see [Form Validation](guide/form-validation)
     *
     * \@usageNotes
     *
     * ### Adding an email validator
     *
     * The following example shows how to add an email validator to an input attached to an ngModel binding.
     *
     * ```
     * <input type="email" name="email" ngModel email>
     * <input type="email" name="email" ngModel email="true">
     * <input type="email" name="email" ngModel [email]="true">
     * ```
     *
     * \@publicApi
     * \@ngModule FormsModule
     * \@ngModule ReactiveFormsModule
     */

    var EmailValidator =
    /*#__PURE__*/
    function () {
      function EmailValidator() {
        _classCallCheck(this, EmailValidator);
      }

      _createClass(EmailValidator, [{
        key: "validate",

        /**
         * \@description
         * Method that validates whether an email address is valid.
         * Returns the validation result if enabled, otherwise null.
         * @param {?} control
         * @return {?}
         */
        value: function validate(control) {
          return this._enabled ? Validators.email(control) : null;
        }
        /**
         * \@description
         * Registers a callback function to call when the validator inputs change.
         *
         * @param {?} fn The callback function
         * @return {?}
         */

      }, {
        key: "registerOnValidatorChange",
        value: function registerOnValidatorChange(fn) {
          this._onChange = fn;
        }
      }, {
        key: "email",

        /**
         * \@description
         * Tracks changes to the email attribute bound to this directive.
         * @param {?} value
         * @return {?}
         */
        set: function set(value) {
          this._enabled = value === '' || value === true || value === 'true';
          if (this._onChange) this._onChange();
        }
      }]);

      return EmailValidator;
    }();

    EmailValidator.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
      args: [{
        selector: '[email][formControlName],[email][formControl],[email][ngModel]',
        providers: [EMAIL_VALIDATOR]
      }]
    }];
    EmailValidator.propDecorators = {
      email: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }]
    };

    if (false) {}
    /**
     * \@description
     * A function that receives a control and synchronously returns a map of
     * validation errors if present, otherwise null.
     *
     * \@publicApi
     * @record
     */


    function ValidatorFn() {}
    /**
     * \@description
     * A function that receives a control and returns a Promise or observable
     * that emits validation errors if present, otherwise null.
     *
     * \@publicApi
     * @record
     */


    function AsyncValidatorFn() {}
    /**
     * \@description
     * Provider which adds `MinLengthValidator` to the `NG_VALIDATORS` multi-provider list.
     * @type {?}
     */


    var MIN_LENGTH_VALIDATOR = {
      provide: NG_VALIDATORS,
      useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(
      /**
      * @return {?}
      */
      function () {
        return MinLengthValidator;
      }),
      multi: true
    };
    /**
     * A directive that adds minimum length validation to controls marked with the
     * `minlength` attribute. The directive is provided with the `NG_VALIDATORS` mult-provider list.
     *
     * @see [Form Validation](guide/form-validation)
     *
     * \@usageNotes
     *
     * ### Adding a minimum length validator
     *
     * The following example shows how to add a minimum length validator to an input attached to an
     * ngModel binding.
     *
     * ```html
     * <input name="firstName" ngModel minlength="4">
     * ```
     *
     * \@ngModule ReactiveFormsModule
     * \@ngModule FormsModule
     * \@publicApi
     */

    var MinLengthValidator =
    /*#__PURE__*/
    function () {
      function MinLengthValidator() {
        _classCallCheck(this, MinLengthValidator);
      }

      _createClass(MinLengthValidator, [{
        key: "ngOnChanges",

        /**
         * \@description
         * A lifecycle method called when the directive's inputs change. For internal use
         * only.
         *
         * @param {?} changes A object of key/value pairs for the set of changed inputs.
         * @return {?}
         */
        value: function ngOnChanges(changes) {
          if ('minlength' in changes) {
            this._createValidator();

            if (this._onChange) this._onChange();
          }
        }
        /**
         * \@description
         * Method that validates whether the value meets a minimum length
         * requirement. Returns the validation result if enabled, otherwise null.
         * @param {?} control
         * @return {?}
         */

      }, {
        key: "validate",
        value: function validate(control) {
          return this.minlength == null ? null : this._validator(control);
        }
        /**
         * \@description
         * Registers a callback function to call when the validator inputs change.
         *
         * @param {?} fn The callback function
         * @return {?}
         */

      }, {
        key: "registerOnValidatorChange",
        value: function registerOnValidatorChange(fn) {
          this._onChange = fn;
        }
        /**
         * @private
         * @return {?}
         */

      }, {
        key: "_createValidator",
        value: function _createValidator() {
          this._validator = Validators.minLength(parseInt(this.minlength, 10));
        }
      }]);

      return MinLengthValidator;
    }();

    MinLengthValidator.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
      args: [{
        selector: '[minlength][formControlName],[minlength][formControl],[minlength][ngModel]',
        providers: [MIN_LENGTH_VALIDATOR],
        host: {
          '[attr.minlength]': 'minlength ? minlength : null'
        }
      }]
    }];
    MinLengthValidator.propDecorators = {
      minlength: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }]
    };

    if (false) {}
    /**
     * \@description
     * Provider which adds `MaxLengthValidator` to the `NG_VALIDATORS` multi-provider list.
     * @type {?}
     */


    var MAX_LENGTH_VALIDATOR = {
      provide: NG_VALIDATORS,
      useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(
      /**
      * @return {?}
      */
      function () {
        return MaxLengthValidator;
      }),
      multi: true
    };
    /**
     * A directive that adds max length validation to controls marked with the
     * `maxlength` attribute. The directive is provided with the `NG_VALIDATORS` multi-provider list.
     *
     * @see [Form Validation](guide/form-validation)
     *
     * \@usageNotes
     *
     * ### Adding a maximum length validator
     *
     * The following example shows how to add a maximum length validator to an input attached to an
     * ngModel binding.
     *
     * ```html
     * <input name="firstName" ngModel maxlength="25">
     * ```
     *
     * \@ngModule ReactiveFormsModule
     * \@ngModule FormsModule
     * \@publicApi
     */

    var MaxLengthValidator =
    /*#__PURE__*/
    function () {
      function MaxLengthValidator() {
        _classCallCheck(this, MaxLengthValidator);
      }

      _createClass(MaxLengthValidator, [{
        key: "ngOnChanges",

        /**
         * \@description
         * A lifecycle method called when the directive's inputs change. For internal use
         * only.
         *
         * @param {?} changes A object of key/value pairs for the set of changed inputs.
         * @return {?}
         */
        value: function ngOnChanges(changes) {
          if ('maxlength' in changes) {
            this._createValidator();

            if (this._onChange) this._onChange();
          }
        }
        /**
         * \@description
         * Method that validates whether the value exceeds
         * the maximum length requirement.
         * @param {?} control
         * @return {?}
         */

      }, {
        key: "validate",
        value: function validate(control) {
          return this.maxlength != null ? this._validator(control) : null;
        }
        /**
         * \@description
         * Registers a callback function to call when the validator inputs change.
         *
         * @param {?} fn The callback function
         * @return {?}
         */

      }, {
        key: "registerOnValidatorChange",
        value: function registerOnValidatorChange(fn) {
          this._onChange = fn;
        }
        /**
         * @private
         * @return {?}
         */

      }, {
        key: "_createValidator",
        value: function _createValidator() {
          this._validator = Validators.maxLength(parseInt(this.maxlength, 10));
        }
      }]);

      return MaxLengthValidator;
    }();

    MaxLengthValidator.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
      args: [{
        selector: '[maxlength][formControlName],[maxlength][formControl],[maxlength][ngModel]',
        providers: [MAX_LENGTH_VALIDATOR],
        host: {
          '[attr.maxlength]': 'maxlength ? maxlength : null'
        }
      }]
    }];
    MaxLengthValidator.propDecorators = {
      maxlength: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }]
    };

    if (false) {}
    /**
     * \@description
     * Provider which adds `PatternValidator` to the `NG_VALIDATORS` multi-provider list.
     * @type {?}
     */


    var PATTERN_VALIDATOR = {
      provide: NG_VALIDATORS,
      useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(
      /**
      * @return {?}
      */
      function () {
        return PatternValidator;
      }),
      multi: true
    };
    /**
     * \@description
     * A directive that adds regex pattern validation to controls marked with the
     * `pattern` attribute. The regex must match the entire control value.
     * The directive is provided with the `NG_VALIDATORS` multi-provider list.
     *
     * @see [Form Validation](guide/form-validation)
     *
     * \@usageNotes
     *
     * ### Adding a pattern validator
     *
     * The following example shows how to add a pattern validator to an input attached to an
     * ngModel binding.
     *
     * ```html
     * <input name="firstName" ngModel pattern="[a-zA-Z ]*">
     * ```
     *
     * \@ngModule ReactiveFormsModule
     * \@ngModule FormsModule
     * \@publicApi
     */

    var PatternValidator =
    /*#__PURE__*/
    function () {
      function PatternValidator() {
        _classCallCheck(this, PatternValidator);
      }

      _createClass(PatternValidator, [{
        key: "ngOnChanges",

        /**
         * \@description
         * A lifecycle method called when the directive's inputs change. For internal use
         * only.
         *
         * @param {?} changes A object of key/value pairs for the set of changed inputs.
         * @return {?}
         */
        value: function ngOnChanges(changes) {
          if ('pattern' in changes) {
            this._createValidator();

            if (this._onChange) this._onChange();
          }
        }
        /**
         * \@description
         * Method that validates whether the value matches the
         * the pattern requirement.
         * @param {?} control
         * @return {?}
         */

      }, {
        key: "validate",
        value: function validate(control) {
          return this._validator(control);
        }
        /**
         * \@description
         * Registers a callback function to call when the validator inputs change.
         *
         * @param {?} fn The callback function
         * @return {?}
         */

      }, {
        key: "registerOnValidatorChange",
        value: function registerOnValidatorChange(fn) {
          this._onChange = fn;
        }
        /**
         * @private
         * @return {?}
         */

      }, {
        key: "_createValidator",
        value: function _createValidator() {
          this._validator = Validators.pattern(this.pattern);
        }
      }]);

      return PatternValidator;
    }();

    PatternValidator.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
      args: [{
        selector: '[pattern][formControlName],[pattern][formControl],[pattern][ngModel]',
        providers: [PATTERN_VALIDATOR],
        host: {
          '[attr.pattern]': 'pattern ? pattern : null'
        }
      }]
    }];
    PatternValidator.propDecorators = {
      pattern: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }]
    };

    if (false) {}
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /** @type {?} */


    var SHARED_FORM_DIRECTIVES = [ɵNgNoValidate, NgSelectOption, ɵNgSelectMultipleOption, DefaultValueAccessor, NumberValueAccessor, RangeValueAccessor, CheckboxControlValueAccessor, SelectControlValueAccessor, SelectMultipleControlValueAccessor, RadioControlValueAccessor, NgControlStatus, NgControlStatusGroup, RequiredValidator, MinLengthValidator, MaxLengthValidator, PatternValidator, CheckboxRequiredValidator, EmailValidator];
    /** @type {?} */

    var TEMPLATE_DRIVEN_DIRECTIVES = [NgModel, NgModelGroup, NgForm, NgFormSelectorWarning];
    /** @type {?} */

    var REACTIVE_DRIVEN_DIRECTIVES = [FormControlDirective, FormGroupDirective, FormControlName, FormGroupName, FormArrayName];
    /**
     * Internal module used for sharing directives between FormsModule and ReactiveFormsModule
     */

    var ɵInternalFormsSharedModule = function ɵInternalFormsSharedModule() {
      _classCallCheck(this, ɵInternalFormsSharedModule);
    };

    ɵInternalFormsSharedModule.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
      args: [{
        declarations: SHARED_FORM_DIRECTIVES,
        exports: SHARED_FORM_DIRECTIVES
      }]
    }];
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @param {?} options
     * @return {?}
     */

    function isAbstractControlOptions(options) {
      return (
        /** @type {?} */
        options.asyncValidators !== undefined ||
        /** @type {?} */
        options.validators !== undefined ||
        /** @type {?} */
        options.updateOn !== undefined
      );
    }
    /**
     * \@description
     * Creates an `AbstractControl` from a user-specified configuration.
     *
     * The `FormBuilder` provides syntactic sugar that shortens creating instances of a `FormControl`,
     * `FormGroup`, or `FormArray`. It reduces the amount of boilerplate needed to build complex
     * forms.
     *
     * @see [Reactive Forms Guide](/guide/reactive-forms)
     *
     * \@publicApi
     */


    var FormBuilder =
    /*#__PURE__*/
    function () {
      function FormBuilder() {
        _classCallCheck(this, FormBuilder);
      }

      _createClass(FormBuilder, [{
        key: "group",

        /**
         * \@description
         * Construct a new `FormGroup` instance.
         *
         * @param {?} controlsConfig A collection of child controls. The key for each child is the name
         * under which it is registered.
         *
         * @param {?=} options Configuration options object for the `FormGroup`. The object can
         * have two shapes:
         *
         * 1) `AbstractControlOptions` object (preferred), which consists of:
         * * `validators`: A synchronous validator function, or an array of validator functions
         * * `asyncValidators`: A single async validator or array of async validator functions
         * * `updateOn`: The event upon which the control should be updated (options: 'change' | 'blur' |
         * submit')
         *
         * 2) Legacy configuration object, which consists of:
         * * `validator`: A synchronous validator function, or an array of validator functions
         * * `asyncValidator`: A single async validator or array of async validator functions
         *
         * @return {?}
         */
        value: function group(controlsConfig) {
          var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;

          /** @type {?} */
          var controls = this._reduceControls(controlsConfig);
          /** @type {?} */


          var validators = null;
          /** @type {?} */

          var asyncValidators = null;
          /** @type {?} */

          var updateOn = undefined;

          if (options != null) {
            if (isAbstractControlOptions(options)) {
              // `options` are `AbstractControlOptions`
              validators = options.validators != null ? options.validators : null;
              asyncValidators = options.asyncValidators != null ? options.asyncValidators : null;
              updateOn = options.updateOn != null ? options.updateOn : undefined;
            } else {
              // `options` are legacy form group options
              validators = options['validator'] != null ? options['validator'] : null;
              asyncValidators = options['asyncValidator'] != null ? options['asyncValidator'] : null;
            }
          }

          return new FormGroup(controls, {
            asyncValidators: asyncValidators,
            updateOn: updateOn,
            validators: validators
          });
        }
        /**
         * \@description
         * Construct a new `FormControl` with the given state, validators and options.
         *
         * \@usageNotes
         *
         * ### Initialize a control as disabled
         *
         * The following example returns a control with an initial value in a disabled state.
         *
         * <code-example path="forms/ts/formBuilder/form_builder_example.ts" region="disabled-control">
         * </code-example>
         * @param {?} formState Initializes the control with an initial state value, or
         * with an object that contains both a value and a disabled status.
         *
         * @param {?=} validatorOrOpts A synchronous validator function, or an array of
         * such functions, or an `AbstractControlOptions` object that contains
         * validation functions and a validation trigger.
         *
         * @param {?=} asyncValidator A single async validator or array of async validator
         * functions.
         *
         * @return {?}
         */

      }, {
        key: "control",
        value: function control(formState, validatorOrOpts, asyncValidator) {
          return new FormControl(formState, validatorOrOpts, asyncValidator);
        }
        /**
         * Constructs a new `FormArray` from the given array of configurations,
         * validators and options.
         *
         * @param {?} controlsConfig An array of child controls or control configs. Each
         * child control is given an index when it is registered.
         *
         * @param {?=} validatorOrOpts A synchronous validator function, or an array of
         * such functions, or an `AbstractControlOptions` object that contains
         * validation functions and a validation trigger.
         *
         * @param {?=} asyncValidator A single async validator or array of async validator
         * functions.
         * @return {?}
         */

      }, {
        key: "array",
        value: function array(controlsConfig, validatorOrOpts, asyncValidator) {
          var _this39 = this;

          /** @type {?} */
          var controls = controlsConfig.map(
          /**
          * @param {?} c
          * @return {?}
          */
          function (c) {
            return _this39._createControl(c);
          });
          return new FormArray(controls, validatorOrOpts, asyncValidator);
        }
        /**
         * \@internal
         * @param {?} controlsConfig
         * @return {?}
         */

      }, {
        key: "_reduceControls",
        value: function _reduceControls(controlsConfig) {
          var _this40 = this;

          /** @type {?} */
          var controls = {};
          Object.keys(controlsConfig).forEach(
          /**
          * @param {?} controlName
          * @return {?}
          */
          function (controlName) {
            controls[controlName] = _this40._createControl(controlsConfig[controlName]);
          });
          return controls;
        }
        /**
         * \@internal
         * @param {?} controlConfig
         * @return {?}
         */

      }, {
        key: "_createControl",
        value: function _createControl(controlConfig) {
          if (controlConfig instanceof FormControl || controlConfig instanceof FormGroup || controlConfig instanceof FormArray) {
            return controlConfig;
          } else if (Array.isArray(controlConfig)) {
            /** @type {?} */
            var value = controlConfig[0];
            /** @type {?} */

            var validator = controlConfig.length > 1 ? controlConfig[1] : null;
            /** @type {?} */

            var asyncValidator = controlConfig.length > 2 ? controlConfig[2] : null;
            return this.control(value, validator, asyncValidator);
          } else {
            return this.control(controlConfig);
          }
        }
      }]);

      return FormBuilder;
    }();

    FormBuilder.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }];
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * \@publicApi
     * @type {?}
     */

    var VERSION = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["Version"]('8.2.14');
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * Exports the required providers and directives for template-driven forms,
     * making them available for import by NgModules that import this module.
     *
     * @see [Forms Guide](/guide/forms)
     *
     * \@publicApi
     */

    var FormsModule =
    /*#__PURE__*/
    function () {
      function FormsModule() {
        _classCallCheck(this, FormsModule);
      }

      _createClass(FormsModule, null, [{
        key: "withConfig",

        /**
         * \@description
         * Provides options for configuring the template-driven forms module.
         *
         * @param {?} opts An object of configuration options
         * * `warnOnDeprecatedNgFormSelector` Configures when to emit a warning when the deprecated
         * `ngForm` selector is used.
         * @return {?}
         */
        value: function withConfig(opts) {
          return {
            ngModule: FormsModule,
            providers: [{
              provide: NG_FORM_SELECTOR_WARNING,
              useValue: opts.warnOnDeprecatedNgFormSelector
            }]
          };
        }
      }]);

      return FormsModule;
    }();

    FormsModule.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
      args: [{
        declarations: TEMPLATE_DRIVEN_DIRECTIVES,
        providers: [RadioControlRegistry],
        exports: [ɵInternalFormsSharedModule, TEMPLATE_DRIVEN_DIRECTIVES]
      }]
    }];
    /**
     * Exports the required infrastructure and directives for reactive forms,
     * making them available for import by NgModules that import this module.
     * @see [Forms](guide/reactive-forms)
     *
     * @see [Reactive Forms Guide](/guide/reactive-forms)
     *
     * \@publicApi
     */

    var ReactiveFormsModule =
    /*#__PURE__*/
    function () {
      function ReactiveFormsModule() {
        _classCallCheck(this, ReactiveFormsModule);
      }

      _createClass(ReactiveFormsModule, null, [{
        key: "withConfig",

        /**
         * \@description
         * Provides options for configuring the reactive forms module.
         *
         * @param {?} opts An object of configuration options
         * * `warnOnNgModelWithFormControl` Configures when to emit a warning when an `ngModel`
         * binding is used with reactive form directives.
         * @return {?}
         */
        value: function withConfig(opts) {
          return {
            ngModule: ReactiveFormsModule,
            providers: [{
              provide: NG_MODEL_WITH_FORM_CONTROL_WARNING,
              useValue: opts.warnOnNgModelWithFormControl
            }]
          };
        }
      }]);

      return ReactiveFormsModule;
    }();

    ReactiveFormsModule.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
      args: [{
        declarations: [REACTIVE_DRIVEN_DIRECTIVES],
        providers: [FormBuilder, RadioControlRegistry],
        exports: [ɵInternalFormsSharedModule, REACTIVE_DRIVEN_DIRECTIVES]
      }]
    }];
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * Generated bundle index. Do not edit.
     */
    //# sourceMappingURL=forms.js.map

    /***/
  },

  /***/
  "./node_modules/ngx-bootstrap/tabs/fesm2015/ngx-bootstrap-tabs.js":
  /*!************************************************************************!*\
    !*** ./node_modules/ngx-bootstrap/tabs/fesm2015/ngx-bootstrap-tabs.js ***!
    \************************************************************************/

  /*! exports provided: NgTranscludeDirective, TabDirective, TabHeadingDirective, TabsModule, TabsetComponent, TabsetConfig */

  /***/
  function node_modulesNgxBootstrapTabsFesm2015NgxBootstrapTabsJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NgTranscludeDirective", function () {
      return NgTranscludeDirective;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TabDirective", function () {
      return TabDirective;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TabHeadingDirective", function () {
      return TabHeadingDirective;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TabsModule", function () {
      return TabsModule;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TabsetComponent", function () {
      return TabsetComponent;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TabsetConfig", function () {
      return TabsetConfig;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */


    var NgTranscludeDirective =
    /*#__PURE__*/
    function () {
      /**
       * @param {?} viewRef
       */
      function NgTranscludeDirective(viewRef) {
        _classCallCheck(this, NgTranscludeDirective);

        this.viewRef = viewRef;
      }
      /**
       * @param {?} templateRef
       * @return {?}
       */


      _createClass(NgTranscludeDirective, [{
        key: "ngTransclude",
        set: function set(templateRef) {
          this._ngTransclude = templateRef;

          if (templateRef) {
            this.viewRef.createEmbeddedView(templateRef);
          }
        }
        /* tslint:disable-next-line:no-any */

        /**
         * @return {?}
         */
        ,
        get: function get() {
          return this._ngTransclude;
        }
      }]);

      return NgTranscludeDirective;
    }();

    NgTranscludeDirective.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
      args: [{
        selector: '[ngTransclude]'
      }]
    }];
    /** @nocollapse */

    NgTranscludeDirective.ctorParameters = function () {
      return [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"]
      }];
    };

    NgTranscludeDirective.propDecorators = {
      ngTransclude: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }]
    };
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    var TabsetConfig = function TabsetConfig() {
      _classCallCheck(this, TabsetConfig);

      /**
       * provides default navigation context class: 'tabs' or 'pills'
       */
      this.type = 'tabs';
    };

    TabsetConfig.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }];
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    // todo: add active event to tab
    // todo: fix? mixing static and dynamic tabs position tabs in order of creation

    var TabsetComponent =
    /*#__PURE__*/
    function () {
      /**
       * @param {?} config
       * @param {?} renderer
       * @param {?} elementRef
       */
      function TabsetComponent(config, renderer, elementRef) {
        _classCallCheck(this, TabsetComponent);

        this.renderer = renderer;
        this.elementRef = elementRef;
        this.clazz = true;
        this.tabs = [];
        this.classMap = {};
        Object.assign(this, config);
      }
      /**
       * if true tabs will be placed vertically
       * @return {?}
       */


      _createClass(TabsetComponent, [{
        key: "ngOnDestroy",

        /**
         * @return {?}
         */
        value: function ngOnDestroy() {
          this.isDestroyed = true;
        }
        /**
         * @param {?} tab
         * @return {?}
         */

      }, {
        key: "addTab",
        value: function addTab(tab) {
          this.tabs.push(tab);
          tab.active = this.tabs.length === 1 && typeof tab.active === 'undefined';
        }
        /**
         * @param {?} tab
         * @param {?=} options
         * @return {?}
         */

      }, {
        key: "removeTab",
        value: function removeTab(tab) {
          var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {
            reselect: true,
            emit: true
          };

          /** @type {?} */
          var index = this.tabs.indexOf(tab);

          if (index === -1 || this.isDestroyed) {
            return;
          } // Select a new tab if the tab to be removed is selected and not destroyed


          if (options.reselect && tab.active && this.hasAvailableTabs(index)) {
            /** @type {?} */
            var newActiveIndex = this.getClosestTabIndex(index);
            this.tabs[newActiveIndex].active = true;
          }

          if (options.emit) {
            tab.removed.emit(tab);
          }

          this.tabs.splice(index, 1);

          if (tab.elementRef.nativeElement.parentNode) {
            this.renderer.removeChild(tab.elementRef.nativeElement.parentNode, tab.elementRef.nativeElement);
          }
        }
        /* tslint:disable-next-line: cyclomatic-complexity */

        /**
         * @param {?} event
         * @param {?} index
         * @return {?}
         */

      }, {
        key: "keyNavActions",
        value: function keyNavActions(event, index) {
          /** @type {?} */
          var list = Array.from(this.elementRef.nativeElement.querySelectorAll('.nav-link')); // const activeElList = list.filter((el: HTMLElement) => !el.classList.contains('disabled'));
          // tslint:disable-next-line:deprecation

          if (event.keyCode === 13 || event.key === 'Enter' || event.keyCode === 32 || event.key === 'Space') {
            event.preventDefault();
            /** @type {?} */

            var currentTab = list[index % list.length];
            currentTab.click();
            return;
          } // tslint:disable-next-line:deprecation


          if (event.keyCode === 39 || event.key === 'RightArrow') {
            /** @type {?} */
            var nextTab;
            /** @type {?} */

            var shift = 1;

            do {
              nextTab = list[(index + shift) % list.length];
              shift++;
            } while (nextTab.classList.contains('disabled'));

            nextTab.focus();
            return;
          } // tslint:disable-next-line:deprecation


          if (event.keyCode === 37 || event.key === 'LeftArrow') {
            /** @type {?} */
            var previousTab;
            /** @type {?} */

            var _shift = 1;
            /** @type {?} */

            var i = index;

            do {
              if (i - _shift < 0) {
                i = list.length - 1;
                previousTab = list[i];
                _shift = 0;
              } else {
                previousTab = list[i - _shift];
              }

              _shift++;
            } while (previousTab.classList.contains('disabled'));

            previousTab.focus();
            return;
          } // tslint:disable-next-line:deprecation


          if (event.keyCode === 36 || event.key === 'Home') {
            event.preventDefault();
            /** @type {?} */

            var firstTab;
            /** @type {?} */

            var _shift2 = 0;

            do {
              firstTab = list[_shift2 % list.length];
              _shift2++;
            } while (firstTab.classList.contains('disabled'));

            firstTab.focus();
            return;
          } // tslint:disable-next-line:deprecation


          if (event.keyCode === 35 || event.key === 'End') {
            event.preventDefault();
            /** @type {?} */

            var lastTab;
            /** @type {?} */

            var _shift3 = 1;
            /** @type {?} */

            var _i5 = index;

            do {
              if (_i5 - _shift3 < 0) {
                _i5 = list.length - 1;
                lastTab = list[_i5];
                _shift3 = 0;
              } else {
                lastTab = list[_i5 - _shift3];
              }

              _shift3++;
            } while (lastTab.classList.contains('disabled'));

            lastTab.focus();
            return;
          } // tslint:disable-next-line:deprecation


          if (event.keyCode === 46 || event.key === 'Delete') {
            if (this.tabs[index].removable) {
              this.removeTab(this.tabs[index]);

              if (list[index + 1]) {
                list[(index + 1) % list.length].focus();
                return;
              }

              if (list[list.length - 1]) {
                list[0].focus();
              }
            }
          }
        }
        /**
         * @protected
         * @param {?} index
         * @return {?}
         */

      }, {
        key: "getClosestTabIndex",
        value: function getClosestTabIndex(index) {
          /** @type {?} */
          var tabsLength = this.tabs.length;

          if (!tabsLength) {
            return -1;
          }

          for (var step = 1; step <= tabsLength; step += 1) {
            /** @type {?} */
            var prevIndex = index - step;
            /** @type {?} */

            var nextIndex = index + step;

            if (this.tabs[prevIndex] && !this.tabs[prevIndex].disabled) {
              return prevIndex;
            }

            if (this.tabs[nextIndex] && !this.tabs[nextIndex].disabled) {
              return nextIndex;
            }
          }

          return -1;
        }
        /**
         * @protected
         * @param {?} index
         * @return {?}
         */

      }, {
        key: "hasAvailableTabs",
        value: function hasAvailableTabs(index) {
          /** @type {?} */
          var tabsLength = this.tabs.length;

          if (!tabsLength) {
            return false;
          }

          for (var i = 0; i < tabsLength; i += 1) {
            if (!this.tabs[i].disabled && i !== index) {
              return true;
            }
          }

          return false;
        }
        /**
         * @protected
         * @return {?}
         */

      }, {
        key: "setClassMap",
        value: function setClassMap() {
          this.classMap = _defineProperty({
            'nav-stacked': this.vertical,
            'flex-column': this.vertical,
            'nav-justified': this.justified
          }, "nav-".concat(this.type), true);
        }
      }, {
        key: "vertical",
        get: function get() {
          return this._vertical;
        }
        /**
         * @param {?} value
         * @return {?}
         */
        ,
        set: function set(value) {
          this._vertical = value;
          this.setClassMap();
        }
        /**
         * if true tabs fill the container and have a consistent width
         * @return {?}
         */

      }, {
        key: "justified",
        get: function get() {
          return this._justified;
        }
        /**
         * @param {?} value
         * @return {?}
         */
        ,
        set: function set(value) {
          this._justified = value;
          this.setClassMap();
        }
        /**
         * navigation context class: 'tabs' or 'pills'
         * @return {?}
         */

      }, {
        key: "type",
        get: function get() {
          return this._type;
        }
        /**
         * @param {?} value
         * @return {?}
         */
        ,
        set: function set(value) {
          this._type = value;
          this.setClassMap();
        }
      }]);

      return TabsetComponent;
    }();

    TabsetComponent.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
      args: [{
        selector: 'tabset',
        template: "<ul class=\"nav\" [ngClass]=\"classMap\" (click)=\"$event.preventDefault()\">\n  <li *ngFor=\"let tabz of tabs; let i = index\" [ngClass]=\"['nav-item', tabz.customClass || '']\"\n      [class.active]=\"tabz.active\" [class.disabled]=\"tabz.disabled\" (keydown)=\"keyNavActions($event, i)\">\n    <a href=\"javascript:void(0);\" class=\"nav-link\"\n       [attr.id]=\"tabz.id ? tabz.id + '-link' : ''\"\n       [class.active]=\"tabz.active\" [class.disabled]=\"tabz.disabled\"\n       (click)=\"tabz.active = true\">\n      <span [ngTransclude]=\"tabz.headingRef\">{{ tabz.heading }}</span>\n      <span *ngIf=\"tabz.removable\" (click)=\"$event.preventDefault(); removeTab(tabz);\" class=\"bs-remove-tab\"> &#10060;</span>\n    </a>\n  </li>\n</ul>\n<div class=\"tab-content\">\n  <ng-content></ng-content>\n</div>\n",
        styles: [":host .nav-tabs .nav-item.disabled a.disabled{cursor:default}"]
      }]
    }];
    /** @nocollapse */

    TabsetComponent.ctorParameters = function () {
      return [{
        type: TabsetConfig
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
      }];
    };

    TabsetComponent.propDecorators = {
      vertical: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      justified: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      type: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      clazz: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"],
        args: ['class.tab-container']
      }]
    };
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    var TabDirective =
    /*#__PURE__*/
    function () {
      /**
       * @param {?} tabset
       * @param {?} elementRef
       * @param {?} renderer
       */
      function TabDirective(tabset, elementRef, renderer) {
        _classCallCheck(this, TabDirective);

        this.elementRef = elementRef;
        this.renderer = renderer;
        /**
         * fired when tab became active, $event:Tab equals to selected instance of Tab component
         */

        this.selectTab = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        /**
         * fired when tab became inactive, $event:Tab equals to deselected instance of Tab component
         */

        this.deselect = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        /**
         * fired before tab will be removed, $event:Tab equals to instance of removed tab
         */

        this.removed = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.addClass = true;
        this.tabset = tabset;
        this.tabset.addTab(this);
      }
      /**
       * if set, will be added to the tab's class attribute. Multiple classes are supported.
       * @return {?}
       */


      _createClass(TabDirective, [{
        key: "ngOnInit",

        /**
         * @return {?}
         */
        value: function ngOnInit() {
          this.removable = this.removable;
        }
        /**
         * @return {?}
         */

      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this.tabset.removeTab(this, {
            reselect: false,
            emit: false
          });
        }
      }, {
        key: "customClass",
        get: function get() {
          return this._customClass;
        }
        /**
         * @param {?} customClass
         * @return {?}
         */
        ,
        set: function set(customClass) {
          var _this41 = this;

          if (this.customClass) {
            this.customClass.split(' ').forEach(
            /**
            * @param {?} cssClass
            * @return {?}
            */
            function (cssClass) {
              _this41.renderer.removeClass(_this41.elementRef.nativeElement, cssClass);
            });
          }

          this._customClass = customClass ? customClass.trim() : null;

          if (this.customClass) {
            this.customClass.split(' ').forEach(
            /**
            * @param {?} cssClass
            * @return {?}
            */
            function (cssClass) {
              _this41.renderer.addClass(_this41.elementRef.nativeElement, cssClass);
            });
          }
        }
        /**
         * tab active state toggle
         * @return {?}
         */

      }, {
        key: "active",
        get: function get() {
          return this._active;
        }
        /**
         * @param {?} active
         * @return {?}
         */
        ,
        set: function set(active) {
          var _this42 = this;

          if (this._active === active) {
            return;
          }

          if (this.disabled && active || !active) {
            if (this._active && !active) {
              this.deselect.emit(this);
              this._active = active;
            }

            return;
          }

          this._active = active;
          this.selectTab.emit(this);
          this.tabset.tabs.forEach(
          /**
          * @param {?} tab
          * @return {?}
          */
          function (tab) {
            if (tab !== _this42) {
              tab.active = false;
            }
          });
        }
      }]);

      return TabDirective;
    }();

    TabDirective.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
      args: [{
        selector: 'tab, [tab]'
      }]
    }];
    /** @nocollapse */

    TabDirective.ctorParameters = function () {
      return [{
        type: TabsetComponent
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"]
      }];
    };

    TabDirective.propDecorators = {
      heading: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      id: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"],
        args: ['attr.id']
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      disabled: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      removable: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      customClass: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      active: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"],
        args: ['class.active']
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      selectTab: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
      }],
      deselect: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
      }],
      removed: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
      }],
      addClass: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"],
        args: ['class.tab-pane']
      }]
    };
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * Should be used to mark <ng-template> element as a template for tab heading
     */

    var TabHeadingDirective =
    /* tslint:disable-next-line:no-any */

    /**
     * @param {?} templateRef
     * @param {?} tab
     */
    function TabHeadingDirective(templateRef, tab) {
      _classCallCheck(this, TabHeadingDirective);

      tab.headingRef = templateRef;
    };

    TabHeadingDirective.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
      args: [{
        selector: '[tabHeading]'
      }]
    }];
    /** @nocollapse */

    TabHeadingDirective.ctorParameters = function () {
      return [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"]
      }, {
        type: TabDirective
      }];
    };
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */


    var TabsModule =
    /*#__PURE__*/
    function () {
      function TabsModule() {
        _classCallCheck(this, TabsModule);
      }

      _createClass(TabsModule, null, [{
        key: "forRoot",

        /**
         * @return {?}
         */
        value: function forRoot() {
          return {
            ngModule: TabsModule,
            providers: [TabsetConfig]
          };
        }
      }]);

      return TabsModule;
    }();

    TabsModule.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
      args: [{
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]],
        declarations: [NgTranscludeDirective, TabDirective, TabsetComponent, TabHeadingDirective],
        exports: [TabDirective, TabsetComponent, TabHeadingDirective, NgTranscludeDirective]
      }]
    }]; //# sourceMappingURL=ngx-bootstrap-tabs.js.map

    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/games/game-detail/game-detail.component.html":
  /*!****************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/games/game-detail/game-detail.component.html ***!
    \****************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppGamesGameDetailGameDetailComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"container py-5\" *ngIf=\"game\">\n  <div class=\"row\">\n    <div class=\"col-md-12\">\n      <div class=\"card mb-4 box-shadow\">\n        <div class=\"card-header\">\n          <b>{{game.name}}</b>\n        </div>\n        <img \n          [src]=\"game.thumbnails['600x280']\"\n          class=\"card-img-top\" \n          data-holder-rendered=\"true\"\n        >\n        <div class=\"card-body\">\n          <p class=\"card-text\" *ngIf=\"game.meta.free_spins\">\n            Free Spins\n          </p>\n          <p class=\"card-text\" *ngIf=\"game.meta.currency\">\n            Earn in {{game.meta.currency}}\n          </p>\n          <p class=\"card-text\" *ngIf=\"game.description !== ''\">\n            {{game.description}}\n          </p>\n          <p class=\"card-text\" *ngIf=\"game.jurisdiction\">\n            Jurisdiction: {{game.jurisdiction}}\n          </p>\n          <p class=\"card-text\" *ngIf=\"game.vendor\">\n            Vendor: {{game.vendor}}\n          </p>\n          <button \n            type=\"button\" \n            (click)=\"goBack()\"\n            class=\"btn btn-lg btn-block btn-primary\">Go back</button>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n\n<div class=\"loader-container\" *ngIf=\"isLoading\">\n  <app-loader></app-loader>\n</div>\n<div class=\"error-container\" *ngIf=\"errorFromServer\">\n  <p>\n    Error retrieving data from server. Please refresh the page\n  </p>\n  <button \n  type=\"button\" \n  (click)=\"goBack()\"\n  class=\"btn btn-lg btn-primary\">Go back</button>\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/games/games-list/games.component.html":
  /*!*********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/games/games-list/games.component.html ***!
    \*********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppGamesGamesListGamesComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div *ngIf=\"gamesCategories.length > 0\">\n  <div class=\"container filters p-5\">\n    <div class=\"row\">\n      <div class=\"col-sm-12 search-box\">\n        <label for=\"search-box\">\n          Search a game by name: \n        </label>\n        <input id=\"search-box\" [(ngModel)]=\"filterBy\"  type=\"text\">\n      </div>\n    </div>\n  </div>\n  \n  <div class=\"games-list bg-light\">\n    <tabset>\n      <tab \n        [heading]=\"categoryGame.name\" \n        *ngFor=\"let categoryGame of gamesCategories\">\n        <div class=\"container py-5\">\n          <div class=\"row\">\n            <div class=\"col-md-3\" *ngFor=\"let game of categoryGame._embedded.games | filterList: filterBy\">\n              <div class=\"card mb-4 box-shadow\">\n                <div class=\"card-header\">\n                  <b>{{game.name}}</b>\n                </div>\n                <img \n                  [src]=\"game.thumbnail\"\n                  class=\"card-img-top\" \n                  data-holder-rendered=\"true\"\n                >\n                <div class=\"ribbon-container\" *ngIf=\"game.meta.bonus\">\n                  <span class=\"ribbon\">Bonus <b>ON</b></span>\n                </div>\n                <div class=\"card-body\">\n                  <p class=\"card-text\" *ngIf=\"game.meta.free_spins\">\n                    Free Spins\n                  </p>\n                  <p class=\"card-text\" *ngIf=\"game.meta.currency\">\n                    Earn in {{game.meta.currency}}\n                  </p>\n                  <button \n                    type=\"button\" \n                    (click)=\"onViewDetails(game.id)\"\n                    class=\"btn btn-lg btn-block btn-primary\">View Details</button>\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n      </tab>\n    </tabset>\n  </div>\n</div>\n\n<div class=\"loader-container\" *ngIf=\"isLoading\">\n  <app-loader></app-loader>\n</div>\n\n<div *ngIf=\"errorFromServer\">\n  Error retrieving data from server. Please refresh the page\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/loader/loader.component.html":
  /*!*******************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shared/loader/loader.component.html ***!
    \*******************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppSharedLoaderLoaderComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"spinner-grow text-primary\">\n  <span class=\"sr-only\">Loading...</span>\n</div>\n<div class=\"spinner-grow text-secondary\">\n  <span class=\"sr-only\">Loading...</span>\n</div>\n<div class=\"spinner-grow text-success\">\n  <span class=\"sr-only\">Loading...</span>\n</div>\n<div class=\"spinner-grow text-danger\">\n  <span class=\"sr-only\">Loading...</span>\n</div>\n<div class=\"spinner-grow text-warning\">\n  <span class=\"sr-only\">Loading...</span>\n</div>\n<div class=\"spinner-grow text-info\">\n  <span class=\"sr-only\">Loading...</span>\n</div>\n<div class=\"spinner-grow text-light\">\n  <span class=\"sr-only\">Loading...</span>\n</div>\n<div class=\"spinner-grow text-dark\">\n  <span class=\"sr-only\">Loading...</span>\n</div>";
    /***/
  },

  /***/
  "./src/app/games/data.service.ts":
  /*!***************************************!*\
    !*** ./src/app/games/data.service.ts ***!
    \***************************************/

  /*! exports provided: DataService */

  /***/
  function srcAppGamesDataServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DataService", function () {
      return DataService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");

    var DataService =
    /*#__PURE__*/
    function () {
      function DataService(http) {
        var _this43 = this;

        _classCallCheck(this, DataService);

        this.http = http;
        this.categories = [];
        this.url = 'https://staging-frontapi.cherrytech.com';
        var oneHour = 1000 * 60;
        Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["interval"])(oneHour).subscribe(function (x) {
          _this43.clearCache();
        });
      }

      _createClass(DataService, [{
        key: "clearCache",
        value: function clearCache() {
          this.gamesCategories$ = null;
          console.log('cleaning cache');
        }
      }, {
        key: "getGameCategories",
        value: function getGameCategories() {
          var _this44 = this;

          if (!this.gamesCategories$) {
            this.gamesCategories$ = this.http.get("".concat(this.url, "/game-categories?brand=cherrycasino.desktop&locale=en")).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["groupBy"])(function (data) {
              return data._embedded.game_categories;
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (result) {
              return result.key;
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (result) {
              console.log('retrieving game-categories from server:', result);
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["publishReplay"])(1), // this tells Rx to cache the latest emitted
            Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["refCount"])(), // and this tells Rx to keep the Observable alive as long as there are any Subscribers
            Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(function (err) {
              return _this44.handleHttpError(err);
            }));
          }

          return this.gamesCategories$;
        }
      }, {
        key: "getGameById",
        value: function getGameById(id) {
          var _this45 = this;

          return this.http.get("".concat(this.url, "/games/").concat(id, "?brand=cherrycasino.desktop&locale=en")).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (result) {
            console.log('retrieving games by id from server:', result);
          }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(function (err) {
            return _this45.handleHttpError(err);
          }));
        }
      }, {
        key: "handleHttpError",
        value: function handleHttpError(err) {
          return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["throwError"])('dataError!!');
        }
      }]);

      return DataService;
    }();

    DataService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
      }];
    };

    DataService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])], DataService);
    /***/
  },

  /***/
  "./src/app/games/game-detail/game-detail.component.less":
  /*!**************************************************************!*\
    !*** ./src/app/games/game-detail/game-detail.component.less ***!
    \**************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppGamesGameDetailGameDetailComponentLess(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".card-inner {\n  background-color: rgba(0, 0, 0, 0.7);\n}\n.error-container {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n  -webkit-box-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n          align-items: center;\n  height: 100vh;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy93ZXNsZXlyZWJlbG8vc2l0ZXMvbWFsYW5ndWxhci9zcmMvYXBwL2dhbWVzL2dhbWUtZGV0YWlsL2dhbWUtZGV0YWlsLmNvbXBvbmVudC5sZXNzIiwic3JjL2FwcC9nYW1lcy9nYW1lLWRldGFpbC9nYW1lLWRldGFpbC5jb21wb25lbnQubGVzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLG9DQUFBO0FDQ0Y7QURFQTtFQUNFLG9CQUFBO0VBQUEsYUFBQTtFQUNBLDRCQUFBO0VBQUEsNkJBQUE7VUFBQSxzQkFBQTtFQUNBLHdCQUFBO1VBQUEsdUJBQUE7RUFDQSx5QkFBQTtVQUFBLG1CQUFBO0VBQ0EsYUFBQTtBQ0FGIiwiZmlsZSI6InNyYy9hcHAvZ2FtZXMvZ2FtZS1kZXRhaWwvZ2FtZS1kZXRhaWwuY29tcG9uZW50Lmxlc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY2FyZC1pbm5lcntcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLDAsMCwwLjcpOyBcbn1cblxuLmVycm9yLWNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBoZWlnaHQ6IDEwMHZoO1xufSIsIi5jYXJkLWlubmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjcpO1xufVxuLmVycm9yLWNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBoZWlnaHQ6IDEwMHZoO1xufVxuIl19 */";
    /***/
  },

  /***/
  "./src/app/games/game-detail/game-detail.component.ts":
  /*!************************************************************!*\
    !*** ./src/app/games/game-detail/game-detail.component.ts ***!
    \************************************************************/

  /*! exports provided: GameDetailComponent */

  /***/
  function srcAppGamesGameDetailGameDetailComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "GameDetailComponent", function () {
      return GameDetailComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../data.service */
    "./src/app/games/data.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");

    var GameDetailComponent =
    /*#__PURE__*/
    function () {
      function GameDetailComponent(dataService, router, route) {
        _classCallCheck(this, GameDetailComponent);

        this.dataService = dataService;
        this.router = router;
        this.route = route;
        this.errorFromServer = false;
        this.isLoading = true;
        this.componentActive = true;
      }

      _createClass(GameDetailComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.loadData();
        }
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this.componentActive = false;
        }
      }, {
        key: "loadFakeData",
        value: function loadFakeData() {
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
            "backgrounds": ["//staging-static.cherrycasino.com/media/game/GenericCasinoNEW.jpg?u=1546507715"],
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
        }
      }, {
        key: "loadData",
        value: function loadData() {
          var _this46 = this;

          var gameId = this.route.snapshot.params['id'];
          this.isLoading = true;
          this.dataService.getGameById(gameId).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["takeWhile"])(function () {
            return _this46.componentActive;
          })).subscribe(function (data) {
            _this46.game = data;
            _this46.isLoading = false;
          }, function (error) {
            _this46.errorFromServer = true;
            _this46.isLoading = false;
          });
        }
      }, {
        key: "goBack",
        value: function goBack() {
          this.router.navigateByUrl('/');
        }
      }]);

      return GameDetailComponent;
    }();

    GameDetailComponent.ctorParameters = function () {
      return [{
        type: _data_service__WEBPACK_IMPORTED_MODULE_2__["DataService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]
      }];
    };

    GameDetailComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-game-detail',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./game-detail.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/games/game-detail/game-detail.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./game-detail.component.less */
      "./src/app/games/game-detail/game-detail.component.less")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_data_service__WEBPACK_IMPORTED_MODULE_2__["DataService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]])], GameDetailComponent);
    /***/
  },

  /***/
  "./src/app/games/games-list/games.component.less":
  /*!*******************************************************!*\
    !*** ./src/app/games/games-list/games.component.less ***!
    \*******************************************************/

  /*! exports provided: default */

  /***/
  function srcAppGamesGamesListGamesComponentLess(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".filters {\n  background-color: LightGray;\n  max-width: initial;\n}\n.search-box input {\n  width: 100%;\n}\n@media only screen and (min-width: 768px) {\n  .search-box {\n    text-align: right;\n  }\n  .search-box input {\n    width: initial;\n  }\n}\n@media only screen and (min-width: 768px) {\n  .games-list {\n    padding: 3rem;\n  }\n  .games-list .tab-pane {\n    border-left: 1px solid #dee2e6;\n    border-right: 1px solid #dee2e6;\n  }\n}\n.games-list .card-header {\n  width: inherit;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.games-list .ribbon-container:before,\n.games-list .ribbon-container:after {\n  content: \"\";\n  position: absolute;\n}\n.games-list .ribbon-container:after {\n  width: 8px;\n  height: 40px;\n  right: 0px;\n  top: 100px;\n  background: #4D6530;\n  border-radius: 0px 8px 8px 0px;\n}\n.games-list .ribbon {\n  width: 100px;\n  height: 40px;\n  line-height: 40px;\n  position: absolute;\n  top: 65px;\n  right: -10px;\n  z-index: 2;\n  overflow: hidden;\n  -webkit-transform: rotate(45deg);\n  transform: rotate(45deg);\n  border: 1px dashed;\n  box-shadow: 0 0 0 3px #57DD43, 0px 21px 5px -18px rgba(0, 0, 0, 0.6);\n  background: #57DD43;\n  text-align: center;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy93ZXNsZXlyZWJlbG8vc2l0ZXMvbWFsYW5ndWxhci9zcmMvYXBwL2dhbWVzL2dhbWVzLWxpc3QvZ2FtZXMuY29tcG9uZW50Lmxlc3MiLCJzcmMvYXBwL2dhbWVzL2dhbWVzLWxpc3QvZ2FtZXMuY29tcG9uZW50Lmxlc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSwyQkFBQTtFQUNBLGtCQUFBO0FDQ0Y7QURFQTtFQUVJLFdBQUE7QUNESjtBREdFO0VBQUE7SUFDRSxpQkFBQTtFQ0FGO0VEREE7SUFHSSxjQUFBO0VDQ0o7QUFDRjtBRElFO0VBQUE7SUFDRSxhQUFBO0VDREY7RURBQTtJQUdJLDhCQUFBO0lBQ0EsK0JBQUE7RUNBSjtBQUNGO0FETkE7RUFVSSxjQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtFQUNBLHVCQUFBO0FDREo7QURaQTs7RUFpQkksV0FBQTtFQUNBLGtCQUFBO0FDREo7QURqQkE7RUFxQkksVUFBQTtFQUNBLFlBQUE7RUFDQSxVQUFBO0VBQ0EsVUFBQTtFQUNBLG1CQUFBO0VBQ0EsOEJBQUE7QUNESjtBRHpCQTtFQTZCSSxZQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxTQUFBO0VBQ0EsWUFBQTtFQUNBLFVBQUE7RUFDQSxnQkFBQTtFQUNBLGdDQUFBO0VBQ0Esd0JBQUE7RUFDQSxrQkFBQTtFQUNBLG9FQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtBQ0RKIiwiZmlsZSI6InNyYy9hcHAvZ2FtZXMvZ2FtZXMtbGlzdC9nYW1lcy5jb21wb25lbnQubGVzcyIsInNvdXJjZXNDb250ZW50IjpbIi5maWx0ZXJzIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogTGlnaHRHcmF5O1xuICBtYXgtd2lkdGg6IGluaXRpYWw7XG59XG5cbi5zZWFyY2gtYm94IHtcbiAgaW5wdXQge1xuICAgIHdpZHRoOiAxMDAlO1xuICB9XG4gIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNzY4cHgpIHtcbiAgICB0ZXh0LWFsaWduOiByaWdodDtcbiAgICBpbnB1dCB7XG4gICAgICB3aWR0aDogaW5pdGlhbFxuICAgIH1cbiAgfVxufVxuXG4uZ2FtZXMtbGlzdCB7XG4gIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNzY4cHgpIHtcbiAgICBwYWRkaW5nOiAzcmVtO1xuICAgIC50YWItcGFuZSB7XG4gICAgICBib3JkZXItbGVmdDogMXB4IHNvbGlkICAjZGVlMmU2O1xuICAgICAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgICNkZWUyZTY7XG4gICAgfVxuICB9XG5cbiAgLmNhcmQtaGVhZGVyIHtcbiAgICB3aWR0aDogaW5oZXJpdDtcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG4gIH1cblxuICAucmliYm9uLWNvbnRhaW5lcjpiZWZvcmUsIC5yaWJib24tY29udGFpbmVyOmFmdGVyIHtcbiAgICBjb250ZW50OiBcIlwiO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgfVxuICAucmliYm9uLWNvbnRhaW5lcjphZnRlciB7XG4gICAgd2lkdGg6IDhweDtcbiAgICBoZWlnaHQ6IDQwcHg7XG4gICAgcmlnaHQ6IDBweDtcbiAgICB0b3A6IDEwMHB4O1xuICAgIGJhY2tncm91bmQ6ICM0RDY1MzA7XG4gICAgYm9yZGVyLXJhZGl1czogMHB4IDhweCA4cHggMHB4O1xufVxuICAucmliYm9uIHtcbiAgICB3aWR0aDogMTAwcHg7XG4gICAgaGVpZ2h0OiA0MHB4O1xuICAgIGxpbmUtaGVpZ2h0OiA0MHB4O1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDY1cHg7XG4gICAgcmlnaHQ6IC0xMHB4O1xuICAgIHotaW5kZXg6IDI7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDQ1ZGVnKTtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSg0NWRlZyk7XG4gICAgYm9yZGVyOiAxcHggZGFzaGVkO1xuICAgIGJveC1zaGFkb3c6IDAgMCAwIDNweCAjNTdERDQzLCAwcHggMjFweCA1cHggLTE4cHggcmdiYSgwLDAsMCwwLjYpO1xuICAgIGJhY2tncm91bmQ6ICM1N0RENDM7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB9XG59IiwiLmZpbHRlcnMge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBMaWdodEdyYXk7XG4gIG1heC13aWR0aDogaW5pdGlhbDtcbn1cbi5zZWFyY2gtYm94IGlucHV0IHtcbiAgd2lkdGg6IDEwMCU7XG59XG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDc2OHB4KSB7XG4gIC5zZWFyY2gtYm94IHtcbiAgICB0ZXh0LWFsaWduOiByaWdodDtcbiAgfVxuICAuc2VhcmNoLWJveCBpbnB1dCB7XG4gICAgd2lkdGg6IGluaXRpYWw7XG4gIH1cbn1cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNzY4cHgpIHtcbiAgLmdhbWVzLWxpc3Qge1xuICAgIHBhZGRpbmc6IDNyZW07XG4gIH1cbiAgLmdhbWVzLWxpc3QgLnRhYi1wYW5lIHtcbiAgICBib3JkZXItbGVmdDogMXB4IHNvbGlkICNkZWUyZTY7XG4gICAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgI2RlZTJlNjtcbiAgfVxufVxuLmdhbWVzLWxpc3QgLmNhcmQtaGVhZGVyIHtcbiAgd2lkdGg6IGluaGVyaXQ7XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xufVxuLmdhbWVzLWxpc3QgLnJpYmJvbi1jb250YWluZXI6YmVmb3JlLFxuLmdhbWVzLWxpc3QgLnJpYmJvbi1jb250YWluZXI6YWZ0ZXIge1xuICBjb250ZW50OiBcIlwiO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG59XG4uZ2FtZXMtbGlzdCAucmliYm9uLWNvbnRhaW5lcjphZnRlciB7XG4gIHdpZHRoOiA4cHg7XG4gIGhlaWdodDogNDBweDtcbiAgcmlnaHQ6IDBweDtcbiAgdG9wOiAxMDBweDtcbiAgYmFja2dyb3VuZDogIzRENjUzMDtcbiAgYm9yZGVyLXJhZGl1czogMHB4IDhweCA4cHggMHB4O1xufVxuLmdhbWVzLWxpc3QgLnJpYmJvbiB7XG4gIHdpZHRoOiAxMDBweDtcbiAgaGVpZ2h0OiA0MHB4O1xuICBsaW5lLWhlaWdodDogNDBweDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDY1cHg7XG4gIHJpZ2h0OiAtMTBweDtcbiAgei1pbmRleDogMjtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSg0NWRlZyk7XG4gIHRyYW5zZm9ybTogcm90YXRlKDQ1ZGVnKTtcbiAgYm9yZGVyOiAxcHggZGFzaGVkO1xuICBib3gtc2hhZG93OiAwIDAgMCAzcHggIzU3REQ0MywgMHB4IDIxcHggNXB4IC0xOHB4IHJnYmEoMCwgMCwgMCwgMC42KTtcbiAgYmFja2dyb3VuZDogIzU3REQ0MztcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuIl19 */";
    /***/
  },

  /***/
  "./src/app/games/games-list/games.component.ts":
  /*!*****************************************************!*\
    !*** ./src/app/games/games-list/games.component.ts ***!
    \*****************************************************/

  /*! exports provided: GamesComponent */

  /***/
  function srcAppGamesGamesListGamesComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "GamesComponent", function () {
      return GamesComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _data_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../data.service */
    "./src/app/games/data.service.ts");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");

    var GamesComponent =
    /*#__PURE__*/
    function () {
      function GamesComponent(dataService, router) {
        _classCallCheck(this, GamesComponent);

        this.dataService = dataService;
        this.router = router;
        this.gamesCategories = [];
        this.errorFromServer = false;
        this.isLoading = false;
        this.componentActive = true;
      }

      _createClass(GamesComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.loadData();
        }
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this.componentActive = false;
        }
      }, {
        key: "loadData",
        value: function loadData() {
          var _this47 = this;

          this.isLoading = true;
          this.dataService.getGameCategories().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["takeWhile"])(function () {
            return _this47.componentActive;
          })).subscribe(function (data) {
            _this47.gamesCategories = data;
            _this47.isLoading = false;
          }, function (error) {
            _this47.errorFromServer = true;
            _this47.isLoading = false;
          });
        }
      }, {
        key: "loadFakeData",
        value: function loadFakeData() {
          this.gamesCategories = [{
            "name": "Popular Games",
            "order": 0,
            "slug": "popular-games",
            "_embedded": {
              "games": [{
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
                "backgrounds": ["//staging-static.cherrycasino.com/img/games/gamebg/starburst-1385396764.jpg?u=1572961063"],
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
              }, {
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
                "backgrounds": ["//staging-static.cherrycasino.com/media/game/GenericCasinoNEW.jpg?u=1546507715"],
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
              }, {
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
                "backgrounds": ["//staging-static.cherrycasino.com/media/games/yggdrasil/7320/yggdrasil-7320-B470x920L.jpg?u=1557064322", "//staging-static.cherrycasino.com/media/games/yggdrasil/7320/yggdrasil-7320-B470x920R.jpg?u=1557064322"],
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
              }, {
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
                "backgrounds": ["//staging-static.cherrycasino.com/media/games/netent/gunsnroses_not_mobile_sw/netent-gunsnroses_not_mobile_sw-B470x920L.jpg?u=1562081283", "//staging-static.cherrycasino.com/media/games/netent/gunsnroses_not_mobile_sw/netent-gunsnroses_not_mobile_sw-B470x920R.jpg?u=1562081283"],
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
              }, {
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
                "backgrounds": ["//staging-static.cherrycasino.com/media/games/amaya/20177/amaya-20177-B470x920L.jpg?u=1508925460", "//staging-static.cherrycasino.com/media/games/amaya/20177/amaya-20177-B470x920R.jpg?u=1508925460"],
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
              }, {
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
                "backgrounds": ["//staging-static.cherrycasino.com/media/games/netent/twinspin_sw/netent-twinspin_sw-B470x920L.jpg?u=1473779135", "//staging-static.cherrycasino.com/media/games/netent/twinspin_sw/netent-twinspin_sw-B470x920R.jpg?u=1473779135"],
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
              }, {
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
                "backgrounds": ["//staging-static.cherrycasino.com/media/games/netent/koiprincess_not_mobile_sw/netent-koiprincess_not_mobile_sw-B470x920L.jpg?u=1566828141", "//staging-static.cherrycasino.com/media/games/netent/koiprincess_not_mobile_sw/netent-koiprincess_not_mobile_sw-B470x920R.jpg?u=1566828141"],
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
              }, {
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
              }, {
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
                "backgrounds": ["//staging-static.cherrycasino.com/media/games/yggdrasil/7319/yggdrasil-7319-B470x920L.jpg?u=1570968089", "//staging-static.cherrycasino.com/media/games/yggdrasil/7319/yggdrasil-7319-B470x920R.jpg?u=1570968089"],
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
              }, {
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
                "backgrounds": ["//staging-static.cherrycasino.com/media/games/netent/pyramid_not_mobile_sw/netent-pyramid_not_mobile_sw-B470x920L.jpg?u=1566996356", "//staging-static.cherrycasino.com/media/games/netent/pyramid_not_mobile_sw/netent-pyramid_not_mobile_sw-B470x920R.jpg?u=1566996356"],
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
              }, {
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
                "backgrounds": ["//staging-static.cherrycasino.com/media/game/GenericCasinoNEW.jpg?u=1557065697"],
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
              }, {
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
                "backgrounds": ["//staging-static.cherrycasino.com/media/games/netent/kingofslots_sw/netent-kingofslots_sw-B470x920L.jpg?u=1572960594", "//staging-static.cherrycasino.com/media/games/netent/kingofslots_sw/netent-kingofslots_sw-B470x920R.jpg?u=1572960594"],
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
              }, {
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
                "backgrounds": ["//staging-static.cherrycasino.com/media/game/GenericCasinoNEW.jpg?u=1478186399"],
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
              }, {
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
                "backgrounds": ["//staging-static.cherrycasino.com/media/games/microgaming/immortalromance/microgaming-immortalromance-B470x920L.jpg?u=1562763699", "//staging-static.cherrycasino.com/media/games/microgaming/immortalromance/microgaming-immortalromance-B470x920R.jpg?u=1562763699"],
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
              }, {
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
                "backgrounds": ["//staging-static.cherrycasino.com/media/games/yggdrasil/7317/yggdrasil-7317-B470x920L.jpg?u=1580468523", "//staging-static.cherrycasino.com/media/games/yggdrasil/7317/yggdrasil-7317-B470x920R.jpg?u=1580468523"],
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
              }, {
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
                "backgrounds": ["//staging-static.cherrycasino.com/media/games/microgaming/GameOfThronesWays/microgaming-GameOfThronesWays-B470x920L.jpg?u=1473758455", "//staging-static.cherrycasino.com/media/games/microgaming/GameOfThronesWays/microgaming-GameOfThronesWays-B470x920R.jpg?u=1473758455"],
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
              }, {
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
                "backgrounds": ["//staging-static.cherrycasino.com/img/games/gamebg/gonzos-quest1381304301.jpg?u=1476089747"],
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
              }, {
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
                "backgrounds": ["//staging-static.cherrycasino.com/media/games/microgaming/euroroulettegold/microgaming-euroroulettegold-B470x920L.jpg?u=1522405031", "//staging-static.cherrycasino.com/media/games/microgaming/euroroulettegold/microgaming-euroroulettegold-B470x920R.jpg?u=1522405031"],
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
              }, {
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
                "backgrounds": ["//staging-static.cherrycasino.com/media/games/microgaming/thunderstruck2/microgaming-thunderstruck2-B470x920L.jpg?u=1393255874", "//staging-static.cherrycasino.com/media/games/microgaming/thunderstruck2/microgaming-thunderstruck2-B470x920R.jpg?u=1393255874"],
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
              }, {
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
                "backgrounds": ["//staging-static.cherrycasino.com/img/games/gamebg/european-blackjack-gold-1385723018.jpg?u=1522403412"],
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
              }]
            },
            "_links": {
              "self": {
                "href": "https://staging-frontapi.cherrytech.com/game-categories/popular-games"
              }
            }
          }];
        }
      }, {
        key: "onViewDetails",
        value: function onViewDetails(id) {
          this.router.navigateByUrl('/games/' + id);
        }
      }]);

      return GamesComponent;
    }();

    GamesComponent.ctorParameters = function () {
      return [{
        type: _data_service__WEBPACK_IMPORTED_MODULE_1__["DataService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
      }];
    };

    GamesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
      selector: 'app-games',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./games.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/games/games-list/games.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./games.component.less */
      "./src/app/games/games-list/games.component.less")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_data_service__WEBPACK_IMPORTED_MODULE_1__["DataService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])], GamesComponent);
    /***/
  },

  /***/
  "./src/app/games/games.module.ts":
  /*!***************************************!*\
    !*** ./src/app/games/games.module.ts ***!
    \***************************************/

  /*! exports provided: GamesModule */

  /***/
  function srcAppGamesGamesModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "GamesModule", function () {
      return GamesModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var ngx_bootstrap_tabs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ngx-bootstrap/tabs */
    "./node_modules/ngx-bootstrap/tabs/fesm2015/ngx-bootstrap-tabs.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _data_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./data.service */
    "./src/app/games/data.service.ts");
    /* harmony import */


    var _game_detail_game_detail_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./game-detail/game-detail.component */
    "./src/app/games/game-detail/game-detail.component.ts");
    /* harmony import */


    var _games_list_games_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./games-list/games.component */
    "./src/app/games/games-list/games.component.ts");
    /* harmony import */


    var _shared_shared_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ../shared/shared.module */
    "./src/app/shared/shared.module.ts");

    var GamesModule = function GamesModule() {
      _classCallCheck(this, GamesModule);
    };

    GamesModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      declarations: [_games_list_games_component__WEBPACK_IMPORTED_MODULE_8__["GamesComponent"], _game_detail_game_detail_component__WEBPACK_IMPORTED_MODULE_7__["GameDetailComponent"]],
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _shared_shared_module__WEBPACK_IMPORTED_MODULE_9__["SharedModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild([{
        path: '',
        component: _games_list_games_component__WEBPACK_IMPORTED_MODULE_8__["GamesComponent"]
      }, {
        path: ':id',
        component: _game_detail_game_detail_component__WEBPACK_IMPORTED_MODULE_7__["GameDetailComponent"]
      }]), ngx_bootstrap_tabs__WEBPACK_IMPORTED_MODULE_3__["TabsModule"].forRoot()],
      providers: [_data_service__WEBPACK_IMPORTED_MODULE_6__["DataService"]]
    })], GamesModule);
    /***/
  },

  /***/
  "./src/app/shared/filter-list/filter-list.pipe.ts":
  /*!********************************************************!*\
    !*** ./src/app/shared/filter-list/filter-list.pipe.ts ***!
    \********************************************************/

  /*! exports provided: FilterListPipe */

  /***/
  function srcAppSharedFilterListFilterListPipeTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FilterListPipe", function () {
      return FilterListPipe;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var FilterListPipe =
    /*#__PURE__*/
    function () {
      function FilterListPipe() {
        _classCallCheck(this, FilterListPipe);
      }

      _createClass(FilterListPipe, [{
        key: "transform",
        value: function transform(items, filter) {
          if (!items || !filter) {
            return items;
          }

          return items.filter(function (item) {
            return item.name.toLowerCase().indexOf(filter.toLowerCase()) !== -1;
          });
        }
      }]);

      return FilterListPipe;
    }();

    FilterListPipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
      name: 'filterList',
      pure: true
    })], FilterListPipe);
    /***/
  },

  /***/
  "./src/app/shared/loader/loader.component.ts":
  /*!***************************************************!*\
    !*** ./src/app/shared/loader/loader.component.ts ***!
    \***************************************************/

  /*! exports provided: LoaderComponent */

  /***/
  function srcAppSharedLoaderLoaderComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LoaderComponent", function () {
      return LoaderComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var LoaderComponent =
    /*#__PURE__*/
    function () {
      function LoaderComponent() {
        _classCallCheck(this, LoaderComponent);
      }

      _createClass(LoaderComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return LoaderComponent;
    }();

    LoaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-loader',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./loader.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/loader/loader.component.html")).default
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])], LoaderComponent);
    /***/
  },

  /***/
  "./src/app/shared/shared.module.ts":
  /*!*****************************************!*\
    !*** ./src/app/shared/shared.module.ts ***!
    \*****************************************/

  /*! exports provided: SharedModule */

  /***/
  function srcAppSharedSharedModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SharedModule", function () {
      return SharedModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _filter_list_filter_list_pipe__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./filter-list/filter-list.pipe */
    "./src/app/shared/filter-list/filter-list.pipe.ts");
    /* harmony import */


    var _loader_loader_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./loader/loader.component */
    "./src/app/shared/loader/loader.component.ts");

    var SharedModule = function SharedModule() {
      _classCallCheck(this, SharedModule);
    };

    SharedModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      declarations: [_filter_list_filter_list_pipe__WEBPACK_IMPORTED_MODULE_3__["FilterListPipe"], _loader_loader_component__WEBPACK_IMPORTED_MODULE_4__["LoaderComponent"]],
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"]],
      exports: [_filter_list_filter_list_pipe__WEBPACK_IMPORTED_MODULE_3__["FilterListPipe"], _loader_loader_component__WEBPACK_IMPORTED_MODULE_4__["LoaderComponent"]]
    })], SharedModule);
    /***/
  }
}]);
//# sourceMappingURL=games-games-module-es5.js.map