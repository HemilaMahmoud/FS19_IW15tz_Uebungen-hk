
window.onload = start;
function klickZaehler() {

  if(typeof(Storage)!==undefined){
    if(localStorage.clickcount){
      localStorage.clickcount = Number (localStorage.clickcount) + 1;
    }
    else{
      localStorage.clickcount = 1;
    }
    document.getElementById("klicknumbers").innerHTML = localStorage.clickcount;
  //  document.getElementById("clickers").innerHTML = "Sie haben " + localStorage.clickcount + " geklickt";
  }
  else{
    document.getElementById("notSupport").innerHTML = "Your Browser doesn't support this function"
  }

}

function start (){
  if(typeof(Storage)!==undefined){
    if(localStorage.clickcount){
      localStorage.clickcount = Number (localStorage.clickcount);
    }
    document.getElementById("klicknumbers").innerHTML = localStorage.clickcount;
  }
  else{
    document.getElementById("notSupport").innerHTML = "Your Browser doesn't support this function"
  }
}