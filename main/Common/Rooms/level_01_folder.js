/***================================***/
/***   Folder screen: "Shadowman"   ***/
/***================================***/
var level_01_folder = new Sprite();

	level_01_folder.create = function() {
		level_01_folder.image_closedfolder = new Sprite();
		level_01_folder.image_closedfolder.width  = 1080;
		level_01_folder.image_closedfolder.height = 720;
		level_01_folder.image_closedfolder.image = Textures.load("./Common/Textures/folder closed.png");
		
		level_01_folder.image_openfolder = new Sprite();
		level_01_folder.image_openfolder.width  = 1080;
		level_01_folder.image_openfolder.height = 720;
		level_01_folder.image_openfolder.image = Textures.load("./Common/Textures/folder open.png");
		
		level_01_folder.image_text = new TextBox(level_01_folder.text[0]);
		level_01_folder.image_text.font = "Courier";
		level_01_folder.image_text.fontSize = 30;
		level_01_folder.image_text.color = "White";
		level_01_folder.image_text.x = 100;
		level_01_folder.image_text.y = 100;
		level_01_folder.image_text.page = 0;
		
		level_01_folder.button_continue = new TextBox("Continue >>");
		level_01_folder.button_continue.font = "Courier";
		level_01_folder.button_continue.fontSize = 30;
		level_01_folder.button_continue.color = "#FFFFFF";
		level_01_folder.button_continue.x = 880;
		level_01_folder.button_continue.y = 690;
		level_01_folder.button_continue.update = function() {
			if(level_01_folder.button_continue.mouseOver) {
				level_01_folder.button_continue.color = "#484848";
			}else {
				level_01_folder.button_continue.color = "#FFFFFF";
			}
		}
		level_01_folder.button_continue.click = function() {
			changeRoom(level_01_hub);
		}
		
		level_01_folder.button_next = new TextBox("next >>");
		level_01_folder.button_next.font = "Courier";
		level_01_folder.button_next.color = "White";
		level_01_folder.button_next.fontSize = 30;
		level_01_folder.button_next.x = 920;
		level_01_folder.button_next.y = 690;
		level_01_folder.button_next.update = function() {
			if(level_01_folder.button_next.mouseOver) {
				level_01_folder.button_next.color = "#484848";
			}else {
				level_01_folder.button_next.color = "White";
			}
		}
		level_01_folder.button_next.click = function() {
			sound_page.play();
			world.removeChild(level_01_folder.button_next);
			world.removeChild(level_01_folder.button_prev);
			while(active_sprites.length > 0) active_sprites.pop();
			level_01_folder.image_text.text = (level_01_folder.text[++level_01_folder.image_text.page]);
			world.addChild(level_01_folder.button_prev);
			active_sprites.push(level_01_folder.button_prev);
			if(level_01_folder.image_text.page < level_01_folder.text.length - 1) {
				world.addChild(level_01_folder.button_next);
				active_sprites.push(level_01_folder.button_next);
			}else	{
				world.addChild(level_01_folder.button_continue);
				active_sprites.push(level_01_folder.button_continue);
			}
		}
		
		level_01_folder.button_prev = new TextBox("<< prev");
		sound_page.play();
		level_01_folder.button_prev.font = "Courier";
		level_01_folder.button_prev.color = "White";
		level_01_folder.button_prev.fontSize = 30;
		level_01_folder.button_prev.x = 0;
		level_01_folder.button_prev.y = 690;
		level_01_folder.button_prev.update = function() {
			if(level_01_folder.button_prev.mouseOver) {
				level_01_folder.button_prev.color = "#484848";
			}else {
				level_01_folder.button_prev.color = "White";
			}
		}
		level_01_folder.button_prev.click = function() {
			world.removeChild(level_01_folder.button_prev);
			world.removeChild(level_01_folder.button_next);
			world.removeChild(level_01_folder.button_continue);
			while(active_sprites.length > 0) active_sprites.pop();
			level_01_folder.image_text.text = (level_01_folder.text[--level_01_folder.image_text.page]);
			world.addChild(level_01_folder.button_next);
			active_sprites.push(level_01_folder.button_next);
			if(level_01_folder.image_text.page > 0) {
				world.addChild(level_01_folder.button_prev);
				active_sprites.push(level_01_folder.button_prev);
			}
		}
		
		level_01_folder.button_open = new TextBox("<< READ >>");
		level_01_folder.button_open.font = "Courier";
		level_01_folder.button_open.color = "White";
		level_01_folder.button_open.fontSize = 30;
		level_01_folder.button_open.x = 440;
		level_01_folder.button_open.y = 300;
		level_01_folder.button_open.update = function() {
			if(level_01_folder.button_open.mouseOver) {
				level_01_folder.button_open.color = "#484848";
			}else {
				level_01_folder.button_open.color = "White";
			}
		}
		level_01_folder.button_open.click = function() {
			world.removeChild(level_01_folder.image_closedfolder);
			world.removeChild(level_01_folder.button_open);
			while(active_sprites.length > 0) active_sprites.pop();
			
			world.addChild(level_01_folder.image_openfolder);
			world.addChild(black_screen);
			world.addChild(black_screen);
			world.addChild(black_screen);
			world.addChild(level_01_folder.image_text);
			world.addChild(level_01_folder.button_next);
			
			active_sprites.push(level_01_folder.button_next);
		}
		
		world.addChild(level_01_folder.image_closedfolder);
		world.addChild(level_01_folder.button_open);
		
		active_sprites.push(level_01_folder.button_open);
				
	}
	
	level_01_folder.text = new Array();
	level_01_folder.text[0] = "\n\n\n\n\n                  CONFIDENTIAL	            \n\n"+
							  "            Priority order: Shadowman";
	level_01_folder.text[1] = "\"His partner was iced just moments before I\n"+
							 "got this priority order.\n\n"+ 
							 "He's down by the bay waiting for the deadweight\n"+
							 "to deliver a package.\n\n"+
							 "Obviously you can't rendezvous with a deadman,\n"+
							 "and in the past he's been able to escape scenes\n"+
							 "where we've only half caught up to him, like\n"+
							 "right now....";
							 
	level_01_folder.text[2] = "... You have to find him before his partner's\n"+
							 "death is relayed back to him. The sneak's got\n"+
							 "no outings, now that his friend's out of the\n"+
							 "picture.\n\n"+
							 "This will be the last chance to do him in before\n"+
							 "he disappears into the shadows for good.\n\n"+
							 "You'll have two minutes to scope out the scene.\n"+
							 "When the clock strikes 11:32 pm, you'll only have a\n"+
							 "one minute window to strike.\"";
							 
	level_01_folder.text[3] = "\"As usual, your skills are invaluable to us.\n\n"+
							 "We have no photo, we have no lead...\n\n"+
							 "We realize these most unsavoury conditions prove\n"+
							 "impossible scenarios for even the most trained\n"+
							 "individuals in this particular field.\n\n"+
							 "But of course, that is why your sense of judgement\n"+
							 "has become one of your most praised assets.\"\n\n"+
							 "                                               -S."
	
	level_01_folder.clear = function() {
		world.removeChild(black_screen);
		world.removeChild(black_screen);
		world.removeChild(black_screen);
		world.removeChild(level_01_folder.image_openfolder);
		world.removeChild(level_01_folder.image_text);
		world.removeChild(level_01_folder.text);
		world.removeChild(level_01_folder.button_prev);
		world.removeChild(level_01_folder.button_continue);
		
		while(active_sprites.length > 0) active_sprites.pop();
	}