/***======================***/
/***     FINAL SCREEN     ***/
/***======================***/
// Size up how the player did here
var final_screen = new Sprite();
	final_screen.create = function() {
		level_01_hub.level_timer.value = 0;
		level_02_hub.level_timer.value = 0;
		
		final_screen.image_text = new TextBox("Thank you for playing");
		final_screen.image_text.font = "Courier";
		final_screen.image_text.fontSize = 60;
		final_screen.image_text.color = "White";
		final_screen.image_text.x = 100;
		final_screen.image_text.y = 100;
		final_screen.image_text.alpha = 0;
		final_screen.image_text.update = function() {
			if(final_screen.image_text.alpha < 1)
				final_screen.image_text.alpha += 0.01;
		}
		
		final_screen.white_screen = new Sprite();
		final_screen.white_screen.width  = 1080;
		final_screen.white_screen.height = 720;
		final_screen.white_screen.x =0;
		final_screen.white_screen.y =0;
		final_screen.white_screen.do_update = true;
		final_screen.white_screen.image = Textures.load("./Common/Textures/white box.png");
		final_screen.white_screen.update = function() {
			if(final_screen.white_screen.do_update) {
				if(final_screen.white_screen.alpha > 0.00)
					final_screen.white_screen.alpha -= 0.01;
				else {
					world.addChild(final_screen.image_text);
					world.addChild(final_screen.image_judge);
					world.addChild(final_screen.image_result);
					world.addChild(final_screen.button_continue);
					active_sprites.push(final_screen.button_continue);
					final_screen.white_screen.do_update = false;
				}
			}
		}
		
		final_screen.button_continue = new TextBox("  < Return to title >   ");
		final_screen.button_continue.font = "Courier";
		final_screen.button_continue.fontSize = 30;
		final_screen.button_continue.color = "White";
		final_screen.button_continue.x = 320;
		final_screen.button_continue.y = 650;
		final_screen.button_continue.update = function() {
			if(final_screen.button_continue.mouseOver) {
				final_screen.button_continue.color = "Red";
				final_screen.button_continue.text = "<<< Return to title >>>";
			}else {
				final_screen.button_continue.color = "White";
				final_screen.button_continue.text = "  < Return to title >  ";
			}
		}
		final_screen.button_continue.click = function() {
			changeRoom(title_screen);
		}
		
		
		final_screen.image_judge= new TextBox
			("\"Many that live deserve death.\n          "+
			 "        And some that die deserve life.    \n"+
			 "Can you give it to them?                    \n"+
			 "    Then do not be too eager to deal out death in judgement.\"\n"+
			 "                - J.R.R. Tolkien                         \n\n" +
			 "  Well, how did you do?");
		final_screen.image_judge.color = "White";
		final_screen.image_judge.font = "Courier";
		final_screen.image_judge.x = 100;
		final_screen.image_judge.y = 200;
		final_screen.image_judge.fontSize = 25;
		textType(final_screen.image_judge, 1);
		
		switch(correctlyshot){
			case 0:
				endingstring = " Not one mark..."
				break;
			case 1:
				endingstring = " You could have done better...";
				break;
			case 2:
				endingstring = " your judgement is impeccable";
				break;
		}
		
		final_screen.image_result = new TextBox
			("                                                    " + // These spaces are vital for timing
			 ". . . . " + endingstring); 
		final_screen.image_result.color = "White";
		final_screen.image_result.font = "Courier";
		final_screen.image_result.fontSize = 30;
		final_screen.image_result.x = -530;
		final_screen.image_result.y = 400;
		textType(final_screen.image_result, 10);
		
		world.addChild(final_screen.white_screen);
		sound_shot.play();
		
	}
	final_screen.clear = function() {
		world.removeChild(final_screen.button_continue);
		world.removeChild(final_screen.image_judge);
		world.removeChild(final_screen.image_result);
		world.removeChild(final_screen.image_text);
		while(active_sprites.length > 0 ) active_sprites.pop();
		
	}