console.log('it works');

const printBtn = document.querySelector('.enter');
const printDiv = document.querySelector('.printButton');
const referralSentTo = document.querySelector('.referralSentDrop');
const removeReferralDropDown = document.querySelector('.referralDropDown');
const backupReferral = document.querySelector('.altReferral');
const aptDay = document.querySelector('.aptDate');

const ifAvailableDate=document.querySelector('dateHelp');
const ifAvailableTime=document.querySelector('timeHelp');

const lacerationBox=document.querySelector('#laceration');

const instructionBox = document.getElementById("specialInstructions");

console.log(printBtn);
console.log(referralSentTo.value);
console.log(removeReferralDropDown);

var specialInstructions = "";

/*
function addtxt() {
    document.getElementById("specialInstructions").value=specialInstructions;
    
};
*/







function handlePrint() {
    console.log('it got clicked');
    console.log(referralSentTo);
    console.log(referralSentTo.value);

    var textBox =  document.getElementById("specialInstructions").value;
    console.log(textBox);


    if(lacerationBox.checked){
        console.log(lacerationBox.checked);
        textBox = textBox + "\nKeep you wound clean and dry.  Return to the ED if you have more pain, swelling, redness, fever, discharge from the wound or any concerns.";
        console.log(textBox);
    };

    

    document.getElementById("specialInstructions").value=textBox;

    /*
    addtxt ();


    
        
    /*remove 'referralDropDown if blank" */

    let dropDownValue = referralSentTo.value;
    console.log(referralSentTo.value)
 
    
    if (dropDownValue === 'none') {
        removeReferralDropDown.classList.add('invisible');
        console.log('should have removed it');
    } else {
        backupReferral.classList.add('invisible');
    };


    /*remove the appointment if there is none */
    console.log(aptDay.value);

    let isApt = aptDay.value;
    console.log(isApt);

    if (isApt === NaN) {
        console.log('remove the appointment');
    };
    
    /* remove "print button" */
    printDiv.classList.add('invisible');

    /* remove "if available" */
    dateHelp.classList.add('invisible');
    timeHelp.classList.add('invisible');

    /*remove Instruciton Option */
    instructionOptions.classList.add('invisible');









    /* print the handout */
    window.print();

};



printBtn.addEventListener('click', handlePrint);


/*
lacerationBox.addEventListener('change',function(e){
    if(lacerationBox.checked){
        specialInstructions = specialInstructions + ". Keep you wound clean";
    }
});


*/




/*
const notes = document.querySelectorAll('.note');
    console.log(notes);

    const noteArr = [];

    notes.forEach(function(note) {
        noteArr.push(note.value);
    })

    const note = noteArr.join("\n");
    console.log(note)
*/


