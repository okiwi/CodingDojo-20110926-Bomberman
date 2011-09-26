/*
var safeToString = Array.prototype.toString; 
Array.prototype.toString = function(){
	return "["+safeToString.call(this)+"]";
}*/
function BomberMan(){
}

BomberMan.prototype = {
	banner:function(){
		return "Hello Bomber World!";
	}
};

function Map( data, width, height )
{
	this.data = data;
	this.grid = new Array(height);
	for(var y = 0; y < height; y++) {
		this.grid[y] = new Array(width);
		for(var x = 0; x < width ; x++) {
			this.grid[y][x] = new Tile(data.substr(y*width + x, 1));
		}
	}
	
	this.width = width;
	this.height = height;
} 

Map.prototype = {
	getTile:function( x, y){
		return this.grid[y][x];
	}
}

function Tile(data){
	this.data = data;
}

Tile.prototype = {
	isWall:function(){
		return this.data == "#"
	},

	isSpawn:function(){
		return this.data == "x"
	},
} 

function Scene(){
}
Scene.prototype = {
	setMap:function(map){
		this.map = map;

		var findSpawnPoints = function(map){
			var spawnPoints = [];		
			for( var y = 0; y < map.height; y++ )
			{
				for( var x = 0; x < map.width; x++ )
				{
					var tile = map.getTile(x, y);
					if( tile.isSpawn() )
						spawnPoints.push( { 'x':x, 'y': y } );
				}
			}
			return spawnPoints; 
		}

		this.spawnPoints = findSpawnPoints(map);
	},
	spawn:function(man){
	    man.position = this.spawnPoints.shift();
	},
};


function Man(){
}
Man.prototype = {
	position:null
};


