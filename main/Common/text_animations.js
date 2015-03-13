/***==========================================***/
/***  String type text animation functions    ***/
/***==========================================***/

// HOW TO USE
/* textType([TextBox object], [int])
 * Takes in a Brine.js TextBox object, and in real-time 
 * changes the given TextBox object's text string to
 * update one char at a time. It also takes an int that
 * represents the amount of delay you want between chars.
 * simply call this function with a TextBox before you 
 * push a that TextBox onto the world to apply animation.
 */
 
function textType(the_object, the_wait) {
	the_object.visible = false;
	var the_string = the_object.text;
	var curr = 0;
	var wait = the_wait; 
	the_object.update = function() {
		if(curr < the_string.length+1 && wait == 0) {
			the_object.text = the_string.substring(0, curr);
			curr++;
			wait = the_wait;
			the_object.visible = true;
		}else {
			wait--;
		}
	}
}