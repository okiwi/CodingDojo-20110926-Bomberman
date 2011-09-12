BombermanTest = TestCase("Bomberman test");

BombermanTest.prototype.testStartGame = function() {
	
  var bomber = new BomberMan();
  assertEquals("Hello Bomber World!", bomber.banner());
};

BombermanTest.prototype.testMap = function() {

	var map = new Map(
		"ABCDEF",
		3,2);
	assertEquals( map.width, 3 );
 	assertEquals( map.height, 2 );
	assertEquals( map.getTile(0, 0).data, "A");
	assertEquals( map.getTile(1, 0).data, "B");
	assertEquals( map.getTile(2, 1).data, "F");
}

BombermanTest.prototype.testEntities = function() {
	var map = new Map(
		"|BCDEF",
		3,2);
	assertEquals( map.getTile(0,0).is_wall(), true);
	assertEquals( map.getTile(0,1).is_wall(), false);
}

