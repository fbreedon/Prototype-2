/***===============================***/
/***       Level 01: target A      ***/
/***===============================***/
var level_01_A = new Sprite();
	// Is the BGM playing?
	level_01_A.bgm = false;

	/***==================================***/
	/***          room.create()           ***/
	/***==================================***/
	// What to do at creation time
	level_01_A.create = function() {
		var info_count = 0;
		
		var sway_x = 0;
		var sway_y = 0;
		
		/***=================================***/
		/***         Passive sprites         ***/
		/***=================================***/
		// Sprites to be drawn, but without interactivity
		level_01_A.image_background = new Sprite();
		level_01_A.image_background.width  = 1080;
		level_01_A.image_background.height = 720;
		level_01_A.image_background.x = 0;
		level_01_A.image_background.y = 0;
		level_01_A.image_background.image = Textures.load
			("./Common/Textures/Level 01/target A background.png");
		level_01_A.image_background.i = 0;
		level_01_A.image_background.update = function() {
			level_01_A.image_background.y = Math.sin(sway_x) * 20;
			sway_x += 0.009 * Math.random();
			level_01_A.image_background.x = Math.sin(sway_y) * 20;
			sway_y += 0.02 * Math.random();;
			if(sway_x >= 2*Math.PI) sway_x = 0;
			if(sway_y >= 2*Math.PI) sway_y = 0;
		}
			
		level_01_A.image_scope = new Sprite();
		level_01_A.image_scope.width  = 1080;
		level_01_A.image_scope.height = 720;
		level_01_A.image_scope.x = 0;
		level_01_A.image_scope.y = 0;
		level_01_A.image_scope.image = Textures.load
			("./Common/Textures/scope.png");
		
		// Target A sprite
		level_01_A.image_target_A = new Sprite();
		level_01_A.image_target_A.width  = 32;
		level_01_A.image_target_A.height = 64;
		level_01_A.image_target_A.x = 0;
		level_01_A.image_target_A.y = 0;
		level_01_A.image_target_A.image = Textures.load
			("./Common/Textures/Level 01/target-A.png");
			
		// Target A animation
		level_01_A.image_target_A.frameWidth   = 32;
		level_01_A.image_target_A.frameHeight  = 64;
		level_01_A.image_target_A.frameCount   = 5;
		level_01_A.image_target_A.frameRate    = 0;
		level_01_A.image_target_A.addAnimations(["idle", "check_phone"], [1,3]);
		level_01_A.image_target_A.addAnimation("phone_out",2,1);
		level_01_A.image_target_A.addAnimation("phone_away",3,1);
		level_01_A.image_target_A.update = function() {
			// Background sway
			level_01_A.image_target_A.x = level_01_A.image_background.x + 520;
			level_01_A.image_target_A.y = level_01_A.image_background.y + 340;
			// Animations
			if(level_01_hub.targetA_in_call == true) {
				level_01_A.image_target_A.animation = "phone_out";
				level_01_A.image_target_A.frameRate = 0;
			}else if((level_01_hub.target_loop.value>=600 && level_01_hub.target_loop.value<660)	// 10 to 11 secs
				|| (level_01_hub.target_loop.value>=1800 && level_01_hub.target_loop.value<1860)	// 30 to 31 secs
				|| (level_01_hub.target_loop.value>=3000 && level_01_hub.target_loop.value<3060)) {	// 50 to 51 secs
				level_01_A.image_target_A.animation = "check_phone";
				level_01_A.image_target_A.frameRate = 2;
			}else if((level_01_hub.target_loop.value>=660 && level_01_hub.target_loop.value<840)	// 11 to 14 secs
					 || (level_01_hub.target_loop.value>=1860 && level_01_hub.target_loop.value<2040)	// 31 to 34 secs
					 || (level_01_hub.target_loop.value>=3060 && level_01_hub.target_loop.value<3240)) {	// 51 to 54 secs
				level_01_A.image_target_A.animation = "phone_out";
				level_01_A.image_target_A.frameRate = 0;
				info_count++;
				if(!level_01_A.targetA_has_seen && info_count == 60) {
					level_01_A.targetA_seen_info = "some info";
					level_01_A.targetA_has_seen = true;
				}
			}else if((level_01_hub.target_loop.value>=840 && level_01_hub.target_loop.value<900)	// 14 to 15 secs
					 || (level_01_hub.target_loop.value>=2040 && level_01_hub.target_loop.value<2100)	// 34 to 35 secs
					 || (level_01_hub.target_loop.value>=3240 && level_01_hub.target_loop.value<3300)) {	// 54 to 55 secs
				level_01_A.image_target_A.animation = "phone_away";
				level_01_A.image_target_A.frameRate = 0;
			}else {
				level_01_A.image_target_A.animation = "idle";
				level_01_A.image_target_A.frameRate = 0;
			}
		};
		
		/***===   End of passive sprites  ===***/
		
		/***=================================***/
		/***         Active sprites          ***/
		/***=================================***/
		// Sprites to be available to input_manager

		// Button to return to the hub
		level_01_A.ret = new TextBox("<< return  ");
		level_01_A.ret.font = "Courier";
		level_01_A.ret.fontSize = 30;
		level_01_A.ret.color = "#FFFFFF";
		level_01_A.ret.x = 0;
		level_01_A.ret.y = 690;
		level_01_A.ret.mouseOver = false;
		level_01_A.ret.bgColor = "#000000";
		level_01_A.ret.update = function() {
			if(level_01_A.ret.mouseOver) {
				level_01_A.ret.color = "#484848";
			}else {
				level_01_A.ret.color = "#FFFFFF";
			}
		}
		level_01_A.ret.click = function() {
			level_01_hub.sound_background.volume = 0.5;
			level_01_A.stopAudio();
			changeRoom(level_01_hub);
		}
		
		// Button to initiate call target
		level_01_A.button_call = new TextBox("   <CALL PHONE>   ");
		level_01_A.button_call.font = "Courier";
		level_01_A.button_call.color = "Red";
		level_01_A.button_call.fontSize = 30;
		level_01_A.button_call.x = 375;
		level_01_A.button_call.y = 45;
		level_01_A.button_call.mouseOver = false;
		level_01_A.button_call.update = function() {
			if(level_01_A.button_call.mouseOver) {
				level_01_A.button_call.text = "<<< CALL PHONE >>>";
				level_01_A.button_call.color = "Lime";
			}else {
				level_01_A.button_call.text = "   <CALL PHONE>   ";
				level_01_A.button_call.color = "Red";
			}
		}
		level_01_A.button_call.click = function() {
			world.addChild(black_screen);
			room_manager.curr_room.startDialogue();
			level_01_hub.targetA_in_call = true;
		}
		
		// Button to fire upon target
		level_01_A.button_fire = new TextBox("<< FIRE >>");
		level_01_A.button_fire.font = "Courier";
		level_01_A.button_fire.fontSize = 35;
		level_01_A.button_fire.color = "Black";
		level_01_A.button_fire.x = 435;
		level_01_A.button_fire.y = 345;
		level_01_A.button_fire.visible = false;
		level_01_A.button_fire.update = function() {
			if(level_01_A.button_fire.mouseOver) {
				level_01_A.button_fire.visible = true;
				red_screen.visible = true;
			}else {
				level_01_A.button_fire.visible = false;
				red_screen.visible = false;
			}
		}
		level_01_A.button_fire.click = function() {
			level_01_A.stopAudio();
			world.removeChild(red_screen);
			level_01_hub.ending_state = 1;
			changeRoom(level_01_end);
		}
		

		world.addChild(level_01_A.image_background);
		world.addChild(level_01_A.image_target_A);
		world.addChild(red_screen);
		world.addChild(level_01_A.image_scope);
		world.addChild(level_01_A.ret);
		world.addChild(level_01_A.button_call);
		world.addChild(level_01_A.button_fire);
		
		// Active sprites at creation time
		active_sprites.push(level_01_A.ret);
		active_sprites.push(level_01_A.button_call);
		active_sprites.push(level_01_A.button_fire);
		
		// Play this room's background audio if it isn't yet playing
		if(!level_01_A.bgm)
			level_01_A.playAudio();
	}
	
	/***==============================***/
	/***     room.startDialogue()     ***/
	/***==============================***/
	// Starting dialogue clears room behind the screen
	level_01_A.startDialogue = function() {
		world.removeChild(level_01_A.ret);
		world.removeChild(level_01_A.button_call);
		while(active_sprites.length > 0)
			active_sprites.pop();
		
		var node = createNode  // Index: 0
			("H-Hello?", 
			 "Expecting someone?", 1, 
			 "I'm running a little late", 2,
			 "Shit's gone down, I need you to \nstay right where you are", 3);
		node.create();
		
		createNode     // Index: 1
			("What? N-no, I'm just... \nwho are you again?",
			 "Who I am is of no importance, \nthe question is who are you?", 4,
			 "I am a friend. I am aware of the \nsituation you are in.", 5,
			 "Tell me... why are you standing on that ledge then?", 6);
	    
		createNode   //Index: 2
			("Who? I wasn't expecting anyone to come here... When are you going to get here?",
			"I'll be there soon, friend, do not \nworry and sit tight and do not\n draw any unnecessary attention\n", 7,
			"Soon... soon... In the mean time, you stay safe, I hear they are on to us.\n", 8,
			"I don't know. I might have to just send one \nof my cronies to give you this instead. \nThis shit ain't worth my time", 9);
		
		createNode	//Index: 3
			("I think you have the wrong person entirely\n",
			"No... I definitely have the right person.\n", 10,
			"My mistake, I must have dailed \nincorrectly when calling a colleague of mine\n", 11, 
			"-End call\n", -9) //ending 9 (sorry it's out of order 
		
		createNode //Index: 4
			("I'm... I don't know who I am anymore \nwI... I don't want to... \n Just nevermind. \nForget about me \n","-End call\n", -1);//ending 1
			
		createNode //Index: 5
			("What!? How do you know? \nI haven't told anyone... Wh-who told you? \nI don't need anyone... Just leave me.\n", "-End call\n", -2);//ending 2
		
		createNode //Index: 6
			("I'm.. I'm... I don't know \nwhy I'm here... Wait!? \nYou can see me!? \nHow do you know me!?\n", "-End call\n", -3);//ending 3

		createNode //Index: 7
			("Don't do anything to...? I... \nI think you have the wrong \nperson. I knew it...\n", "End call\n",-4);//ending 4
		
		createNode //Index: 8
			("On to \"us\"? what \"us\"? \nThere IS no us! There's only\n me and you--\n...and you aren't who I thought \nyou were... Just. Forget all of that.\n","-End call\n", -5);//ending 6
		
		createNode //Index: 9
			("Woah. You... you have the wrong \nperson completely... but don't... \nJust. Look, I never heard \nanything okay?\n", "End call\n",-6);//ending 6
		
		createNode //Index:10
			("I... don't know what you mean. \nI have enough on my mind... \njust... leave me be\n","-End call\n", -7);//ending 7
		
		createNode //Index:11
			("That's fine. Its not like \nI wanted anyone to call me anyways... \nGood luck with your partner and all. \nI didn't have any of that\n", "End call\n", -8);//ending 8
	}

	/***==============================***/
	/***       room.endDialogue()     ***/
	/***==============================***/
	// Ending the dialogue returns the room to the previous state
	// also updates whatever necessary dependaing on your ending
	level_01_A.endDialogue = function(ending) {
		world.removeChild(black_screen);
		
		world.addChild(level_01_A.ret);
		world.addChild(level_01_A.button_call);
		active_sprites.push(level_01_A.ret);
		active_sprites.push(level_01_A.button_call);
		active_sprites.push(level_01_A.button_fire);
		
		level_01_hub.targetA_in_call = false;
		level_01_A.pickEnding(ending);
		//alert("Notepad: " + level_01_hub.targetA_ending_info);
	}
	
	level_01_A.pickEnding = function(ending) {
		switch(ending){
			case 1:
				level_01_hub.targetA_ending_info += "\nAppear to sound timid. \nDoes this sound like a hardened criminal?";
				break;
			case 2: //He doesn’t need anyone?\nWhat could he mean by that?
				level_01_hub.targetA_ending_info += "\nHe doesn’t need anyone?\nWhat could he mean by that?";
				break;
			case 3:
				level_01_hub.targetA_ending_info += "\nHe doesn’t know what he’s here for? \nIs he feigning ignorance?";
				break;
			case 4:
				level_01_hub.targetA_ending_info += "\nI thought most members of the mob used that…Maybe not.";
				break;
			case 5:
				level_01_hub.targetA_ending_info += "\nWas he expecting someone else?";
				break;
			case 6:
				level_01_hub.targetA_ending_info += "\nDid I blow my cover? Possibly but…";
				break;
			case 7:
				level_01_hub.targetA_ending_info += "\n";
				break;
			case 8:
				level_01_hub.targetA_ending_info += "\n";
				break;
			case 9:
				level_01_hub.targetA_ending_info += "\n";
				break;
				}
	}
	
	
	
	/***===================================***/
	/***         room.playAudio()          ***/
	/***===================================***/
	// Play special audio for this room
	level_01_A.playAudio = function() {
 		// Audio objects for this room
 		level_01_A.sound_background = new Audio("./Common/Sounds/scope_ambiance01.wav");
		level_01_A.sound_background.volume = 0.5;
		
		
		// Play and loop room ambiance
		level_01_A.sound_background.addEventListener('ended', function() {
			this.currentTime = 0;
			this.play();
		});
		level_01_A.sound_background.play();
		
		level_01_A.bgm = true;
	}
	
	/***=================================***/
	/***         room.stopAudio()        ***/
	/***=================================***/
	// Stop all audio emitting from this room
	level_01_A.stopAudio = function() {
		// Stop city ambiance
		level_01_A.sound_background.pause();
		level_01_A.sound_background.currentTime = 0;
		level_01_A.sound_background.removeEventListener('ended', function() {
			this.pause();
			this.currentTime = 0;
		});
		
		level_01_A.bgm = false;
	}
	
	/***===============================***/
	/***        Clear this room        ***/
	/***===============================***/
	// Remove from the world, un-draw sprites, etc...
	level_01_A.clear = function() {
		world.removeChild(level_01_A.image_background);
		world.removeChild(level_01_A.image_target_A);
		world.removeChild(level_01_A.image_scope);
		world.removeChild(level_01_A.ret);
		world.removeChild(level_01_A.button_call);
		world.removeChild(level_01_A.button_fire);
		world.removeChild(red_screen);
		while(active_sprites.length > 0)
			active_sprites.pop();
	}