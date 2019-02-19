function klickZaehler() {
  //console.log("Hallo Velo");

  var clicker = parseInt(document.getElementById("klicknumbers").innerHTML);
  clickerAddition = clicker + 1;
  output = document.getElementById("klicknumbers").innerHTML = clickerAddition;
  return output;
}