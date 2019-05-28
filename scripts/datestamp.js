let d = new Date();

function date() {
    let datedisplay;
    let month = d.toLocaleDateString('en-us', {
        month: 'long'
    });

    let day = d.toLocaleDateString("en-us", {
        day: "2-digit"
    });

    let year = d.toLocaleDateString("en-us", {
        year: "numeric"
    });

    datedisplay = "" + month + " " + day + "," + year + "";
    document.getElementById("datestamp").innerHTML = datedisplay;
}

date();