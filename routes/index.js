var gamesJSON = require('../games.json');


// home
exports.home = function(req, res) {
	
	var games = gamesJSON.games;

	res.render('home', {
		title : "KovDimaY Games",
		games : games
	});
};

// games
exports.games =  function(req, res){
	var game_number = req.params.game_number;
	res.send("This is the page for game " + game_number);
};

// Page Not Found
exports.notFound = function(req, res) {
	res.send("Oops! This page does not exist yet. Try other link...");
};
