console.log('it works');

const printBtn = document.querySelector('.enter');
const printDiv = document.querySelector('.printButton');

const referralSentTo = document.querySelector('.referralTo');
const referralDrop = document.querySelector('.referralDropDown');
const aptDateTime = document.querySelector('.apts');

const aptDay = document.querySelector('.aptDate');

const medStart = document.querySelector('#medsToStart');
const medBegin = document.querySelector('.medInit');

const medStop = document.querySelector('#medsToStop');
const medEnd = document.querySelector('.medHalt');


const ifAvailableDate=document.querySelector('dateHelp');
const ifAvailableTime=document.querySelector('timeHelp');

const lacerationBox=document.querySelector('#laceration');

const diverticulitisBox = document.querySelector("#diverticulitis");
const incidentalBox = document.querySelector("#incidental");
const pediatricBox = document.querySelector("#pediatric");
const concussionBox= document.querySelector("#concussion");
const shinglesBox= document.querySelector("#shingles");



const instructionBox = document.getElementById("specialInstructions");
const proceduralBox = document.querySelector('#proceduralSedation');

var specialInstructions = "";

/* Add date and time to form */

var today = new Date();
var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();

var dateTime = date;

document.getElementById("date").innerHTML = dateTime;



function handlePrint() {
    console.log('it got clicked');
    
    var textBox =  document.getElementById("specialInstructions").value;
    
    if(proceduralBox.checked){
        textBox = textBox + "\nDo not to drive, operate heavy machinery, use hot tubs, make important decisions, sign legal documents for 24h.  Return to the ER if you have fever, vomiting, or are unable to tolerate fluids.";
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

    /*remove meds to start if there is none */
    console.log(medStart.value);

    let isStart = medStart.value;
    console.log(isApt);

    if (!isStart) {
        console.log('remove the appointment');
        medBegin.classList.add('invisible');
    };

     /*remove meds to STOPif there is none */
     console.log(medStop.value);

     let isStop = medStop.value;
    
 
     if (!isStop) {
         console.log('remove the appointment');
         medEnd.classList.add('invisible');
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



lacerationBox.addEventListener( 'change', function() {

    var textBox =  document.getElementById("specialInstructions").value;
    var lacerationInstructions="Keep your wound clean and dry.  Return to the Emergency Department if you have more pain, swelling, redness, fever, 'red streaks', discharge from the wound or any concerns.\n";

    if(this.checked) {
        console.log('checked');

        textBox = textBox + lacerationInstructions
        document.getElementById("specialInstructions").value=textBox;

    } else {
        console.log('unchecked');
        
        var newTextBox = textBox.replace(lacerationInstructions, "");
        document.getElementById("specialInstructions").value=newTextBox;
    }
});

diverticulitisBox.addEventListener( 'change', function() {

    var textBox =  document.getElementById("specialInstructions").value;
    var diverticulitisInstructions = "Take antibiotics and pain medicine as prescribed.\n\nStart with only clear liquids for a few days. Examples of items allowed on a clear liquid diet include: broth, fruit juices without pulp, such as apple juice, ice chips, Ice pops without bits of fruit or fruit pulp, gelatin, water, tea or coffee without cream.\n\nAs you start feeling better slowly add low-fiber foods. Examples of low-fiber foods include: canned or cooked fruits without skin or seeds, canned or cooked vegetables such as green beans, carrots and potatoes (without the skin), eggs, fish and poultry, refined white bread, fruit and vegetable juice with no pulp. low-fiber cereals, milk, yogurt and cheese, white rice, pasta and noodles. You should feel better within two or three days of starting the diet and antibiotics. If you haven't started feeling better by then, call your doctor. \n\nContact your doctor or return to the Emergency Department if: you develop a fever, your abdominal pain is worsening, or you are unable to keep clear liquids down.  These may indicate a complication that requires hospitalization.\nhttps://www.mayoclinic.org/healthy-lifestyle/nutrition-and-healthy-eating/in-depth/diverticulitis-diet/art-20048499";


    if(this.checked) {
        console.log('checked');
        
        textBox = textBox + diverticulitisInstructions

        document.getElementById("specialInstructions").value=textBox;

        document.getElementById("qr").innerHTML = `


        <div class="pdf">
            <iframe src="/pdfs/lowfiberdiet.pdf" width="100%" height="400px"></iframe><br><br>

            <iframe src="/pdfs/diverticulosis.pdf" width="100%" height="400px"></iframe>

        </div>

    `;



    } else {
        console.log('unchecked');
        
        var newTextBox = textBox.replace(diverticulitisInstructions, "");
        document.getElementById("specialInstructions").value=newTextBox;

        document.getElementById("qr").innerHTML = ``;


    }
});

incidentalBox.addEventListener( 'change', function() {

    var textBox =  document.getElementById("specialInstructions").value;
    var incidentalInstructions = "You have been provided with printed copy of your imaging (X-ray, CT-scan, Ultrasound) test report. Please take it to your family MD or primary provider for review. It may contain incidental findings that require further investigation.\n";

    if(this.checked) {
        console.log('checked');
        
        textBox = textBox + incidentalInstructions

        document.getElementById("specialInstructions").value=textBox;


    } else {
        console.log('unchecked');
        
        var newTextBox = textBox.replace(incidentalInstructions, "");
        document.getElementById("specialInstructions").value=newTextBox;


    }
});

pediatricBox.addEventListener( 'change', function() {

    var textBox =  document.getElementById("specialInstructions").value;
    var pediatricInstructions = "Bring your child back to the Emergency Department if s/he has persistent vomiting, is not drinking or urinates less than 3 times in 24 hours, is having difficulty breathing, is unusually sleepy, has a stiff neck or complains of neck pain, is confused, is 'getting worse' or has not improved in 48-72h.\n";

    if(this.checked) {
        console.log('checked');
        
        textBox = textBox + pediatricInstructions 

        document.getElementById("specialInstructions").value=textBox;

    } else {
        console.log('unchecked');
        
        var newTextBox = textBox.replace(pediatricInstructions, "");
        document.getElementById("specialInstructions").value=newTextBox;
    }
});

concussionBox.addEventListener( 'change', function() {

    var textBox =  document.getElementById("specialInstructions").value;
    var concussionInstructions = "Return to the ED if your headache becomes worse, you experience confusion, you develop numbness, weakness, difficulty with speech or vision or you have have any concerns.  Follow up with your primary provider if you symptoms continue.\n";

    if(this.checked) {
        console.log('checked');
        
        textBox = textBox + concussionInstructions 

        document.getElementById("specialInstructions").value=textBox;

        document.getElementById("qr").innerHTML = `

        <h4 class="font-weight-bold ml-3">Scan Me with your phone camera for more information:</h4>

        <img class="logo pb-5" src="/logos/concussionqr.png"/>

        <div class="pdf">
            <iframe src="/pdfs/ConcussionDoDont.pdf" width="100%" height="500px"></iframe>
        </div>

    `;

    

    } else {
        console.log('unchecked');
        
        var newTextBox = textBox.replace(concussionInstructions, "");
        document.getElementById("specialInstructions").value=newTextBox;
        document.getElementById("qr").innerHTML = ``
    }
});

shinglesBox.addEventListener( 'change', function() {

    var textBox =  document.getElementById("specialInstructions").value;
    var shinglesInstructions = "Anyone who has recovered from chickenpox, even children, can get shingles.  Symptoms of shingles include burning or shooting pain, tingling or itching, chills, fever, headache, upset stomach, and rashes or blisters that develop on one side of the body, usually on your face or around your waist. There are medicines that may help. Healthy adults age 50 and older should talk to their healthcare professional about getting the shingles vaccine to reduce their risk. Generally shingles is not contagious, but a person with active shingles can spread the virus when the rash is in the blister phase. It's important to keep the rash covered. Most cases of shingles last 3-5 weeks. Most people get shingles only one time, but, it is possible to have it more than once.  Return to the Emergency Department if you develop worsening pain, fever, discharge from the rash, pain or redness in your eye.\n\nYou can find more information here: https://www.nia.nih.gov/health/shingles\n";
    
    if(this.checked) {
        console.log('checked');
        
        textBox = textBox + shinglesInstructions 

        document.getElementById("specialInstructions").value=textBox;

        document.getElementById("qr").innerHTML = `

        <h4 class="font-weight-bold ml-3">Scan Me with your phone camera for more information:</h4>

        <img class="logo pb-5" src="/logos/shinglesqr.png"/>
    `;

    } else {
        console.log('unchecked');
        
        var newTextBox = textBox.replace(shinglesInstructions, "");
        document.getElementById("specialInstructions").value=newTextBox;

        document.getElementById("qr").innerHTML = ``

    }
});

