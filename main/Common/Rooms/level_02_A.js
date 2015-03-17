/***===============================***/
/***       Level 01: target A      ***/
/***===============================***/
var level_02_A = new Sprite();
	// Is the BGM playing?
	level_02_A.bgm = false;

	/***==================================***/
	/***          room.create()           ***/
	/***==================================***/
	// What to do at creation time
	level_02_A.create = function() {
		var sway_x = 0;
		var sway_y = 0;
		
		/***=================================***/
		/***         Passive sprites         ***/
		/***=================================***/
		// Sprites to be drawn, but without interactivity
		level_02_A.image_background = new Sprite();
		level_02_A.image_background.width  = 1080;
		level_02_A.image_background.height = 720;
		level_02_A.image_background.x = 0;
		level_02_A.image_background.y = 0;
		level_02_A.image_background.image = Textures.load
			("./Common/Textures/Level 02/target A background.png");
		level_02_A.image_background.i = 0;
		level_02_A.image_background.update = function() {
			level_02_A.image_background.y = Math.sin(sway_x) * 20;
			sway_x += 0.009 * Math.random();
			level_02_A.image_background.x = Math.sin(sway_y) * 20;
			sway_y += 0.02 * Math.random();;
			if(sway_x >= 2*Math.PI) sway_x = 0;
			if(sway_y >= 2*Math.PI) sway_y = 0;
		}
			
		level_02_A.image_scope = new Sprite();
		level_02_A.image_scope.width  = 1080;
		level_02_A.image_scope.height = 720;
		level_02_A.image_scope.x = 0;
		level_02_A.image_scope.y = 0;
		level_02_A.image_scope.image = Textures.load
			("./Common/Textures/scope.png");
			
		level_02_A.red_screen_end = new Sprite();
		level_02_A.red_screen_end.width  = 1080;
		level_02_A.red_screen_end.height = 720;
		level_02_A.red_screen_end.alpha = 0;
		level_02_A.red_screen_end.image = Textures.load
			("./Common/Textures/red box.png");
		level_02_A.red_screen_end.update = function() {
			if(level_02_A.red_screen_end.alpha < 1) {
				level_02_A.red_screen_end.alpha += 0.007;
			}else {
				changeRoom(level_02_end);
			}
		}
		
		// Target A sprite
		level_02_A.image_target_A = new Sprite();
		level_02_A.image_target_A.width  = 48;
		level_02_A.image_target_A.height = 128;
		level_02_A.image_target_A.x_move = 0;
		level_02_A.image_target_A.y_move = 0;
		level_02_A.image_target_A.image = Textures.load
			("./Common/Textures/Level 02/target-A.png");
		
		// Target A animation
		level_02_A.image_target_A.frameWidth  = 24;
		level_02_A.image_target_A.frameHeight = 64;
		level_02_A.image_target_A.frameCount  = 19;
		level_02_A.image_target_A.frameRate   = 0;
		level_02_A.image_target_A.addAnimations
			(["walk_front", "walk_back", "smoke_front",
			 "smoke_back", "phone_front", "phone_back"], 
			 [5,5,3,3,1,1]);
		level_02_A.image_target_A.update = function() {
			// Background sway
			level_02_A.image_target_A.x = 
				level_02_A.image_background.x + level_02_A.image_target_A.x_move + 580;
			level_02_A.image_target_A.y = 
				level_02_A.image_background.y + level_02_A.image_target_A.y_move + 340;
			// Animation
			if(level_02_hub.targetA_in_call == true) {
				if(level_02_A.image_target_A.animation == "walk_back"
					|| level_02_A.image_target_A.animation == "smoke_back") {
					level_02_A.image_target_A.animation = "phone_back";
					level_02_A.image_target_A.frameRate = 0;
					level_02_A.image_target_A.x_move = level_02_hub.target_x;
					level_02_A.image_target_A.y_move = level_02_hub.target_y;
				}
				if(level_02_A.image_target_A.animation == "walk_front"
					|| level_02_A.image_target_A.animation == "smoke_front") {
					level_02_A.image_target_A.animation = "phone_front";
					level_02_A.image_target_A.frameRate = 0;
					level_02_A.image_target_A.x_move = level_02_hub.target_x;
					level_02_A.image_target_A.y_move = level_02_hub.target_y;
				}
			}else if((level_02_hub.target_loop.value>=0 && level_02_hub.target_loop.value<300)			// 0 to 5 secs
				|| (level_02_hub.target_loop.value>=1800 && level_02_hub.target_loop.value<2100)) {	// 30 to 35 secs
				level_02_A.image_target_A.animation = "walk_back";
				level_02_A.image_target_A.frameRate = 2;
				level_02_A.image_target_A.x_move = level_02_hub.target_x;
				level_02_A.image_target_A.y_move = level_02_hub.target_y;
			}else if((level_02_hub.target_loop.value>=900 && level_02_hub.target_loop.value<1200)		// 15 to 20 secs
					 || (level_02_hub.target_loop.value>=2700 && level_02_hub.target_loop.value<3000)) {// 45 to 50 secs
				level_02_A.image_target_A.animation = "walk_front";
				level_02_A.image_target_A.frameRate = 2;
				level_02_A.image_target_A.x_move = level_02_hub.target_x;
				level_02_A.image_target_A.y_move = level_02_hub.target_y;
			}else if((level_02_hub.target_loop.value>=300 && level_02_hub.target_loop.value<900)		// 5 to 15 secs
					 || (level_02_hub.target_loop.value>=2100 && level_02_hub.target_loop.value<2700)) {// 25 to 35 secs
				level_02_A.image_target_A.animation = "smoke_back";
				level_02_A.image_target_A.frameRate = .75;
				level_02_A.image_target_A.x_move = level_02_hub.target_x;
				level_02_A.image_target_A.y_move = level_02_hub.target_y;
			}else if((level_02_hub.target_loop.value>=1200 && level_02_hub.target_loop.value<1800)		// 20 to 30 secs
					 || (level_02_hub.target_loop.value>=3000 && level_02_hub.target_loop.value<3600)) {// 50 to 60 secs
				level_02_A.image_target_A.animation = "smoke_front";
				level_02_A.image_target_A.frameRate = .75;
				level_02_A.image_target_A.x_move = level_02_hub.target_x;
				level_02_A.image_target_A.y_move = level_02_hub.target_y;
			}
		};
		
		// Target B shadow sprite
		level_02_A.image_shadow_B = new Sprite();
		level_02_A.image_shadow_B.width  = 48;
		level_02_A.image_shadow_B.height = 128;
		level_02_A.image_shadow_B.image = Textures.load
			("./Common/Textures/general-man-plain.png");
		
		// Target B shadow animation
		level_02_A.image_shadow_B.frameWidth  = 24;
		level_02_A.image_shadow_B.frameHeight = 64;
		level_02_A.image_shadow_B.frameCount  = 25;
		level_02_A.image_shadow_B.frameRate   = 0;
		level_02_A.image_shadow_B.addAnimation("stand_LD",20,1);
		level_02_A.image_shadow_B.animation = "stand_LD";
		level_02_A.image_shadow_B.update = function() {
			// Background sway
			level_02_A.image_shadow_B.x = level_02_A.image_background.x + 780;
			level_02_A.image_shadow_B.y = level_02_A.image_background.y + 270;
		};
		
		/***===   End of passive sprites  ===***/
		
		/***=================================***/
		/***         Active sprites          ***/
		/***=================================***/
		// Sprites to be available to input_manager

		// Button to return to the hub
		level_02_A.ret = new TextBox("<< return  ");
		level_02_A.ret.font = "Courier";
		level_02_A.ret.fontSize = 30;
		level_02_A.ret.color = "#FFFFFF";
		level_02_A.ret.x = 0;
		level_02_A.ret.y = 690;
		level_02_A.ret.mouseOver = false;
		level_02_A.ret.bgColor = "#000000";
		level_02_A.ret.update = function() {
			if(level_02_A.ret.mouseOver) {
				level_02_A.ret.color = "#484848";
			}else {
				level_02_A.ret.color = "#FFFFFF";
			}
		}
		level_02_A.ret.click = function() {
			level_02_hub.sound_background.volume = 0.5;
			level_02_A.stopAudio();
			changeRoom(level_02_hub);
		}
		
		// Button to initiate call target
		level_02_A.button_call = new TextBox("   <CALL PHONE>   ");
		level_02_A.button_call.font = "Courier";
		level_02_A.button_call.color = "Red";
		level_02_A.button_call.fontSize = 30;
		level_02_A.button_call.x = 375;
		level_02_A.button_call.y = 45;
		level_02_A.button_call.mouseOver = false;
		level_02_A.button_call.update = function() {
			if(level_02_A.button_call.mouseOver) {
				level_02_A.button_call.text = "<<< CALL PHONE >>>";
				level_02_A.button_call.color = "Lime";
			}else {
				level_02_A.button_call.text = "   <CALL PHONE>   ";
				level_02_A.button_call.color = "Red";
			}
		}
		level_02_A.button_call.click = function() {
			world.addChild(black_screen);
			level_02_A.startDialogue();
			level_02_hub.targetA_in_call = true;
		}
		
		// Button to fire upon target
		level_02_A.button_fire = new TextBox("<< FIRE >>");
		level_02_A.button_fire.font = "Courier";
		level_02_A.button_fire.fontSize = 35;
		level_02_A.button_fire.color = "Black";
		level_02_A.button_fire.x = 435;
		level_02_A.button_fire.y = 345;
		level_02_A.button_fire.visible = false;
		level_02_A.button_fire.can_click = true;
		level_02_A.button_fire.update = function() {
			if(level_02_A.button_fire.mouseOver) {
				level_02_A.button_fire.visible = true;
				red_screen.visible = true;
			}else {
				level_02_A.button_fire.visible = false;
				red_screen.visible = false;
			}
		}
		level_02_A.button_fire.click = function() {
			if(level_02_A.button_fire.can_click) {
				world.removeChild(red_screen);
				level_02_A.stopAudio();
				sound_ominous.play(0);
				world.addChild(level_02_A.red_screen_end);
				world.removeChild(level_02_A.ret);
				world.removeChild(level_02_A.button_call);
				while(active_sprites.length > 0)
					active_sprites.pop();
				level_02_A.button_fire.can_click = false;
				level_02_hub.ending_state = 1;
			}
		}
		

		world.addChild(level_02_A.image_background);
		world.addChild(level_02_A.image_target_A);
		world.addChild(level_02_A.image_shadow_B);
		world.addChild(red_screen);
		world.addChild(level_02_A.image_scope);
		world.addChild(level_02_A.ret);
		if(level_02_hub.targetA_cancall)
			world.addChild(level_02_A.button_call);
		world.addChild(level_02_A.button_fire);
		world.addChild(level_02_hub.timer_text);
		
		// Nice animation
		level_02_A.top_border = new Sprite();
		level_02_A.top_border.width  = 1080;
		level_02_A.top_border.height = 720;
		level_02_A.top_border.x = 0;
		level_02_A.top_border.y = 0;
		level_02_A.top_border.image = Textures.load("./Common/Textures/black box.png");
		level_02_A.top_border.update = function() {
			level_02_A.top_border.y -= 30;
			if(level_02_A.top_border.y < -720)
				world.removeChild(level_02_A.top_border);
		}
		
		level_02_A.bottom_border = new Sprite();
		level_02_A.bottom_border.width  = 1080;
		level_02_A.bottom_border.height = 720;
		level_02_A.bottom_border.x = 0;
		level_02_A.bottom_border.y = 0;
		level_02_A.bottom_border.image = Textures.load("./Common/Textures/black box.png");
		level_02_A.bottom_border.update = function() {
			level_02_A.bottom_border.y += 30;
			if(level_02_A.bottom_border.y > 720)
				world.removeChild(level_02_A.bottom_border);
		}
		
		world.addChild(level_02_A.top_border);
		world.addChild(level_02_A.bottom_border);
		sound_zoom.play();		

		// Active sprites at creation time
		active_sprites.push(level_02_A.ret);
		if(level_02_hub.targetA_cancall)
			active_sprites.push(level_02_A.button_call);
		active_sprites.push(level_02_A.button_fire);
		
		// Play this room's background audio if it isn't yet playing
		if(!level_02_A.bgm)
			level_02_A.playAudio();
	}
	
	/***==============================***/
	/***     room.startDialogue()     ***/
	/***==============================***/
	// Starting dialogue clears room behind the screen
	level_02_A.startDialogue = function() {
		world.removeChild(level_02_A.ret);
		world.removeChild(level_02_A.button_call);
		while(active_sprites.length > 0)
			active_sprites.pop();
		
var node = createNode  // Index: 0
			("Hello?", 
			 "Pretend to be from a church-- \nHello sir, We are part of local \nchurch and we we’re wondering if you or anyone \nyou know might be willing to volunteer or \ndonate to our establishment? We’re preparing for \nour next event and we’re both\n" , 1, 
			 "Pretend to be his superior--\nLook, no time to explain, we need back up. Know anyone?\n", 2,
			 "Be direct-- \nSo are you the hired muscle?\n", 3);
		node.create();
		
		createNode     // Index: 1
			("Na man. I’m sorry but I don’t have \nmuch to give right now. \nI’m trying to make ends meet.\n",
			 "Assure him--\nDo not worry, the faithful are always \nlooked out for.", 4,
			 "Ask about himself--\nThat is okay child, If I may ask, \nhow are you accomplishing this task?\n", 5,
			 "Apologize--\nI am sorry to hear that. If you ever \nneed extra assistance do not be ashamed \nto come to us.\n", 6);
	    
		createNode   //Index: 2
			("What? Where? Yeah I know people \nbut like… I need more information\n to go off of. What the hell is going on?\n",
			"Ask about who he’s with-- \nWe need more men. Anyone with you?\n", 7,
			"Ask about himself--\nWhat, exactly, are you doing right now?\n", 8,
			"pretend it’s urgent--\nLook. We need you right now\n", 9);
		
		createNode	//Index: 3
			("Hired muscle? Who the hell is this? \nWhat the actual fuck?\n",
			"Threaten him--\nDescribe to me who’s in charge and you \nwon’t be hurt. I can’t say much for \nthem, however.\n", 10,
			"Ask about who he’s protecting--\nWho exactly are you protecting. \nWho are they to you?", 11, 
			"Press him for an answer-- \nYou didn’t answer my question. Answer it. Now", 12) 
		
		createNode //Index: 4
			("Well, I can’t say I really feel \nlooked out for. Too much shi-- stuff \nhas happened for me to think \nthat way\n",
			"-End call\n", -1);//ending 1
			
		createNode //Index: 5
			("Is it your place to ask this? \nI do what I need to do to survive. \nThats all you need to know. \nYou’re no priest and this is no confessional\n", 
			"-End call\n", -2);//ending 2
		
		createNode //Index: 6
			("I’ve never come to you before \nwhy would I start now. I’m wasting my \ntime with this. Panhandle other people.\n", 
			"-End call\n", -3);//ending 3

		createNode //Index: 7
			("Me? I’m only with Chuy making sure nothing goes wrong with this deal. I don’t know what I can do to help though you might have to call other people.", 
			"-End call\n",-4);//ending 4
		
		createNode //Index: 8
			("I’m just watching over a deal. \nNothing has gone wrong so far but the \nboss doesn’t seem to be taking \nthis too seriously. Look I’m not sure \nif I’m in a position to help.\n",
			"-End call\n", -5);//ending 5
		
		createNode //Index: 9
			("Look I can’t. I’m not going to risk \nmy job nor my life for whatever \nthe fuck it is that’s happening over \nthere.\n", 
			"-End call\n",-6);//ending 6
		
		createNode //Index: 10
			("The boss? You can’t… Yeah, the boss. \nThe boss is the one in the black \njacket and blue jeans…\n",
			"-End call\n", -7);//ending 7
		
		createNode //Index: 11
			("I’m… I’m protecting my bosses \nI can’t say much. Just. I have \na family. They aren’t worth it to me.\n", 
			"-End call\n", -8);//ending 8
			
		createNode //Index: 12
			("Well I sure as hell ain’t the boss. \nLook I’m no one. I don’t know what \nyou’re planning leave me out of it.", 
			"-End call\n",-9);
}
	/***==============================***/
	/***       room.endDialogue()     ***/
	/***==============================***/
	// Ending the dialogue returns the room to the previous state
	// also updates whatever necessary dependaing on your ending
	level_02_A.endDialogue = function(ending) {
		while(nodes.length > 0)
			nodes.pop();
		level_02_hub.targetA_cancall = false;
		
		world.removeChild(black_screen);
		
		world.addChild(level_02_A.ret);
		active_sprites.push(level_02_A.ret);
		active_sprites.push(level_02_A.button_fire);
		
		var image_wrote_note = new TextBox("\"I wrote a note...\"");
		image_wrote_note.font = "Courier";
		image_wrote_note.fontSize = 30;
		image_wrote_note.color = "White";
		image_wrote_note.x = 360;
		image_wrote_note.y = 650;
		image_wrote_note.update = function() {
			image_wrote_note.alpha -= 0.01;
			if(image_wrote_note.alpha == 0)
				world.removeChild(image_wrote_note);
		}
		world.addChild(image_wrote_note);
		sound_write.play();
		
		level_02_hub.targetA_in_call = false;
		level_02_A.pickEnding(ending);
		clear_array();
	}
	
	level_02_A.pickEnding = function(ending) {
		switch(ending){
			case 1:
				level_02_hub.targetA_ending_info += "\nTarget A: Doesn't have much to give...\n\"too much stuff has happend\"";
				break;
			case 2: 
				level_02_hub.targetA_ending_info += "\nTarget A: Doesn't have much to give...\n\"I do what I need to to survive\".";
				break;
			case 3:
				level_02_hub.targetA_ending_info += "\nTarget A: Doesn't have much to give... \n\"Panhandle other people\"";
				break;
			case 4:
				level_02_hub.targetA_ending_info += "\nTarget A: With a guy named Chuy watching over a deal";
				break;
			case 5:
				level_02_hub.targetA_ending_info += "\nTarget A: Says his boss isn't serious right now";
				break;
			case 6:
				level_02_hub.targetA_ending_info += "\nTarget A: Won't risk his life";
				break;
			case 7:
				level_02_hub.targetA_ending_info += "\nTarget A: Says the boss is wearing \na black jacket and blue jeans.";
				break;
			case 8:
				level_02_hub.targetA_ending_info += "\nTarget A: Has a family.\n \they aren't worth it\"";
				break;
			case 9:
				level_02_hub.targetA_ending_info += "\nTarget A: Isn't the boss?";
				break;
				}
	}
	
	/***===================================***/
	/***         room.playAudio()          ***/
	/***===================================***/
	// Play special audio for this room
	level_02_A.playAudio = function() {
 		// Audio objects for this room
 		level_02_A.sound_background = new Audio("./Common/Sounds/scope_ambiance01.wav");
		level_02_A.sound_background.volume = 0.5;
		
		
		// Play and loop room ambiance
		level_02_A.sound_background.addEventListener('ended', function() {
			this.currentTime = 0;
			this.play();
		});
		level_02_A.sound_background.play();
		
		level_02_A.bgm = true;
	}

	
	/***=================================***/
	/***         room.stopAudio()        ***/
	/***=================================***/
	// Stop all audio emitting from this room
	level_02_A.stopAudio = function() {
		// Stop city ambiance
		level_02_A.sound_background.pause();
		level_02_A.sound_background.currentTime = 0;
		level_02_A.sound_background.removeEventListener('ended', function() {
			this.pause();
			this.currentTime = 0;
		});
		
		level_02_A.bgm = false;
	}
	
	/***===============================***/
	/***        Clear this room        ***/
	/***===============================***/
	// Remove from the world, un-draw sprites, etc...
	level_02_A.clear = function() {
		world.removeChild(level_02_A.image_background);
		world.removeChild(level_02_A.image_target_A);
		world.removeChild(level_02_A.image_shadow_B);
		world.removeChild(level_02_A.image_scope);
		world.removeChild(level_02_A.ret);
		world.removeChild(level_02_A.button_call);
		world.removeChild(level_02_A.button_fire);
		world.removeChild(level_02_hub.timer_text);
		world.removeChild(level_02_A.red_screen_end);
		world.removeChild(red_screen);
		while(active_sprites.length > 0)
			active_sprites.pop();
	}