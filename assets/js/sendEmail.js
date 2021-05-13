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

            },
            function (error) {
                console.log("FAILED", error);

            }
        );


    return false; // prevents page reload
}