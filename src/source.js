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
	is_wall:function(){
		return this.data == "|"
	}
} 

