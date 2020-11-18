console.log('this is test... it works');

const mdNameBox = document.querySelector('#mdName');
/*const cpsoNumberBox = document.querySelector('#cpsoNumber');*/


mdNameBox.addEventListener( 'change', function() {

    var chisholm = mdNameBox.value.includes("Chisholm");
    var ohrling = mdNameBox.value.includes("Ohrling");
    var bolton  = mdNameBox.value.includes("Bolton");

    if (chisholm) {
        console.log('Chisholm');
        document.getElementById("cpsoNumber").value="68240";
        document.getElementById("ohipNumber").value="013279"
    };

    if (ohrling) {
        console.log('Ohrling');
        document.getElementById("cpsoNumber").value="62149";
        document.getElementById("ohipNumber").value="xxxxx";
    };

    if (bolton) {
        console.log('Bolton');
        document.getElementById("cpsoNumber").value="90951";
        document.getElementById("ohipNumber").value="xxxxx";
    };

});











