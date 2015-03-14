/***===============================***/
/***       Level 01: target A      ***/
/***===============================***/
var level_02_E = new Sprite();
	// Is the BGM playing?
	level_02_E.bgm = false;

	/***==================================***/
	/***          room.create()           ***/
	/***==================================***/
	// What to do at creation time
	level_02_E.create = function() {
		var sway_x = 0;
		var sway_y = 0;
		
		/***=================================***/
		/***         Passive sprites         ***/
		/***=================================***/
		// Sprites to be drawn, but without interactivity
		level_02_E.image_background = new Sprite();
		level_02_E.image_background.width  = 1080;
		level_02_E.image_background.height = 720;
		level_02_E.image_background.x = 0;
		level_02_E.image_background.y = 0;
		level_02_E.image_background.image = Textures.load
			("./Common/Textures/Level 02/target E background.png");
		level_02_E.image_background.i = 0;
		level_02_E.image_background.update = function() {
			level_02_E.image_background.y = Math.sin(sway_x) * 20;
			sway_x += 0.009 * Math.random();
			level_02_E.image_background.x = Math.sin(sway_y) * 20;
			sway_y += 0.02 * Math.random();;
			if(sway_x >= 2*Math.PI) sway_x = 0;
			if(sway_y >= 2*Math.PI) sway_y = 0;
		}
			
		level_02_E.image_scope = new Sprite();
		level_02_E.image_scope.width  = 1080;
		level_02_E.image_scope.height = 720;
		level_02_E.image_scope.x = 0;
		level_02_E.image_scope.y = 0;
		level_02_E.image_scope.image = Textures.load
			("./Common/Textures/scope.png");
			
		level_02_E.red_screen_end = new Sprite();
		level_02_E.red_screen_end.width  = 1080;
		level_02_E.red_screen_end.height = 720;
		level_02_E.red_screen_end.alpha = 0;
		level_02_E.red_screen_end.image = Textures.load
			("./Common/Textures/red box.png");
		level_02_E.red_screen_end.update = function() {
			if(level_02_E.red_screen_end.alpha < 1) {
				level_02_E.red_screen_end.alpha += 0.007;
			}else {
				changeRoom(level_02_end);
			}
		}
		
		// Target E sprite
		level_02_E.image_target_E = new Sprite();
		level_02_E.image_target_E.width  = 48;
		level_02_E.image_target_E.height = 128;
		level_02_E.image_target_E.image  = Textures.load
			("./Common/Textures/Level 02/target-E.png");
		
		// Target E animation
		level_02_E.image_target_E.frameWidth  = 24;
		level_02_E.image_target_E.frameHeight = 64;
		level_02_E.image_target_E.frameCount  = 7;
		level_02_E.image_target_E.frameRate   = 0;
		level_02_E.image_target_E.addAnimations
			(["idle", "phone", "smoking"], [3,1,3]);
		level_02_E.image_target_E.update = function() {
			// Background sway
			level_02_E.image_target_E.x = level_02_E.image_background.x + 540;
			level_02_E.image_target_E.y = level_02_E.image_background.y + 280;
			// Animation
			if(level_02_hub.targetE_in_call == true) {
				level_02_E.image_target_E.animation = "phone";
				level_02_E.image_target_E.frameRate = 0;
			}else if((level_02_hub.target_loop.value>=600 && level_02_hub.target_loop.value<1080)	// 10 to 18 secs
					 || (level_02_hub.target_loop.value>=1800 && level_02_hub.target_loop.value<2280)	// 30 to 28 secs
					 || (level_02_hub.target_loop.value>=3000 && level_02_hub.target_loop.value<3480)) {	// 50 to 58 secs
				level_02_E.image_target_E.animation = "smoking";
				level_02_E.image_target_E.frameRate = .8;
			}else {
				level_02_E.image_target_E.animation = "idle";
				level_02_E.image_target_E.frameRate = .25;
			}
		};
		
		// Target C shadow sprite
		level_02_E.image_shadow_C = new Sprite();
		level_02_E.image_shadow_C.width  = 72;
		level_02_E.image_shadow_C.height = 96;
		level_02_E.image_shadow_C.image  = Textures.load
			("./Common/Textures/Level 02/target-C-shadow.png");
		level_02_E.image_shadow_C.update = function() {
			// Background sway
			level_02_E.image_shadow_C.x = level_02_E.image_background.x + 450;
			level_02_E.image_shadow_C.y = level_02_E.image_background.y + 220;
		};
		
		// Target D shadow sprite
		level_02_E.image_shadow_D = new Sprite();
		level_02_E.image_shadow_D.width  = 48;
		level_02_E.image_shadow_D.height = 96;
		level_02_E.image_shadow_D.image  = Textures.load
			("./Common/Textures/Level 02/target-D-shadow.png");
		level_02_E.image_shadow_D.update = function() {
			// Background sway
			level_02_E.image_shadow_D.x = level_02_E.image_background.x + 690;
			level_02_E.image_shadow_D.y = level_02_E.image_background.y + 305;
		};
		
		/***===   End of passive sprites  ===***/
		
		/***=================================***/
		/***         Active sprites          ***/
		/***=================================***/
		// Sprites to be available to input_manager

		// Button to return to the hub
		level_02_E.ret = new TextBox("<< return  ");
		level_02_E.ret.font = "Courier";
		level_02_E.ret.fontSize = 30;
		level_02_E.ret.color = "#FFFFFF";
		level_02_E.ret.x = 0;
		level_02_E.ret.y = 690;
		level_02_E.ret.mouseOver = false;
		level_02_E.ret.bgColor = "#000000";
		level_02_E.ret.update = function() {
			if(level_02_E.ret.mouseOver) {
				level_02_E.ret.color = "#484848";
			}else {
				level_02_E.ret.color = "#FFFFFF";
			}
		}
		level_02_E.ret.click = function() {
			level_02_hub.sound_background.volume = 0.5;
			level_02_E.stopAudio();
			changeRoom(level_02_hub);
		}
		
		// Button to initiate call target
		level_02_E.button_call = new TextBox("   <CALL PHONE>   ");
		level_02_E.button_call.font = "Courier";
		level_02_E.button_call.color = "Red";
		level_02_E.button_call.fontSize = 30;
		level_02_E.button_call.x = 375;
		level_02_E.button_call.y = 45;
		level_02_E.button_call.mouseOver = false;
		level_02_E.button_call.update = function() {
			if(level_02_E.button_call.mouseOver) {
				level_02_E.button_call.text = "<<< CALL PHONE >>>";
				level_02_E.button_call.color = "Lime";
			}else {
				level_02_E.button_call.text = "   <CALL PHONE>   ";
				level_02_E.button_call.color = "Red";
			}
		}
		level_02_E.button_call.click = function() {
			world.addChild(black_screen);
			level_02_E.startDialogue();
			level_02_hub.targetE_in_call = true;
		}
		
		// Button to fire upon target
		level_02_E.button_fire = new TextBox("<< FIRE >>");
		level_02_E.button_fire.font = "Courier";
		level_02_E.button_fire.fontSize = 35;
		level_02_E.button_fire.color = "Black";
		level_02_E.button_fire.x = 435;
		level_02_E.button_fire.y = 345;
		level_02_E.button_fire.visible = false;
		level_02_E.button_fire.update = function() {
			if(level_02_E.button_fire.mouseOver) {
				level_02_E.button_fire.visible = true;
				red_screen.visible = true;
			}else {
				level_02_E.button_fire.visible = false;
				red_screen.visible = false;
			}
		}
		level_02_E.button_fire.click = function() {
			level_02_E.stopAudio();
			world.removeChild(red_screen);
			world.removeChild(level_02_E.ret);
			world.removeChild(level_02_E.button_call);
			while(active_sprites.length > 0)
				active_sprites.pop();
			sound_ominous.play();
			world.addChild(level_02_E.red_screen_end);
			level_02_hub.ending_state = 5;
		}

		world.addChild(level_02_E.image_background);
		world.addChild(level_02_E.image_target_E);
		world.addChild(level_02_E.image_shadow_C);
		world.addChild(level_02_E.image_shadow_D);
		world.addChild(red_screen);
		world.addChild(level_02_E.image_scope);
		world.addChild(level_02_E.ret);
		if(level_02_hub.targetE_cancall)
			world.addChild(level_02_E.button_call);
		world.addChild(level_02_E.button_fire);
		world.addChild(level_02_hub.timer_text);
		
		// Nice animation
		level_02_E.top_border = new Sprite();
		level_02_E.top_border.width  = 1080;
		level_02_E.top_border.height = 720;
		level_02_E.top_border.x = 0;
		level_02_E.top_border.y = 0;
		level_02_E.top_border.image = Textures.load("./Common/Textures/black box.png");
		level_02_E.top_border.update = function() {
			level_02_E.top_border.y -= 30;
			if(level_02_E.top_border.y < -720)
				world.removeChild(level_02_E.top_border);
		}
		
		level_02_E.bottom_border = new Sprite();
		level_02_E.bottom_border.width  = 1080;
		level_02_E.bottom_border.height = 720;
		level_02_E.bottom_border.x = 0;
		level_02_E.bottom_border.y = 0;
		level_02_E.bottom_border.image = Textures.load("./Common/Textures/black box.png");
		level_02_E.bottom_border.update = function() {
			level_02_E.bottom_border.y += 30;
			if(level_02_E.bottom_border.y > 720)
				world.removeChild(level_02_E.bottom_border);
		}

		world.addChild(level_02_E.top_border);
		world.addChild(level_02_E.bottom_border);
		sound_zoom.play();	
		
		// Active sprites at creation time
		active_sprites.push(level_02_E.ret);
		if(level_02_hub.targetE_cancall)
			active_sprites.push(level_02_E.button_call);
		active_sprites.push(level_02_E.button_fire);
		
		// Play this room's background audio if it isn't yet playing
		if(!level_02_E.bgm)
			level_02_E.playAudio();
	}
	
	/***==============================***/
	/***     room.startDialogue()     ***/
	/***==============================***/
	// Starting dialogue clears room behind the screen
	level_02_E.startDialogue = function() {
		world.removeChild(level_02_E.ret);
		world.removeChild(level_02_E.button_call);
		while(active_sprites.length > 0)
			active_sprites.pop();
		
var node = createNode  // Index: 0
			("Yeah, what is it?", 
			 "Pretend to be from a church-- \nGood afternoon sir, We are part of local church \nand we we’re wondering if you or anyone \nyou know might be willing to volunteer \nor donate to our establishment? \nWe’re preparing for our next event and we’re \nboth understaffed and underfunded. \nAny help from our faithful is much appreciated.\n" , 1, 
			 "\n\nPretend to be a supplier-- \nHey, the next shipment will be in soon. \nI gotta know where to make the drop, \ncops got to the usual spot. \nYou got a backup?\n", 2,
			 "Be direct-- \nI hear you’re a man with connections.\n",3);
		node.create();
		
		createNode     // Index: 1
			("Uh, sorry, I don’t really go to Church. \nUh, I know some people who go a lot though. \nI could ask them\n",
			 "Ask about himself--\nIt’s not too late for you to start attending service. \nWe accept all wanderers into our flock. \nMaybe your companions could bring you in?\n", 4,
			 "Ask about the others--\nYes, that would be most generous of you. \nCould you tell me about these companions of yours?\n", 5,
			 "Provoke him--\nIt’s okay. Not everyone finds God’s \nembrace before death. If you ever wish to repent we \nwill always be here.\n", 6);
	    
		createNode   //Index: 2
			("I don’t know why you called me of all people. \nAren’t there better people to call about this? \nYeah. We have people. Lots of them, \nthey're busy right now.\n",
			"Ask about himself--\nSo then what’s your job.\n", 7,
			"Ask about the people-- \nHow dependable are your men.\n", 8,
			"Question him--\nSo then who should I have called?\n", 9);
		
		createNode	//Index: 3
			("Aye, you heard correct. Now… \nWho are you and why do need me.\n",
			"Ask about his contacts--\nWho, exactly, do you work with?\n", 10,
			"Ask about what he does--\nWhat’s your business?", 11, 
			"Ask about himself--\nI need to know who you are before \nI can trust you.", 12);
		
		createNode //Index: 4
			("No. It’s alright. I’m not one for… well… Jesus and all of that. I’m far beyond that…. Far beyond saving. But don’t worry. I’ll make sure to pass your messages.",
			"-End call\n", -1);//ending 1
			
		createNode //Index: 5
			("They’re… business partners. I’ll make sure to \npass your message. I am sorry I cannot help.\n", 
			"-End call\n", -2);//ending 2
		
		createNode //Index: 6
			("Tch. This is one of the reasons I hate religion. \nAlways so high and mighty. No. I won’t repent. \nNot to people like you.\n", 
			"-End call\n", -3);//ending 3

		createNode //Index: 7
			("I have many jobs. One of them is telling \nblokes like you what to do. So get out there \nand do your job like you always do. This shit isn’t \nmy problem.\n",
			"-End call\n",-4);//ending 4
		
		createNode //Index: 8
			("They’re dependable. I know them all personally and \nthey will make sure the job gets done. \nDon’t get them killed all right?\n",
			"-End call\n", -5);//ending 5
		
		createNode //Index: 9
			("It doesn’t matter now. You called me so now you’re listening to me. Look. \nI’ll send you your guys. Call my subordinate for \nthe location I’m talking business right now.\n", 
			"-End call\n", -6);//ending 6
		
		createNode //Index: 10
			("Well… I can’t give specifics…. but let’s say I \nhave what is essentially an at ready militia. \nLook. I’ll be sure to call you later and then \nwe’ll get details worked out. I’ll also have to get \nthe name of the person who referred you to me.\n",
			"-End call\n", -7);//ending 7
		
		createNode //Index: 11
			("I’m in a lot of different businesses and \ncurrently working on making a new one. \nLook. Just call me later. I’m busy right now. \nWe’ll get everything settled and then maybe \nyou can tell me who referred you to me.\n",
			"-End call\n", -8);//ending 8
			
		createNode //Index: 12
			("Know who I am? You’re the one who called me… \nwith no explanation asking me questions. Here I am trying \nto be the nice guy listening to your needs \nand providing a service that not many people \nprovide and I’m being asked questions. \nYou want my life story? Well you aren’t getting it.\n", 
			"-End call\n",-9);//ending 9
	}

	/***==============================***/
	/***       room.endDialogue()     ***/
	/***==============================***/
	// Ending the dialogue returns the room to the previous state
	// also updates whatever necessary dependaing on your ending
	level_02_E.endDialogue = function(ending) {
		while(nodes.length > 0)
			nodes.pop();
		level_02_hub.targetE_cancall = false;
		
		world.removeChild(black_screen);
		
		world.addChild(level_02_E.ret);
		active_sprites.push(level_02_E.ret);
		active_sprites.push(level_02_E.button_fire);
		
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
		
		level_02_hub.targetE_in_call = false;
		level_02_E.pickEnding(ending);
	}
	
		level_02_E.pickEnding = function(ending) {
		switch(ending){
			case 1:
				level_02_hub.targetE_ending_info += "\nTarget E: Doesn't seem religious";
				break;
			case 2: 
				level_02_hub.targetE_ending_info += "\nTarget E: Says he has business partners";
				break;
			case 3:
				level_02_hub.targetE_ending_info += "\nTarget E: Hates religion";
				break;
			case 4:
				level_02_hub.targetE_ending_info += "\nTarget E: Has many jobs?";
				break;
			case 5:
				level_02_hub.targetE_ending_info += "\nTarget E: Thinks his men are dependable but... who are they?";
				break;
			case 6:
				level_02_hub.targetE_ending_info += "\nTarget E: He's talking business";
				break;
			case 7:
				level_02_hub.targetE_ending_info += "\nTarget E: Has an at ready militia?";
				break;
			case 8:
				level_02_hub.targetE_ending_info += "\nTarget E: Currently on business?";
				break;
			case 9:
				level_02_hub.targetE_ending_info += "\nTarget E: \"provides a service\" that not many others do.";
				break;
				}
	}
	
	/***===================================***/
	/***         room.playAudio()          ***/
	/***===================================***/
	// Play special audio for this room
	level_02_E.playAudio = function() {
 		// Audio objects for this room
 		level_02_E.sound_background = new Audio("./Common/Sounds/scope_ambiance01.wav");
		level_02_E.sound_background.volume = 0.5;
		
		
		// Play and loop room ambiance
		level_02_E.sound_background.addEventListener('ended', function() {
			this.currentTime = 0;
			this.play();
		});
		level_02_E.sound_background.play();
		
		level_02_E.bgm = true;
	}
	
	/***=================================***/
	/***         room.stopAudio()        ***/
	/***=================================***/
	// Stop all audio emitting from this room
	level_02_E.stopAudio = function() {
		// Stop city ambiance
		level_02_E.sound_background.pause();
		level_02_E.sound_background.currentTime = 0;
		level_02_E.sound_background.removeEventListener('ended', function() {
			this.pause();
			this.currentTime = 0;
		});
		
		level_02_E.bgm = false;
	}
	
	/***===============================***/
	/***        Clear this room        ***/
	/***===============================***/
	// Remove from the world, un-draw sprites, etc...
	level_02_E.clear = function() {
		world.removeChild(level_02_E.image_background);
		world.removeChild(level_02_E.image_target_E);
		world.removeChild(level_02_E.image_shadow_C);
		world.removeChild(level_02_E.image_shadow_D);
		world.removeChild(level_02_E.image_scope);
		world.removeChild(level_02_E.ret);
		world.removeChild(level_02_E.button_call);
		world.removeChild(level_02_E.button_fire);
		world.removeChild(level_02_E.red_screen_end);
		world.removeChild(level_02_hub.timer_text);
		world.removeChild(red_screen);
		while(active_sprites.length > 0)
			active_sprites.pop();
	}