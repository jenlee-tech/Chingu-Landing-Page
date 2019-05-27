function GetClock() {
    let d = new Date();
    let nhour = d.getHours();
    let nmin = d.getMinutes();
    let ap;
    let clocktext;
    let month = d.toLocaleDateString('en-us', {
        month: 'long'
    });


    let datedisplay;
    if (nhour == 0) {
        ap = " AM";
        nhour = 12;
    } else if (nhour < 12) {
        ap = " AM";
    } else if (nhour == 12) {
        ap = " PM";
    } else if (nhour > 12) {
        ap = " PM";
        nhour -= 12;
    };

    if (nmin <= 9) nmin = "0" + nmin;
    clocktext = "" + nhour + ":" + nmin + "";
    document.getElementById("timestamp").innerHTML = clocktext;
    document.getElementById("ap-text").innerHTML = ap;



};







GetClock()
setInterval(GetClock, 1000);
//setInterval(dateStamp, 1000);