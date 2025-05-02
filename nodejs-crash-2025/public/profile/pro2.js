
document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault();

    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let message = document.getElementById("message").value;

    let mailtoLink = `mailto:leonardoduor91@gmail.com?subject=Message from ${name}&body=${message} (Reply to: ${email})`;
    window.location.href = mailtoLink;

    document.getElementById("status").textContent = "Message ready to be sent!";
});
