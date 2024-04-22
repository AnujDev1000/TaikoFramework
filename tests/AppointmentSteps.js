const { openBrowser, write, closeBrowser, goto, press, screenshot, above, click, checkBox, listItem, toLeftOf, link, text, into, textBox, evaluate, $, title, hover } = require('taiko');
const assert = require("assert");

step("Click on Appointment link in sidebar", async function() {
    click(link("Appointment"));
    click($('//h5[contains(text(), "New-1")]'))
});

step("Search for name in Table and click on checkin", async function() {
    await click(link(toRightOf("Appointment Booking List")));
    await focus($('//*[contains(text(), "${name} ${lname}")]'));
    await timeField(toRightOf("Appointment Date")).select(date);
    await write(name + " " + lname, into(textBox("Search")));
    waitFor(200);

    await click(link("Check In"));
});

step("Enter all the Details: <department> and <docterName>", async function(department, docterName) {    
    await write(department, into(textBox(toRightOf("Department"))));
    await write(docterName, into(textBox({id: "doctorName"})));
    await timeField(toRightOf("Visit Date")).select(date);
});

step("click on Print invoice", async function() {
    await click($('//input[@id="btnPrintInvoice"]'));
});

step("click confirm button", async function() {
    await click(button("Confirm"));
});

step("Verify receipt is printed", async function() {        
    assert.ok(await click(button("Print Receipt")));
});







