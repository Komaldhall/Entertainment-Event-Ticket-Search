var express = require('express');
var app = express();
var SpotifyWebApi = require('spotify-web-api-node');

// credentials are optional
// var spotifyApi = new SpotifyWebApi({
//     clientId: 'fb0fa1b65f6d4e9c963bb2872f86714a',
//     clientSecret: 'cdb8fd8b3e384ac8bfaf40fd38033c59',
//     redirectUri: 'http://localhost:8888/callback/'
//     });
// spotifyApi.setAccessToken('BQBCpj-zCxkApWR7NOWPDVLEey_jkMU_8Q4djJKoYcoVMSN09KONwJZlDrUlnInOI2SKNOTBfxj-ivfgesdED6Fl3SkbWWEmziT5bZ2TfixtS_txXWnukg7AEsSSyqbqjMz56u8SqlIE6hevOfcJLovzdjOmq5CXpOAdImMvD5rYAIQ6nzRv&refresh_token=AQD4929yyf2RYEzv6v7yyVODpNjk1NhJEmYT4bnNFhsxLeHIe8k37hdXdLvj2EniBeymGKISO3qgdSnMvdLcUu9GDAqI9WJXO5btBAwVPhxx1a9u2DOs0s3blIf60UhJEcJD4Q');

// var mongoose = require('mongoose');
// var bodyParser = require('body-parser');
app.use(express.static( __dirname + '/public/dist/public' ));
// app.use(bodyParser.json()); 
// mongoose.connect('mongodb://localhost/weather_api');
// require('./server/config/mongoose.js');
// require('./server/config/routes.js')(app);
app.all("*", (req,res,next) => {
    res.sendFile(path.resolve("./public/dist/public/index.html"))
  });
app.listen(8081, function(){
    console.log("on port 8081");
})