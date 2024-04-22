const {
    openBrowser,
    write,
    closeBrowser,
    goto,
    press,
    screenshot,
    above,
    click,
    checkBox,
    listItem,
    toLeftOf,
    link,
    text,
    into,
    textBox,
    evaluate,
    radioButton,
    dropDown,
    $,
    waitFor,
    focus
} = require('taiko');
const assert = require("assert");
const crypto = require("crypto")


const phone = Math.floor(Math.random()*10000000000)
const name = crypto.randomBytes(6).toString("base64")
name[0] = name[0].toUpperCase()
const lname = crypto.randomBytes(6).toString("base64")
lname[0] = lname[0].toUpperCase()



step("Click on Patient Tab in sidebar", async function() {
    await click(link("Patient"))
});

step("Click on Register Patient tab", async function() {
    await click("Register Patient")
});

step("Enter Patient details", async function() {
    try {
        await click(radioButton({value: "Mr."}))
        await write(name, into(textBox({id: "regPatFirstName"})))
        await write(lname, into(textBox({id: "LastName"})))
        await write("22", into(textBox({id: "Age"})))
        await dropDown({id: "ddlCountry"}).select("India");
        await write(phone, into(textBox({id: "PhoneNumber"})))
        
    } catch (error) {
        console.log(error);
    }

});

step("Click on Register Patient Button", async function() {
    await focus($(`//input[@value = "Register Patient"]`))
    await click($(`//input[@value = "Register Patient"]`), {force: true})
    await waitFor(200)
});

step("Verify Patient is Registered", async function() {
    try {
        await write(name + " " + lname, into(textBox("Search")))
        await waitFor(200)
        assert.ok(await $(`//div[text()=${name} ${lname}]`))
    } catch (error) {
        console.log(error);
    }
});