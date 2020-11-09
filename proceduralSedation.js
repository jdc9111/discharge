
const proceduralSedationBox = document.querySelector('#proceduralSedation');

proceduralSedationBox.addEventListener( 'change', function() {

    var textBox =  document.getElementById("specialInstructions").value;    
    var proceduralSedationInstructions="Do not drive, swim, operate dangerous equipment or make important decisions for 24h.\nReturn to the Emergency Department if you have fever, vomiting for more than 8 hours, shortness of breath, chest pains or concerns.\n";

    if(this.checked) {
        console.log('checked');

        textBox = textBox + proceduralSedationInstructions
        document.getElementById("specialInstructions").value=textBox;

        document.getElementById("qr").innerHTML = `

            <div class="pdf">
                <iframe src="/pdfs/Procedural Sedation.pdf" width="100%" height="500px"></iframe>
            </div>

        `;


    } else {
        console.log('unchecked');

        var newTextBox = textBox.replace(proceduralSedationInstructions, "");
        document.getElementById("specialInstructions").value=newTextBox;

        document.getElementById("qr").innerHTML = ``

    }

});