console.log('it works');

const printBtn = document.querySelector('.enter');
const printDiv = document.querySelector('.printButton');

const referralSentTo = document.querySelector('.referralTo');
const referralDrop = document.querySelector('.referralDropDown');
const aptDateTime = document.querySelector('.apts');

const aptDay = document.querySelector('.aptDate');

const ifAvailableDate=document.querySelector('dateHelp');
const ifAvailableTime=document.querySelector('timeHelp');

const lacerationBox=document.querySelector('#laceration');
const headInjuryBox=document.querySelector('#headInjury');


const instructionBox = document.getElementById("specialInstructions");
const proceduralBox = document.querySelector('#proceduralSedation');

var specialInstructions = "";

/*
function addtxt() {
    document.getElementById("specialInstructions").value=specialInstructions;
    
};
*/


function handlePrint() {
    console.log('it got clicked');
    
    var textBox =  document.getElementById("specialInstructions").value;
    
    if(lacerationBox.checked){
        console.log(lacerationBox.checked);
        textBox = textBox + "\nKeep you wound clean and dry.  Return to the ED if you have more pain, swelling, redness, fever, discharge from the wound or any concerns.";
        console.log(textBox);    
    };

    if(proceduralBox.checked){
        textBox = textBox + "\nDo not to drive, operate heavy machinery, use hot tubs, make important decisions, sign legal documents for 24h.  Return to the ER if you have fever, vomiting, or are unable to tolerate fluids.";
    };

    if(headInjuryBox.checked){
        textBox = textBox + "\nReturn to the ED if you headache becomes worse, you develop numbness, weakness, difficulty with speech or vision or you have have any concerns.  Follow up with your primary provider if you symptoms continue.";

        document.getElementById("qr").innerHTML = `
        <h4 class="font-weight-bold ml-3">Scan Me with your phone camera for more information:</h4>

        <p>This is a test</p>
        <img class="logo" src="/logos/concussionqr.png"/>
        `;
    };


    document.getElementById("specialInstructions").value=textBox;


        
    /*remove 'referralDropDown if blank" */

    let dropDownValue = referralSentTo.value;
    console.log(!!dropDownValue)
 

    if(!dropDownValue){
        referralDrop.classList.add('invisible');
        aptDateTime.classList.add('invisible');       
    };




    /*remove the appointment if there is none */
    console.log(aptDay.value);

    let isApt = aptDay.value;
    console.log(isApt);

    if (!isApt) {
        console.log('remove the appointment');
        aptDateTime.classList.add('invisible');
    };
    
    /* remove "print button" */
    printDiv.classList.add('invisible');

    /* remove "if available" */
    dateHelp.classList.add('invisible');
    timeHelp.classList.add('invisible');

    /*remove Instruciton Option */
    instructionOptions.classList.add('invisible');






    /* print the handout */
    setTimeout(() => {
        window.print();
    }, 500)


};



printBtn.addEventListener('click', handlePrint);
