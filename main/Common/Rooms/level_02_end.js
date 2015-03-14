/***========================================================***/
/***    This the ending screen for Level 01: "Shadowman"    ***/
/***========================================================***/
/* Here should go whatever is supposed to happen at the completion
 * of level 01, as of right now, that can be accomplished by 
 * "firing" upon any previous target...
 */

var level_02_end = new Sprite(); 

	/***==============================***/
	/***         room.create()        ***/
	/***==============================***/
	// What to do at creation time
	level_02_end.create = function() {
		// Stop the audio coming from level 01
		level_02_hub.stopAudio();
		
		switch(level_02_hub.ending_state){
			case 1:
				level_02_end.string = "MAN FOUND DEAD IN A DITCH\n" +
					"A ways away from the city a grizzly scene \nwas discovered....\n"+
					"... the man was suspected to have been dead for \nat least a week and died to what seems to be \na high calibur gunshot wound...\n" +
					"... the body was later confirmed to be Raul Ramirez.... \n" +
					"...\"My babies were good kids. They only worried \nabout their family and not for themselves. \nThey are not the problem here.\" said his mother, \nGloria Ramirez. Gloria is no stranger to loss...\n" +
					"... recently loss her other son to gang violence...\n"+
					"...when she was diagnosed with terminal cancer...\n" +
					"\n\n In other news...";
				break;
			case 2:
				level_02_end.string = "POLICE DIRECTED TO SHALLOW GRAVE\n"+
				"An unnamed source called the police last Sunday. \nThis source, who is now in witness protection, \nled police to a grave...\n" + 
				"... the body was later confirmed to be \nJesus \"Chuy\" Garcia...\n" +
				"He has been in and out of prison since he was 13.... \nhaving lost his father and mother at a young age...\n" +
				"The source is now complying with police to bring down \na gun smuggling ring.... while he awaits his own trial.\n" +
				"\n\n In other news...";
				break;
			case 3:
				correctlyshot += 1;
				level_02_end.string = "MAN SHOT IN HIS OWN HOME\n" +
				"At 3 PM, Police were called to Juan Sanchez \nby a distraught father, Lazarus Sanchez...\n"+
				"Juan Sanchez was a beloved member of the community \nalong with his father...\n" +
				"...Autopsy reports that he was confirmed to \nbe dead for at least half an hour...\n" +
				"... foul play seems to be involved and the prime \nsuspect is Lazarus himself...\n" + 
				"\"I did not lay a finger on my son. I loved \nhim no matter what he did. \nI supported him through the toughest of times. \nI am appalled I am even considered...\n" +
				"... only God will be the judge.\"\n Many people are coming forward and saying \nthat this does not fit Lazarus at all." + 
				"Recently \nJuan's character has been called into question...\n" +
				" In other news...";
				break;
			case 4:
				level_02_end.string = "FATHER SHOT WHILE VISITING SON\n"+
				"At 3:20 police were called to Juan Sanchez home... \nIt is here they found the body Lazarus Sanchez...\n"+
				"Juan Sanchez reported that he had just gotten back \nhome moments earlier and saw his father...\n" +
				"Lazarus, by all intents and purposes, was a good man \nwho attended Saint Mary's church every Sunday... \n" +
				"In his will he left a vast amount of his \npersonal money to this establishment\n" +
				"Upon hearing this police informants say Juan Sanchez \nwas outraged.\n" +
				"...Ongoing investigation is leading no results as Juan \nSanchez is still the number one suspect...\n" +
				"\n\n In other news...";
				break;
			case 5:
				level_02_end.string = "BODY DISCOVERED AMONGST WASTE\n"+
				"...the dump was a perfect place to hide a body. \nThe stench in the area helped hide...\n" +
				"The autopsy came in and it was confirmed...\nthe identity of this man is...\n" +
				"...He lived in..... 50 minutes away from here.\n" +
				"It is unclear why his body was found here \nbut it is believed he had ties to an \nup and coming gang who goes by the Syndicate...\n" +
				"\n\n In other news...\n" +
				"...Body count between the Syndicate members \nand Los Hermanos rise... \n...seems to be full on war.\n";
				break;
		}
				
		
		/***==============================***/
		/***       Passive sprites        ***/
		/***==============================***/
		// Sprites to be drawn, but without interactivity
		level_02_end.some_text = new TextBox(level_02_end.string);
		level_02_end.some_text.font = "Courier";
		level_02_end.some_text.color = "White";
		level_02_end.some_text.fontSize = 30;
		level_02_end.some_text.x = 100;
		level_02_end.some_text.y = 150;
		textType(level_02_end.some_text, 2);
		
		level_02_end.white_screen = new Sprite();
		level_02_end.white_screen.width  = 1080;
		level_02_end.white_screen.height = 720;
		level_02_end.white_screen.do_update = true;
		level_02_end.white_screen.image = Textures.load("./Common/Textures/white box.png");
		level_02_end.white_screen.update = function() {
			if(level_02_end.white_screen.do_update) {
				if(level_02_end.white_screen.alpha > 0.00)
					level_02_end.white_screen.alpha -= 0.01;
				else {
					world.addChild(level_02_end.some_text);
					world.addChild(level_02_end.button_continue);
					active_sprites.push(level_02_end.button_continue);
					level_02_end.white_screen.do_update = false;
				}
			}
		}
		
		/***=== End of passive sprites ===***/
		
		/***==============================***/
		/***        Active sprites        ***/
		/***==============================***/
		// Sprites to be available to input_manager
		level_02_end.button_continue = new TextBox("continue >>");
		level_02_end.button_continue.font = "Courier";
		level_02_end.button_continue.color = "White";
		level_02_end.button_continue.fontSize = 30;
		level_02_end.button_continue.x = 877;
		level_02_end.button_continue.y = 690;
		level_02_end.button_continue.update = function() {
			if(level_02_end.button_continue.mouseOver) {
				level_02_end.button_continue.color = "#484848";
			}else {
				level_02_end.button_continue.color = "White";
			}
		}
		level_02_end.button_continue.click = function() {
			changeRoom(final_screen);
		}
		
		/***===     End of active sprites   ===***/
		
		/***===================================***/
		/***            Room audio             ***/
		/***===================================***/
		// This room's audio objects
		sound_shot.play();
		
		/***===================================***/
		/***          World allocating         ***/
		/***===================================***/
		// Visible sprites at creation time
		world.addChild(level_02_end.white_screen);
		
		// Active sprites at creation time
	}
	
	/***===============================***/
	/***        Clear this room        ***/
	/***===============================***/
	// Remove from the world, un-draw sprites, etc...
	level_02_end.clear = function() {
		world.removeChild(level_02_end.some_text);
		world.removeChild(level_02_end.button_continue);
		
		while(active_sprites.length > 0)
			active_sprites.pop();
	}