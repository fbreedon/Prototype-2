/***=================================***/
/*** Global variables initialization ***/
/***=================================***/

// Use 2D context with Brine.js
use2D = true;
world.width  = 1080;
world.height = 720;
world.image  = Textures.load("./Common/Textures/black box.png");
		
var correctlyshot = 0;
		
var black_screen = new Sprite();
black_screen.width  = 1080;
black_screen.height = 720;
black_screen.alpha  = 0.30;
black_screen.image  = Textures.load("./Common/Textures/black box.png");

var red_screen = new Sprite();
red_screen.width  = 1080;
red_screen.height = 720;
red_screen.alpha  = 0.30;
red_screen.visible = false;
red_screen.image  = Textures.load("./Common/Textures/red box.png");

/***============================***/
/***   Global audio objects     ***/
/***============================***/
sound_ominous = new Audio("./Common/Sounds/ominous.wav");
sound_ominous.volume = 0.7;

sound_shot = new Audio("./COmmon/Sounds/shot.wav");

sound_zoom = new Audio("./Common/Sounds/zoom.wav");
sound_zoom.volume = 0.7;

sound_page = new Audio("./Common/Sounds/page turn.mp3");

sound_write = new Audio("./Common/Sounds/note write.mp3");

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
/* Rooms are individual files declaring sprite objects
 * with their own static and private variables. */


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








