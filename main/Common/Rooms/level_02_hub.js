/***=================================***/
/***      Level 01: "Shadowman"      ***/
/***=================================***/
var level_02_hub = new Sprite();

	/***==================================***/
	/***          room.create()           ***/
	/***==================================***/
	// What to do at room creation time
	level_02_hub.create = function() {
		
		/***=================================***/
		/***         Passive sprites         ***/
		/***=================================***/
		// Sprites to be drawn, but without interactivity
		level_02_hub.image_background = new Sprite();
		level_02_hub.image_background.width  = 1080;
		level_02_hub.image_background.height = 720;
		level_02_hub.image_background.x = 0;
		level_02_hub.image_background.y = 0;
		level_02_hub.image_background.image = Textures.load
			("./Common/Textures/Level 02/hub background.png");
			
		level_02_hub.image_sniper = new Sprite();
		level_02_hub.image_sniper.width  = 1080;
		level_02_hub.image_sniper.height = 720;
		level_02_hub.image_sniper.x = 0;
		level_02_hub.image_sniper.y = 0;
		level_02_hub.image_sniper.image = Textures.load
			("./Common/Textures/sniper.png");
			
		level_02_hub.image_comment = new TextBox("\"Here goes misc. comments\"");
		level_02_hub.image_comment.font = "Courier";
		level_02_hub.image_comment.fontSize = 30;
		level_02_hub.image_comment.color = "#FFFFFF";
		level_02_hub.image_comment.x = 800;
		level_02_hub.image_comment.y = 650;
		level_02_hub.image_comment.update = function() {
			level_02_hub.image_comment.visible = false;
		}
		/***===   End of passive sprites  ===***/
		
		/***=================================***/
		/***         Active sprites          ***/
		/***=================================***/
		// Sprites to be be available to input_manager
		level_02_hub.button_notes = new Sprite();
		level_02_hub.button_notes.width  = 446;
		level_02_hub.button_notes.height = 182;
		level_02_hub.button_notes.x = 50;
		level_02_hub.button_notes.y = 540;
		level_02_hub.button_notes.mouseOver = false;
		level_02_hub.button_notes.update = function() {
			if(level_02_hub.button_notes.mouseOver) {
				level_02_hub.button_notes.image = Textures.load
					("./Common/Textures/notes over.gif");
				level_02_hub.image_comment.visible = true;
				level_02_hub.image_comment.text = "\"my notes\"";
			}else {
				level_02_hub.button_notes.image = Textures.load
					("./Common/Textures/notes up.png");
			}
		}
		level_02_hub.button_notes.click = function() {
			level_02_hub.readNotes();
		}
		
		level_02_hub.button_iconA = new Sprite();
		level_02_hub.button_iconA.width  = 70;
		level_02_hub.button_iconA.height = 70;
		level_02_hub.button_iconA.x = 110;
		level_02_hub.button_iconA.y = 300;
		level_02_hub.button_iconA.mouseOver = false;
		level_02_hub.button_iconA.update = function() {
			if(level_02_hub.button_iconA.mouseOver) {
				level_02_hub.button_iconA.image = Textures.load
					("./Common/Textures/a icon over.png");
				level_02_hub.image_comment.visible = true;
				level_02_hub.image_comment.text = "\"suspect A\"";
			}else {
				level_02_hub.button_iconA.image = Textures.load
					("./Common/Textures/a icon up.png");
			}
		}
		level_02_hub.button_iconA.click = function() {
			changeRoom(level_02_A);
		}
		
		level_02_hub.button_iconB = new Sprite();
		level_02_hub.button_iconB.width  = 70;
		level_02_hub.button_iconB.height = 70;
		level_02_hub.button_iconB.x = 180;
		level_02_hub.button_iconB.y = 290;
		level_02_hub.button_iconB.mouseOver = false;
		level_02_hub.button_iconB.update = function() {
			if(level_02_hub.button_iconB.mouseOver) {
				level_02_hub.button_iconB.image = Textures.load
					("./Common/Textures/b icon over.png");
				level_02_hub.image_comment.visible = true;
				level_02_hub.image_comment.text = "\"suspect B\"";
			}else {
				level_02_hub.button_iconB.image = Textures.load
					("./Common/Textures/b icon up.png");
			}
		}
		level_02_hub.button_iconB.click = function() {
			changeRoom(level_02_B);
		}
		
		level_02_hub.button_iconC = new Sprite();
		level_02_hub.button_iconC.width  = 70;
		level_02_hub.button_iconC.height = 70;
		level_02_hub.button_iconC.x = 240;
		level_02_hub.button_iconC.y = 360;
		level_02_hub.button_iconC.mouseOver = false;
		level_02_hub.button_iconC.update = function() {
			if(level_02_hub.button_iconC.mouseOver) {
				level_02_hub.button_iconC.image = Textures.load
					("./Common/Textures/c icon over.png");
				level_02_hub.image_comment.visible = true;
				level_02_hub.image_comment.text = "\"suspect C\"";
			}else {
				level_02_hub.button_iconC.image = Textures.load
					("./Common/Textures/c icon up.png");
			}
		}
		level_02_hub.button_iconC.click = function() {
			changeRoom(level_02_C);
		}
		
		level_02_hub.button_iconD = new Sprite();
		level_02_hub.button_iconD.width  = 70;
		level_02_hub.button_iconD.height = 70;
		level_02_hub.button_iconD.x = 310;
		level_02_hub.button_iconD.y = 390;
		level_02_hub.button_iconD.mouseOver = false;
		level_02_hub.button_iconD.update = function() {
			if(level_02_hub.button_iconD.mouseOver) {
				level_02_hub.button_iconD.image = Textures.load
					("./Common/Textures/d icon over.png");
				level_02_hub.image_comment.visible = true;
				level_02_hub.image_comment.text = "\"suspect D\"";
			}else {
				level_02_hub.button_iconD.image = Textures.load
					("./Common/Textures/d icon up.png");
			}
		}
		level_02_hub.button_iconD.click = function() {
			changeRoom(level_02_D);
		}
		
		level_02_hub.button_iconE = new Sprite();
		level_02_hub.button_iconE.width  = 70;
		level_02_hub.button_iconE.height = 70;
		level_02_hub.button_iconE.x = 240;
		level_02_hub.button_iconE.y = 435;
		level_02_hub.button_iconE.mouseOver = false;
		level_02_hub.button_iconE.update = function() {
			if(level_02_hub.button_iconE.mouseOver) {
				level_02_hub.button_iconE.image = Textures.load
					("./Common/Textures/e icon over.png");
				level_02_hub.image_comment.visible = true;
				level_02_hub.image_comment.text = "\"suspect E\"";
			}else {
				level_02_hub.button_iconE.image = Textures.load
					("./Common/Textures/e icon up.png");
			}
		}
		level_02_hub.button_iconE.click = function() {
			changeRoom(level_02_E);
		}
		
		/***===     End of active sprites   ===***/
		
		/***===================================***/
		/***          World allocating         ***/
		/***===================================***/
		// Visible sprites at creation time
		world.addChild(level_02_hub.image_background);
		world.addChild(level_02_hub.image_sniper);
		world.addChild(level_02_hub.image_comment);
		world.addChild(level_02_hub.button_notes);
		world.addChild(level_02_hub.button_iconA);
		world.addChild(level_02_hub.button_iconB);
		world.addChild(level_02_hub.button_iconC);
		world.addChild(level_02_hub.button_iconD);
		world.addChild(level_02_hub.button_iconE);
		
		// Active sprites at creation time
		active_sprites.push(level_02_hub.button_notes);
		active_sprites.push(level_02_hub.button_iconA);
		active_sprites.push(level_02_hub.button_iconB);
		active_sprites.push(level_02_hub.button_iconC);
		active_sprites.push(level_02_hub.button_iconD);
		active_sprites.push(level_02_hub.button_iconE);
		
	}
	
	/***===============================***/
	/***        room.readNotes()       ***/
	/***===============================***/
	// This function pulls up notes
	level_02_hub.readNotes = function() {
		
		// Clear the sprites array of the buttons behind the notes...
		level_02_hub.button_notes.mouseOver = false;
		while(active_sprites.length > 0)
			active_sprites.pop();
		
		// The notes' sprites...
		level_02_hub.notes_page = new Sprite();
		level_02_hub.notes_page.width  = 1080;
		level_02_hub.notes_page.height = 720;
		level_02_hub.notes_page.x = 0;
		level_02_hub.notes_page.y = 0;
		level_02_hub.notes_page.image = Textures.load("./Common/Textures/notes page.png");
		
		level_02_hub.close_notes = new TextBox("<< close");
		level_02_hub.close_notes.font = "Courier";
		level_02_hub.close_notes.fontSize = 30;
		level_02_hub.close_notes.color = "White";
		level_02_hub.close_notes.x = 0;
		level_02_hub.close_notes.y = 690;
		level_02_hub.close_notes.update = function() {
			if(level_02_hub.close_notes.mouseOver) {
				level_02_hub.close_notes.color = "Red";
			}else {
				level_02_hub.close_notes.color = "White";
			}
		}
		
		level_02_hub.close_notes.click = function() {
			// Get rid of all the notes stuff...
			world.removeChild(black_screen);
			world.removeChild(black_screen);
			world.removeChild(black_screen);
			world.removeChild(level_02_hub.close_notes);
			world.removeChild(level_02_hub.notes_page)
			while(active_sprites.length > 0) active_sprites.pop();
			
			// Put the normal stuff back on...
			active_sprites.push(level_02_hub.button_notes);
			active_sprites.push(level_02_hub.button_iconA);
			active_sprites.push(level_02_hub.button_iconB);
			active_sprites.push(level_02_hub.button_iconC);
			active_sprites.push(level_02_hub.button_iconD);
			active_sprites.push(level_02_hub.button_iconE);
		}

		// Put the note objects onto the world...
		world.addChild(black_screen);
		world.addChild(black_screen);
		world.addChild(black_screen); // This was called multiple times to darken effect
		world.addChild(level_02_hub.notes_page);
		world.addChild(level_02_hub.close_notes);
		
		// Push the active sprites onto the array as well...
		active_sprites.push(level_02_hub.close_notes);
	}
	
	/***=================================***/
	/***       Animation time loop       ***/
	/***=================================***/
	// Timing dependencies for animations
	level_02_hub.target_loop = new Sprite();
	level_02_hub.target_loop.value = 0;
	level_02_hub.target_x = 0;
	level_02_hub.target_y = 0;
	
	level_02_hub.target_loop.update = function() {
		level_02_hub.target_loop.value++;
		if(level_02_hub.target_loop.value == 3600) { // loop every minute
			level_02_hub.target_loop.value = 0;
		}
		
		// Target A position tracker
		if((level_02_hub.target_loop.value>=0 && level_02_hub.target_loop.value<300)			// 0 to 5 secs
			|| (level_02_hub.target_loop.value>=1800 && level_02_hub.target_loop.value<2100)) {	// 30 to 35 secs
			level_02_hub.target_x -= .5;
			level_02_hub.target_y -= .25;
		}else if((level_02_hub.target_loop.value>=900 && level_02_hub.target_loop.value<1200)		// 15 to 20 secs
				 || (level_02_hub.target_loop.value>=2700 && level_02_hub.target_loop.value<3000)) {// 45 to 50 secs
			level_02_hub.target_x += .5;
			level_02_hub.target_y += .25;
		}
	}
	world.addChild(level_02_hub.target_loop);

	/***===============================***/
	/***        Clear this room        ***/
	/***===============================***/
	// Remove from the world, un-draw sprites, etc...
	level_02_hub.clear = function() {
		world.removeChild(level_02_hub.image_background);
		world.removeChild(level_02_hub.image_sniper);
		world.removeChild(level_02_hub.image_comment);
		world.removeChild(level_02_hub.button_notes);
		world.removeChild(level_02_hub.button_iconA);
		world.removeChild(level_02_hub.button_iconB);
		world.removeChild(level_02_hub.button_iconC);
		world.removeChild(level_02_hub.button_iconD);
		world.removeChild(level_02_hub.button_iconE);
		while(active_sprites.length > 0)
			active_sprites.pop();
		
	}