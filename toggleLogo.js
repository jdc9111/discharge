
console.log('toggle logo');

function chngimg() {
    let img = document.getElementById('imgplus');

    console.log(img);
    console.log(img.src);
    console.log(img.alt);

    if (img.alt === "cgmhlogo") {
        console.log('its true');
        img.src = "./logos/redcross.jpg";
        img.alt = "redcross"
    }
    else {
        console.log('its false');
        img.src = "./logos/cgmh_logo.jpg";
        img.alt = "cgmhlogo";
    };

}

