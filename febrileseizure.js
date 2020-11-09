
const febrileSeizureBox = document.querySelector('#febrileSeizure');

febrileSeizureBox.addEventListener( 'change', function() {

    var textBox =  document.getElementById("specialInstructions").value;
    

    if(this.checked) {
        console.log('checked');

        var febrileSeizureInstructions = "";

        textBox = textBox + febrileSeizureInstructions;
        
        document.getElementById("specialInstructions").value=textBox;

        /*
        addToStartMeds(refresh);
        addToStartMeds(abx);

        addToStopMeds(visine);
        */
    
        document.getElementById("qr").innerHTML = `

            <div class="pdf">
                <iframe src="/pdfs/febrileSx.pdf" width="100%" height="500px"></iframe>
            </div>

        `;


    } else {
        console.log('unchecked');

        /*
        removeFromStartMeds(refresh);
        removeFromStartMeds(abx);
    
        
        removeFromStopMeds(visine);
        */

        var newTextBox = textBox.replace(febrileSeizureInstructions, "");
        document.getElementById("specialInstructions").value=newTextBox;

        document.getElementById("qr").innerHTML = ``

    }

});