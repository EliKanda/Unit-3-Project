/* Declare variables below to save the different sections (divs) of your story*/
let storyOpening=document.querySelector(".story-opening")
let windowOne=document.querySelector(".window-one-screen")
let windowTwo=document.querySelector(".window-two-screen")
let onePartTwo=document.querySelector(".window-one-ptwo")
let twoPartTwoOne=document.querySelector(".window-two-ptwoone")

let windowOneButton=document.querySelector(".window-one")
let windowTwoButton=document.querySelector(".window-two")
let walkUpButton=document.querySelector(".walk-up")
let darkWalkButton=document.querySelector(".walk-in-the-dark")
let checkbagButton=document.querySelector(".check-bag")
let hideButton=document.querySelector(".hide-button")
let checkButton=document.querySelector(".check-button")

let title=document.querySelector(".title")

windowOneButton.onclick=function(){
  storyOpening.style.display="none";
  title.style.display="none";
windowOne.style.display="block"; 
};

windowTwoButton.onclick=function(){
  title.style.display="none";
  storyOpening.style.display="none";
  windowTwo.style.display="block";
};

walkUpButton.onclick=function(){
  windowOne.style.display="none";
  onePartTwo.style.display="block";
};

darkWalkButton.onclick=function(){
  windowTwo.style.display="none";
  twoPartTwoOne.style.display="block";
};
















































