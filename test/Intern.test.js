const Intern = require("../lib/Intern");

// test can begin Intern instance
describe("Intern", () => {
    it("Begin instance of Intern " , () => {
        const e = new Intern();
        expect(e).toBeInstanceOf(Intern);
    });
    it("has values", ()=>{
        const e = new Intern("Ricky","321","GMAIL.COM", "school")
        expect(e.getSchool()).toBe("school")
    })
});