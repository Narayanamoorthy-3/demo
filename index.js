

n=0
while(n<=6){
   
document.querySelectorAll("button")[n].addEventListener("click",onscreen);

function onscreen(){
   
   var keyClick =this.innerHTML;
   clicked(keyClick);
   addclass(keyClick);
}


n++;
}





document.addEventListener("keypress",keyboard);
function keyboard(event){
   clicked(event.key);
   addclass(event.key);
}



function clicked(key){
    
   switch(key){
   case"k":
    var audio = new Audio("sounds/tom-1.mp3");
    audio.play();
    break;
    case"l":
    var audio = new Audio("sounds/tom-2.mp3");
    audio.play();
    break;
    case"s":
    var audio = new Audio("sounds/tom-3.mp3");
    audio.play();
    break;
    case"d":
    var audio = new Audio("sounds/tom-4.mp3");
    audio.play();
    break;
    case"j":
    var audio = new Audio("sounds/kick-bass.mp3");
    audio.play();
    break;
    case"w":
    var audio = new Audio("sounds/crash.mp3");
    audio.play();
    break;
    case"a":
    var audio = new Audio("sounds/snare.mp3");
    audio.play();
    break;
    default:
       alert("no action found");
   }


  
    
}


function addclass(likehover){
   document.querySelector("."+likehover).classList.add("pressed");

   setTimeout(() => {
      
      document.querySelector("."+likehover).classList.remove("pressed");},100);
}



