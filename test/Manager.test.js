const Manager = require("../lib/Manager");

// test can begin Manager instance
describe("Manager", () => {
    it("Begin instance of Manager " , () => {
        const e = new Manager();
        expect(e).toBeInstanceOf(Manager);
    });
    it("has values", ()=>{
        const e = new Manager("Ricky","321","GMAIL.COM","555-555-5555")
        expect(e.OfficeNumber()).toBe("555-555-5555")
    })
});