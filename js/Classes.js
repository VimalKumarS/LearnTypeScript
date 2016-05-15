"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var UniversityLibrarian = (function () {
    function UniversityLibrarian() {
    }
    UniversityLibrarian.prototype.assitCustomer = function (custName) {
        console.log(this.name + custName);
    };
    return UniversityLibrarian;
}());
exports.UniversityLibrarian = UniversityLibrarian;
var RefernenceItem = (function () {
    function RefernenceItem(newTitle, newYear) {
        console.log('Creating a new refernceItem..');
        this.title = newTitle;
        this.year = newYear;
    }
    RefernenceItem.prototype.printItem = function () {
        console.log(this.title + " was published in " + this.year);
        console.log(RefernenceItem.dept);
    };
    Object.defineProperty(RefernenceItem.prototype, "publisher", {
        get: function () {
            return this._publisher.toUpperCase();
        },
        set: function (newPublisher) {
            this._publisher = newPublisher;
        },
        enumerable: true,
        configurable: true
    });
    RefernenceItem.dept = "Research";
    return RefernenceItem;
}());
exports.RefernenceItem = RefernenceItem;
var Encyclopedia = (function (_super) {
    __extends(Encyclopedia, _super);
    function Encyclopedia() {
        _super.apply(this, arguments);
    }
    return Encyclopedia;
}(RefernenceItem));
//# sourceMappingURL=Classes.js.map