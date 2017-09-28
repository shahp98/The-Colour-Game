var colours = []
var squares = document.querySelectorAll(".square");
var c = [];
var num = 6;
randomizeColors(num);
var pickedColor = pickColor();
var colorDisplay = document.getElementById('colorDisplay');
var message = document.getElementById('message');
var h1 = document.querySelector("h1");
var reset = document.getElementById('reset');
var easy = document.getElementById('easy');
var hard = document.getElementById('hard');
var num = 6;
colorDisplay.textContent = pickedColor;



function randomizeColors(n) 
{
	for (var i = 0; i < n; i++) 
	{
		for (var j= 0; j < 3 ; j++) 
		{
			c[j]=Math.floor(Math.random() * 256);
		}
		colours[i] = "rgb("+c[0]+", "+c[1]+", "+c[2]+")";
	}
}

function changeColors(colour) 
{
	for (var i = 0; i < colours.length; i++) 
	{
		squares[i].style.background = colour;
	}
}

function pickColor() 
{
	var random = Math.floor(Math.random() * num);
	return colours[random];
}

for (var i = 0; i < colours.length; i++) 
{
	squares[i].style.background = colours[i];
	squares[i].addEventListener("click",function() {
		var clickedColor = this.style.background;
		if(clickedColor === pickedColor) 
		{
			message.textContent = "Correct!";
			changeColors(pickedColor);
			h1.style.background = pickedColor;
			reset.textContent = "Play Again?";
		}
		else 
		{
			this.style.background = "black";
			message.textContent = "Try Again!";	
		}
	})
}

reset.addEventListener("click", function() 
{
	randomizeColors(num);
	pickedColor = pickColor();
	colorDisplay.textContent = pickedColor;
	reset.textContent = "New Colors";
	message.textContent = "";
	for (var i = 0; i < colours.length; i++) 
	{
		squares[i].style.background = colours[i];
	}
	h1.style.background = "steelblue";
})

easy.addEventListener("click", function() 
{
	easy.classList.add("selected");
	hard.classList.remove("selected");
	num = 3;
	randomizeColors(num);
	pickedColor = pickColor();
	colorDisplay.textContent = pickedColor;
	for (var i = 0; i < 3; i++) 
	{
		squares[i].style.background = colours[i];
	}
	for (var i = 3; i < 6; i++) 
	{
		squares[i].style.display = "none";
	}
})

hard.addEventListener("click", function() 
{
	hard.classList.add("selected");
	easy.classList.remove("selected");
	num = 6;
	randomizeColors(num);
	pickedColor = pickColor();
	colorDisplay.textContent = pickedColor;
	for (var i = 3; i < 6; i++) 
	{
		squares[i].style.display = "block";
	}
	for (var i = 0; i < 6; i++) 
	{
		squares[i].style.background = colours[i];
	}
})