const newMdBox = document.querySelector('#newFamilyMD');

newMdBox.addEventListener( 'change', function() {

    var textBox =  document.getElementById("specialInstructions").value;
    
    let familyMD = {
        instructions: "Call the hospital for physicians taking new patients: 705-445-2550 ext 8190\n\nHow to find a new family MD:\nwww.ontario.ca/page/find-family-doctor-or-nurse-practitioner\n\nVirtual Care Clinic: www.seethedoctor.ca\n\nWalk-in clinics: www.thehealthline.ca\nwww.iamsick.ca\n\nYou can ALWAYS come back to the Emergency Department\n\n"};
 
    if(this.checked) {
        console.log('checked');

        textBox = textBox + familyMD.instructions;
        document.getElementById("specialInstructions").value=textBox;

        addToStopMeds(visine);

        document.getElementById("qr").innerHTML = `

            <div class="pdf">
                <iframe src="/pdfs/Conjunctivitis.pdf" width="100%" height="500px"></iframe>
            </div>

        `;


    } else {
        console.log('unchecked');

        var newTextBox = textBox.replace(familyMD.instructions, "");
        document.getElementById("specialInstructions").value=newTextBox;
    

        document.getElementById("qr").innerHTML = ``

    }

});



