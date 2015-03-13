/***============================================***/
/***===          Conversation Tree           ===***/
/***============================================***/

/**  This file creates a "node" array that       **/
/**  contains a series of dialogue nodes. These  **/
/**  nodes are initialized upon createNode()'s   **/
/**  call time. The array can by traversed upon  **/
/**  clicking on the answer text box that will   **/
/**  draw the node corresponding to its index... **/

/**  You must call the first node's create()     **/
/**  function in the instance of where you are   **/
/**  starting the dialogue. The dialogues' pre   **/
/**  and post-conditions are dependant on each   **/
/**  room's specific startDialogue() and         **/
/**  endDialogue() function...                   **/

// Q:      This is the first string to be displayed
// ans#:   This is the string to be displayed for an answer
// call_#: This is the index to which ans# will send you to

var nodes = [];

function createNode(Q, ans1, call_1, ans2, call_2, ans3, call_3, ans4, call_4){
	var space_y = 150;
	var space_x = 0;
	
	var colorQ = "White";
	var colorA = "White";
	var colorH = "Lime";
	
	var node = new Sprite();
	node.Q = new TextBox(Q);
		node.Q.font = "Courier";
		node.Q.color = colorQ;
		node.Q.fontSize = 20;
		node.Q.x = 250;
		node.Q.y = 50;
		textType(node.Q, 2);

	node.ans1 = new TextBox(ans1);
		node.ans1.font = "Courier";
		node.ans1.color = colorA;
		node.ans1.fontSize = 20;
		node.ans1.x = node.Q.x;
		node.ans1.y = node.Q.y + space_y;
		node.ans1.update = function() {
			if(node.ans1.mouseOver) {
				node.ans1.color = colorH;
			}else {
				node.ans1.color = colorA;
			}
		}
		node.ans1.click = function() {
			if(call_1 >= 0) {
				node.clear();
				nodes[call_1].create();
			}else if(call_1 < 0) {
				node.clear();
				room_manager.curr_room.endDialogue(call_1 * -1);
			}
		}
		
	node.ans2 = new TextBox(ans2);
		node.ans2.font = "Courier";
		node.ans2.color = colorA;
		node.ans2.fontSize = 20;
		node.ans2.x = node.Q.x;
		node.ans2.y = node.ans1.y + space_y;
		node.ans2.update = function() {
			if(node.ans2.mouseOver) {
				node.ans2.color = colorH;
			}else {
				node.ans2.color = colorA;
			}
		}
		node.ans2.click = function() {
			if(call_2 >= 0) {
				node.clear();
				nodes[call_2].create();
			}else if(call_2 < 0) {
				node.clear();
				room_manager.curr_room.endDialogue(call_2 * -1);
			}
		}

	node.ans3 = new TextBox(ans3);
		node.ans3.font = "Courier";
		node.ans3.color = colorA;
		node.ans3.fontSize = 20;
		node.ans3.x = node.Q.x;
		node.ans3.y = node.ans2.y + space_y;
		node.ans3.update = function() {
			if(node.ans3.mouseOver) {
				node.ans3.color = colorH;
			}else {
				node.ans3.color = colorA;
			}
		}
		node.ans3.click = function() {
			if(call_3 >= 0) {
				node.clear();
				nodes[call_3].create();
			}else if(call_3 < 0) {
				node.clear();
				room_manager.curr_room.endDialogue(call_3 * -1);
			}
		}
	
	node.ans4 = new TextBox(ans4);
		node.ans4.font = "Courier";
		node.ans4.color = colorA;
		node.ans4.fontSize = 20;
		node.ans4.x = node.Q.x;
		node.ans4.y = node.ans2.y + space_y;
		node.ans4.update = function() {
			if(node.ans4.mouseOver) {
				node.ans4.color = colorH;
			}else {
				node.ans4.color = colorA;
			}
		}
		node.ans4.click = function() {
			if(call_3 >= 0) {
				node.clear();
				nodes[call_3].create();
			}else if(call_3 < 0) {
				node.clear();
				room_manager.curr_room.endDialogue(call_3 * -1);
			}
		}

	node.create  = function() {	
		world.addChild(node.Q);
		world.addChild(node.ans1);
		world.addChild(node.ans2);
		world.addChild(node.ans3);
		world.addChild(node.ans4);
		
		active_sprites.push(node.ans1);
		active_sprites.push(node.ans2);		
		active_sprites.push(node.ans3);	
		active_sprites.push(node.ans4);
	}

	node.clear  = function() {
		world.removeChild(node.Q);
		world.removeChild(node.ans1);
		world.removeChild(node.ans2);
		world.removeChild(node.ans3);
		world.removeChild(node.ans4);
		
		active_sprites.pop();
		active_sprites.pop();
		active_sprites.pop();
		active_sprites.pop();
	}
	
	clear_array = function() {
		nodes = [];
	}
	nodes.push(node);
	return node;
}

function convoTextType(the_object, the_wait) {
	the_object.visible = false;
	the_object.spawn_em = false;
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
		if(curr >= the_string.length+1) {
			the_object.spawn_em = true;
		}
		if(the_object.spawn_em)
			alert("HUH?");
	}
}