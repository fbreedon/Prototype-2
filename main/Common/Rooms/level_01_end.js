/***=== This the ending screen for Level 01: "Shadowman" ===***/
/* Here should go whatever is supposed to happen at the completion
 * of level 01, as of right now, that can be accomplished by 
 * "firing" upon any previous target...
 */

var level_01_end = new Sprite(); 
	// Create this rooom
	level_01_end.create = function() {
		var some_text = new TextBox("This is the end of level 01... \nHow did you do?");
		some_text.font = "Courier";
		some_text.fontSize = 30;
		some_text.color = "White";

		world.addChild(some_text);
	}
	
	// Clear this room
	level_01_end.clear = function() {
		world.removeChild(some_text);
	}