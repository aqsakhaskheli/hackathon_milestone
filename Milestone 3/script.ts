// Fetch form and output elements
const resumeForm = document.getElementById("resume-form") as HTMLFormElement;
const resumeOutput = document.getElementById("resumeOutput") as HTMLDivElement;

// Function to generate and display the resume
function generateResume(event: Event): void {
  event.preventDefault(); // Prevent form submission

  // Get all input values from the form
  const name = (document.getElementById("name") as HTMLInputElement).value;
  const fathersName = (document.getElementById("fathersname") as HTMLInputElement).value;
  const surname = (document.getElementById("surname") as HTMLInputElement).value;
  const dateofbirth = (document.getElementById("dateofbirth") as HTMLInputElement).value;
  const nic = (document.getElementById("nic") as HTMLInputElement).value;
  const email = (document.getElementById("email") as HTMLInputElement).value;
  const phone = (document.getElementById("phone") as HTMLInputElement).value;
  const address = (document.getElementById("address") as HTMLInputElement).value;
  const status = (document.getElementById("status") as HTMLInputElement).value;
  const objective = (document.getElementById("objective") as HTMLInputElement).value;
  const education = (document.getElementById("education") as HTMLTextAreaElement).value;
  const othereducation = (document.getElementById("othereducation") as HTMLInputElement).value;
  const experience = (document.getElementById("experience") as HTMLTextAreaElement).value;
  const skills = (document.getElementById("skills") as HTMLTextAreaElement).value;

  // Generate resume content
  const resumeHTML = `
    <h2>Resume</h2>
    <p><b>Name:</b> ${name}</p>
    <p><b>Father's Name:</b> ${fathersName}</p>
    <p><b>Surname:</b> ${surname}</p>
    <p><b>Date Of Birth:</b> ${dateofbirth}</p>
    <p><b>CNIC:</b> ${nic}</p>
    <p><b>Email:</b> ${email}</p>
    <p><b>Phone Number:</b> ${phone}</p>
    <p><b>Address:</b> ${address}</p>
    <p><b>Marital Status:</b> ${status}</p>

    <h3>Objective:</h3>
    <p>${objective}</p>

    <h3>Qualification:</h3>
    <p>${education}</p>

    <h3>Other Qualification:</h3>
    <p>${othereducation}</p>

    <h3>Work Experience</h3>
    <p>${experience}</p>

    <h3>Skills</h3>
    <p>${skills}</p>
  `;

  // Display resume
  resumeOutput.innerHTML = resumeHTML;
}

// Attach event listener to form
resumeForm.addEventListener("submit", generateResume);
