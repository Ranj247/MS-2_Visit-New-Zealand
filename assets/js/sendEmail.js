// Credit: Inspiration taken from mini project 'Resume' and customised


function sendMail(contactForm) {
    emailjs.send("gmail", "template_rf618rl", {
            "from_name": contactForm.fullname.value,
            "from_email": contactForm.emailaddress.value,
            "message": contactForm.textArea.value
        })
        .then(
            function (response) {
                console.log("SUCCESS", response);
                alert("Your message has been sent! We'll get back to you as soon as possible.");
            },
            function (error) {
                console.log("FAILED", error);
                alert("Message failed to send. Please try again later");
            }
        );
    document.contactForm.reset(); // clears the form data when submitted
    return false; // prevents page reload
}