/***===   "Credits screen"   ===***/
var credit_screen = new Sprite();
	// Create this room
	credit_screen.create = function() {
		// This room's passive sprites
		credit_screen.text = new TextBox
			("iDeek consists of four individuals:\n"+
			 "            Rene Isais\n"+
			 "            Hayk Manvelyan\n"+
			 "           Franz Breedon\n"+
			 "           Chaiz Tuimoloau\n");
		credit_screen.text.font = "Courier";
		credit_screen.text.fontSize = 30;
		credit_screen.text.color = "#FFFFFF";
		credit_screen.text.x = 200;
		credit_screen.text.y = 100;
		
		// This room's active sprites
		credit_screen.ret = new TextBox("<< Return  ");
		credit_screen.ret.font = "Courier";
		credit_screen.ret.fontSize = 30;
		credit_screen.ret.color = "#FFFFFF";
		credit_screen.ret.x = 0;
		credit_screen.ret.y = 690;
		credit_screen.ret.mouseOver = false;
		credit_screen.ret.bgColor = "#000000";
		credit_screen.ret.drawBG = true;
		credit_screen.ret.update = function() {
			if(credit_screen.ret.mouseOver) {
				credit_screen.ret.color = "#484848";
			}else {
				credit_screen.ret.color = "#FFFFFF";
			}
		}
		credit_screen.ret.click = function() {
			changeRoom(title_screen);
		}
		
		
		// Visible sprites at creation time
		world.addChild(credit_screen.text);
		world.addChild(credit_screen.ret);
		
		// Active sprites at creation time
		active_sprites.push(credit_screen.ret);
	}
	
	// Clear this room
	credit_screen.clear = function() {
		world.removeChild(credit_screen.text);
		world.removeChild(credit_screen.ret);
		while(active_sprites.length > 0)
			active_sprites.pop();
	}