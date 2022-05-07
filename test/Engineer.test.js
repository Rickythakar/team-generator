const Engineer = require("../lib/Engineer");

// test can begin engineer instance
describe("Engineer", () => {
    it("Begin instance of Engineer " , () => {
        const e = new Engineer();
        expect(e).toBeInstanceOf(Engineer);
    });
    it("has values", ()=>{
        const e = new Engineer("Ricky","321","GMAIL.COM", "GithubUser")
        expect(e.getGithub()).toBe("GithubUser")
    })
});