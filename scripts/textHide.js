function textHide() {
    var x = document.getElementById("relevant-4");
    if (x.style.display === "none") {
        x.style.display = "block";

    } else {
        x.style.display = "none";
    }
    document.getElementById("textbutton").innerHTML = "Show me tips";

}