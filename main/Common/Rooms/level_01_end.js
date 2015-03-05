/***========================================================***/
/***    This the ending screen for Level 01: "Shadowman"    ***/
/***========================================================***/
/* Here should go whatever is supposed to happen at the completion
 * of level 01, as of right now, that can be accomplished by 
 * "firing" upon any previous target...
 */

var level_01_end = new Sprite(); 

	/***==============================***/
	/***         room.create()        ***/
	/***==============================***/
	// What to do at creation time
	level_01_end.create = function() {
		
		/***==============================***/
		/***       Passive sprites        ***/
		/***==============================***/
		// Sprites to be drawn, but without interactivity
		level_01_end.some_text = new TextBox("This is the end of level 01... \nHow did you do?");
		level_01_end.some_text.font = "Courier";
		level_01_end.some_text.color = "White";
		level_01_end.some_text.fontSize = 30;
		
		/***=== End of passive sprites ===***/
		
		/***==============================***/
		/***        Active sprites        ***/
		/***==============================***/
		// Sprites to be available to input_manager
		level_01_end.button_continue = new TextBox("continue >>");
		level_01_end.button_continue.font = "Courier";
		level_01_end.button_continue.color = "White";
		level_01_end.button_continue.fontSize = 30;
		level_01_end.button_continue.x = 877;
		level_01_end.button_continue.y = 690;
		level_01_end.button_continue.update = function() {
			if(level_01_end.button_continue.mouseOver) {
				level_01_end.button_continue.color = "#484848";
			}else {
				level_01_end.button_continue.color = "White";
			}
		}
		level_01_end.button_continue.click = function() {
			changeRoom(level_02_hub);
		}
		
		/***===     End of active sprites   ===***/
		
		/***===================================***/
		/***          World allocating         ***/
		/***===================================***/
		// Visible sprites at creation time
		world.addChild(level_01_end.some_text);
		world.addChild(level_01_end.button_continue);
		
		// Active sprites at creation time
		active_sprites.push(level_01_end.button_continue);
	}
	
	/***===============================***/
	/***        Clear this room        ***/
	/***===============================***/
	// Remove from the world, un-draw sprites, etc...
	level_01_end.clear = function() {
		world.removeChild(level_01_end.some_text);
		world.removeChild(level_01_end.button_continue);
	}