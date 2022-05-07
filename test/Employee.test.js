const Employee = require("../lib/Employee");

// test can begin employee instance
describe("Employee", () => {
    it("Begin instance of employee " , () => {
        const e = new Employee();
        expect(e).toBeInstanceOf(Employee);
    });
    it("has values", ()=>{
        const e = new Employee("Ricky","321","GMAIL.COM")
        expect(e.getName()).toBe("Ricky")
    })
// test can set name via constructior args
// can set id via constructor args
// can set email via constructor args
// can set name via constructor function
// can set id via constructor function 
// can get email via constructor function
// role function should return employee
});

