
function moveInstructions (){
    console.log(instructionBox.value);

    let printInstructions = instructionBox.value;

    printInstructions = printInstructions.replace(/\n/g, `<br>\n`);

    /*printInstructions = printInstructions.trim() + `\n\n`; */

    

    document.getElementById("movedInstructions").innerHTML= printInstructions;

}








/*(console.log('adjust textarea');

console.log(instructionBox);
console.log(instructionBox.rows);


var x = document.getElementById("specialInstructions");
console.log('current rows',x.rows);


x.addEventListener("focusin", myFocusFunction);
x.addEventListener("blur", myBlurFunction);

function tidyInstructions() {
    let trimmedInstructions = x.value.trim();
    console.log('trimmed Insructions',trimmedInstructions);
    document.getElementById("specialInstructions").value = `${trimmedInstructions}\n`;

  }

function myFocusFunction() {
  document.getElementById("specialInstructions").style.backgroundColor = "yellow";
}

function myBlurFunction() {
  document.getElementById("specialInstructions").style.backgroundColor = "";

  /* tidyInstructions();

  console.log('scrollheight', x.scrollHeight);
  console.log('clienthight', x.clientHeight);

  let instructionScrollHeight = x.scrollHeight;
  let newRows = Math.ceil(instructionScrollHeight/32)+1;
  console.log('new rows',newRows);

  document.getElementById("specialInstructions").rows = newRows;
  
}

*/


