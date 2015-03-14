/***===   "Intro screen"   ===***/
var intro_screen = new Sprite();
	// Create this room
	intro_screen.create = function() {
		// This room's passive sprites
		intro_screen.text = new TextBox
			("Welcome to project \"Outline\".\n\n" +
			 "You play the role of a contract killer.\n"+
			 "At the beginning of each contract, you will\n"+
			 "be given a general description of your target,\n"+
			 "their motives, and clues to help you find them\n"+
			 "and kill them.\n\n"+ 
			 "You also have the power to call each target's cellphone\n"+
			 "to try and gain more information, but be careful,\n"+
			 "as each target can be called only once.\n\n"+
			 "Then it's make or break. Make your choice carefully,\n"+
			 "or you may end up killing an innocent person while\n"+
			 "the real target walks away unscathed.\n\n"+
			 "Watch the targets, gather information, and when\n"+
			 "the clock strikes, take them out. That's all for \n"+
			 "the debrief. Get out there.");
		intro_screen.text.font = "Courier";
		intro_screen.text.fontSize = 30;
		intro_screen.text.color = "#FFFFFF";
		textType(intro_screen.text, 1);
		
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
		intro_screen.next.click = function() {
			changeRoom(level_01_folder);
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