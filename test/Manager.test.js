const Manager = require("../lib/Manager");

// test can begin Manager instance
describe("Manager", () => {
    it("Begin instance of Manager " , () => {
        const e = new Manager();
        expect(e).toBeInstanceOf(Manager);
    });
    it("has values", ()=>{
        const e = new Manager("Ricky","321","GMAIL.COM")
        expect(e.getPhoneNumber()).toBe("Ricky")
    })
});