
const conjunctivitisBox = document.querySelector('#conjunctivitis');

conjunctivitisBox.addEventListener( 'change', function() {

    var textBox =  document.getElementById("specialInstructions").value;

    refresh     = "\nOver the counter eye lubricant, such as 'Refresh'.";
    abx         = "\nAntibiotics if prescribed."
    visine      = "\nDo not use Visine or other medication to make your eyes less red.";
    
    var conjunctivitisInstructions="DO NOT WEAR CONTACT LENSES.\nReturn to the Emergency Department if your vision changes or your symptoms worsen or if you have concerns.\n";

    if(this.checked) {
        console.log('checked');

        textBox = textBox + conjunctivitisInstructions
        document.getElementById("specialInstructions").value=textBox;

        addToStartMeds(refresh);
        addToStartMeds(abx);

        addToStopMeds(visine);
    
        document.getElementById("qr").innerHTML = `

            <div class="pdf">
                <iframe src="/pdfs/Conjunctivitis.pdf" width="100%" height="500px"></iframe>
            </div>

        `;


    } else {
        console.log('unchecked');

        removeFromStartMeds(refresh);
        removeFromStartMeds(abx);
        
        removeFromStopMeds(visine);

        var newTextBox = textBox.replace(conjunctivitisInstructions, "");
        document.getElementById("specialInstructions").value=newTextBox;

        document.getElementById("qr").innerHTML = ``

    }

});



