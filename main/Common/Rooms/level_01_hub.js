/***=================================***/
/***      Level 01: "Shadowman"      ***/
/***=================================***/
var level_01_hub = new Sprite();
	// Is the BGM playing?
	level_01_hub.bgm = false;
	
	level_01_hub.ending_state = '';
	
	level_01_hub.targetA_killed = false;
	level_01_hub.targetB_killed = false;
	level_01_hub.targetC_killed = false;
	level_01_hub.targetD_killed = false;
	
	level_01_hub.targetA_cancall = true;
	level_01_hub.targetB_cancall = true;
	level_01_hub.targetC_cancall = true;
	level_01_hub.targetD_cancall = true;
	
	/***==================================***/
	/***          room.create()           ***/
	/***==================================***/
	// What to do at room creation time
	level_01_hub.create = function() {
		/***=================================***/
		/***         Passive sprites         ***/
		/***=================================***/
		// Sprites to be drawn, but without interactivity
		level_01_hub.image_background = new Sprite();
		level_01_hub.image_background.width  = 1080;
		level_01_hub.image_background.height = 720;
		level_01_hub.image_background.x = 0;
		level_01_hub.image_background.y = 0;
		level_01_hub.image_background.image = Textures.load
			("./Common/Textures/Level 01/hub background.png");
			
		level_01_hub.image_sniper = new Sprite();
		level_01_hub.image_sniper.width  = 1080;
		level_01_hub.image_sniper.height = 720;
		level_01_hub.image_sniper.x = 0;
		level_01_hub.image_sniper.y = 0;
		level_01_hub.image_sniper.image = Textures.load
			("./Common/Textures/sniper.png");
		level_01_hub.image_sniper.frameWidth  = 1080;
		level_01_hub.image_sniper.frameHeight = 720;
		level_01_hub.image_sniper.frameCount  = 7;
		level_01_hub.image_sniper.frameRate   = 6;
		level_01_hub.image_sniper.addAnimation("idle",0,6);
		level_01_hub.image_sniper.update = function() {
			level_01_hub.image_sniper.animation = "idle";
		};
			
		level_01_hub.image_comment = new TextBox("\"Here goes misc. comments\"");
		level_01_hub.image_comment.font = "Courier";
		level_01_hub.image_comment.fontSize = 30;
		level_01_hub.image_comment.color = "#FFFFFF";
		level_01_hub.image_comment.x = 800;
		level_01_hub.image_comment.y = 650;
		level_01_hub.image_comment.update = function() {
			level_01_hub.image_comment.visible = false;
		}
		/***===   End of passive sprites  ===***/
		
		/***=================================***/
		/***         Active sprites          ***/
		/***=================================***/
		// Sprites to be be available to input_manager
		level_01_hub.button_notes = new Sprite();
		level_01_hub.button_notes.width  = 446;
		level_01_hub.button_notes.height = 182;
		level_01_hub.button_notes.x = 50;
		level_01_hub.button_notes.y = 540;
		level_01_hub.button_notes.image = Textures.load
			("./Common/Textures/notes up.png");
		level_01_hub.button_notes.frameWidth  = 446;
		level_01_hub.button_notes.frameHeight = 182;
		level_01_hub.button_notes.frameCount  = 3;
		level_01_hub.button_notes.frameRate   = 4;
		level_01_hub.button_notes.addAnimation("idle",0,2);
		level_01_hub.button_notes.animation = "idle";
		level_01_hub.button_notes.mouseOver = false;
		level_01_hub.button_notes.update = function() {
			if(level_01_hub.button_notes.mouseOver) {
				level_01_hub.button_notes.image = Textures.load
					("./Common/Textures/notes over.gif");
				level_01_hub.image_comment.visible = true;
				level_01_hub.image_comment.text = "\"my notes\"";
			}else {
				level_01_hub.button_notes.image = Textures.load
					("./Common/Textures/notes up.png");
				level_01_hub.button_notes.animation = "idle";
			}
		}
		level_01_hub.button_notes.click = function() {
			sound_page.play();
			level_01_hub.readNotes();
		}
		
		level_01_hub.button_iconA = new Sprite();
		level_01_hub.button_iconA.width  = 70;
		level_01_hub.button_iconA.height = 70;
		level_01_hub.button_iconA.x = 380;
		level_01_hub.button_iconA.y = 260;
		level_01_hub.button_iconA.soundoff = true;
		level_01_hub.button_iconA.mouseOver = false;
		level_01_hub.button_iconA.update = function() {
			if(level_01_hub.button_iconA.mouseOver) {
				level_01_hub.button_iconA.image = Textures.load
					("./Common/Textures/a icon over.png");
				level_01_hub.image_comment.visible = true;
				level_01_hub.image_comment.text = "\"suspect A\"";
				if(level_01_hub.button_iconA.soundoff) {
					level_01_hub.sound_boop01.play();
					level_01_hub.button_iconA.soundoff = false;
				}
			}else {
				level_01_hub.button_iconA.soundoff = true;
				level_01_hub.button_iconA.image = Textures.load
					("./Common/Textures/a icon up.png");
			}
		}
		level_01_hub.button_iconA.click = function() {
			level_01_hub.sound_background.volume = 0.2;
			changeRoom(level_01_A);
		}
		
		level_01_hub.button_iconB = new Sprite();
		level_01_hub.button_iconB.width  = 70;
		level_01_hub.button_iconB.height = 70;
		level_01_hub.button_iconB.x = 500;
		level_01_hub.button_iconB.y = 340;
		level_01_hub.button_iconB.soundoff = true;
		level_01_hub.button_iconB.mouseOver = false;
		level_01_hub.button_iconB.update = function() {
			if(level_01_hub.button_iconB.mouseOver) {
				level_01_hub.button_iconB.image = Textures.load
					("./Common/Textures/b icon over.png");
				level_01_hub.image_comment.visible = true;
				level_01_hub.image_comment.text = "\"suspect B\"";
				if(level_01_hub.button_iconB.soundoff) {
					level_01_hub.sound_boop01.play();
					level_01_hub.button_iconB.soundoff = false;
				}
			}else {
				level_01_hub.button_iconB.soundoff = true;
				level_01_hub.button_iconB.image = Textures.load
					("./Common/Textures/b icon up.png");
			}
		}
		level_01_hub.button_iconB.click = function() {
			level_01_hub.sound_background.volume = 0.2;
			changeRoom(level_01_B);
		}
		
		level_01_hub.button_iconC = new Sprite();
		level_01_hub.button_iconC.width  = 70;
		level_01_hub.button_iconC.height = 70;
		level_01_hub.button_iconC.x = 140;
		level_01_hub.button_iconC.y = 320;
		level_01_hub.button_iconC.soundoff = true;
		level_01_hub.button_iconC.mouseOver = false;
		level_01_hub.button_iconC.update = function() {
			if(level_01_hub.button_iconC.mouseOver) {
				level_01_hub.button_iconC.image = Textures.load
					("./Common/Textures/c icon over.png");
				level_01_hub.image_comment.visible = true;
				level_01_hub.image_comment.text = "\"suspect C\"";
				if(level_01_hub.button_iconC.soundoff) {
					level_01_hub.sound_boop01.play();
					level_01_hub.button_iconC.soundoff = false;
				}
			}else {
				level_01_hub.button_iconC.soundoff = true;
				level_01_hub.button_iconC.image = Textures.load
					("./Common/Textures/c icon up.png");
			}
		}
		level_01_hub.button_iconC.click = function() {
			level_01_hub.sound_background.volume = 0.2;
			changeRoom(level_01_C);
		}
		
		level_01_hub.button_iconD = new Sprite();
		level_01_hub.button_iconD.width  = 70;
		level_01_hub.button_iconD.height = 70;
		level_01_hub.button_iconD.x = 330;
		level_01_hub.button_iconD.y = 430;
		level_01_hub.button_iconD.soundoff = true;
		level_01_hub.button_iconD.mouseOver = false;
		level_01_hub.button_iconD.update = function() {
			if(level_01_hub.button_iconD.mouseOver) {
				level_01_hub.button_iconD.image = Textures.load
					("./Common/Textures/d icon over.png");
				level_01_hub.image_comment.visible = true;
				level_01_hub.image_comment.text = "\"suspect D\"";
				if(level_01_hub.button_iconD.soundoff) {
					level_01_hub.sound_boop01.play();
					level_01_hub.button_iconD.soundoff = false;
				}
			}else {
				level_01_hub.button_iconD.soundoff = true;
				level_01_hub.button_iconD.image = Textures.load
					("./Common/Textures/d icon up.png");
			}
		}
		level_01_hub.button_iconD.click = function() {
					level_01_hub.sound_background.volume = 0.2;
					changeRoom(level_01_D);
		}
		/***===     End of active sprites   ===***/
		
		/***===================================***/
		/***           Audio objects           ***/
		/***===================================***/
		// This room's audio objects		
		level_01_hub.sound_boop01 = new Audio("./Common/Sounds/boop01.wav");
		level_01_hub.sound_boop01.volume = 0.5;
		
		/***===     End of audio objects    ===***/
		
		/***===================================***/
		/***          World allocating         ***/
		/***===================================***/
		// Visible sprites at creation time
		world.addChild(level_01_hub.image_background);
		world.addChild(level_01_hub.image_sniper);
		world.addChild(level_01_hub.image_comment);
		world.addChild(level_01_hub.button_notes);
		world.addChild(level_01_hub.button_iconA);
		world.addChild(level_01_hub.button_iconB);
		world.addChild(level_01_hub.button_iconC);
		world.addChild(level_01_hub.button_iconD);
		world.addChild(level_01_hub.timer_text);
		
		// Active sprites at creation time
		active_sprites.push(level_01_hub.button_notes);
		active_sprites.push(level_01_hub.button_iconA);
		active_sprites.push(level_01_hub.button_iconB);
		active_sprites.push(level_01_hub.button_iconC);
		active_sprites.push(level_01_hub.button_iconD);
		
		// Play this room's background audio if it isn't yet playing
		if(!level_01_hub.bgm)
			level_01_hub.playAudio();
		
	}
	
	/***=================================***/
	/***           Level timer           ***/
	/***=================================***/
	// Time limit for the level
	level_01_hub.level_timer = new Sprite();
	level_01_hub.level_timer.value = 0;
	level_01_hub.level_timer.update = function() {
		if(room_manager.curr_room == level_01_hub
			|| room_manager.curr_room == level_01_A
			|| room_manager.curr_room == level_01_B
			|| room_manager.curr_room == level_01_C
			|| room_manager.curr_room == level_01_D) {
			level_01_hub.level_timer.value++;
			if(level_01_hub.level_timer.value > 7200) { // 2 minutes
				level_01_hub.timer_text.color = "Red";
			}
			if(level_01_hub.level_timer.value > 10800) { // 3 minutes
				level_01_hub.level_timer.value = 0;
				level_01_hub.stopAudio();
				world.removeChild(level_01_hub.level_timer);
				world.removeChild(level_01_hub.target_loop);
				changeRoom(game_over_screen);
			}
		}
	};
	
	world.addChild(level_01_hub.level_timer);
	
	// Timer text box
	level_01_hub.timer_text = new TextBox("Time: ");
	level_01_hub.timer_text.font = "Courier";
	level_01_hub.timer_text.fontSize = 30;
	level_01_hub.timer_text.color = "White";
	level_01_hub.timer_text.x = 860;
	level_01_hub.timer_text.y = 4;
	level_01_hub.timer_text.update = function() {
		level_01_hub.timer_text.text = 
			"11:3" + Math.floor(level_01_hub.level_timer.value/3600) + ":" +
			+ Math.floor(level_01_hub.level_timer.value/60) % 60 + " PM";
	};
	
	/***=================================***/
	/***       Animation time loop       ***/
	/***=================================***/
	// Timing dependencies for animations
	level_01_hub.target_loop = new Sprite();
	level_01_hub.target_loop.value = 0;
	level_01_hub.target_x = 0;
	level_01_hub.target_y = 0;
	
	level_01_hub.target_loop.update = function() {
		if(room_manager.curr_room == level_01_hub
			|| room_manager.curr_room == level_01_A
			|| room_manager.curr_room == level_01_B
			|| room_manager.curr_room == level_01_C
			|| room_manager.curr_room == level_01_D) {
			if(level_01_hub.targetA_in_call == false
				&& level_01_hub.targetB_in_call == false
				&& level_01_hub.targetC_in_call == false
				&& level_01_hub.targetD_in_call == false) { // stops when in call
				level_01_hub.target_loop.value++;
				if(level_01_hub.target_loop.value == 3600) { // loop every minute
					level_01_hub.target_loop.value = 0;
				}
			}
		}
		
		// Target C position tracker
		if(room_manager.curr_room == level_01_hub
			|| room_manager.curr_room == level_01_A
			|| room_manager.curr_room == level_01_B
			|| room_manager.curr_room == level_01_C
			|| room_manager.curr_room == level_01_D) {
			if(level_01_hub.targetA_in_call == false
				&& level_01_hub.targetB_in_call == false
				&& level_01_hub.targetC_in_call == false
				&& level_01_hub.targetD_in_call == false) {
				if((level_01_hub.target_loop.value>=0 && level_01_hub.target_loop.value<300)
					|| (level_01_hub.target_loop.value>=1350 && level_01_hub.target_loop.value<1650)
					|| (level_01_hub.target_loop.value>=1800 && level_01_hub.target_loop.value<2100)
					|| (level_01_hub.target_loop.value>=3150 && level_01_hub.target_loop.value<3450)) {
					level_01_hub.target_x += .25;
					level_01_hub.target_y -= .25;
				}else if((level_01_hub.target_loop.value>=450 && level_01_hub.target_loop.value<750)
						 || (level_01_hub.target_loop.value>=900 && level_01_hub.target_loop.value<1200)
						 || (level_01_hub.target_loop.value>=2250 && level_01_hub.target_loop.value<2550)
						 || (level_01_hub.target_loop.value>=2700 && level_01_hub.target_loop.value<3000)) {
					level_01_hub.target_x -= .25;
					level_01_hub.target_y += .25;
				}
			}
		}
	};
	world.addChild(level_01_hub.target_loop);
	
	/***===============================***/
	/***        room.readNotes()       ***/
	/***===============================***/
	// This function pulls up notes
	level_01_hub.readNotes = function() {
		// Clear the sprites array of the buttons behind the notes...
		level_01_hub.button_notes.mouseOver = false;
		while(active_sprites.length > 0)
			active_sprites.pop();
		
		// The notes' sprites...
		level_01_hub.notes_page = new Sprite();
		level_01_hub.notes_page.width  = 1080;
		level_01_hub.notes_page.height = 720;
		level_01_hub.notes_page.x = 0;
		level_01_hub.notes_page.y = 0;
		level_01_hub.notes_page.image = Textures.load("./Common/Textures/notes page.png");
		
		level_01_hub.notes_page.notes = new TextBox("Notes on targets:\n\n" +
		level_01_hub.targetA_ending_info + "\n" +
		level_01_hub.targetB_ending_info + "\n" +
		level_01_hub.targetC_ending_info + "\n" +
		level_01_hub.targetD_ending_info + "\n");
		level_01_hub.notes_page.notes.font = "Courier";
		level_01_hub.notes_page.notes.fontSize = 30;
		level_01_hub.notes_page.notes.color = "White";
		level_01_hub.notes_page.notes.x = 100;
		level_01_hub.notes_page.notes.y = 100;
		
		level_01_hub.close_notes = new TextBox("<< close");
		level_01_hub.close_notes.font = "Courier";
		level_01_hub.close_notes.fontSize = 30;
		level_01_hub.close_notes.color = "White";
		level_01_hub.close_notes.x = 0;
		level_01_hub.close_notes.y = 690;
		level_01_hub.close_notes.update = function() {
			if(level_01_hub.close_notes.mouseOver) {
				level_01_hub.close_notes.color = "Red";
			}else {
				level_01_hub.close_notes.color = "White";
			}
		}
		
		level_01_hub.close_notes.click = function() {
			// Get rid of all the notes stuff...
			world.removeChild(level_01_hub.close_notes);
			world.removeChild(level_01_hub.close_notes.notes);
			world.removeChild(level_01_hub.notes_page);
			world.removeChild(black_screen);
			world.removeChild(black_screen);
			world.removeChild(black_screen);
			world.removeChild(level_01_hub.notes_page.notes);
			while(active_sprites.length > 0) active_sprites.pop();
			
			// Put the normal stuff back on...
			active_sprites.push(level_01_hub.button_notes);
			active_sprites.push(level_01_hub.button_iconA);
			active_sprites.push(level_01_hub.button_iconB);
			active_sprites.push(level_01_hub.button_iconC);
			active_sprites.push(level_01_hub.button_iconD);
		}

		// Put the note objects onto the world...
		world.addChild(level_01_hub.notes_page);
		world.addChild(black_screen);
		world.addChild(black_screen);
		world.addChild(black_screen); // This was called multiple times to darken effect
		world.addChild(level_01_hub.notes_page.notes);
		world.addChild(level_01_hub.close_notes);
		
		// Push the active sprites onto the array as well...
		active_sprites.push(level_01_hub.close_notes);
	}
	
	/***===================================***/
	/***         room.playAudio()          ***/
	/***===================================***/
	// Play special audio for this room
	level_01_hub.playAudio = function() {
		// Room ambiance
		level_01_hub.sound_background = new Audio("./Common/Sounds/ambiance02.wav");
		level_01_hub.sound_background.volume = 0.5;
		
		// Play and loop room ambiance
		level_01_hub.sound_background.addEventListener('ended', function() {
			this.currentTime = 0;
			this.play();
		});
		level_01_hub.sound_background.play();
		
		level_01_hub.bgm = true;
	}
	
	/***=================================***/
	/***         room.stopAudio()        ***/
	/***=================================***/
	// Stop all audio emitting from this room
	level_01_hub.stopAudio = function() {
		// Stop city ambiance
		level_01_hub.sound_background.pause();
		level_01_hub.sound_background.currentTime = 0;
		level_01_hub.sound_background.removeEventListener('ended', function() {
			this.pause();
			this.currentTime = 0;
		});
	}
	
	/***===============================***/
	/***       Information seen        ***/
	/***===============================***/
	level_01_hub.targetA_has_seen = false;
	level_01_hub.targetA_seen_info = "Target A: Pulls out his phone frequently...\n";
	level_01_hub.targetA_has_called = false;
	level_01_hub.targetA_in_call = false;
	level_01_hub.targetA_ending_info = ""; 
	
	level_01_hub.targetB_has_seen = false;
	level_01_hub.targetB_seen_info = "";
	level_01_hub.targetB_has_called = false;
	level_01_hub.targetB_in_call = false;
	level_01_hub.targetB_ending_info = "";
	
	level_01_hub.targetC_has_seen = false;
	level_01_hub.targetC_seen_info = "";
	level_01_hub.targetC_has_called = false;
	level_01_hub.targetC_in_call = false;
	level_01_hub.targetC_ending_info = "";
	
	level_01_hub.targetD_has_seen = false;
	level_01_hub.targetD_seen_info = "";
	level_01_hub.targetD_has_called = false;
	level_01_hub.targetD_in_call = false;
	level_01_hub.targetD_ending_info = "";
	
	/***===============================***/
	/***        Clear this room        ***/
	/***===============================***/
	// Remove from the world, un-draw sprites, etc...
	level_01_hub.clear = function() {
		world.removeChild(level_01_hub.image_background);
		world.removeChild(level_01_hub.image_sniper);
		world.removeChild(level_01_hub.image_comment);
		world.removeChild(level_01_hub.button_notes);
		world.removeChild(level_01_hub.button_iconA);
		world.removeChild(level_01_hub.button_iconB);
		world.removeChild(level_01_hub.button_iconC);
		world.removeChild(level_01_hub.button_iconD);
		world.removeChild(level_01_hub.timer_text);
		
		/*world.removeChild(black_screen);
		world.removeChild(black_screen);
		world.removeChild(black_screen);
		world.removeChild(level_01_hub.close_notes);
		world.removeChild(level_01_hub.close_notes.notes);
		world.removeChild(level_01_hub.notes_page);
		world.removeChild(level_01_hub.notes_page.notes);*/

		
		while(active_sprites.length > 0)
			active_sprites.pop();
		
	}