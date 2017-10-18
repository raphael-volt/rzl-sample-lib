import { Component, Injectable, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

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
    { type: Component, args: [{
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
    { type: Injectable },
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
    { type: NgModule, args: [{
                imports: [CommonModule],
                declarations: [SampleComponentComponent],
                exports: [SampleComponentComponent],
                providers: [SampleServiceService]
            },] },
];
/**
 * @nocollapse
 */
SampleLibModule.ctorParameters = function () { return []; };

export { SampleLibModule, SampleServiceService };
