(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/common')) :
	typeof define === 'function' && define.amd ? define(['exports', '@angular/core', '@angular/common'], factory) :
	(factory((global['sample-lib'] = {}),global._angular_core,global._angular_common));
}(this, (function (exports,_angular_core,_angular_common) { 'use strict';

var SampleComponentComponent = (function () {
    function SampleComponentComponent() {
    }
    /**
     * @return {?}
     */
    SampleComponentComponent.prototype.ngOnInit = function () {
    };
    return SampleComponentComponent;
}());
SampleComponentComponent.decorators = [
    { type: _angular_core.Component, args: [{
                selector: 'sample-component',
                template: "<p> sample-component works!!! </p> ",
                styles: [""]
            },] },
];
/**
 * @nocollapse
 */
SampleComponentComponent.ctorParameters = function () { return []; };

var SampleServiceService = (function () {
    function SampleServiceService() {
    }
    return SampleServiceService;
}());
SampleServiceService.decorators = [
    { type: _angular_core.Injectable },
];
/**
 * @nocollapse
 */
SampleServiceService.ctorParameters = function () { return []; };

var SampleLibModule = (function () {
    function SampleLibModule() {
    }
    return SampleLibModule;
}());
SampleLibModule.decorators = [
    { type: _angular_core.NgModule, args: [{
                imports: [_angular_common.CommonModule],
                declarations: [SampleComponentComponent],
                exports: [SampleComponentComponent],
                providers: [SampleServiceService]
            },] },
];
/**
 * @nocollapse
 */
SampleLibModule.ctorParameters = function () { return []; };

exports.SampleLibModule = SampleLibModule;
exports.SampleServiceService = SampleServiceService;

Object.defineProperty(exports, '__esModule', { value: true });

})));
