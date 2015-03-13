/***===============================***/
/***       Level 01: target C      ***/
/***===============================***/
var level_01_C = new Sprite();
	// Is this room's BGM playing?
	level_01_C.bgm = false;

	// Create this room
	level_01_C.create = function() {
		var info_count = 0;
		
		var sway_x = 0;
		var sway_y = 0;
		
		// This room's passive sprites
		level_01_C.image_background = new Sprite();
		level_01_C.image_background.width  = 1080;
		level_01_C.image_background.height = 720;
		level_01_C.image_background.x = 0;
		level_01_C.image_background.y = 0;
		level_01_C.image_background.image = Textures.load
			("./Common/Textures/Level 01/target c background.png");
		level_01_C.image_background.i = 0;
		level_01_C.image_background.update = function() {
			level_01_C.image_background.y = Math.sin(sway_x) * 20;
			sway_x += 0.009 * Math.random();
			level_01_C.image_background.x = Math.sin(sway_y) * 20;
			sway_y += 0.02 * Math.random();;
			if(sway_x >= 2*Math.PI) sway_x = 0;
			if(sway_y >= 2*Math.PI) sway_y = 0;
		}
			
		level_01_C.image_scope = new Sprite();
		level_01_C.image_scope.width  = 1080;
		level_01_C.image_scope.height = 720;
		level_01_C.image_scope.x = 0;
		level_01_C.image_scope.y = 0;
		level_01_C.image_scope.image = Textures.load
			("./Common/Textures/scope.png");
			
		level_01_C.red_screen_end = new Sprite();
		level_01_C.red_screen_end.width  = 1080;
		level_01_C.red_screen_end.height = 720;
		level_01_C.red_screen_end.alpha = 0;
		level_01_C.red_screen_end.image = Textures.load
			("./Common/Textures/red box.png");
		level_01_C.red_screen_end.update = function() {
			if(level_01_C.red_screen_end.alpha < 1) {
				level_01_C.red_screen_end.alpha += 0.007;
			}else {
				changeRoom(level_01_end);
			}
		}
			
		// Target C Sprite
		level_01_C.image_target_C = new Sprite();
		level_01_C.image_target_C.width  = 32;
		level_01_C.image_target_C.height = 96;
		level_01_C.image_target_C.x_move = 0;
		level_01_C.image_target_C.y_move = 0;
		level_01_C.image_target_C.image = Textures.load
			("./Common/Textures/Level 01/target-C.png");
		// Target C Animation
		level_01_C.image_target_C.frameWidth  = 24;
		level_01_C.image_target_C.frameHeight = 64;
		level_01_C.image_target_C.frameCount  = 15;
		level_01_C.image_target_C.frameRate   = 0;
		level_01_C.image_target_C.addAnimations
			(["walk_front", "walk_back", "idle_front",
			 "idle_back", "phone_front", "phone_back"],
			  [5,5,1,1,1,1]);
		level_01_C.image_target_C.update = function() {
			// Background sway
			level_01_C.image_target_C.x = 
				level_01_C.image_background.x + level_01_C.image_target_C.x_move + 540;
			level_01_C.image_target_C.y = 
				level_01_C.image_background.y + level_01_C.image_target_C.y_move + 360;
			// Animations
			if(level_01_hub.targetC_in_call == true) {
				if(level_01_C.image_target_C.animation == "walk_back"
					|| level_01_C.image_target_C.animation == "idle_back") {
					level_01_C.image_target_C.animation = "phone_back";
					level_01_C.image_target_C.frameRate = 0;
					level_01_C.image_target_C.x_move = level_01_hub.target_x;
					level_01_C.image_target_C.y_move = level_01_hub.target_y;
				}
				if(level_01_C.image_target_C.animation == "walk_front"
					|| level_01_C.image_target_C.animation == "idle_front") {
					level_01_C.image_target_C.animation = "phone_front";
					level_01_C.image_target_C.frameRate = 0;
					level_01_C.image_target_C.x_move = level_01_hub.target_x;
					level_01_C.image_target_C.y_move = level_01_hub.target_y;
				}
			}else if((level_01_hub.target_loop.value>=0 && level_01_hub.target_loop.value<300)	// 0 to 5 secs
				|| (level_01_hub.target_loop.value>=1350 && level_01_hub.target_loop.value<1650)	// 22.5 to 27.5 secs
				|| (level_01_hub.target_loop.value>=1800 && level_01_hub.target_loop.value<2100)	// 30 to 35 secs
				|| (level_01_hub.target_loop.value>=3150 && level_01_hub.target_loop.value<3450)) {	// 52.5 to 57.5 secs
				level_01_C.image_target_C.animation = "walk_back";
				level_01_C.image_target_C.frameRate = 2;
				level_01_C.image_target_C.x_move = level_01_hub.target_x;
				level_01_C.image_target_C.y_move = level_01_hub.target_y;
			}else if((level_01_hub.target_loop.value>=450 && level_01_hub.target_loop.value<750)	// 7.5 to 12.5 secs
					 || (level_01_hub.target_loop.value>=900 && level_01_hub.target_loop.value<1200)	// 15 to 20 secs
					 || (level_01_hub.target_loop.value>=2250 && level_01_hub.target_loop.value<2550)	// 37.5 to 42.5 secs
					 || (level_01_hub.target_loop.value>=2700 && level_01_hub.target_loop.value<3000)) {	// 45 to 50 secs
				level_01_C.image_target_C.animation = "walk_front";
				level_01_C.image_target_C.frameRate = 2;
				level_01_C.image_target_C.x_move = level_01_hub.target_x;
				level_01_C.image_target_C.y_move = level_01_hub.target_y;
			}else if((level_01_hub.target_loop.value>=300 && level_01_hub.target_loop.value<450)	// 5 to 7.5 secs
					 || (level_01_hub.target_loop.value>=1650 && level_01_hub.target_loop.value<1800)	// 27.5 to 30 secs
					 || (level_01_hub.target_loop.value>=2100 && level_01_hub.target_loop.value<2250)	// 35 to 37.5 secs
					 || (level_01_hub.target_loop.value>=3450 && level_01_hub.target_loop.value<3600)) {	// 57.5 to 60 secs
				level_01_C.image_target_C.animation = "idle_back";
				level_01_C.image_target_C.frameRate = 0;
				level_01_C.image_target_C.x_move = level_01_hub.target_x;
				level_01_C.image_target_C.y_move = level_01_hub.target_y;
			}else if((level_01_hub.target_loop.value>=750 && level_01_hub.target_loop.value<900)	// 12.5 to 15 secs
					 || (level_01_hub.target_loop.value>=1200 && level_01_hub.target_loop.value<1350)	// 20 to 22.5 secs
					 || (level_01_hub.target_loop.value>=2550 && level_01_hub.target_loop.value<2700)	// 42.5 to 45 secs
					 || (level_01_hub.target_loop.value>=3000 && level_01_hub.target_loop.value<3150)) {	// 50 to 52.5 secs
				level_01_C.image_target_C.animation = "idle_front";
				level_01_C.image_target_C.frameRate = 0;
				level_01_C.image_target_C.x_move = level_01_hub.target_x;
				level_01_C.image_target_C.y_move = level_01_hub.target_y;
			}
		};
		
		// This room's active sprites
		level_01_C.ret = new TextBox("<< return  ");
		level_01_C.ret.font = "Courier";
		level_01_C.ret.fontSize = 30;
		level_01_C.ret.color = "#FFFFFF";
		level_01_C.ret.x = 0;
		level_01_C.ret.y = 690;
		level_01_C.ret.mouseOver = false;
		level_01_C.ret.bgColor = "#000000";
		level_01_C.ret.drawBG = true;
		level_01_C.ret.update = function() {
			if(level_01_C.ret.mouseOver) {
				level_01_C.ret.color = "#484848";
			}else {
				level_01_C.ret.color = "#FFFFFF";
			}
		}
		level_01_C.ret.click = function() {
			level_01_C.stopAudio();
			level_01_hub.sound_background.volume = 0.5;
			changeRoom(level_01_hub);
		}
		
		level_01_C.button_call = new TextBox("   <CALL PHONE>   ");
		level_01_C.button_call.font = "Courier";
		level_01_C.button_call.color = "Red";
		level_01_C.button_call.fontSize = 30;
		level_01_C.button_call.x = 375;
		level_01_C.button_call.y = 45;
		level_01_C.button_call.mouseOver = false;
		level_01_C.button_call.update = function() {
			if(level_01_C.button_call.mouseOver) {
				level_01_C.button_call.text = "<<< CALL PHONE >>>";
				level_01_C.button_call.color = "Lime";
			}else {
				level_01_C.button_call.text = "   <CALL PHONE>   ";
				level_01_C.button_call.color = "Red";
			}
		}
		level_01_C.button_call.click = function() {
			world.addChild(black_screen);
			level_01_C.startDialogue();
			level_01_hub.targetC_in_call = true;
		}
		
		level_01_C.button_fire = new TextBox("<< FIRE >>");
		level_01_C.button_fire.font = "Courier";
		level_01_C.button_fire.fontSize = 35;
		level_01_C.button_fire.color = "Black";
		level_01_C.button_fire.x = 435;
		level_01_C.button_fire.y = 345;
		level_01_C.button_fire.visible = false;
		level_01_C.button_fire.update = function() {
			if(level_01_C.button_fire.mouseOver) {
				level_01_C.button_fire.visible = true;
				red_screen.visible = true;
			}else {
				level_01_C.button_fire.visible = false;
				red_screen.visible = false;
			}
		}
		level_01_C.button_fire.click = function() {
			level_01_C.stopAudio();
			world.removeChild(level_01_hub.level_timer);
			world.removeChild(level_01_hub.target_loop);
			world.removeChild(level_01_hub.timer_text);
			world.removeChild(red_screen);
			level_01_hub.ending_state = 3;
			sound_ominous.play(0);
			world.addChild(level_01_C.red_screen_end);
		}
		
		// Visible sprites at creation time
		world.addChild(level_01_C.image_background);
		world.addChild(level_01_C.image_target_C);
		world.addChild(red_screen);
		world.addChild(level_01_C.image_scope);
		world.addChild(level_01_C.ret);
		world.addChild(level_01_C.button_call);
		world.addChild(level_01_C.button_fire);
		
		// Active sprites at creation time
		active_sprites.push(level_01_C.ret);
		active_sprites.push(level_01_C.button_call);
		active_sprites.push(level_01_C.button_fire);
		
		// Play this room's BGM if it isn't yet playing
		if(!level_01_C.bgm)
			level_01_C.playAudio();
	}
	
	// Start the dialogue
	level_01_C.startDialogue = function() {
		world.removeChild(level_01_C.ret);
		world.removeChild(level_01_C.button_call);
		while(active_sprites.length > 0)
			active_sprites.pop();
		
		//Start #0
	var node = createNode
		("Hello? Who is this?\n", 
		"Are you nervous about your drop? \nIs that why you pace so much\n?", 1,
		"I’m running late but I’ll be there soon.", 5,
		"Hello I’m from the neighborhood \nwatch and we’re calling around \nthe local area looking for some \ninformation on what is potentially going \non in our very own little city\n", 9);
	node.create();

	//1 #1
	createNode
		("What the hell? Who the \nfuck are you to call me \nand ask me these things.\n", 
		"You didn’t answer my question… \nWhy are you pacing?\n", 2,
		"I have a track on your movements \ndo you really want to make me angry? \nAnswer my questions and keep doing \nwhat you’re doing. Are you waiting \nfor your package?\n", 3,
		"Hah, you really thought I meant \nany of that? You’re a funny guy.\n", 4);

	//1A #2
	createNode
		("Fuck you man. I don’t have \nto answer to you or anyone. \nNow sod off.\n",
		"End call\n", -1);
	//1B #3
	createNode
		("Woah woah woah! Gee, where \nare my manners… Let me answer your \nquestion right quick. No need to \ndo anything rash now. \nSo uhhh like… I’m not expecting any \npackages I'm just here walking around. \nSo I’ll just... \n",
		"End call\n", -2);
	//1C #4
	createNode
		("Joking little shit aren’t ya? \nYa better not do this shit again. \nNever know what some people might do. \nFucking package? The fuck would I want \na package here…\n",
		"End call\n", -3);

	//2 #5
	createNode
		("Well what do we have ‘ere? \n Seems you got the wrong number, mate.\n", 
		"You’re a funny guy. \nNo really. I need an update \nas to what you’re doing. I've \nrun into some shit here.\n", 6,
		"My bad man. I must have clicked \nthe wrong number when calling my wife. \nMan is she going to be pissed.\n", 7,
		"So then who are you?\n", 8);

	//2A #6
	createNode
		("I ain’t jokin'. Now sod off before \nI decide to find whoever’s on the \nother end of this. Trust me you don’t \nwant that to happen.\n",
		"End call\n", -4);

	//2B #7
	createNode
		("I hear ya. Women sometimes, \nget pissed at you for no reason. \nMine is always finding a reason \nto be mad at me. First its the cooking, \nnext it’s I don’t walk enough... \nCall her soon, mate, best not mess \naround with that.\n",
		"End call\n", -5);

	//2C #8
	createNode
		("I’m the guy who picked up \nhis phone for an idiot who doesn’t know how \nto dial a number correctly. I have \ntoo much on my plate and I don’t \nhave to explain myself to you or anyone \nelse...sod will ya?\n",
		"End call\n", -6);

	//3 #9
	createNode
		("Neighborhood watch you say? \nAnything to do to help, mate.\n", 
		"We have reports of a shady looking \nindividual loitering around the \narea, seemingly walking back and forth. \nPeople feel he's scoping out the area. \nDo you have any information about him?\n", 10,
		"We’ve been told that this area \nis a place that some dealings \nhappen to go down, like exchanging drops. \nDo you know anything about this?\n", 11,
		"Are you familiar with this area?\n", 12);

	//3A #10
	createNode
		("Shady? Do I…. I mean, does he really \nlook shady? Maybe he’s just there \nthinking over some stuff enjoying the \nview...  How do you know he’s really \nup to anything? Well… I have to go \nnow... Sorry I couldn’t help more, mate.\n",
		"End call\n", -7);

	//3B #11
	createNode
		("Packages? This would be a weird \nplace for packages… I’ll keep a \nlook out if I’m in the area. \nDon’t worry about it, mate. I’ll alert \nthe appropriate people If I see anything\n",
		"End call\n", -8);

	//3C #12
	createNode
		("Familiar with the area? Not so much, \nI recently settled down here with my wife. \nWe don’t know the area very much \nbut we’ve heard good things about \nthe neighborhood. It’s probably because of \nyou guys right? Maybe I might volunteer \none day…. But for now I still \nhave a lot on my mind, mate.\n",
		"End call\n", -9);

	}
	
	// End the dialogue
	level_01_C.endDialogue = function(ending) {
		world.removeChild(black_screen);
		
		world.addChild(level_01_C.ret);
		active_sprites.push(level_01_C.ret);
		active_sprites.push(level_01_C.button_fire);
		
		level_01_hub.targetC_in_call = false;
		level_01_C.pickEnding(ending);
		clear_array();
	}
	
	level_01_C.pickEnding = function(ending) {
		switch(ending){
			case 1:
				level_01_hub.targetC_ending_info += "\nTarget C: Doesn’t have to answer to anyone";
				break;
			case 2: 
				level_01_hub.targetC_ending_info += "\nTarget C:He say’s he’s not waiting for a package…. and he seems to have listened to me. ";
				break;
			case 3:
				level_01_hub.targetC_ending_info += "\nTarget C:Does he really not know about a pakage?";
				break;
			case 4:
				level_01_hub.targetC_ending_info += "\nTarget C:Seems very aggressive.";
				break;
			case 5:
				level_01_hub.targetC_ending_info += "\nTarget C:His wife told him to walk?.";
				break;
			case 6:
				level_01_hub.targetC_ending_info += "\nTarget C:He has a lot on his plate? Doesn’t have to explain himself?";
				break;
			case 7:
				level_01_hub.targetC_ending_info += "\nTarget C:Is he really just enjoying the view?";
				break;
			case 8:
				level_01_hub.targetC_ending_info += "Target C: something";
				break;
			case 9:
				level_01_hub.targetC_ending_info += "\nTarget C: He has a wife. He’s new to the Area?";
				break;
				}
	}
	
	/***===================================***/
	/***         room.playAudio()          ***/
	/***===================================***/
	// Play special audio for this room
	level_01_C.playAudio = function() {
 		// Audio objects for this room
 		level_01_C.sound_background = new Audio("./Common/Sounds/scope_ambiance01.wav");
		level_01_C.sound_background.volume = 0.5;
		
		
		// Play and loop room ambiance
		level_01_C.sound_background.addEventListener('ended', function() {
			this.currentTime = 0;
			this.play();
		});
		level_01_C.sound_background.play();
		
		level_01_C.bgm = true;
	}
	
	/***=================================***/
	/***         room.stopAudio()        ***/
	/***=================================***/
	// Stop all audio emitting from this room
	level_01_C.stopAudio = function() {
		// Stop city ambiance
		level_01_C.sound_background.pause();
		level_01_C.sound_background.currentTime = 0;
		level_01_C.sound_background.removeEventListener('ended', function() {
			this.pause();
			this.currentTime = 0;
		});
		
		level_01_C.bgm = false;
	}
	
	// Clear this room
	level_01_C.clear = function() {
		world.removeChild(level_01_C.image_background);
		world.removeChild(level_01_C.image_target_C);
		world.removeChild(level_01_C.image_scope);
		world.removeChild(level_01_C.ret);
		world.removeChild(level_01_C.button_call);
		world.removeChild(level_01_C.button_fire);
		world.removeChild(level_01_C.red_screen_end);
		world.removeChild(red_screen);
		while(active_sprites.length > 0)
			active_sprites.pop();
	}