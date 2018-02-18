var urls = ["http://halestormrockspoc.wmg-gardens.com"];

var Nightmare = require('nightmare'),
    nightmare = Nightmare({
	show : true,
	gotoTimeout : 90000, // in ms,
	executionTimeout : 90000, // in ms,
	waitTimeout : 90000
});

urls.forEach(function(url) {

nightmare
//load a url
.goto(url+'/user/login')
.type('input#edit-name', 'lactif.giftson@wmg.com')
.type('input#edit-pass', '#infy123')
.click('#edit-submit')
.wait(3000)
.goto(url+'/admin/modules')
.wait("#toolbar")
.check("input[id='edit-modules-other-migrate-enable']")
.check("input[id='edit-modules-other-migrate-extras-enable']")
.check("input[id='edit-modules-other-migrate-extras-enable']")
.check("input[id='edit-modules-other-migrate-d2d-enable']")
.check("input[id='edit-modules-other-migrate-d2d-ui-enable']").wait(1000)
.click('#edit-submit').goto(url+'/admin/content/migrate').wait("#toolbar")
.goto("http://halestormrockspoc.wmg-gardens.com/admin/content/migrate/configure").wait(1000)
.evaluate(function() {
//.wait("#page")
return document.querySelector('a').href;
})
//end the Nightmare instance along with the Electron instance it wraps
//.end()
.then(function(result) {
	console.log("lactif" + result);
})
//run the queue of commands specified, followed b y logging the HREF
  .catch(function(error){
    console.error('an error has occurred: ' + error);
  });
});
