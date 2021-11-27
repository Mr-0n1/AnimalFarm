var village = document.getElementById("farm");
var area = village.getContext("2d");
//pig event
document.addEventListener("keydown", pig_movement);

var pigX = 200;
var pigY = 200;
var cowX = new Array;
var cowY = new Array;
var chickenX = new Array();
var chickenY = new Array();

var map = {
    url: "tile.png",
    isLoad: false
};

var cow = {
    url: "vaca.png",
    isLoad: false
};

var chicken = {
    url: "pollo.png",
    isLoad: false
};

var pig = {
    url: "cerdo.png",
    isLoad: false
};

var keys = {
    UP: 38,
    DOWN: 40,
    LEFT: 37,
    RIGHT: 39
};

map.image = new Image();  // image object
map.image.src = map.url;
map.image.addEventListener("load", load_map);

cow.image = new Image();
cow.image.src = cow.url;
cow.image.addEventListener("load", load_cow);

chicken.image = new Image();
chicken.image.src = chicken.url;
chicken.image.addEventListener("load", load_chicken);

//load pig
pig.image = new Image();
pig.image.src = pig.url;
pig.image.addEventListener("load", load_pig);


function load_map(){
    map.isLoad = true;
    draw_image();

}

function load_cow(){
    cow.isLoad = true;
    hold_pos();
}

function load_chicken(){
    chicken.isLoad = true;
    hold_pos();
}

function load_pig(){
    pig.isLoad = true;
    draw_image();
}

function hold_pos(){
    if(cow.isLoad){
		var cow_count = random_num(1, 10);
		for(var i = 0; i< cow_count; i++)
		{
			var x = random_num(0, 7); 
            var y = random_num(0, 7);
            x = x * 60;
            y = y * 60;
			cowX[i] = x;
			cowY[i] = y;
		}
	}

    if (chicken.isLoad){
        chicken_count = random_num(1, 5);
        for (var i = 0; i < chicken_count; i ++){
            var x = random_num(0, 7); 
            var y = random_num(0, 7);
            x = x * 60;
            y = y * 60;
            chickenX[i] = x;
            chickenY[i] = y;
        }
    }
    draw_image();
}

function draw_image(){
    if(map.isLoad){
        area.drawImage(map.image, 0, 0); //image object and xy coordinate to start
    }

    if(cow.isLoad){
        for (var i = 0; i < 10; i++){
            area.drawImage(cow.image, cowX[i], cowY[i]); //image object and xy coordinate to start
        }
    }

    if (chicken.isLoad){
        for (var i = 0; i < 10; i++){
            area.drawImage(chicken.image, chickenX[i], chickenY[i]); //image object and xy coordinate to start
        }
    }

    if (pig.isLoad){
        area.drawImage(pig.image, pigX, pigY);
    }

}

function pig_movement(event){
    var movement = 10;
    switch(event.keyCode){
        case keys.UP:
            pigY = pigY - movement;
            draw_image(pigX, pigY);
            break;
        case keys.DOWN:
            pigY = pigY + movement;
            draw_image(pigX, pigY);
        break;
        case keys.LEFT:
            pigX = pigX - movement;
            draw_image(pigX, pigY);   
        break;
        case keys.RIGHT:
            pigX = pigX + movement;
            draw_image(pigX, pigY);   
        break;
    }
}

function random_num(min, max) {
    var result = Math.floor(Math.random() * (max - min + 1)) + min;  //genera un numero aleatorio entre el min y el max.
    return result;
}