const { client } = require('nightwatch-api');
const { Given, Then, When } = require('cucumber');

/*

Hey. The PDF I was sent doesn't contain a link to a testable site 
or a repo with runnable code (it would be great if that could be added for future applicants). 
As such, I've added the two extra scenarios below to emulate visiting a site, obviously 
if you do run the tests against your own code base, you'll also need to run the server, 
you can do this just with `npm start-all`.

Ta :)

Alex.
*/



const url = 'http://localhost:9000'

Given(/^I visit the website$/, () => {
  return client
         .url(url)
         .waitForElementVisible('body', 1000);
});

Then(/^the site title is "([^"]*)"$/, title => {
  return client
         .assert
         .title(title);
});

Given('this step isnt defined', function () {
  // Write code here that turns the phrase above into concrete actions
  return 'pending';
});

Given(/^the user can see the ingredients tab$/, () => {
  return client
         .useCss()
         .assert
         .visible('[data-hook="ingredients-tab"]');
})

Given(/^the user clicks on the ingredients tab$/, () => {
  return client
         .click('[data-hook="ingredients-tab"]')
         .waitForElementVisible('[data-hook="ingredients-list"]', 1000);
})

// NOTE: This step could be skipped as the above one will only pass if the ingredients-list exists
Then(/^the user can see the ingredients list$/, () => {
  return client
        .expect
        .element('[data-hook="ingredients-list"]')
        .to.be.present
        .before(1000);
})

Then(/^the user can see (.*) in the ingredients list items$/, ingredient => {
  return client
         .expect
         .element('[data-hook="ingredients-list"]')
         .text.to.contain(ingredient)
})

When(/^the user clicks on the (.*) item from the ingredients list$/, ingredient => {
  return client
         .useXpath()
         .click(`//*[@data-hook='ingredients-list-item']/h3[contains(text(), ${ingredient})]`)
})

// The PDF code example doesn't give me the contents of `ion-card` so I had to guess.
Then(/^the user can see (.*) in the ingredients detail card$/, ingredient => {
  return client
         .expect
         .element(`//*[@data-hook='ingredients-detail']/div/h4[contains(text(), ${ingredient})]`)
         .to.be.visible
})