/*
	WebPlotDigitizer - http://arohatgi.info/WebPlotDigitizer

	Version 2.0

	Copyright 2010 Ankit Rohatgi <ankitrohatgi@hotmail.com>

	This file is part of WebPlotDigitizer.

    WebPlotDigitizer is free software: you can redistribute it and/or modify
    it under the terms of the GNU General Public License as published by
    the Free Software Foundation, either version 3 of the License, or
    (at your option) any later version.

    WebPlotDigitizer is distributed in the hope that it will be useful,
    but WITHOUT ANY WARRANTY; without even the implied warranty of
    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
    GNU General Public License for more details.

    You should have received a copy of the GNU General Public License
    along with WebPlotDigitizer.  If not, see <http://www.gnu.org/licenses/>.


*/

/* This file contains autodetections functions */

/************************************************ Autodetect Curves **********************************************/
function pickColor(cmode)
{
	colorPickerMode = cmode;
	clearClickEvents();
	canvas.addEventListener('click',colorPicker,true);
}

function colorPicker(ev)
{
	xi = ev.layerX;
	yi = ev.layerY;
	
	iData = ctx.getImageData(cx0,cy0,currentImageWidth,currentImageHeight);
	if ((xi < currentImageWidth+cx0) && (yi < currentImageHeight+cy0) && (xi > cx0) && (yi > cy0))
	{
		ii = xi - cx0;
		jj = yi - cy0;

		var index = jj*4*currentImageWidth + ii*4;
		var PickedColor = [iData.data[index], iData.data[index+1], iData.data[index+2]];
		alert(PickedColor);
		canvas.removeEventListener('click',colorPicker,true);
		if(colorPickerMode == 'fg')
		{
			fg_color = PickedColor;
			var fgbtn = document.getElementById('autoFGBtn');
			fgbtn.style.borderColor = "rgb(" + fg_color[0] +"," + fg_color[1] +"," + fg_color[2] +")";
		}
		else if (colorPickerMode == 'bg')
		{
			bg_color = PickedColor;
			var bgbtn = document.getElementById('autoBGBtn');
			bgbtn.style.borderColor = "rgb(" + bg_color[0] +"," + bg_color[1] +"," + bg_color[2] +")";
		}
	}	
}

function boxPaint()
{
	clearClickEvents();
	canvas.addEventListener('mousedown',boxPaintMousedown,true);
	canvas.addEventListener('mouseup',boxPaintMouseup,true);
	canvas.addEventListener('drag',boxPaintMousedrag,true);

}

function boxPaintMousedown(ev)
{
}

function boxPaintMouseup(ev)
{
}

function boxPaintMousedrag(ev)
{
}

function penPaint()
{
	clearClickEvents();
	canvas.addEventListener('mousedown',boxPaintMousedown,true);
	canvas.addEventListener('mouseup',boxPaintMouseup,true);
	canvas.addEventListener('drag',boxPaintMousedrag,true);

}

function penPaintMousedown(ev)
{
}

function penPaintMouseup(ev)
{
}

function penPaintMousedrag(ev)
{
}

// Erase will be based off of penPaint.

function autodetectCurves()
{
}
