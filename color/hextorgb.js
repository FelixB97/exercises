"use strict"; 
window.addEventListener("DOMContentLoaded", start);

function start() {
    console.log("start function called");
    hextorgb("#aa3456");
    convert();
}

function hextorgb(hex) { // function for converting hex to RGB values
    const toR = hex.substring(1,3);
    const toG = hex.substring(3,5);
    const toB = hex.substring(5,7);
    console.log("Red: " + toR);
    console.log("Green: " + toG);
    console.log("Blue: " + toB);

    const r = Number.parseInt(toR,16);
    const g = Number.parseInt(toG,16);
    const b = Number.parseInt(toB,16);

    console.log(r);
    console.log(g);
    console.log(b);

    rgbToHex(r,g,b);
}

function rgbToHex(r,g,b) { // function for converting RGB to hex values
    const hexR = r.toString(16);
    const hexG = g.toString(16);
    const hexB = b.toString(16);
    
    console.log(hexR);
    console.log(hexG);
    console.log(hexB);

    const hex = "#" + hexR + hexG + hexB;
    console.log(hex);
    return hex;
}

function convert() { // function to convert css backgroundColor property to R G and B values
    console.log("converting color");
    const colorBox = document.querySelector("#colorBox");
    const colorValue = window.getComputedStyle(colorBox ,null).getPropertyValue('background-color');

    console.log("colorValue: " + colorValue);

    const rFirstIndex = colorValue.indexOf("(");
    const rSecondIndex = colorValue.indexOf(",");
    const gSecondIndex = colorValue.lastIndexOf(",");
    const bSecondIndex = colorValue.lastIndexOf(")");



    const r = colorValue.substring(rFirstIndex+1,rSecondIndex);
    const g = colorValue.substring(rSecondIndex+2,gSecondIndex);
    const b = colorValue.substring(gSecondIndex+2,bSecondIndex);
    console.log("Red: " + r);
    console.log("Green: " + g);
    console.log("Blue: " + b);
}

//return 
returntest();
function returntest() {
const RGB = {r:170,g:80,b:99};
const result = rgbToHex(RGB.r,RGB.g,RGB.b);
console.log("return value: " + result);
// console.log(rgbToHex(RGB.r,RGB.g,RGB.b));
}