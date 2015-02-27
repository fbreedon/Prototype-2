/***===   "Intro screen"   ===***/
var intro_screen = new Sprite();
	// Create this room
	intro_screen.create = function() {
		// This room's passive sprites
		intro_screen.text = new TextBox
			("This is the prototype for \"Outline\"\n\n" +
			 "In this demo we are showcasing one\n"+
			 "scenario still in development\n\n"+
			 "\"Outline\" is an atmospheric decision making\n"+
			 "game based on ambiguity. The images in this game\n"+
			 "depict a lone individual who manipulates the\n"+
			 "fate of the unbeknownst...");
		intro_screen.text.font = "Courier";
		intro_screen.text.fontSize = 30;
		intro_screen.text.color = "#FFFFFF";
		
		// This room's active sprites
		intro_screen.next = new TextBox("Continue >>");
		intro_screen.next.font = "Courier";
		intro_screen.next.fontSize = 30;
		intro_screen.next.color = "#FFFFFF";
		intro_screen.next.x = 880;
		intro_screen.next.y = 690;
		intro_screen.next.mouseOver = false;
		intro_screen.next.bgColor = "#000000";
		intro_screen.next.drawBG = true;
		intro_screen.next.update = function() {
			if(intro_screen.next.mouseOver) {
				intro_screen.next.color = "#484848";
			}else {
				intro_screen.next.color = "#FFFFFF";
			}
		}
		
		intro_screen.ret = new TextBox("<< Return  ");
		intro_screen.ret.font = "Courier";
		intro_screen.ret.fontSize = 30;
		intro_screen.ret.color = "#FFFFFF";
		intro_screen.ret.x = 0;
		intro_screen.ret.y = 690;
		intro_screen.ret.mouseOver = false;
		intro_screen.ret.bgColor = "#000000";
		intro_screen.ret.drawBG = true;
		intro_screen.ret.update = function() {
			if(intro_screen.ret.mouseOver) {
				intro_screen.ret.color = "#484848";
			}else {
				intro_screen.ret.color = "#FFFFFF";
			}
		}
		intro_screen.ret.click = function() {
			changeRoom(title_screen);
		}
		
		
		// Visible sprites at creation time
		world.addChild(intro_screen.text);
		world.addChild(intro_screen.ret);
		world.addChild(intro_screen.next);
		
		// Active sprites at creation time
		active_sprites.push(intro_screen.ret);
		active_sprites.push(intro_screen.next);
	}
	
	// Clear this room
	intro_screen.clear = function() {
		world.removeChild(intro_screen.text);
		world.removeChild(intro_screen.ret);
		world.removeChild(intro_screen.next);
		while(active_sprites.length > 0)
			active_sprites.pop();
		
	}