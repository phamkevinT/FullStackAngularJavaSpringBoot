class Customer {
    
    firstName: string;
    lastName: string;

    constructor(theFirst: string, theLast: string) {
        this.firstName = theFirst;
        this.lastName = theLast;
    }
    
    
}


// create an instance 
let myCustomer = new Customer("Kevin", "Pham");

console.log(myCustomer.firstName);
console.log(myCustomer.lastName);

