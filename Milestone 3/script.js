// Fetch form and output elements
var resumeForm = document.getElementById("resume-form");
var resumeOutput = document.getElementById("resumeOutput");
// Function to generate and display the resume
function generateResume(event) {
    event.preventDefault(); // Prevent form submission
    // Get all input values from the form
    var name = document.getElementById("name").value;
    var fathersName = document.getElementById("fathersname").value;
    var surname = document.getElementById("surname").value;
    var dateofbirth = document.getElementById("dateofbirth").value;
    var nic = document.getElementById("nic").value;
    var email = document.getElementById("email").value;
    var phone = document.getElementById("phone").value;
    var address = document.getElementById("address").value;
    var status = document.getElementById("status").value;
    var objective = document.getElementById("objective").value;
    var education = document.getElementById("education").value;
    var othereducation = document.getElementById("othereducation").value;
    var experience = document.getElementById("experience").value;
    var skills = document.getElementById("skills").value;
    // Generate resume content
    var resumeHTML = "\n    <h2>Resume</h2>\n    <p><b>Name:</b> ".concat(name, "</p>\n    <p><b>Father's Name:</b> ").concat(fathersName, "</p>\n    <p><b>Surname:</b> ").concat(surname, "</p>\n    <p><b>Date Of Birth:</b> ").concat(dateofbirth, "</p>\n    <p><b>CNIC:</b> ").concat(nic, "</p>\n    <p><b>Email:</b> ").concat(email, "</p>\n    <p><b>Phone Number:</b> ").concat(phone, "</p>\n    <p><b>Address:</b> ").concat(address, "</p>\n    <p><b>Marital Status:</b> ").concat(status, "</p>\n\n    <h3>Objective:</h3>\n    <p>").concat(objective, "</p>\n\n    <h3>Qualification:</h3>\n    <p>").concat(education, "</p>\n\n    <h3>Other Qualification:</h3>\n    <p>").concat(othereducation, "</p>\n\n    <h3>Work Experience</h3>\n    <p>").concat(experience, "</p>\n\n    <h3>Skills</h3>\n    <p>").concat(skills, "</p>\n  ");
    // Display resume
    resumeOutput.innerHTML = resumeHTML;
}
// Attach event listener to form
resumeForm.addEventListener("submit", generateResume);
