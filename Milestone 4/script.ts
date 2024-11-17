// Get references to the form and display area
const form = document.getElementById('resume-form') as HTMLFormElement;
const resumeDisplayElement = document.getElementById('resume-display') as HTMLDivElement;

// Hanlde form submission
form.addEventListener('submit', (event: Event) => {
    event.preventDefault(); // prevent page reload

    // Collect input values 
    const name = (document.getElementById('name') as HTMLInputElement).value
    const fathersname = (document.getElementById('fathersname') as HTMLInputElement).value
    const surname = (document.getElementById('surname') as HTMLInputElement).value
    const dateofbirth= (document.getElementById('dateofbirth') as HTMLInputElement).value
    const nic = (document.getElementById('nic') as HTMLInputElement).value
    const email = (document.getElementById('email') as HTMLInputElement).value
    const phone = (document.getElementById('phone') as HTMLInputElement).value
    const address = (document.getElementById('address') as HTMLInputElement).value
    const status = (document.getElementById('status') as HTMLInputElement).value
    const objective = (document.getElementById('objective') as HTMLInputElement).value
    const education = (document.getElementById('education') as HTMLInputElement).value
    const othereducation = (document.getElementById('othereducation') as HTMLInputElement).value
    const experience = (document.getElementById('experience') as HTMLInputElement).value
    const skills = (document.getElementById('skills') as HTMLInputElement).value

    // Generate the resume content dynamically
    const resumeHTML = `
    <h2><b>Editable Resume</b></h2>
    <h3>Personal Information</h3>
    <p><b>Name:</b><span contenteditable ="true">${name}</span></p>
    <p><b>Father's Name:</b><span contenteditable ="true">${fathersname}</span></p>
    <p><b>Surname:</b><span contenteditable ="true">${surname}</span></p>
    <p><b>Date of Birth:</b><span contenteditable ="true">${dateofbirth}</span></p>
    <p><b>CNIC:</b><span contenteditable ="true">${nic}</span></p>
    <p><b>Email:</b><span contenteditable ="true">${email}</span></p>
    <p><b>Phone no:</b><span contenteditable ="true">${phone}</span></p>
    <p><b>Address:</b><span contenteditable ="true">${address}</span></p>
    <p><b>Marital Status:</b><span contenteditable ="true">${status}</span></p>
    
    <h3>Objective:</h3>
    <p contenteditable="true">${objective}</p>

    <h3>Qualification:</h3>
    <p contenteditable="true">${education}</p>

    <h3>Others Qualification:</h3>
    <p contenteditable="true">${othereducation}</p>

    <h3>Experinece:</h3>
    <p contenteditable="true">${experience}</p>

    <h3>Skills:</h3>
    <p contenteditable="true">${skills}</p>
    `;

    // Display the generated resume 
    if(resumeDisplayElement){
        resumeDisplayElement.innerHTML = resumeHTML;
    } else {
        console.error('The resume display element id missing...')
    }

});