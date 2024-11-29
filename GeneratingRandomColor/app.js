let randbut=document.querySelector("#randbut");
let rgbis=document.querySelector("#rgbis");
let colorbox=document.querySelector("#colorbox");
randbut.addEventListener("click",getRandomColor);

function getRandomColor(){
   let red= Math.floor(Math.random()*256);
   let green= Math.floor(Math.random()*256);
   let blue= Math.floor(Math.random()*256);
   let color=(`RGB(${red},${green},${blue})`);
   colorbox.style.backgroundColor=color;
   rgbis.innerText=color;

}