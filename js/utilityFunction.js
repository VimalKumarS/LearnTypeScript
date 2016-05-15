var Utility;
(function (Utility) {
    var Fees;
    (function (Fees) {
        function CalculateLatefess(daylate) {
            return daylate * .25;
        }
        Fees.CalculateLatefess = CalculateLatefess;
    })(Fees = Utility.Fees || (Utility.Fees = {}));
    function MaxBookAllowed(age) {
        if (age < 12) {
            return 3;
        }
        else {
            return 10;
        }
    }
    Utility.MaxBookAllowed = MaxBookAllowed;
    function privateFunc() {
        console.log("this is private");
        return;
    }
    function Purge(inventory) {
        return inventory.splice(2, inventory.length);
    }
    Utility.Purge = Purge;
})(Utility || (Utility = {}));
//# sourceMappingURL=utilityFunction.js.map