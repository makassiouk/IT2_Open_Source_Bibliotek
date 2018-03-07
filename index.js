/*jslint devel: true */

function winInit() {

    readCanvas = document.getElementById("myCanvas");
    ctx = readCanvas.getContext("2d");
    
    drawText({
        ctx: ctx,
        x: 100,
        y: 100,
        fillstyle: "Black",
        font: "18px Arial",
        text: "Hi",
    });

    drawCircle({
        ctx: ctx,
        xCentre: 100,
        yCentre: 100,
        radius: 100,
        color: "Black",
    });
}
window.onload = winInit;

/*
    - - - - - - - - - - - - - - - - - - - - - - - -    - - - - - - - - - - - - - - - - - - - - - - - -
    - - - - - - - - - - - - - - - - - - - - - - - -    - - - - - - - - - - - - - - - - - - - - - - - -
    General maths and data manipulation functions
    - - - - - - - - - - - - - - - - - - - - - - - -    - - - - - - - - - - - - - - - - - - - - - - - -
    - - - - - - - - - - - - - - - - - - - - - - - -    - - - - - - - - - - - - - - - - - - - - - - - -
*/

/*
setArray DOC:
	a: Input an array where all numbers are to be set to a certain number.
	v: Input desired number to replace all numbers in array.
*/
function setArray(a, v) {
    "use strict";
    var i, n = 0;
	n = a.length;
    for (i = 0; i < n; i += 1) {
        a[i] = v;
    }
}

//Does what it says. Returns maximum value of an array.
function findMaxValue(array) {
	"use strict";
	var max, i;
	max = array[0];

	for (i = 1; i < array.length; i += 1) {
		if (array[i] > max) {
			max = array[i];
		}
	}
	console.log("Max value = " + max);
	return max;
}
/*
Kaster terningen og gir et svar basert på hvor mange ansikt terningen har.
	sides: Sidene på terningen.
	a: Resultatet av et kast.
*/
function terningKast(sides) {
    "use strict";
    var a = Math.floor(Math.random() * sides);
    return a;
}


/*
    - - - - - - - - - - - - - - - - - - - - - - - -    - - - - - - - - - - - - - - - - - - - - - - - -
    - - - - - - - - - - - - - - - - - - - - - - - -    - - - - - - - - - - - - - - - - - - - - - - - -
    HTML Manipulative Funksjoner
    - - - - - - - - - - - - - - - - - - - - - - - -    - - - - - - - - - - - - - - - - - - - - - - - -
    - - - - - - - - - - - - - - - - - - - - - - - -    - - - - - - - - - - - - - - - - - - - - - - - -
*/

/*
lagHtmlTabell DOC:
*/

lagHtmlTabell = function(regnestykker, svar, retteSvar) {
	"use strict";
	var i, utskrift, antallRegnestykker = 0;
	antallRegnestykker = [regnestykker.length];

	utskrift = "<table id><thead><tr><th>RegneStykke</th><th> Elevens Svar </th><th> Rett Svar </th></tr></thead>";
	utskrift = utskrift + "<tbody>";
	
	for (i = 0; i <= (antallRegnestykker - 1); i += 1) {
		utskrift = utskrift + "<tr>"  + "<td>" + regnestykker[i] + "</td>"
									  + "<td>" + svar[i] + "</td>"
									  + "<td>" + retteSvar[i] + "</td>" + "</tr>"; //tegner tabellen fra js til html.
	}
	utskrift = utskrift + "</tbody> </table>"; //lukker tabellen
	document.getElementById("tabellUtskrift").innerHTML = utskrift;
}

function showBackgroundMenu(){
	backgroundMenu.style.display = "block";
}

function hideBackgroundMenu(filename){
	backgroundMenu.style.display = "none";
	uploadImportedImage(ctx, filename);
}

function changeVisiblePage(frontPage, otherPage, otherPage2) {
	frontPage.style.visibility = "visible";
	otherPage.style.visibility = "hidden";
	otherPage2.style.visibility = "hidden";
	
	frontPage.style.display = "inline";
	otherPage.style.display = "none";
	otherPage2.style.display = "none";
}

/*
    - - - - - - - - - - - - - - - - - - - - - - - -
    - - - - - - - - - - - - - - - - - - - - - - - -
    Canvas Functions *** Has to be redone with objects as parameters instead of arguments
    - - - - - - - - - - - - - - - - - - - - - - - -
    - - - - - - - - - - - - - - - - - - - - - - - -
*/

