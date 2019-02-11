





var contactButton = document.querySelector(".contact-btn").addEventListener("click", function(){
    document.querySelector(".contact-cont").style.display = "inline-block";
    document.querySelector(".contact-box").style.display = "inline-block";
});



var quitButton = document.querySelector(".quit-btn").addEventListener("click", function(){
    document.querySelector(".contact-cont").style.display = "none";
});



var submitButton = document.querySelector(".submit").addEventListener("click", function(){
    document.querySelector(".contact-box").style.display = "none";
    document.querySelector(".thank-you-box").style.display = "inline-block";
    var name  = document.querySelector("#name").value;
    var please = document.querySelector("#formula");
    if (  name === "" ){
        please.innerHTML = "Row row row your boat. <br> Rowing gently down the stream. <br> Life is so extreme."
    } else {
    please.innerHTML = `${name}, thank you for writing to us!`;
    };
    document.querySelector("#email").value = null;
    document.querySelector("#name").value = null;
    document.querySelector("#surname").value = null;
    document.querySelector("#question").value = null;
});


var quitButton2 = document.querySelector(".quit-btn2").addEventListener("click", function(){
    document.querySelector(".contact-box").style.display = "inline-block";
    document.querySelector(".thank-you-box").style.display = "none";
    document.querySelector(".contact-cont").style.display = "none";
});




/* didnt work...

var contactCont = document.querySelector(".contact-cont"),
contactBox = document.querySelector(".contact-box"),
thankYouBox = document.querySelector(".thank-you-box"),
contactButton = document.querySelector(".contact-btn"),
quitButton = document.querySelector(".quit-btn"),
quitButton2 = document.querySelector(".quit-btn2"),
submitButton = document.querySelector(".submit");

console.log("cocoa")

var contactButton.addEventListener("click", function(){
    contactCont.style.display = "inline-block";
    contactBox.style.display = "inline-block";
    console.log("it works!");});

quitButton.addEventListener("click", function(){
    contactCont.style.display = "none";

console.log("eszelekesze")

    */