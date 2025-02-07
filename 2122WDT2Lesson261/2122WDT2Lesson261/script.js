/* 
  Challenge: Prior to each error, make a copy of the error as a comment then fix it. An example is below.
*/
function volume(){
  //  let r = parseInt(document.getElementBy("r").value);
  let r = parseInt(document.getElementById("r").value);
  let height = parseInt(document.getElementbyId("height").value);
  let output = document.getElementById("output").value;

  let v = math.PI * math.pow(r,2) * h;

  output.innerHTML = `Volume of the cylinder is ${v} 

}