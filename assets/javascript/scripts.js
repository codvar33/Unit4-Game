//---------------Global variables--------------
var playersNumbers = 0;

var wins = 0;
var losses = 0;

var whiteGem = 0;
var blueGem = 0;
var yellowGem = 0;
var redGem = 0;

//---------------Set Numbers--------------
var gameStart = function(){
//choose random Number between 19-120
	beginingNumber = Math.floor((Math.random() * (120-19)) +1);
		// display random number 
				$("#beginingNum").text(beginingNumber);
	//choose random Number for each image
	whiteGem = Math.floor((Math.random() * 12) + 1);
	blueGem = Math.floor((Math.random() * 12) + 1);
	yellowGem = Math.floor((Math.random() * 12) + 1);
	redGem = Math.floor((Math.random() * 12) + 1);
		//players numbers
		playersNumbers = 0
		$("#playerNum").text(playersNumbers);

			};

	gameStart();

//---------------Craete Click Functions--------------
$("#white-gem-image").click(function(){
	playersNumbers = playersNumbers + whiteGem;
	$("#playerNum").text(playersNumbers);
	check();
});

$("#blue-gem-image").click(function(){
	playersNumbers = playersNumbers + blueGem;
	$("#playerNum").text(playersNumbers);
	check();
});

$("#yellow-gem-image").click(function(){
	playersNumbers = playersNumbers + yellowGem;
	$("#playerNum").text(playersNumbers);
	check();
});

$("#red-gem-image").click(function(){
	playersNumbers = playersNumbers + redGem;
	$("#playerNum").text(playersNumbers);
	check();
});

//---------------Check Numbers--------------
var check = function(){
    			if (playersNumbers === beginingNumber){
    				alert("You Won!");
    				wins = wins + 1
    				//add to wins div
    				$("#wins").text(wins);
    				gameStart();
    			}	
    			if(playersNumbers > beginingNumber){
    				alert("You Lose.");
    				losses = losses + 1
    				//add to losses div
    				$("#losses").text(losses);
    				gameStart();
    				
    			}
    		};



