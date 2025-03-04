//Create a reference for canvas 
canvas = document.getElementById('myCanvas');
ctx = canvas.getContext("2d");
//Give specific height and width to the car image
greencar_image_width = 75
greencar_image_height = 100
background_image = "parkingLot.jpg";
greencar_image = "car2.png";

//Set initial position for a car image.
greencar_image_x = 5
greencar_image_y = 225
function add() {
	bg_imgTag = new Image()
	bg_imgTag.onload = uploadBackground
	bg_imgTag.src = background_image

	greencar_imgTag = new Image()
	greencar_imgTag.onload = uploadBackground
	greencar_imgTag.src = greencar_image
}

function uploadBackground() {
	//Define function ‘uploadBackground’
ctx.drawImage(bg_imgTag, 0, 0, canvas.width, canvas.height)
}

function uploadgreencar() {
	//Define function ‘uploadgreencar’.
ctx.drawImage(greencar_imgTag, greencar_image_x, greencar_image_y, greencar_image_width, greencar_image_height)
}


window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
	keyPressed = e.keyCode;
	console.log(keyPressed);
		if(keyPressed == '38')
		{
			up();
			console.log("up");
		}
	
		if(keyPressed == '40')
		{
			down();
			console.log("down");
		}
		
		if(keyPressed == '37')
		{
			left();
			console.log("left");
		}
	
		if(keyPressed == '39')
		{
			right();
			console.log("right");
		}
		
		
}

function up()
{
	//Define function to move the car upward
	if(greencar_image_y>=0){
		greencar_image_y= greencar_image_y - 10
		console.log("When up arrow is pressed, x = " + greencar_image_x + " | y = " +greencar_image_y)
		uploadBackground()
		uploadgreencar()
	}
}

function down()
{
	//Define function to move the car downward
	if(greencar_image_y<=300){
		greencar_image_y= greencar_image_y + 10
		console.log("When down arrow is pressed, x = " + greencar_image_x + " | y = " +greencar_image_y)
		uploadBackground()
		uploadgreencar()
	}
}

function left()
{
	//Define function to move the car left side
	if(greencar_image_y>=0){
		greencar_image_x= greencar_image_x - 10
		console.log("When left arrow is pressed, x = " + greencar_image_x + " | y = " +greencar_image_y)
		uploadBackground()
		uploadgreencar()
	}
}

function right()
{
	//Define function to move the car right side
	if(greencar_image_y<=300){
		greencar_image_x= greencar_image_x + 10
		console.log("When right arrow is pressed, x = " + greencar_image_x + " | y = " +greencar_image_y)
		uploadBackground()
		uploadgreencar()
	}
}
