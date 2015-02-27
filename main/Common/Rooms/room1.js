var credit_screen = new Sprite();
	// Create this room
	credit_screen.create = function() {
	   
	}
	credit_screen.clear = function() {
		world.removeChild(credit_screen.text);
		world.removeChild(credit_screen.ret);
		while(active_sprites.length > 0)
			active_sprites.pop();
	}