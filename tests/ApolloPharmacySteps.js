const { openBrowser, write, closeBrowser, goto, press, screenshot, above, click, checkBox, listItem, toLeftOf, link, text, into, textBox, evaluate, $, title, hover } = require('taiko');
const assert = require("assert");

step("Open Apollo Pharmacy Page", async function() {        
    await goto("https://www.apollopharmacy.in/")
});
step("Hover on Apollo products and click on skin care", async function() {
    await hover(link("Apollo Products"))
    await click(link("Skin Care"))
});
step("Select one product and click on product", async function() {
    await click($('//*[@id="__next"]/div[2]/div[2]/div/div/div[2]/div[3]/div/div[1]'));
});
step("Print and verify product name,", async function() {   
    // Getting actual product name
    let actualProductName = await $('/html/body/div[2]/div[2]/div[1]/div[1]/div[2]/div[1]/div[2]/div[2]/div/h1').text(); 
    assert.equal(actualProductName, "Apollo Life Premium Citrus Refreshing Wet Wipes, 60 (2 X 30) Count");

});
step("Verify cutoff MRP, current MRP", async function() {   
    // Getting actual current MRP
    let actualCurrentMRP = await $('//*[@id="PDP price banner"]/div/div/div[1]/div[1]/div/p[1]').text(); 
    assert.equal(actualCurrentMRP, "₹100*");

    // Getting actual cut-off MRP
    let actualCutOffMRP = await $('//*[@id="PDP price banner"]/div/div/div[1]/div[1]/div/p[2]').text(); 
    assert.equal(actualCutOffMRP, "MRP ₹160");
});
step("Click on add to cart", async function() {
    // Scrolling to "Add to Cart"
    await scrollTo("Add to Cart");

    // Clicking "Add To Cart"
    await click("Add To Cart");
});
step("click on view cart", async function() {
    await click("View Cart");
});
step("Verify the cart total, discount on MRP", async function() {
    // Getting actual total
    let actualTotal = await $('//*[@id="_next"]/div[2]/div/div/div/div[2]/div[1]/div[2]/div[1]/div[1]/div[1]/p[2]/span').text(); 
    assert.equal(actualTotal, "₹160");

    // Getting actual discount
    let actualDiscount = await $('//*[@id="_next"]/div[2]/div/div/div/div[2]/div[1]/div[2]/div[1]/div[1]/div[2]/p[2]').text(); 
    assert.equal(actualDiscount, "- ₹60");
});