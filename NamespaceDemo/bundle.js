var Utility;
(function (Utility) {
    var Fees;
    (function (Fees) {
        function calculateFee(daysLate) {
            return daysLate * 0.25;
        }
        Fees.calculateFee = calculateFee;
    })(Fees = Utility.Fees || (Utility.Fees = {}));
    function maxBooksAllowed(age) {
        return age < 12 ? 3 : 10;
    }
    Utility.maxBooksAllowed = maxBooksAllowed;
    function privateFunc() {
        console.log('This is private.');
    }
})(Utility || (Utility = {}));
/// <reference path="utility-functions.ts" />
var result = Utility.maxBooksAllowed(15);
console.log(result);
var util = Utility.Fees;
var fee = util.calculateFee(10);
console.log(fee);
