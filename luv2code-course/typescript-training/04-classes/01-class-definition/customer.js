var Customer = /** @class */ (function () {
    function Customer(theFirst, theLast) {
        this.firstName = theFirst;
        this.lastName = theLast;
    }
    return Customer;
}());
// create an instance 
var myCustomer = new Customer("Kevin", "Pham");
console.log(myCustomer.firstName);
console.log(myCustomer.lastName);