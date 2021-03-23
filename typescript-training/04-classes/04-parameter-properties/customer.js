"use strict";
var Customer = /** @class */ (function () {
    // Parameter Properties --> Don't have to define firstName and lastName outside the constructor
    function Customer(_firstName, _lastName) {
        this._firstName = _firstName;
        this._lastName = _lastName;
    }
    Object.defineProperty(Customer.prototype, "firstName", {
        get: function () {
            return this._firstName;
        },
        set: function (value) {
            this._firstName = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Customer.prototype, "lastName", {
        get: function () {
            return this._lastName;
        },
        set: function (value) {
            this._lastName = value;
        },
        enumerable: false,
        configurable: true
    });
    return Customer;
}());
// create an instance 
var myCustomer = new Customer("Kevin", "Pham");
console.log(myCustomer.firstName);
console.log(myCustomer.lastName);
