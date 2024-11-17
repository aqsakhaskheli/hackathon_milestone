// Get references to the form and display area
var form = document.getElementById('resume-form');
var resumeDisplayElement = document.getElementById('resume-display');
// Hanlde form submission
form.addEventListener('submit', function (event) {
    event.preventDefault(); // prevent page reload
    // Collect input values 
    var name = document.getElementById('name').value;
    var fathersname = document.getElementById('fathersname').value;
    var surname = document.getElementById('surname').value;
    var dateofbirth = document.getElementById('dateofbirth').value;
    var nic = document.getElementById('nic').value;
    var email = document.getElementById('email').value;
    var phone = document.getElementById('phone').value;
    var address = document.getElementById('address').value;
    var status = document.getElementById('status').value;
    var objective = document.getElementById('objective').value;
    var education = document.getElementById('education').value;
    var othereducation = document.getElementById('othereducation').value;
    var experience = document.getElementById('experience').value;
    var skills = document.getElementById('skills').value;
    // Generate the resume content dynamically
    var resumeHTML = "\n    <h2><b>Editable Resume</b></h2>\n    <h3>Personal Information</h3>\n    <p><b>Name:</b><span contenteditable =\"true\">".concat(name, "</span></p>\n    <p><b>Father's Name:</b><span contenteditable =\"true\">").concat(fathersname, "</span></p>\n    <p><b>Surname:</b><span contenteditable =\"true\">").concat(surname, "</span></p>\n    <p><b>Date of Birth:</b><span contenteditable =\"true\">").concat(dateofbirth, "</span></p>\n    <p><b>CNIC:</b><span contenteditable =\"true\">").concat(nic, "</span></p>\n    <p><b>Email:</b><span contenteditable =\"true\">").concat(email, "</span></p>\n    <p><b>Phone no:</b><span contenteditable =\"true\">").concat(phone, "</span></p>\n    <p><b>Address:</b><span contenteditable =\"true\">").concat(address, "</span></p>\n    <p><b>Marital Status:</b><span contenteditable =\"true\">").concat(status, "</span></p>\n    \n    <h3>Objective:</h3>\n    <p contenteditable=\"true\">").concat(objective, "</p>\n\n    <h3>Qualification:</h3>\n    <p contenteditable=\"true\">").concat(education, "</p>\n\n    <h3>Others Qualification:</h3>\n    <p contenteditable=\"true\">").concat(othereducation, "</p>\n\n    <h3>Experinece:</h3>\n    <p contenteditable=\"true\">").concat(experience, "</p>\n\n    <h3>Skills:</h3>\n    <p contenteditable=\"true\">").concat(skills, "</p>\n    ");
    // Display the generated resume 
    if (resumeDisplayElement) {
        resumeDisplayElement.innerHTML = resumeHTML;
    }
    else {
        console.error('The resume display element id missing...');
    }
});
