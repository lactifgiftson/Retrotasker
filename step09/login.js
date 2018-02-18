let vo = require('vo');
var Nightmare = require('nightmare');
let nightmare = Nightmare();

var run = function* () {
  var urls = ["http://beberexha.com/?frontpage=true",
"http://deftones.com/?frontpage=true",
"http://disturbed1.com/?frontpage=true",
"http://garyclarkjr.com/?frontpage=true",
"http://greenday.com/?frontpage=true",
"http://jasonderulo.com/?frontpage=true",
"http://kimbramusic.com/?frontpage=true",
"http://mastodonrocks.com/?frontpage=true",
"http://michaelbuble.com/?frontpage=true",
"http://sherylcrow.com/?frontpage=true",
"http://sleepingwithsirens.net/?frontpage=true",
"http://tompetty.com/?frontpage=true",
"http://warnerbrosrecords.com/?frontpage=true",
"http://dwightyoakam.com/?frontpage=true",
"http://pabloalboran.com/?frontpage=true",
"http://brandyclark.com/?frontpage=true",
"http://gdidiotnation.com/?frontpage=true",
"http://googoodolls.com/?frontpage=true",
"http://mudcrutchmusic.com/?frontpage=true",
"http://reginaspektor.com/?frontpage=true",
"http://theregrettes.com/?frontpage=true",
"http://thewildfeathers.com/?frontpage=true",
"http://mattcorby.com/?frontpage=true",
"http://lukasgraham.com/?frontpage=true",
"http://mikeymike.com/?frontpage=true",
"http://thesheltersmusic.com/?frontpage=true",
"http://gerardway.com/?frontpage=true",
"http://daniellamason.com/?frontpage=true",
"http://dayejack.com/?frontpage=true",
"http://mychemicalromance.com/?frontpage=true",
"http://thearcs.com/?frontpage=true",
"http://chaseatlantic.com/?frontpage=true",
"http://alvarezkings.com/?frontpage=true",
"http://banksandsteelz.com/?frontpage=true",
"http://adamofficial.com/?frontpage=true",
"http://bungalowb.com/?frontpage=true",
"http://duranduran.warnerrprise.com/?frontpage=true",
"http://easyeyesound.com/?frontpage=true",
"http://ecaccess.com/?frontpage=true",
"http://echosmith.com/?frontpage=true",
"http://ericclapton.com/?frontpage=true",
"http://ethangruska.com/?frontpage=true",
"http://ilovemakonnen.com/?frontpage=true",
"http://joshgroban.com/?frontpage=true",
"http://joshuaredman.com/?frontpage=true",
"http://kinglegmusic.com/?frontpage=true",
"http://macmiller.com/?frontpage=true",
"http://ovosound.com/?frontpage=true",
"http://partynextdoor.com/?frontpage=true",
"http://sahbabii.com/?frontpage=true",
"http://spencerludwig.com/?frontpage=true",
"http://theblackkeys.com/?frontpage=true",
"http://theheadandtheheart.com/?frontpage=true",
"http://thinkitsagame.com/?frontpage=true",
"http://tour.beberexha.com/?frontpage=true",
"http://twinshadow.net/?frontpage=true",
"http://wb.cher.com/?frontpage=true",
"http://wearegta.com/?frontpage=true",
"http://lakestreetdive.com/?frontpage=true",
"http://angelicagarcia.com/?frontpage=true",
"http://baskery.com/?frontpage=true",
"http://cardiknoxv.com/?frontpage=true",
"http://cutsnake.com/?frontpage=true",
"http://dylangardnermusic.com/?frontpage=true",
"http://elipaperboyreed.com/?frontpage=true",
"http://genesis-music.com/?frontpage=true",
"http://giovannejames.com/?frontpage=true",
"http://gregholdenonline.com/?frontpage=true",
"http://helenalalita.com/?frontpage=true",
"http://iamlp.com/?frontpage=true",
"http://killitkid.com/?frontpage=true",
"http://nevershoutnever.com/?frontpage=true",
"http://niiamusic.com/?frontpage=true",
"http://phasesmusic.com/?frontpage=true",
"http://priorybandv2.com/?frontpage=true",
"http://sirerecords.com/?frontpage=true",
"http://recordstorecrawl.com/?frontpage=true",
"http://mmgselfmade.com/?frontpage=true",
"http://nettabrielle.com/?frontpage=true",
"http://okannabel.com/?frontpage=true",
"http://outcamethewolves.com/?frontpage=true",
"http://rozayraw.com/?frontpage=true",
"http://rstar.com/?frontpage=true"
];
  var result = [];
  for (var i = 0; i < urls.length; i++) {
    var results = yield nightmare.goto(urls[i])
      .wait('body')
 .evaluate(function() {
      return document.querySelector("input[name='newsletterId']").value;
    });

 result.push(results);
 console.log(urls[i]+result);
}
return result;
}
vo(run)(function(err, result) {
  console.log(result);
});