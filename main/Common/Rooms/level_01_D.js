/***===============================***/
/***       Level 01: target D      ***/
/***===============================***/
var level_01_D = new Sprite();
	// Is this room's BGM playing?
	level_01_D.bgm = false;

	// Create this room
	level_01_D.create = function() {
		
		var sway_x = 0;
		var sway_y = 0;
		
		// This room's passive sprites
		level_01_D.image_background = new Sprite();
		level_01_D.image_background.width  = 1080;
		level_01_D.image_background.height = 720;
		level_01_D.image_background.x = 0;
		level_01_D.image_background.y = 0;
		level_01_D.image_background.image = Textures.load
			("./Common/Textures/Level 01/target d background.png");
		level_01_D.image_background.i = 0;
		level_01_D.image_background.update = function() {
			level_01_D.image_background.y = Math.sin(sway_x) * 20;
			sway_x += 0.009 * Math.random();
			level_01_D.image_background.x = Math.sin(sway_y) * 20;
			sway_y += 0.02 * Math.random();;
			if(sway_x >= 2*Math.PI) sway_x = 0;
			if(sway_y >= 2*Math.PI) sway_y = 0;
		}
			
		level_01_D.image_scope = new Sprite();
		level_01_D.image_scope.width  = 1080;
		level_01_D.image_scope.height = 720;
		level_01_D.image_scope.x = 0;
		level_01_D.image_scope.y = 0;
		level_01_D.image_scope.image = Textures.load
			("./Common/Textures/scope.png");
			
		// Target D Sprite
		level_01_D.image_target_D = new Sprite();
		level_01_D.image_target_D.width  = 32;
		level_01_D.image_target_D.height = 96;
		level_01_D.image_target_D.x = 0;
		level_01_D.image_target_D.y = 0;
		level_01_D.image_target_D.image = Textures.load
			("./Common/Textures/Level 01/target-D.png");
		// Target D Animation
		level_01_D.image_target_D.frameWidth  = 24;
		level_01_D.image_target_D.frameHeight = 64;
		level_01_D.image_target_D.frameCount  = 2;
		level_01_D.image_target_D.frameRate   = 2;
		level_01_D.image_target_D.addAnimation("idle",0,3); 
		level_01_D.image_target_D.update = function() {
			// Background sway
			level_01_D.image_target_D.x = level_01_D.image_background.x + 520;
			level_01_D.image_target_D.y = level_01_D.image_background.y + 360;
			// Animations
			level_01_D.image_target_D.animation = "idle";
		};
		
		// This room's active sprites
		level_01_D.ret = new TextBox("<< return  ");
		level_01_D.ret.font = "Courier";
		level_01_D.ret.fontSize = 30;
		level_01_D.ret.color = "#FFFFFF";
		level_01_D.ret.x = 0;
		level_01_D.ret.y = 690;
		level_01_D.ret.mouseOver = false;
		level_01_D.ret.bgColor = "#000000";
		level_01_D.ret.drawBG = true;
		level_01_D.ret.update = function() {
			if(level_01_D.ret.mouseOver) {
				level_01_D.ret.color = "#484848";
			}else {
				level_01_D.ret.color = "#FFFFFF";
			}
		}
		level_01_D.ret.click = function() {
			level_01_D.stopAudio();
			level_01_hub.sound_background.volume = 0.5;
			changeRoom(level_01_hub);
		}
		
		level_01_D.button_call = new TextBox("    <CALL PHONE>   ");
		level_01_D.button_call.font = "Courier";
		level_01_D.button_call.color = "Red";
		level_01_D.button_call.fontSize = 30;
		level_01_D.button_call.x = 375;
		level_01_D.button_call.y = 45;
		level_01_D.button_call.mouseOver = false;
		level_01_D.button_call.update = function() {
			if(level_01_D.button_call.mouseOver) {
				level_01_D.button_call.text = "<<< CALL PHONE >>>";
				level_01_D.button_call.color = "Lime";
			}else {
				level_01_D.button_call.text = "   <CALL PHONE>";
				level_01_D.button_call.color = "Red";
			}
		}
		level_01_D.button_call.click = function() {
			world.addChild(black_screen);
			level_01_D.startDialogue();
		}
		
		level_01_D.button_fire = new TextBox("<< FIRE >>");
		level_01_D.button_fire.font = "Courier";
		level_01_D.button_fire.fontSize = 35;
		level_01_D.button_fire.color = "Black";
		level_01_D.button_fire.x = 435;
		level_01_D.button_fire.y = 345;
		level_01_D.button_fire.visible = false;
		level_01_D.button_fire.update = function() {
			if(level_01_D.button_fire.mouseOver) {
				level_01_D.button_fire.visible = true;
				red_screen.visible = true;
			}else {
				level_01_D.button_fire.visible = false;
				red_screen.visible = false;
			}
		}
		level_01_D.button_fire.click = function() {
			level_01_D.stopAudio();
			world.removeChild(red_screen);
			changeRoom(level_01_end);
		}
		
		// Visible sprites at creation time
		world.addChild(level_01_D.image_background);
		world.addChild(level_01_D.image_target_D);
		world.addChild(red_screen);
		world.addChild(level_01_D.image_scope);
		world.addChild(level_01_D.ret);
		world.addChild(level_01_D.button_call);
		world.addChild(level_01_D.button_fire);
		
		// Active sprites at creation time
		active_sprites.push(level_01_D.ret);
		active_sprites.push(level_01_D.button_call);
		active_sprites.push(level_01_D.button_fire);
		
		if(!level_01_D.bgm)
			level_01_D.playAudio();
	}
	
	// Start the dialogue
	level_01_D.startDialogue = function() {
		world.removeChild(level_01_D.ret);
		world.removeChild(level_01_D.button_call);
		while(active_sprites.length > 0)
			active_sprites.pop();
		
//Start #0
var node = createNode
	("Woah. Its like my phone. And it started ringing. \nOh. I clicked the button already. Yo?\n", 
	"Are you waiting for your drop?\n", 1,
	"I ran into some trouble, I’ll be \nthere soon though.\n", 5,
	"Hi, I’m from the neighborhood watch \nhere in town, I was wondering \nif you could help me with some \nquestionsn", 9);
node.create();

//A #1
createNode
	("Drop? I ran out of drops, like, \nforever ago dude. I wouldn't mind \nhaving a couple of drops. How good \nare these drops man. I've had some \npretty fucking good drops. \nSent me flying, man.\n", 
	"So, like, bro. Where did you, like, \nget these drops?\n", 2,
	"So like… whats with these drops? What are \nthey about?\n", 3,
	"So are you waiting for anyone in particular?\n", 4);

//A1 #2
createNode
	("Brehhh, You can get them anywhere man. \nI have this hook up who like, always \njust brings me my drops wherever and whenever \nI want them man! It’s like, the \npostal service! I’m actually, like, expecting \na drop soon bro. Wait… dude… why are we \ntalking about drops again? \nAre you giving me a drop? Drops.\n",
	"End call\n", -1);

//A2 #3
createNode
	("Duuuude! You don’t know about them? \nThey’re like the tightest shit evaaaa. \nLike, I dont even know whats in them! \nAlls I know is that they are the best thing \nI’ve had since, like… that one time \nI took a roadtrip down to like Santa… \nSanta… Santa something.... \nShit when was that? Breh. You need \nthese drops. We need to go get some \nfucking drops. I need these drops.\n",
	"End call\n", -2);

//A3 #4
createNode
	("Me? Naaaaaa I’m good man I’m good. Like, I have everything i need just where I am. Other people just make things, like, complicated. I don’t like, like, complications man. Ya feel me breh? Yeah.","End call\n", -3);

//B #5
createNode("Woah man I’m not expecting no one here. Like… hold up a \mbit, man. Give me some time… Let me take this all in. \nThen, like, then… Then ill go find you man. Don’t you \nworry about that. I have everything you could possibly \mneed to keep you going for the night, bro.\n", 
	"What do you have?\n", 6,
	"Like, you were expecting me weren’t you?\n", 7,
	"Do you know who I am?\n", 8);

//B1 #6
createNode("Only the finest product in this here city. I swear every time I take some of this it feels like I’m walking with, like, that one guy… In like the sky. You know. The one with the book about him. What’s his name….Like… Whatever man. I have anything you want. Just drop on by… just later. Not now. I’m busy now….","End call\n", -4);

//B2 #7
createNode("Bro. I wasn’t expecting anybody. All I was doing was minding my own business here. I’m having a little fun, ya know? I’m not really in the state of mind to be conversationaling with people of you, comprende? Yeah you do. Next time though… I’ll make sure to get you whatever you want though...","End call\n", -5);

//B3 #8
createNode("Yeah of course I do man! You’re, like… That one guy I met the other day. On the… no… It was near the, like, uhh…. Yeah. You’re that one dude I met at that party in…. That one chick’s place….. Bro I’m drawing a blank. I’ll just ask that chick again. Yeah. I’ll catch you later I’m off to go ask her who you are.","End call\n", -6);

//C #9
createNode("Nuh uh! Noooo Way! I’m, like, not helping you watch anything man. Don’t you, like, get that you’re part of the problem? You are the, like, long arm of the law just like drying to be a downer on us! Like, What would I even be watching anyways?", 
"Well you would be watching out for anything you might consider out of place. Perhaps a deal of some sort going down. Like someone out of place. ", 10,
"Well… Is that what you want to go with? I feel like you might have something to hide...", 11,
"You know what? You’re right. I didn’t want to do this anyways. Agh but first I need to at least finish this shift, mind helping out? ……. Bro.", 12);

//C1 #10
createNode("I don’t know. I see deals going down all the time! I mean they’re usually the one’s giving me stuff but, like, I see them. In, like, first person bro. Kind of like those games with the guns. Where you look at other people with their eyes. Yeah…. I’ll tell you the next time I ever get any drops okay? Alright. Catch you then.","End call\n", -7);

//C2 #11
createNode("Me? Hide anything? Na man. I’m an open book. You know. Like those books with the red dog. Or, like, the ones with the pop ups! Yeah man… Those are my favorite books to read whenever I’m H….. nice try mister Night Stalker… Trying to get me to admit to illegal activities. Nice try!","End call\n", -8);

//C3 #12
createNode("Right on, Bro! So, like, I know this area pretty well And like… I haven’t seen anything today from where i’ve been. So, like, hurry up and get off that chain of yours and HMU if you’re ever in need of anything…. you know. Like, fun.","End call\n", -9);
	}
	
	// End the dialogue
	level_01_D.endDialogue = function(ending) {
		world.removeChild(black_screen);
		
		world.addChild(level_01_D.ret);
		world.addChild(level_01_D.button_call);
		active_sprites.push(level_01_D.ret);
		active_sprites.push(level_01_D.button_call);
		active_sprites.push(level_01_D.button_fire);
		
		alert("This is the ending you chose: " + ending);
	}
	
	/***===================================***/
	/***         room.playAudio()          ***/
	/***===================================***/
	// Play special audio for this room
	level_01_D.playAudio = function() {
 		// Audio objects for this room
 		level_01_D.sound_background = new Audio("./Common/Sounds/scope_ambiance01.wav");
		level_01_D.sound_background.volume = 0.5;
		
		
		// Play and loop room ambiance
		level_01_D.sound_background.addEventListener('ended', function() {
			this.currentTime = 0;
			this.play();
		});
		level_01_D.sound_background.play();
		
		level_01_D.bgm = true;
	}
	
	/***=================================***/
	/***         room.stopAudio()        ***/
	/***=================================***/
	// Stop all audio emitting from this room
	level_01_D.stopAudio = function() {
		// Stop city ambiance
		level_01_D.sound_background.pause();
		level_01_D.sound_background.currentTime = 0;
		level_01_D.sound_background.removeEventListener('ended', function() {
			this.pause();
			this.currentTime = 0;
		});
		
		level_01_D.bgm = false;
	}
	
	// Clear this room
	level_01_D.clear = function() {
		world.removeChild(level_01_D.image_background);
		world.removeChild(level_01_D.image_target_D);
		world.removeChild(level_01_D.image_scope);
		world.removeChild(level_01_D.ret);
		world.removeChild(level_01_D.button_call);
		world.removeChild(level_01_D.button_fire);
		world.removeChild(level_01_D.red_screen);
		while(active_sprites.length > 0)
			active_sprites.pop();
	}