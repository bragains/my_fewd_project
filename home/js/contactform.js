// Get the modal
var modal = document.getElementById('myModal');

// Get the link that opens the modal
var a = document.getElementById("contact-btn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];


// When the user clicks the link, open the modal 
a.onclick = function() {
    modal.style.display = "block";
    isit = true
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modal.style.display = "none";
    isit = false
}

//Provide success message alert when form is submitted
$("#send-btn").click(function () {
		modal.style.display = "none";
       alert("Thank you for contacting us! We will be in touch very soon!");
});