/*options = {
    ctx: ctx,
    text: "Hi",
    x: 100,
    y: 100,
    fillstyle: "Red",
    font: "18px Arial"
}*/
function drawText(options){
	"use strict";
	options.ctx.font = options.font;//18px Arial
	options.ctx.fillStyle = options.fillstyle; //"black"
	options.ctx.textAlign = "middle";
	options.ctx.fillText(options.text, options.x, options.y);
}

/*options = {
    ctx: ctx,
    xCentre: 100,
    yCentre: 100,
    radius: 10,
    color: "Black",
}*/
function drawCircle(options) {
	"use strict";
	options.ctx.beginPath();
	options.ctx.strokeStyle = options.color;
	ctx.arc(options.xCentre, options.yCentre, options.radius, 0, 2 * Math.PI);
	ctx.stroke();
}

function drawFilledCircle(ctx, x, y, size, colour) {
	"use strict";
	ctx.beginPath();
	ctx.strokeStyle = colour;
	ctx.fillStyle = colour;
	ctx.moveTo(cX, cY);
	ctx.arc(cX, cY, size, 0, 2 * Math.PI);
	ctx.fill();
}

function drawSquare(ctx, x, y, height, width, color) {
    "use strict";
    ctx.beginPath();
	ctx.strokeStyle = color;
	ctx.lineWidth = 2;
    ctx.moveTo(x, y);
    ctx.lineTo(x + width, y);
    ctx.lineTo(x + width, y + height);
    ctx.lineTo(x, y + height);
    ctx.lineTo(x, y);
    ctx.stroke();
}

function drawFilledSquare(ctx, x, y, height, width, colour) {
    "use strict";
    ctx.beginPath();
	ctx.fillStyle = colour;
    ctx.moveTo(x, y);
    ctx.lineTo(x + width, y);
    ctx.lineTo(x + width, y - height);
    ctx.lineTo(x, y - height);
    ctx.lineTo(x, y);
    ctx.fill();
}

function drawTriangle(ctx, x, y, height, width, color) {
    "use strict";
    ctx.beginPath();
	ctx.strokeStyle = color;
	ctx.lineWidth = 2;
    ctx.moveTo(x, y);
    ctx.lineTo(x + width, y);
    ctx.lineTo(x + width, y - height);
    ctx.lineTo(x, y);
    ctx.stroke();
}

function drawFilledTriangle(ctx, x, y, height, width, color) {
    "use strict";
    ctx.beginPath();
	ctx.fillStyle = color;
    ctx.moveTo(x, y);
    ctx.lineTo(x + width, y);
    ctx.lineTo(x + width, y + height);
    ctx.lineTo(x, y);
    ctx.fill();
}

function drawFilledPoly(ctx, x, y, antall, radius, color) {
	"use strict";
	var i;
	ctx.beginPath();
	ctx.moveTo(x + radius * Math.cos(0), y + radius * Math.sin(0));
	ctx.strokeStyle = color;
	ctx.lineWidth = 2;
	for (i = 1; i <= antall; i += 1) {
		ctx.lineTo(x + radius * Math.cos(i * 2 * Math.PI / antall), y + radius * Math.sin(i * 2 * Math.PI / antall));
	}
	ctx.stroke();
}

/*
     - - - - - - - - - - - - - - - - - - - - - - - -
     More advanced Canvas Functions for displaying Data
     - - - - - - - - - - - - - - - - - - - - - - - -
*/

/*
drawRectVertically DOC:
    xData:
    yData:
    cvx:
    cvy:
    number:
    widthPx:
    yScale:
*/
function drawRectVertically(xData, yData, cvx, cvy, number, widthPx, yScale) {
    "use strict";
    var i, yPixel;
    number = number - 1;
    
    for (i = 0; i <= number; i = i + 1) {
        yPixel = yData[i] * yScale;
        drawFilledSquare(10 + cvx * i, cvy, yPixel, widthPx, "DarkBlue");
        drawText(yData[i], 10 + cvx * i + 10, cvy - 15 - yPixel);
    }
} //Math.max.apply(null.yStolpe)// finne max verdi av array til scaling av stolpediagram.

/*
drawPolyline DOC:
	x:
	y:
	cvx:
	cvy:
	colour:
	yScale: The relevant scale of the project. Often use the same value as used in other programs utilizing the canvas.

*/
function drawPolyline(x, y, cvx, cvy, colour, yScale) {
	"use strict";
	var i, yPixel;
	ctx.beginPath();
	ctx.strokeStyle = colour;
	
	ctx.moveTo(x.length * cvx, y[y.length] + cvy);
	
	for (i = 0; i >= x.length; i += 1) {
		console.log(i);
		yPixel = y[i] * yScale;
		ctx.lineTo(10 + cvx * i, yPixel);
	}
	ctx.stroke();
}

