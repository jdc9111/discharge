function addToStartMeds (newMeds) {
    var startMedsBox = document.querySelector('#medsToStart').value;
    startMedsBox = startMedsBox + newMeds; 
    console.log(startMedsBox);
    console.log('here it is');
    document.getElementById('medsToStart').value=startMedsBox;
}


function removeFromStartMeds (newMeds) {
    var startMedsBox = document.querySelector('#medsToStart').value;
    var newStartMedsBox = startMedsBox.replace(newMeds,'');
    document.getElementById('medsToStart').value=newStartMedsBox;

}

function addToStopMeds (newMeds) {
    var stopMedsBox = document.querySelector('#medsToStop').value;
    stopMedsBox = stopMedsBox + newMeds; 
    document.getElementById('medsToStop').value=stopMedsBox;
}


function removeFromStopMeds (newMeds) {
    var stopMedsBox = document.querySelector('#medsToStop').value;
    var newStopMedsBox = stopMedsBox.replace(newMeds,'');
    document.getElementById('medsToStop').value=newStopMedsBox;

}