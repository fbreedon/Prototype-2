/***===================================***/
/***       GAAAAMME OOOVVVERR          ***/
/***===================================***/
// Come here from any screen where you have
// Game Over'd the player

var game_over_screen = new Sprite();
	game_over_screen.create = function() {
		room_manager.curr_room.clear();
		level_01_hub.level_timer.value = 0;
		level_02_hub.level_timer.value = 0;
		
		game_over_screen.image_GAMEOVER = new TextBox("CONTRACT\n    CLOSED");
		game_over_screen.image_GAMEOVER.font = "Courier";
		game_over_screen.image_GAMEOVER.fontSize = 150;
		game_over_screen.image_GAMEOVER.color = "White";
		game_over_screen.image_GAMEOVER.x = 70;
		game_over_screen.image_GAMEOVER.y = 100;
		game_over_screen.image_GAMEOVER.alpha = 0;
		game_over_screen.image_GAMEOVER.update = function() {
			if(game_over_screen.image_GAMEOVER.alpha < 1) {
				game_over_screen.image_GAMEOVER.alpha += 0.01;
			}
		}
		
		game_over_screen.button_continue = new TextBox("  < Return to title >   ");
		game_over_screen.button_continue.font = "Courier";
		game_over_screen.button_continue.fontSize = 30;
		game_over_screen.button_continue.color = "White";
		game_over_screen.button_continue.x = 320;
		game_over_screen.button_continue.y = 650;
		game_over_screen.button_continue.update = function() {
			if(game_over_screen.button_continue.mouseOver) {
				game_over_screen.button_continue.color = "Red";
				game_over_screen.button_continue.text = "<<< Return to title >>>";
			}else {
				game_over_screen.button_continue.color = "White";
				game_over_screen.button_continue.text = "  < Return to title >  ";
			}
		}
		game_over_screen.button_continue.click = function() {
			changeRoom(title_screen);
		}
		
		world.addChild(game_over_screen.image_GAMEOVER);
		world.addChild(game_over_screen.button_continue);
		
		active_sprites.push(game_over_screen.button_continue);
		
		game_over_screen.image_fancytext = new TextBox
			("You have failed to assassinate the target before\n"+
			 "the allocated time. Try again, sniper...");
		game_over_screen.image_fancytext.font = "Courier";
		game_over_screen.image_fancytext.fontSize = 30;
		game_over_screen.image_fancytext.color = "White";
		game_over_screen.image_fancytext.x = 100;
		game_over_screen.image_fancytext.y = 400;
		textType(game_over_screen.image_fancytext, 1);
		
		world.addChild(game_over_screen.image_fancytext);
	}
	
	game_over_screen.clear = function() {
		world.removeChild(game_over_screen.image_GAMEOVER);
		world.removeChild(game_over_screen.image_fancytext);
		world.removeChild(game_over_screen.button_continue);
		
		while(active_sprites.length > 0)
			active_sprites.pop();
		
	}