/*
function drawPoleDiagram(); DOC:
	Draws a Pole-Diagram of the data array given into a canvas (ctx).
		data: An array of data to be displayed vertically.
		amount: The amount of poles in the array to be displayed.
		maxValue: Maximum value of the following operation so it can be scaled appropriately.
	IMPORTANT NEEDS FOLLOWING TO FUNCTION:
	Global variables:	canvasRead = document.getElementById("myCanvas");
				ctx = document.getElementById("myCanvas").getContext("2d");
	functions:	drawFilledSquare();
				drawText();
*/

function drawPoleDiagram(data, amount, maxValue) {
	"use strict";
	var i, height, yScale;
	yScale = (canvasRead.height - 20) / maxValue; //max value of data instead of amount
	amount = amount - 1;
	for (i = 0; i <= amount; i += 1) {
		drawFilledSquare(10 + canvasRead.width / (amount + 1) * i, canvasRead.height - 10, data[i] * yScale, 20, "darkblue");
		drawText(data[i], 10 + canvasRead.width / (amount + 1) * i, canvasRead.height - (15 + data[i] * yScale), "Black", "16px Arial");
		drawText(i + 1, 15 + canvasRead.width / (amount + 1) * i, canvasRead.height - 15, "White", "16px Arial");
	}
}


/*
    - - - - - - - - - - - - - - - - - - - - - - - -
    Specific Canvas functions for user Interaction eg: drawing tools.
    - - - - - - - - - - - - - - - - - - - - - - - -
*/

function roundBrush(ctx, x, y, size, colour) {
	"use strict";
	size = size/2;
	ctx.beginPath();
	ctx.strokeStyle = colour;
	ctx.fillStyle = colour;
	ctx.moveTo(cX, cY);
	ctx.arc(cX, cY, size, 0, 2 * Math.PI);
	ctx.fill();
}

function squareBrush(ctx, x, y, size, colour) {
	"use strict";
	var offSet;
	size = size*1.1/1.1;
	offSet = size / 2;
	x = x - offSet
	y = y - offSet
	ctx.beginPath();
	ctx.fillStyle = colour;
	ctx.moveTo(x , y);
    ctx.lineTo(x + size, y);
    ctx.lineTo(x + size, y + size);
    ctx.lineTo(x, y + size);
	ctx.lineTo(x, y);
	ctx.fill();
}

/*
    - - - - - - - - - - - - - - - - - - - - - - - -    - - - - - - - - - - - - - - - - - - - - - - - -
    - - - - - - - - - - - - - - - - - - - - - - - -    - - - - - - - - - - - - - - - - - - - - - - - -
    Different Templates For Functions and misc user interaction functions
    - - - - - - - - - - - - - - - - - - - - - - - -    - - - - - - - - - - - - - - - - - - - - - - - -
    - - - - - - - - - - - - - - - - - - - - - - - -    - - - - - - - - - - - - - - - - - - - - - - - -
*/

//Template for Switch Statement
function switchStatement(switchParameter) {
	switch(switchParameter) {
        case 0:
            //Block of code
			break;
            //Block of code
			case 1:
            //Block of code
			break;
            //Block of code
			case 2:
            //Block of code
			break;
            //Block of code
			case 3:
            //Block of code
			break;
		default:
		console.log("none");
	}
}

//Template for Object
var myCat;
myCat = {
	"name": "meowsalot",
	"species": "cat",
	"run": function () {
		"use strict";
		console.log("Running cat function");
	}
};


/*
keyDownHandler() DOC:
Makes enter trigger something for example: a function.
Needs an Eventlistener. Use document.addEventListener(); to make it useable (see below)
	e: No idea what e stands for. May be some sort of context variable.

*/
function keyDownHandler(e) {
	"use strict";
	if (e.keyCode === 13) {
		someFunction();
    }
}
document.addEventListener("keydown", keyDownHandler, false);

/*
Returns mouse coordinates on a page when mouse is clicked. Can be used with margin:0; to get coordinates of a canvas.
Create two global variables named mX and mY or make the program return them.
*/
window.onclick = function (e) {
	"use strict";
	var mX, mY;
	mX = e.pageX;
	mY = e.pageY;
	
	console.log(mX + " " + mY);
};