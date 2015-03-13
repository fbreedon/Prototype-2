/***======================***/
/***     FINAL SCREEN     ***/
/***======================***/
// Size up how the player did here
var final_screen = new Sprite();
	final_screen.create = function() {
		final_screen.image_text = new TextBox("To be continued...");
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
		
		final_screen.image_text = new TextBox
			("Thank you for playing our demo of /"Outline/" "
		
		world.addChild(final_screen.image_text);
		
	}
	final_screen.clear = function() {
		
	}