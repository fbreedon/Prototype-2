/***===============================***/
/***       Level 01: target A      ***/
/***===============================***/
var level_02_D = new Sprite();
	// Is the BGM playing?
	level_02_D.bgm = false;

	/***==================================***/
	/***          room.create()           ***/
	/***==================================***/
	// What to do at creation time
	level_02_D.create = function() {
		var sway_x = 0;
		var sway_y = 0;
		
		/***=================================***/
		/***         Passive sprites         ***/
		/***=================================***/
		// Sprites to be drawn, but without interactivity
		level_02_D.image_background = new Sprite();
		level_02_D.image_background.width  = 1080;
		level_02_D.image_background.height = 720;
		level_02_D.image_background.x = 0;
		level_02_D.image_background.y = 0;
		level_02_D.image_background.image = Textures.load
			("./Common/Textures/Level 02/target D background.png");
		level_02_D.image_background.i = 0;
		level_02_D.image_background.update = function() {
			level_02_D.image_background.y = Math.sin(sway_x) * 20;
			sway_x += 0.009 * Math.random();
			level_02_D.image_background.x = Math.sin(sway_y) * 20;
			sway_y += 0.02 * Math.random();;
			if(sway_x >= 2*Math.PI) sway_x = 0;
			if(sway_y >= 2*Math.PI) sway_y = 0;
		}
			
		level_02_D.image_scope = new Sprite();
		level_02_D.image_scope.width  = 1080;
		level_02_D.image_scope.height = 720;
		level_02_D.image_scope.x = 0;
		level_02_D.image_scope.y = 0;
		level_02_D.image_scope.image = Textures.load
			("./Common/Textures/scope.png");
			
		level_02_D.red_screen_end = new Sprite();
		level_02_D.red_screen_end.width  = 1080;
		level_02_D.red_screen_end.height = 720;
		level_02_D.red_screen_end.alpha = 0;
		level_02_D.red_screen_end.image = Textures.load
			("./Common/Textures/red box.png");
		level_02_D.red_screen_end.update = function() {
			if(level_02_D.red_screen_end.alpha < 1) {
				level_02_D.red_screen_end.alpha += 0.007;
			}else {
				changeRoom(level_02_end);
			}
		}
		
		// Target D sprite
		level_02_D.image_target_D = new Sprite();
		level_02_D.image_target_D.width  = 48;
		level_02_D.image_target_D.height = 96;
		level_02_D.image_target_D.image = Textures.load
			("./Common/Textures/Level 02/target-D.png");
		
		// Target D animation
		level_02_D.image_target_D.frameWidth  = 32;
		level_02_D.image_target_D.frameHeight = 64;
		level_02_D.image_target_D.frameCount  = 9;
		level_02_D.image_target_D.frameRate   = 0;
		level_02_D.image_target_D.addAnimations
			(["idle", "drink", "phone"], [5,4,1]);
		level_02_D.image_target_D.update = function() {
			// Background sway
			level_02_D.image_target_D.x = level_02_D.image_background.x + 500;
			level_02_D.image_target_D.y = level_02_D.image_background.y + 320;
			// Animation
			if(level_02_hub.targetD_in_call == true) {
				level_02_D.image_target_D.animation = "phone";
				level_02_D.image_target_D.frameRate = 0;
			}else if((level_02_hub.target_loop.value>=0 && level_02_hub.target_loop.value<360)	// 0 to 6 secs
					 || (level_02_hub.target_loop.value>=1800 && level_02_hub.target_loop.value<2160)) {	// 30 to 36 secs
				level_02_D.image_target_D.animation = "drink";
				level_02_D.image_target_D.frameRate = .5;
			}else {
				level_02_D.image_target_D.animation = "idle";
				level_02_D.image_target_D.frameRate = .5;
			}
		};
		
		// Target C shadow sprite
		level_02_D.image_shadow_C = new Sprite();
		level_02_D.image_shadow_C.width  = 72;
		level_02_D.image_shadow_C.height = 96;
		level_02_D.image_shadow_C.image  = Textures.load
			("./Common/Textures/Level 02/target-C-shadow.png");
		level_02_D.image_shadow_C.update = function() {
			// Background sway
			level_02_D.image_shadow_C.x = level_02_D.image_background.x + 265;
			level_02_D.image_shadow_C.y = level_02_D.image_background.y + 235;
		};
		
		// Target E shadow sprite
		level_02_D.image_shadow_E = new Sprite();
		level_02_D.image_shadow_E.width  = 48;
		level_02_D.image_shadow_E.height = 128;
		level_02_D.image_shadow_E.image  = Textures.load
			("./Common/Textures/general-man-plain.png");
		level_02_D.image_shadow_E.update = function() {
			// Background sway
			level_02_D.image_shadow_E.x = level_02_D.image_background.x + 350;
			level_02_D.image_shadow_E.y = level_02_D.image_background.y + 300;
			// Animation
			level_02_D.image_shadow_E.frameWidth  = 24;
			level_02_D.image_shadow_E.frameHeight = 64;
			level_02_D.image_shadow_E.frameCount  = 25;
			level_02_D.image_shadow_E.frameRate = 0;
			level_02_D.image_shadow_E.addAnimation("stand_RU",23,1);
			level_02_D.image_shadow_E.animation = "stand_RU";
		};
		
		/***===   End of passive sprites  ===***/
		
		/***=================================***/
		/***         Active sprites          ***/
		/***=================================***/
		// Sprites to be available to input_manager

		// Button to return to the hub
		level_02_D.ret = new TextBox("<< return  ");
		level_02_D.ret.font = "Courier";
		level_02_D.ret.fontSize = 30;
		level_02_D.ret.color = "#FFFFFF";
		level_02_D.ret.x = 0;
		level_02_D.ret.y = 690;
		level_02_D.ret.mouseOver = false;
		level_02_D.ret.bgColor = "#000000";
		level_02_D.ret.update = function() {
			if(level_02_D.ret.mouseOver) {
				level_02_D.ret.color = "#484848";
			}else {
				level_02_D.ret.color = "#FFFFFF";
			}
		}
		level_02_D.ret.click = function() {
			level_02_hub.sound_background.volume = 0.5;
			level_02_D.stopAudio();
			changeRoom(level_02_hub);
		}
		
		// Button to initiate call target
		level_02_D.button_call = new TextBox("   <CALL PHONE>   ");
		level_02_D.button_call.font = "Courier";
		level_02_D.button_call.color = "Red";
		level_02_D.button_call.fontSize = 30;
		level_02_D.button_call.x = 375;
		level_02_D.button_call.y = 45;
		level_02_D.button_call.mouseOver = false;
		level_02_D.button_call.update = function() {
			if(level_02_D.button_call.mouseOver) {
				level_02_D.button_call.text = "<<< CALL PHONE >>>";
				level_02_D.button_call.color = "Lime";
			}else {
				level_02_D.button_call.text = "   <CALL PHONE>   ";
				level_02_D.button_call.color = "Red";
			}
		}
		level_02_D.button_call.click = function() {
			world.addChild(black_screen);
			level_02_D.startDialogue();
			level_02_hub.targetD_in_call = true;
		}
		
		// Button to fire upon target
		level_02_D.button_fire = new TextBox("<< FIRE >>");
		level_02_D.button_fire.font = "Courier";
		level_02_D.button_fire.fontSize = 35;
		level_02_D.button_fire.color = "Black";
		level_02_D.button_fire.x = 435;
		level_02_D.button_fire.y = 345;
		level_02_D.button_fire.visible = false;
		level_02_D.button_fire.update = function() {
			if(level_02_D.button_fire.mouseOver) {
				level_02_D.button_fire.visible = true;
				red_screen.visible = true;
			}else {
				level_02_D.button_fire.visible = false;
				red_screen.visible = false;
			}
		}
		level_02_D.button_fire.click = function() {
			level_02_D.stopAudio();
			world.removeChild(red_screen);
			world.removeChild(level_02_D.ret);
			world.removeChild(level_02_D.button_call);
			while(active_sprites.length > 0)
				active_sprites.pop();
			sound_ominous.play();
			world.addChild(level_02_D.red_screen_end);
			level_02_hub.ending_state = 4;
		}

		world.addChild(level_02_D.image_background);
		world.addChild(level_02_D.image_target_D);
		world.addChild(level_02_D.image_shadow_C);
		world.addChild(level_02_D.image_shadow_E);
		world.addChild(red_screen);
		world.addChild(level_02_D.image_scope);
		world.addChild(level_02_D.ret);
		if(level_02_hub.targetD_cancall)
			world.addChild(level_02_D.button_call);
		world.addChild(level_02_D.button_fire);
		world.addChild(level_02_hub.timer_text);
		
		// Nice animation
		level_02_D.top_border = new Sprite();
		level_02_D.top_border.width  = 1080;
		level_02_D.top_border.height = 720;
		level_02_D.top_border.x = 0;
		level_02_D.top_border.y = 0;
		level_02_D.top_border.image = Textures.load("./Common/Textures/black box.png");
		level_02_D.top_border.update = function() {
			level_02_D.top_border.y -= 30;
			if(level_02_D.top_border.y < -720)
				world.removeChild(level_02_D.top_border);
		}
		
		level_02_D.bottom_border = new Sprite();
		level_02_D.bottom_border.width  = 1080;
		level_02_D.bottom_border.height = 720;
		level_02_D.bottom_border.x = 0;
		level_02_D.bottom_border.y = 0;
		level_02_D.bottom_border.image = Textures.load("./Common/Textures/black box.png");
		level_02_D.bottom_border.update = function() {
			level_02_D.bottom_border.y += 30;
			if(level_02_D.bottom_border.y > 720)
				world.removeChild(level_02_D.bottom_border);
		}

		world.addChild(level_02_D.top_border);
		world.addChild(level_02_D.bottom_border);
		sound_zoom.play();	
		
		// Active sprites at creation time
		active_sprites.push(level_02_D.ret);
		if(level_02_hub.targetD_cancall)
			active_sprites.push(level_02_D.button_call);
		active_sprites.push(level_02_D.button_fire);
		
		// Play this room's background audio if it isn't yet playing
		if(!level_02_D.bgm)
			level_02_D.playAudio();
	}
	
	/***==============================***/
	/***     room.startDialogue()     ***/
	/***==============================***/
	// Starting dialogue clears room behind the screen
	level_02_D.startDialogue = function() {
		world.removeChild(level_02_D.ret);
		world.removeChild(level_02_D.button_call);
		while(active_sprites.length > 0)
			active_sprites.pop();
		
var node = createNode  // Index: 0
			("Bueno?", 
			 "Pretend to be from a church-- \nGood afternoon sir, We are part of local church \nand we we’re wondering if you or anyone \nyou know might be willing to volunteer \nor donate to our establishment? \nWe’re preparing for our next event and we’re \nboth understaffed and underfunded. \nAny help from our faithful is much appreciated.\n" , 1, 
			 "\nPretend to be a supplier-- \nHey, the next shipment will be in soon. \nI gotta know where to make the drop, \ncops got to the usual spot. \nYou got a backup?\n", 2,
			 "Be direct-- \nI hear you’re a man with connections.\n",3);
		node.create();
		
		createNode     // Index: 1
			("I don’t always donate to the church, \nbut when I do, I donate to your church. \nI’ll make sure to bring some money along with \nme this Sunday\n",
			 "Thank him for his patronage-- \nThank you very much. We look \nforward to meeting our gracious benefactor\n", 4,
			 "Ask about others-- \nWe thank you for your faith. \nMight I ask if any family members or friends of \nyours would donate or volunteer as well?\n", 5,
			 "Ask him about his faith-- \nThat is very gracious. \nHave you always been a part of our flock?", 6);
	    
		createNode   //Index: 2
			("What? I was not aware of any scheduled drops today... \nThis is a private phone, don’t contact me here, \nit is not safe. For now, go through the usual routes.\n",
			"Provoke-- \nLike I said… The usual routes are taken. \nWhere do I go?", 7,
			"Be apologetic-- \nI’m very sorry about the inconvenience. \nI won’t make this mistake again.\n", 8,
			"Doubt him-- \nPrivate phone? That is not what I was told.\n", 9);
		
		createNode	//Index: 3
			("Connections yes. I have many connections. Connections to my faith. Connections to my loved ones. What do you mean in particular.\n",
			"Provoke--\nDon’t act coy with me. \nYou know what I mean\n", 10,
			"Be vague-- \nYou know… the connections... For when I need stuff?\n", 11, 
			"Back out--\nNever mind, I must have gotten \nthe wrong number\n", 12);
		
		createNode //Index: 4
			("Anything my humble self can do for those in need. \nI hope the next generation will be equally generous. \nGood day, sir",
			"-End call\n", -1);//ending 1
			
		createNode //Index: 5
			("I know a few men who would sacrifice some comfort \nto aid the church. The younger folk, I’m not so sure about. \nSo many have lost faith… Excuse me, I tend to drift. \nMust be my age.\n", 
			"-End call\n", -2);//ending 2
		
		createNode //Index: 6
			("Ah yes… For a very… very long time. \nSometime the thought of the afterlife is the only \nthing that keeps me going. A place where I could\n be forgiven for all that I have done \nin my life. I’m sorry… You are not a priest \nand I tend to ramble in my old age\n", 
			"-End call\n", -3);//ending 3

		createNode //Index: 7
			("Hah. Youth these days. They think they can \nget away with so much. This is your problem not ours. \nGo ahead and deal with it yourself. \nI have my own problems.\n",
			"-End call\n",-4);//ending 4
		
		createNode //Index: 8
			("That's a better tone. I apologize for our lack \nof communication as well as your… predicament. \nHowever, there is not much we can accomplish. \nI’ll see what I can do and I’ll make sure \nthe appropriate people see to your problem.\n",
			"-End call\n", -5);//ending 5
		
		createNode //Index: 9
			("Well then, you need to talk to your superiors more. \nNow… Go about your business in a more professional \nmanner or I will make sure your job will always \nbe on the line\n", 
			"-End call\n",-6);//ending 6
		
		createNode //Index: 10
			("No. I don’t. I would like to ask that \nyou do not call my private phone. \nNow if you’ll excuse me.\n",
			"-End call\n", -7);//ending 7
		
		createNode //Index: 11
			("No, I don’t know. I suggest you call the appropriate people \nnext time. This is not the phone for business. \nIf you have reached me at a much earlier time… \nI might have been a connection, but not now.\n",
			"-End call\n", -8);//ending 8
			
		createNode //Index: 12
			("Is that so? We’ll I apologize that you \ndid not find who you were seeking. Perhaps in \nanother life I may have been the correct person.\n", 
			"-End call\n", -9);//ending 9
	}

	/***==============================***/
	/***       room.endDialogue()     ***/
	/***==============================***/
	// Ending the dialogue returns the room to the previous state
	// also updates whatever necessary dependaing on your ending
	level_02_D.endDialogue = function(ending) {
		while(nodes.length > 0)
			nodes.pop();
		level_02_hub.targetD_cancall = false;
		world.removeChild(black_screen);
		
		world.addChild(level_02_D.ret);
		active_sprites.push(level_02_D.ret);
		active_sprites.push(level_02_D.button_fire);
		
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
		
		level_02_hub.targetD_in_call = false;
		level_02_D.pickEnding(ending);
		clear_array();
		
	}
	
	level_02_D.pickEnding = function(ending) {
		switch(ending){
			case 1:
				level_02_hub.targetD_ending_info += "\nTarget D: Is supposedly faithful";
				break;
			case 2: 
				level_02_hub.targetD_ending_info += "\nTarget D: Believes that the younger generation \nhas lost their faith";
				break;
			case 3:
				level_02_hub.targetD_ending_info += "\nTarget D: Does he really hope he gets forgiven?";
				break;
			case 4:
				level_02_hub.targetD_ending_info += "\nTarget D: \"I have my own problems\"";
				break;
			case 5:
				level_02_hub.targetD_ending_info += "\nTarget D: Not much he can do to help\n Appreciated the change in tone";
				break;
			case 6:
				level_02_hub.targetD_ending_info += "\nTarget D: Told \"me\" to be more professional";
				break;
			case 7:
				level_02_hub.targetD_ending_info += "\nTarget D: Has a private phone";
				break;
			case 8:
				level_02_hub.targetD_ending_info += "\nTarget D: Might have been able to help earlier?";
				break;
			case 9:
				level_02_hub.targetD_ending_info += "\nTarget D: \"Perhaps in another life?\n";
				break;
				}
	}
	
	/***===================================***/
	/***         room.playAudio()          ***/
	/***===================================***/
	// Play special audio for this room
	level_02_D.playAudio = function() {
 		// Audio objects for this room
 		level_02_D.sound_background = new Audio("./Common/Sounds/scope_ambiance01.wav");
		level_02_D.sound_background.volume = 0.5;
		
		
		// Play and loop room ambiance
		level_02_D.sound_background.addEventListener('ended', function() {
			this.currentTime = 0;
			this.play();
		});
		level_02_D.sound_background.play();
		
		level_02_D.bgm = true;
	}
	
	/***=================================***/
	/***         room.stopAudio()        ***/
	/***=================================***/
	// Stop all audio emitting from this room
	level_02_D.stopAudio = function() {
		// Stop city ambiance
		level_02_D.sound_background.pause();
		level_02_D.sound_background.currentTime = 0;
		level_02_D.sound_background.removeEventListener('ended', function() {
			this.pause();
			this.currentTime = 0;
		});
		
		level_02_D.bgm = false;
	}
	
	/***===============================***/
	/***        Clear this room        ***/
	/***===============================***/
	// Remove from the world, un-draw sprites, etc...
	level_02_D.clear = function() {
		world.removeChild(level_02_D.image_background);
		world.removeChild(level_02_D.image_target_D);
		world.removeChild(level_02_D.image_shadow_C);
		world.removeChild(level_02_D.image_shadow_E);
		world.removeChild(level_02_D.image_scope);
		world.removeChild(level_02_D.ret);
		world.removeChild(level_02_D.button_call);
		world.removeChild(level_02_D.button_fire);
		world.removeChild(level_02_hub.timer_text);
		world.removeChild(red_screen);
		world.removeChild(level_02_D.red_screen_end);
		while(active_sprites.length > 0)
			active_sprites.pop();
	}