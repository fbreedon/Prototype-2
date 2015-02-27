/***=================================***/
/*** Global variables initialization ***/
/***=================================***/

// Use 2D context with Brine.js
use2D = true;
world.width = 1080;
world.height = 720;
world.image = Textures.load
			("./Common/Textures/black box.png");

/***===============================***/
/*** Global objects initialization ***/
/***===============================***/

// Create global sprite array
var active_sprites = new Array();

// Create an input manager for this room
// It is dependant on an event listener
var input_manager = new Sprite();
	// Input manager's mouse over call
	input_manager.update = function() {
		// For each active sprite in room...  
		for(var sprite in active_sprites){
			sprite = active_sprites[sprite];
			// If we are hovering over that sprite...
			if(checkSprite(sprite, gInput.mouse.x, gInput.mouse.y)) {
				// Set that sprites mouse over value 
				sprite.mouseOver = true;
			}else {
				sprite.mouseOver = false;
			}
		}
	}
	
	// Input manager's mouse down call
	input_manager.onMouseDown = function() {
		// For each active sprite in room...  
		for(var sprite in active_sprites){
			sprite = active_sprites[sprite];
			// If we are clicking on that sprite...
			if(checkSprite(sprite, gInput.mouse.x, gInput.mouse.y)) {
				// Do that sprite's on click function...
				sprite.click();
				break;
			}
		}
	}

// Create room manager
var room_manager = new Sprite();
	// curr_room shall point at the corresponding room sprite
	room_manager.curr_room;
	
/***=============================***/
/***     Room initialization     ***/
/***=============================***/

/***===   "Title Screen"   ===***/
var title_screen = new Sprite();
	// Create this room
	title_screen.create = function() {
		// This room's passive sprites
		title_screen.image_background = new Sprite();
		title_screen.image_background.width  = 1080;
		title_screen.image_background.height = 720;
		title_screen.image_background.x = 0;
		title_screen.image_background.y = 0;
		title_screen.image_background.image = Textures.load
			("./Common/Textures/Title/title background.png");
		title_screen.image_background.alpha = title_screen.image_alpha;
			
		title_screen.data= new TextBox
			("iDeek v.0.1");
		title_screen.data.font = "Courier";
		title_screen.data.fontSize = 20;
		title_screen.data.color = "#FFFFFF";
		title_screen.data.x = 930;
		title_screen.data.y = 700;
		
		// This room's active sprites
		title_screen.button_start = new TextBox("<< Start >>");
		title_screen.button_start.font  = "Courier";
		title_screen.button_start.fontSize  = 30;
		title_screen.button_start.color = "#FFFFFF";
		title_screen.button_start.x = 420;
		title_screen.button_start.y = 360;
		title_screen.button_start.mouseOver = false;
		title_screen.button_start.update = function() {
			if(title_screen.button_start.mouseOver) {
				title_screen.button_start.color = "#484848";
			}else {
				title_screen.button_start.color = "#FFFFFF";
			}
		}
		title_screen.button_start.click = function() {
			changeRoom(intro_screen);
		}
		
		title_screen.button_credit = new TextBox("<< Credits >>");
		title_screen.button_credit.font  = "Courier";
		title_screen.button_credit.fontSize  = 30;
		title_screen.button_credit.color = "#FFFFFF";
		title_screen.button_credit.x = 405;
		title_screen.button_credit.y = 400;
		title_screen.button_credit.mouseOver = false;
		title_screen.button_credit.update = function() {
			if(title_screen.button_credit.mouseOver) {
				title_screen.button_credit.color = "#484848";
			}else {
				title_screen.button_credit.color = "#FFFFFF";
			}
		}
		title_screen.button_credit.click = function() {
			changeRoom(credit_screen);
		}
		
		// Visible sprites at creation time
		world.addChild(title_screen.image_background);
		world.addChild(title_screen.data);
		world.addChild(title_screen.button_start);
		world.addChild(title_screen.button_credit);
		
		// Active sprites at creation time
		active_sprites.push(title_screen.button_start);	
		active_sprites.push(title_screen.button_credit);	
	}
	
	// Clear this room
	title_screen.clear = function() {
		world.removeChild(title_screen.image_background);
		world.removeChild(title_screen.data);
		world.removeChild(title_screen.button_start);
		world.removeChild(title_screen.button_credit);
		while(active_sprites.length > 0)
			active_sprites.pop();
	}
	
