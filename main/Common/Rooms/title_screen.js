/***===   "Title Screen"   ===***/
var title_screen = new Sprite();
	// Create this room
	title_screen.create = function() {
		correctlyshot = 0;
		// This room's passive sprites
		title_screen.image_background = new Sprite();
		title_screen.image_background.width  = 1080;
		title_screen.image_background.height = 720;
		title_screen.image_background.x = 0;
		title_screen.image_background.y = 0;
		title_screen.image_background.image = Textures.load
			("./Common/Textures/Title/title background.png");
		title_screen.image_background.alpha = title_screen.image_alpha;
			
		title_screen.data= new TextBox
			("iDeek v.1.5");
		title_screen.data.font = "Courier";
		title_screen.data.fontSize = 20;
		title_screen.data.color = "#FFFFFF";
		title_screen.data.x = 930;
		title_screen.data.y = 700;
		
		// This room's active sprites
		title_screen.button_start = new TextBox("<< Start >>");
		title_screen.button_start.font  = "Courier";
		title_screen.button_start.fontSize  = 30;
		title_screen.button_start.color = "#FFFFFF";
		title_screen.button_start.x = 420;
		title_screen.button_start.y = 360;
		title_screen.button_start.mouseOver = false;
		title_screen.button_start.update = function() {
			if(title_screen.button_start.mouseOver) {
				title_screen.button_start.color = "#484848";
			}else {
				title_screen.button_start.color = "#FFFFFF";
			}
		}
		title_screen.button_start.click = function() {
			changeRoom(intro_screen);
		}
		
		title_screen.button_credit = new TextBox("<< Credits >>");
		title_screen.button_credit.font  = "Courier";
		title_screen.button_credit.fontSize  = 30;
		title_screen.button_credit.color = "#FFFFFF";
		title_screen.button_credit.x = 405;
		title_screen.button_credit.y = 400;
		title_screen.button_credit.mouseOver = false;
		title_screen.button_credit.update = function() {
			if(title_screen.button_credit.mouseOver) {
				title_screen.button_credit.color = "#484848";
			}else {
				title_screen.button_credit.color = "#FFFFFF";
			}
		}
		title_screen.button_credit.click = function() {
			changeRoom(credit_screen);
		}
		
		// Visible sprites at creation time
		world.addChild(title_screen.image_background);
		world.addChild(title_screen.data);
		world.addChild(title_screen.button_start);
		world.addChild(title_screen.button_credit);
		
		// Active sprites at creation time
		active_sprites.push(title_screen.button_start);	
		active_sprites.push(title_screen.button_credit);	
	}
	
	// Clear this room
	title_screen.clear = function() {
		world.removeChild(title_screen.image_background);
		world.removeChild(title_screen.data);
		world.removeChild(title_screen.button_start);
		world.removeChild(title_screen.button_credit);
		while(active_sprites.length > 0)
			active_sprites.pop();
	}