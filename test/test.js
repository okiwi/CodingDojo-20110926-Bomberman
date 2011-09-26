BombermanTest = TestCase("Bomberman test");

var sampleMap = "##x##" +
				"#   #" + 
				"x # x" + 
				"#   #" + 
				"##x##";	

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
		sampleMap,
		5,5);
	assertEquals( map.getTile(0,0).isWall(), true);
	assertEquals( map.getTile(1,1).isWall(), false);
	assertEquals( map.getTile(0,2).isSpawn(), true);
	assertEquals( map.getTile(0,1).isSpawn(), false);
}

BombermanTest.prototype.testSpawnMenOnSpawnPoints = function() {
	var scene = new Scene();
	scene.setMap(new Map(sampleMap, 5, 5));

	var man = new Man("guillaume")
	scene.spawn(man);

	assertEquals(man.position, {x: 2, y: 0});

	var stephane = new Man("stephane")
	scene.spawn(stephane);

	assertEquals(stephane.position, {x: 0, y: 2});
}



