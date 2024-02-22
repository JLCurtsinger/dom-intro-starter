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
let colors = ["#F2DCC9", "#D9BCA3", "#7C9EA6", "#3C5E73", "#283040"];

// lop through both arrays and set a color for each svg
for (let i=0; i<svgs.length; i++) {
    svgs[i].style.stroke = colors[i];
}


// grab the first span with the bold class in section five and change text color to #7C9EA6
document.querySelector("#query .bold").style.color = "#7C9EA6";


// replace the first list item text with "this is the new list text"
document.querySelector(".content_list li:first-of-type").textContent = "This is new list item text";

// for the third list item add your name to the existing text and wrap it in some strong tags
document.querySelectorAll(".content_list li")[2].innerHTML += " <strong>Justin Curtsinger</strong>";

//remove hidden attribute from the link in the last section
document.querySelector("#remove a").removeAttribute("hidden");