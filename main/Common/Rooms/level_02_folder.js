/***================================***/
/***   Folder screen: "Shadowman"   ***/
/***================================***/
var level_02_folder = new Sprite();

	level_02_folder.create = function() {
		level_02_folder.image_closedfolder = new Sprite();
		level_02_folder.image_closedfolder.width  = 1080;
		level_02_folder.image_closedfolder.height = 720;
		level_02_folder.image_closedfolder.image = Textures.load("./Common/Textures/folder closed.png");
		
		level_02_folder.image_openfolder = new Sprite();
		level_02_folder.image_openfolder.width  = 1080;
		level_02_folder.image_openfolder.height = 720;
		level_02_folder.image_openfolder.image = Textures.load("./Common/Textures/folder open.png");
		
		level_02_folder.image_text = new TextBox(level_02_folder.text[0]);
		level_02_folder.image_text.font = "Courier";
		level_02_folder.image_text.fontSize = 30;
		level_02_folder.image_text.color = "White";
		level_02_folder.image_text.x = 100;
		level_02_folder.image_text.y = 100;
		level_02_folder.image_text.page = 0;
		
		level_02_folder.button_continue = new TextBox("Continue >>");
		level_02_folder.button_continue.font = "Courier";
		level_02_folder.button_continue.fontSize = 30;
		level_02_folder.button_continue.color = "#FFFFFF";
		level_02_folder.button_continue.x = 880;
		level_02_folder.button_continue.y = 690;
		level_02_folder.button_continue.update = function() {
			if(level_02_folder.button_continue.mouseOver) {
				level_02_folder.button_continue.color = "#484848";
			}else {
				level_02_folder.button_continue.color = "#FFFFFF";
			}
		}
		level_02_folder.button_continue.click = function() {
			changeRoom(level_02_hub);
		}
		
		level_02_folder.button_next = new TextBox("next >>");
		level_02_folder.button_next.font = "Courier";
		level_02_folder.button_next.color = "White";
		level_02_folder.button_next.fontSize = 30;
		level_02_folder.button_next.x = 920;
		level_02_folder.button_next.y = 690;
		level_02_folder.button_next.update = function() {
			if(level_02_folder.button_next.mouseOver) {
				level_02_folder.button_next.color = "#484848";
			}else {
				level_02_folder.button_next.color = "White";
			}
		}
		level_02_folder.button_next.click = function() {
			sound_page.play();
			world.removeChild(level_02_folder.button_next);
			world.removeChild(level_02_folder.button_prev);
			while(active_sprites.length > 0) active_sprites.pop();
			level_02_folder.image_text.text = (level_02_folder.text[++level_02_folder.image_text.page]);
			world.addChild(level_02_folder.button_prev);
			active_sprites.push(level_02_folder.button_prev);
			if(level_02_folder.image_text.page < level_02_folder.text.length - 1) {
				world.addChild(level_02_folder.button_next);
				active_sprites.push(level_02_folder.button_next);
			}else	{
				world.addChild(level_02_folder.button_continue);
				active_sprites.push(level_02_folder.button_continue);
			}
		}
		
		level_02_folder.button_prev = new TextBox("<< prev");
		level_02_folder.button_prev.font = "Courier";
		level_02_folder.button_prev.color = "White";
		level_02_folder.button_prev.fontSize = 30;
		level_02_folder.button_prev.x = 0;
		level_02_folder.button_prev.y = 690;
		level_02_folder.button_prev.update = function() {
			if(level_02_folder.button_prev.mouseOver) {
				level_02_folder.button_prev.color = "#484848";
			}else {
				level_02_folder.button_prev.color = "White";
			}
		}
		level_02_folder.button_prev.click = function() {
			sound_page.play();
			world.removeChild(level_02_folder.button_prev);
			world.removeChild(level_02_folder.button_next);
			world.removeChild(level_02_folder.button_continue);
			while(active_sprites.length > 0) active_sprites.pop();
			level_02_folder.image_text.text = (level_02_folder.text[--level_02_folder.image_text.page]);
			world.addChild(level_02_folder.button_next);
			active_sprites.push(level_02_folder.button_next);
			if(level_02_folder.image_text.page > 0) {
				world.addChild(level_02_folder.button_prev);
				active_sprites.push(level_02_folder.button_prev);
			}
		}
		
		level_02_folder.button_open = new TextBox("<< READ >>");
		level_02_folder.button_open.font = "Courier";
		level_02_folder.button_open.color = "White";
		level_02_folder.button_open.fontSize = 30;
		level_02_folder.button_open.x = 440;
		level_02_folder.button_open.y = 300;
		level_02_folder.button_open.update = function() {
			if(level_02_folder.button_open.mouseOver) {
				level_02_folder.button_open.color = "#484848";
			}else {
				level_02_folder.button_open.color = "White";
			}
		}
		level_02_folder.button_open.click = function() {
			world.removeChild(level_02_folder.image_closedfolder);
			world.removeChild(level_02_folder.button_open);
			while(active_sprites.length > 0) active_sprites.pop();
			
			world.addChild(level_02_folder.image_openfolder);
			world.addChild(black_screen);
			world.addChild(black_screen);
			world.addChild(black_screen);
			world.addChild(level_02_folder.image_text);
			world.addChild(level_02_folder.button_next);
			
			active_sprites.push(level_02_folder.button_next);
		}
		
		world.addChild(level_02_folder.image_closedfolder);
		world.addChild(level_02_folder.button_open);
		
		active_sprites.push(level_02_folder.button_open);
				
	}
	
	level_02_folder.text = new Array();
	level_02_folder.text[0] = "\n\n\n\n\n                  CONFIDENTIAL	            \n\n"+
							  "       Priority order: Chain of Command";
	level_02_folder.text[1] = "\"Your target is an elusive son of a bitch.\n\n"+
							 "He’s been masquerading as an upstanding member of\n"+
							 "society but don’t let that fool you this person is\n"+
							 "dangerous. All we have are vague descriptions of a\n"+
							 "Mexican man with tan skin who has been reported with\n"+
							 "and without a moustache. His day job is nothing to\n"+
							 "write home about but he seems to have rather expensive\n"+
							 "tastes for his income bracket.\"";
								
							 
	level_02_folder.text[2] = "\"He is a very devout church attendee and often\n"+
							 "gives money to local charities. This makes you\n"+
							 "wonder if theholymen know that a devil is\n"+
							  "walking amongst them.\"\n\n"+
							 "He’s connected to numerous \“disappearances\” and\n"+
							 "is known to be a prominent supplier of arms\n"+
							 "in the area.\"\n\n"+
							 "We’ve been able to pin this bastard to this residence\n"+
							 "but haven’t been able to do anything about him.\n\n"+
							 "That's where you come in. This one sounds tough but\n"+
							 "your skills are tuned for situations just like this.\"\n";
							 
	level_02_folder.text[3] = "For anyone else we'd wait\n"+
							 "for someone else to knock him off, but he's just\n"+
							 "too influential for us to sit twiddling our thumbs\n"+
							 "while his alcohol and tobacco addictions kill\n"+
							 "him for us.\"\n\n"+
							 "They've got gaurds posted, so your opporunity\n"+
							 "starts at 2:10 when they get lazy before they\n"+
							 "switch posts. Take 3 minutes to gather whatever\n"+
							 "info you can find, and use that last minute to\n"+
							 "take the son of a bitch out.\n\n"+
							 "He thinks he's above the law. But he's not above\n"+
							 "a bullet.\n\n"+
							 "He's not above you.\"";
	
	level_02_folder.clear = function() {
		world.removeChild(black_screen);
		world.removeChild(black_screen);
		world.removeChild(black_screen);
		world.removeChild(level_02_folder.image_openfolder);
		world.removeChild(level_02_folder.image_text);
		world.removeChild(level_02_folder.text);
		world.removeChild(level_02_folder.button_prev);
		world.removeChild(level_02_folder.button_continue);
		
		while(active_sprites.length > 0) active_sprites.pop();
	}