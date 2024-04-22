const { openBrowser, write, closeBrowser, goto, press, screenshot, above, click, checkBox, listItem, toLeftOf, link, text, into, textBox, evaluate, $, title } = require('taiko');


beforeSuite(async () => {
    await openBrowser()
});

afterSuite(async () => {
    await closeBrowser();
});


step("Open HealthApp", async function() {
    await goto("https://healthapp.yaksha.com/")
});
step("Enter <username> and <password>", async function(username, password) {
    await write(username, into(textBox({id: "username_id"})))
    await write(password, into(textBox({id: "password"})))
});
step("Click on Login button", async function() {
    await click($(`//*[@id="login"]`))
});
step("Disply homepage", async function() {
    console.log(await title())
});