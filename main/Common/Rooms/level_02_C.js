/***===============================***/
/***       Level 01: target A      ***/
/***===============================***/
var level_02_C = new Sprite();
	// Is the BGM playing?
	level_02_C.bgm = false;

	/***==================================***/
	/***          room.create()           ***/
	/***==================================***/
	// What to do at creation time
	level_02_C.create = function() {
		var sway_x = 0;
		var sway_y = 0;
		
		/***=================================***/
		/***         Passive sprites         ***/
		/***=================================***/
		// Sprites to be drawn, but without interactivity
		level_02_C.image_background = new Sprite();
		level_02_C.image_background.width  = 1080;
		level_02_C.image_background.height = 720;
		level_02_C.image_background.x = 0;
		level_02_C.image_background.y = 0;
		level_02_C.image_background.image = Textures.load
			("./Common/Textures/Level 02/target C background.png");
		level_02_C.image_background.i = 0;
		level_02_C.image_background.update = function() {
			level_02_C.image_background.y = Math.sin(sway_x) * 20;
			sway_x += 0.009 * Math.random();
			level_02_C.image_background.x = Math.sin(sway_y) * 20;
			sway_y += 0.02 * Math.random();;
			if(sway_x >= 2*Math.PI) sway_x = 0;
			if(sway_y >= 2*Math.PI) sway_y = 0;
		}
			
		level_02_C.image_scope = new Sprite();
		level_02_C.image_scope.width  = 1080;
		level_02_C.image_scope.height = 720;
		level_02_C.image_scope.x = 0;
		level_02_C.image_scope.y = 0;
		level_02_C.image_scope.image = Textures.load
			("./Common/Textures/scope.png");
		
		level_02_C.red_screen_end = new Sprite();
		level_02_C.red_screen_end.width  = 1080;
		level_02_C.red_screen_end.height = 720;
		level_02_C.red_screen_end.alpha = 0;
		level_02_C.red_screen_end.image = Textures.load
			("./Common/Textures/red box.png");
		level_02_C.red_screen_end.update = function() {
			if(level_02_C.red_screen_end.alpha < 1) {
				level_02_C.red_screen_end.alpha += 0.007;
			}else {
				changeRoom(level_02_end);
			}
		}
		
		// Target C sprite
		level_02_C.image_target_C = new Sprite();
		level_02_C.image_target_C.width  = 72;
		level_02_C.image_target_C.height = 96;
		level_02_C.image_target_C.image  = Textures.load
			("./Common/Textures/Level 02/target-C.png");
		
		// Target C animation
		level_02_C.image_target_C.frameWidth  = 48;
		level_02_C.image_target_C.frameHeight = 64;
		level_02_C.image_target_C.frameCount  = 5;
		level_02_C.image_target_C.frameRate   = 0;
		level_02_C.image_target_C.addAnimation("idle",0,1);
		level_02_C.image_target_C.addAnimation("drink",1,1);
		level_02_C.image_target_C.addAnimation("sleep",2,1);
		level_02_C.image_target_C.addAnimation("phone",3,1);
		level_02_C.image_target_C.update = function() {
			// Background sway
			level_02_C.image_target_C.x = level_02_C.image_background.x + 480;
			level_02_C.image_target_C.y = level_02_C.image_background.y + 340;
			// Animation
			if(level_02_hub.targetC_in_call == true) {
				level_02_C.image_target_C.animation = "phone";
			}else if((level_02_hub.target_loop.value>=300 && level_02_hub.target_loop.value<480)	// 5 to 8 secs
					 || (level_02_hub.target_loop.value>=2100 && level_02_hub.target_loop.value<2280)) {	// 35 to 38 secs
				level_02_C.image_target_C.animation = "drink";
			}else if((level_02_hub.target_loop.value>=900 && level_02_hub.target_loop.value<1380)	// 15 to 23 secs
					 || (level_02_hub.target_loop.value>=2700 && level_02_hub.target_loop.value<3180)) {	// 45 to 53 secs
				level_02_C.image_target_C.animation = "sleep";
			}else {
				level_02_C.image_target_C.animation = "idle";
			}
		};
		
		// Target D shadow sprite
		level_02_C.image_shadow_D = new Sprite();
		level_02_C.image_shadow_D.width  = 48;
		level_02_C.image_shadow_D.height = 96;
		level_02_C.image_shadow_D.image  = Textures.load
			("./Common/Textures/Level 02/target-D-shadow.png");
		level_02_C.image_shadow_D.update = function() {
			// Background sway
			level_02_C.image_shadow_D.x = level_02_C.image_background.x + 720;
			level_02_C.image_shadow_D.y = level_02_C.image_background.y + 420;
		};
		
		// Target E shadow sprite
		level_02_C.image_shadow_E = new Sprite();
		level_02_C.image_shadow_E.width  = 48;
		level_02_C.image_shadow_E.height = 128;
		level_02_C.image_shadow_E.image  = Textures.load
			("./Common/Textures/general-man-plain.png");
		level_02_C.image_shadow_E.update = function() {
			// Background sway
			level_02_C.image_shadow_E.x = level_02_C.image_background.x + 570;
			level_02_C.image_shadow_E.y = level_02_C.image_background.y + 400;
			// Animation
			level_02_C.image_shadow_E.frameWidth  = 24;
			level_02_C.image_shadow_E.frameHeight = 64;
			level_02_C.image_shadow_E.frameCount  = 25;
			level_02_C.image_shadow_E.frameRate = 0;
			level_02_C.image_shadow_E.addAnimation("stand_RU",23,1);
			level_02_C.image_shadow_E.animation = "stand_RU";
		};
		
		/***===   End of passive sprites  ===***/
		
		/***=================================***/
		/***         Active sprites          ***/
		/***=================================***/
		// Sprites to be available to input_manager

		// Button to return to the hub
		level_02_C.ret = new TextBox("<< return  ");
		level_02_C.ret.font = "Courier";
		level_02_C.ret.fontSize = 30;
		level_02_C.ret.color = "#FFFFFF";
		level_02_C.ret.x = 0;
		level_02_C.ret.y = 690;
		level_02_C.ret.mouseOver = false;
		level_02_C.ret.bgColor = "#000000";
		level_02_C.ret.update = function() {
			if(level_02_C.ret.mouseOver) {
				level_02_C.ret.color = "#484848";
			}else {
				level_02_C.ret.color = "#FFFFFF";
			}
		}
		level_02_C.ret.click = function() {
			level_02_hub.sound_background.volume = 0.5;
			level_02_C.stopAudio();
			changeRoom(level_02_hub);
		}
		
		// Button to initiate call target
		level_02_C.button_call = new TextBox("   <CALL PHONE>   ");
		level_02_C.button_call.font = "Courier";
		level_02_C.button_call.color = "Red";
		level_02_C.button_call.fontSize = 30;
		level_02_C.button_call.x = 375;
		level_02_C.button_call.y = 45;
		level_02_C.button_call.mouseOver = false;
		level_02_C.button_call.update = function() {
			if(level_02_C.button_call.mouseOver) {
				level_02_C.button_call.text = "<<< CALL PHONE >>>";
				level_02_C.button_call.color = "Lime";
			}else {
				level_02_C.button_call.text = "   <CALL PHONE>   ";
				level_02_C.button_call.color = "Red";
			}
		}
		level_02_C.button_call.click = function() {
			world.addChild(black_screen);
			level_02_C.startDialogue(0);
			level_02_hub.targetC_in_call = true;
		}
		
		// Button to fire upon target
		level_02_C.button_fire = new TextBox("<< FIRE >>");
		level_02_C.button_fire.font = "Courier";
		level_02_C.button_fire.fontSize = 35;
		level_02_C.button_fire.color = "Black";
		level_02_C.button_fire.x = 435;
		level_02_C.button_fire.y = 345;
		level_02_C.button_fire.visible = false;
		level_02_C.button_fire.update = function() {
			if(level_02_C.button_fire.mouseOver) {
				level_02_C.button_fire.visible = true;
				red_screen.visible = true;
			}else {
				level_02_C.button_fire.visible = false;
				red_screen.visible = false;
			}
		}
		level_02_C.button_fire.click = function() {
			level_02_C.stopAudio();
			world.removeChild(red_screen);
			world.removeChild(level_02_C.ret);
			world.removeChild(level_02_C.button_call);
			while(active_sprites.length > 0)
				active_sprites.pop();
			sound_ominous.play();
			world.addChild(level_02_C.red_screen_end);
			level_02_hub.ending_state = 3;
		}
		

		world.addChild(level_02_C.image_background);
		world.addChild(level_02_C.image_target_C);
		world.addChild(level_02_C.image_shadow_D);
		world.addChild(level_02_C.image_shadow_E);
		world.addChild(red_screen);
		world.addChild(level_02_C.image_scope);
		world.addChild(level_02_C.ret);
		if(level_02_hub.targetC_cancall)
			world.addChild(level_02_C.button_call);
		world.addChild(level_02_C.button_fire);
		world.addChild(level_02_hub.timer_text);
		
		// Nice animation
		level_02_C.top_border = new Sprite();
		level_02_C.top_border.width  = 1080;
		level_02_C.top_border.height = 720;
		level_02_C.top_border.x = 0;
		level_02_C.top_border.y = 0;
		level_02_C.top_border.image = Textures.load("./Common/Textures/black box.png");
		level_02_C.top_border.update = function() {
			level_02_C.top_border.y -= 30;
			if(level_02_C.top_border.y < -720)
				world.removeChild(level_02_C.top_border);
		}
		
		level_02_C.bottom_border = new Sprite();
		level_02_C.bottom_border.width  = 1080;
		level_02_C.bottom_border.height = 720;
		level_02_C.bottom_border.x = 0;
		level_02_C.bottom_border.y = 0;
		level_02_C.bottom_border.image = Textures.load("./Common/Textures/black box.png");
		level_02_C.bottom_border.update = function() {
			level_02_C.bottom_border.y += 30;
			if(level_02_C.bottom_border.y > 720)
				world.removeChild(level_02_C.bottom_border);
		}

		world.addChild(level_02_C.top_border);
		world.addChild(level_02_C.bottom_border);
		sound_zoom.play();	
		
		// Active sprites at creation time
		active_sprites.push(level_02_C.ret);
		if(level_02_hub.targetC_cancall)
			active_sprites.push(level_02_C.button_call);
		active_sprites.push(level_02_C.button_fire);
		
		// Play this room's background audio if it isn't yet playing
		if(!level_02_C.bgm)
			level_02_C.playAudio();
	}
	
	/***==============================***/
	/***     room.startDialogue()     ***/
	/***==============================***/
	// Starting dialogue clears room behind the screen
	level_02_C.startDialogue = function() {
		world.removeChild(level_02_C.ret);
		world.removeChild(level_02_C.button_call);
		while(active_sprites.length > 0)
			active_sprites.pop();
		
var node = createNode  // Index: 0
			("Hello?", 
			 "Pretend to be from a church-- \nGood afternoon sir, We are part of local church \nand we we’re wondering if you or anyone \nyou know might be willing to volunteer \nor donate to our establishment? \nWe’re preparing for our next event and we’re \nboth understaffed and underfunded. \nAny help from our faithful is much appreciated.\n" , 1, 
			 "\nPretend to be a supplier-- \nHey, the next shipment will be in soon. \nI gotta know where to make the drop, \ncops got to the usual spot. \nYou got a backup?\n", 2,
			 "Be direct-- \nI hear you’re a man with connections.\n",3);
		node.create();
		
		createNode     // Index: 1
			("Oh yeahh. Thats the Saint Mary’ss \nriight? Yeahhh. You guysh are good \npeople, ya know? And I’ll be \nshure to donate this Ssunday when \nI attend, Like I always do. \nDon’t chu worry about that.\n",
			 "Thank him for his patronage-- \nThank you very much. We look \nforward to meeting our gracious benefactor\n", 4,
			 "Ask him if he’s okay-- \nSir, are you okay? \nYou don’t sound very good\n", 5,
			 "Doubt him-- \nIt’s alright sir, our church accepts \neveryone. Please do not feel inclined to \ndonate if you are not in a position to.\n", 6);
	    
		createNode   //Index: 2
			("Look. I don’t know how you got thiss number but this is \nnot one for buisness… Thiss is a personal phone. \nHow did you even get thiss numberr?",
			"Continue the act--\nLook, Thats beside the point. \nI need to know where we stand on \nthis issue.", 7,
			"Apologize--\nAll right, all right, \nI'll make sure not to use \nthis number any more\n.", 8,
			"Provoke--\nI didn’t realize there was a \ndifference between business and personal \nwith you.", 9);
		
		createNode	//Index: 3
			("I have ssssooo many connections. \nBut…. how did you get thiss number. \nThiss one isn’t really for this type of talkss. \nThiss is more for like. Private sstuff, \nya feel me, holmes?\n",
			"Ask about the connections-- \nGreat. So who exactly do you know?\n", 10,
			"Ask about his phone-- \nWhat do you mean by this is \na private phone?\n", 11, 
			"Ask about himself-- \nWho is this then?\n", 12);
		
		createNode //Index: 4
			("Yeah… No problemm. I’mm always glad \nto help the church in any way. \nI was raised with the belieff that if \nI had something to give back I would \ndo itt. Yeah. I’ll write the check \nasss ssoon as I can and send it over.\n",
			"-End call\n", -1);//ending 1
			
		createNode //Index: 5
			("Me? Yeahh I’m fine. You know, just \nrelaxing. You have to enjoy the small \nthings in this crazy life. Don’t worry \nabout it… You guys are always worrying \nabout these things.\n", 
			"-End call\n", -2);//ending 2
		
		createNode //Index: 6
			("You don’t believe me? I thought \nyou called because you knew \nwho I was. I have means. Believe me, \nI have means. Are you in a position \nto deny help?\n", 
			"-End call\n", -3);//ending 3

		createNode //Index: 7
			("I don’t rreally care where it ees you sstand. \nWe have people, you have people. \nThis stuff will be figured out. Now. \nDon’t call me again.\n",
			"-End call\n",-4);//ending 4
		
		createNode //Index: 8
			("Isss all good now. Asss long as you know never. \nEver. Call this again. Necesitas mas? \nNo? Didn’t think so.\n",
			"-End call\n", -5);//ending 5
		
		createNode //Index: 9
			("I didn’t realize I was talking \nto a fucking amateur. Just make sure you \nget your “sshipment” into the right hands.\n", 
			"-End call\n",-6);//ending 6
		
		createNode //Index: 10
			("What do you mean who do I know? \nI know eeeeveryone. Look. \nRight now I’m in the middle of sssomething. \nClosing ssome deal or something, ese.\nI’ll make ssure you get the right people\n",
			"-End call\n", -7);//ending 7
		
		createNode //Index: 11
			("Oh you ssee, Thisss is one of \nmy phone is for, like, me, ese. \nI have another for sseriouss sstuff. \nOh, ssspeaking of important sstuff, \nI have to pay attention to these guyss… \nI keep ssaying that I don’t care but--\n",
			"-End call\n", -8);//ending 8
			
		createNode //Index: 12
			("Who is this? How do you not \nknow who you’re calling, \nholmes. I guessss I should say how \ndo you not know who I am? \nWhatever, holmes.\n", 
			"-End call\n", -9);//ending 9
	}

	/***==============================***/
	/***       room.endDialogue()     ***/
	/***==============================***/
	// Ending the dialogue returns the room to the previous state
	// also updates whatever necessary dependaing on your ending
	level_02_C.endDialogue = function(ending) {
		while(nodes.length > 0)
			nodes.pop();
		level_02_hub.targetC_cancall = false;
		world.removeChild(black_screen);
		
		world.addChild(level_02_C.ret);
		active_sprites.push(level_02_C.ret);
		active_sprites.push(level_02_C.button_fire);
		
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
		
		level_02_hub.targetC_in_call = false;
		level_02_C.pickEnding(ending);
	}

	level_02_C.pickEnding = function(ending) {
		switch(ending){
			case 1:
				level_02_hub.targetC_ending_info += "\nTarget C: Says he was raised with his belief. \nSounded weird.";
				break;
			case 2: 
				level_02_hub.targetC_ending_info += "\nTarget C: Says he's relaxing and \"enjoys the small things\"";
				break;
			case 3:
				level_02_hub.targetC_ending_info += "\nTarget C: Thinks he is well known.";
				break;
			case 4:
				level_02_hub.targetC_ending_info += "\nTarget C: \"We have people... Don't call me again\"";
				break;
			case 5:
				level_02_hub.targetC_ending_info += "\nTarget C: \"don't call me again\"";
				break;
			case 6:
				level_02_hub.targetC_ending_info += "\nTarget C: \"... fucking ametuer.... \nget shipment into the right hands\"";
				break;
			case 7:
				level_02_hub.targetC_ending_info += "\nTarget C: He's in the middle of a deal of some sort\n";
				break;
			case 8:
				level_02_hub.targetC_ending_info += "\nTarget C: Has a private phone. \nDoing something important.";
				break;
			case 9:
				level_02_hub.targetC_ending_info += "\nTarget C: Surprised I don't know him.";
				break;
				}
	}
	
	/***===================================***/
	/***         room.playAudio()          ***/
	/***===================================***/
	// Play special audio for this room
	level_02_C.playAudio = function() {
 		// Audio objects for this room
 		level_02_C.sound_background = new Audio("./Common/Sounds/scope_ambiance01.wav");
		level_02_C.sound_background.volume = 0.5;
		
		
		// Play and loop room ambiance
		level_02_C.sound_background.addEventListener('ended', function() {
			this.currentTime = 0;
			this.play();
		});
		level_02_C.sound_background.play();
		
		level_02_C.bgm = true;
	}
	
	/***=================================***/
	/***         room.stopAudio()        ***/
	/***=================================***/
	// Stop all audio emitting from this room
	level_02_C.stopAudio = function() {
		// Stop city ambiance
		level_02_C.sound_background.pause();
		level_02_C.sound_background.currentTime = 0;
		level_02_C.sound_background.removeEventListener('ended', function() {
			this.pause();
			this.currentTime = 0;
		});
		
		level_02_C.bgm = false;
	}
	
	/***===============================***/
	/***        Clear this room        ***/
	/***===============================***/
	// Remove from the world, un-draw sprites, etc...
	level_02_C.clear = function() {
		world.removeChild(level_02_C.image_background);
		world.removeChild(level_02_C.image_target_C);
		world.removeChild(level_02_C.image_shadow_D);
		world.removeChild(level_02_C.image_shadow_E);
		world.removeChild(level_02_C.image_scope);
		world.removeChild(level_02_C.ret);
		world.removeChild(level_02_C.button_call);
		world.removeChild(level_02_C.button_fire);
		world.removeChild(level_02_hub.timer_text);
		world.removeChild(red_screen);
		world.removeChild(level_02_C.red_screen_end);
		while(active_sprites.length > 0)
			active_sprites.pop();
	}