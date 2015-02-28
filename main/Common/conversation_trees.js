var nodes = [];

function createNode(Q, ans1, call_1, ans2, call_2, ans3, call_3){
	var node = new Sprite();
	node.Q = new TextBox(Q);
		node.Q.font = "Courier";
		node.Q.color = "Red";
		node.Q.fontSize = 30;
		node.Q.x = 0;
		node.Q.y = 0;
		
	node.ans1 = new TextBox(ans1);
		node.ans1.font = "Courier";
		node.ans1.color = "Red";
		node.ans1.fontSize = 30;
		node.ans1.x = 0;
		node.ans1.y = 40;
		node.ans1.click = function() {
			if(call_1 >= 0) {
				node.clear();
				nodes[call_1].create();
			}else if(call_1 == -1) {
				node.clear();
			}else {
				node.clear();
				alert(call_1);
			}
		}

		
	node.ans2 = new TextBox(ans2);
		node.ans2.font = "Courier";
		node.ans2.color = "Red";
		node.ans2.fontSize = 30;
		node.ans2.x = 0;
		node.ans2.y = 80;
		node.ans2.click = function() {
			if(call_2 >= 0) {
				node.clear();
				nodes[call_2].create();
			}else if(call_2 == -1) {
				node.clear();
			}else {
				node.clear();
				alert(call_2);
			}
		}

	node.ans3 = new TextBox(ans3);
		node.ans3.font = "Courier";
		node.ans3.color = "Red";
		node.ans3.fontSize = 30;
		node.ans3.x = 0;
		node.ans3.y = 120;
		node.ans3.click = function() {
			if(call_3 >= 0) {
				node.clear();
				nodes[call_3].create();
			}else if(call_3 == -1) {
				node.clear();
			}else {
				node.clear();
				alert(call_3);
			}
		}

	node.create  = function(){
		world.addChild(node.Q);
		world.addChild(node.ans1);
		world.addChild(node.ans2);
		world.addChild(node.ans3);
		
		active_sprites.push(node.ans1);
		active_sprites.push(node.ans2);		
		active_sprites.push(node.ans3);	
	}
	node.clear  = function(){
		world.removeChild(node.Q);
		world.removeChild(node.ans1);
		world.removeChild(node.ans2);
		world.removeChild(node.ans3);
		
		active_sprites.pop();
		active_sprites.pop();
		active_sprites.pop();
	}
	nodes.push(node);
	return node;
}