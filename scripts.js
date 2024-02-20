// get first paragraph by id and add span with text
document.getElementById("firstPara").innerHTML += "<span class='tan'> This is the new tan text</span>";

// update images on page by tag name to set width to 250
let images = document.getElementsByTagName("img");
console.log(images);

for(let img of images){
    img.width = "250";
}

// select the span groups by class name and update color
let ltBlueSpans = document.getElementsByClassName("light-blue");
let dkBlueSpans = document.getElementsByClassName("med-blue");

for(let span of ltBlueSpans){
    span.style.color = "#7C9EA6";
}

for(let span of dkBlueSpans){
    span.style.color = "#3C5E73";
}

// select each svg icon and change the stroke color
let svgs = document.querySelectorAll("#svgs svg");

// array of colors to change stroke to
let colors = [];