/***===   "Credits screen"   ===***/
var credit_screen = new Sprite();
	// Create this room
	credit_screen.create = function() {
		// This room's passive sprites
		credit_screen.text = new TextBox
			("iDeek consists of four individuals:\n"+
			 "            Rene Isais\n"+
			 "            Hayk Manvelyan\n"+
			 "           Franz Breedon\n"+
			 "           Chaiz Tuimoloau\n");
		credit_screen.text.font = "Courier";
		credit_screen.text.fontSize = 30;
		credit_screen.text.color = "#FFFFFF";
		credit_screen.text.x = 200;
		credit_screen.text.y = 100;
		
		// This room's active sprites
		credit_screen.ret = new TextBox("<< Return  ");
		credit_screen.ret.font = "Courier";
		credit_screen.ret.fontSize = 30;
		credit_screen.ret.color = "#FFFFFF";
		credit_screen.ret.x = 0;
		credit_screen.ret.y = 690;
		credit_screen.ret.mouseOver = false;
		credit_screen.ret.bgColor = "#000000";
		credit_screen.ret.drawBG = true;
		credit_screen.ret.update = function() {
			if(credit_screen.ret.mouseOver) {
				credit_screen.ret.color = "#484848";
			}else {
				credit_screen.ret.color = "#FFFFFF";
			}
		}
		credit_screen.ret.click = function() {
			changeRoom(title_screen);
		}
		
		
		// Visible sprites at creation time
		world.addChild(credit_screen.text);
		world.addChild(credit_screen.ret);
		
		// Active sprites at creation time
		active_sprites.push(credit_screen.ret);
	}
	
	// Clear this room
	credit_screen.clear = function() {
		world.removeChild(credit_screen.text);
		world.removeChild(credit_screen.ret);
		while(active_sprites.length > 0)
			active_sprites.pop();
	}
	
/***===   "Intro screen"   ===***/
var intro_screen = new Sprite();
	// Create this room
	intro_screen.create = function() {
		// This room's passive sprites
		intro_screen.text = new TextBox
			("This is the prototype for \"Outline\"\n\n" +
			 "In this demo we are showcasing one\n"+
			 "scenario still in development\n\n"+
			 "\"Outline\" is an atmospheric decision making\n"+
			 "game based on ambiguity. The images in this game\n"+
			 "depict a lone individual who manipulates the\n"+
			 "fate of the unbeknownst...");
		intro_screen.text.font = "Courier";
		intro_screen.text.fontSize = 30;
		intro_screen.text.color = "#FFFFFF";
		
		// This room's active sprites
		intro_screen.next = new TextBox("Continue >>");
		intro_screen.next.font = "Courier";
		intro_screen.next.fontSize = 30;
		intro_screen.next.color = "#FFFFFF";
		intro_screen.next.x = 880;
		intro_screen.next.y = 690;
		intro_screen.next.mouseOver = false;
		intro_screen.next.bgColor = "#000000";
		intro_screen.next.drawBG = true;
		intro_screen.next.update = function() {
			if(intro_screen.next.mouseOver) {
				intro_screen.next.color = "#484848";
			}else {
				intro_screen.next.color = "#FFFFFF";
			}
		}
		
		intro_screen.ret = new TextBox("<< Return  ");
		intro_screen.ret.font = "Courier";
		intro_screen.ret.fontSize = 30;
		intro_screen.ret.color = "#FFFFFF";
		intro_screen.ret.x = 0;
		intro_screen.ret.y = 690;
		intro_screen.ret.mouseOver = false;
		intro_screen.ret.bgColor = "#000000";
		intro_screen.ret.drawBG = true;
		intro_screen.ret.update = function() {
			if(intro_screen.ret.mouseOver) {
				intro_screen.ret.color = "#484848";
			}else {
				intro_screen.ret.color = "#FFFFFF";
			}
		}
		intro_screen.ret.click = function() {
			changeRoom(title_screen);
		}
		
		
		// Visible sprites at creation time
		world.addChild(intro_screen.text);
		world.addChild(intro_screen.ret);
		world.addChild(intro_screen.next);
		
		// Active sprites at creation time
		active_sprites.push(intro_screen.ret);
		active_sprites.push(intro_screen.next);
	}
	
	// Clear this room
	intro_screen.clear = function() {
		world.removeChild(intro_screen.text);
		world.removeChild(intro_screen.ret);
		world.removeChild(intro_screen.next);
		while(active_sprites.length > 0)
			active_sprites.pop();
		
	}


/***============================***/
/*** Brine world initialization ***/
/***============================***/

// Adding initial children to Brine's world
world.addChild(room_manager);
world.addChild(input_manager);

// Set the first room in the game
room_manager.curr_room = title_screen;
room_manager.curr_room.create();

// Event listeners to be used in the game always
gInput.addMouseDownListener(input_manager);

/***==========================***/
/***      Game functions      ***/
/***==========================***/

// Changes rooms
function changeRoom(room) {
	room_manager.curr_room.clear();
	room_manager.curr_room = room;
	room_manager.curr_room.create();
}

// Returns true if the mouse is over a sprite.
function checkSprite(sprite, x, y){
  var min_x = sprite.x;
  var max_x = sprite.x + sprite.width;
  var min_y = sprite.y;
  var max_y = sprite.y + sprite.height;
  var mx = x;
  var my = y;
  
  if(mx >= min_x && mx <= max_x && my >= min_y && my <= max_y){
    return true;
  }
  return false;
}








