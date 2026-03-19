
function theme() {
    document.body.classList.toggle("dark-mode");
}


document.getElementById("jobForm").addEventListener("submit", function (e) {
    e.preventDefault(); 
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const experience = document.getElementById("experience").value;
    const role = document.getElementById("role").value;
    const profile = document.getElementById("profile");

    profile.innerHTML = `
        <h3>Application Submitted Successfully!</h3>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Experience:</strong> ${experience} Years</p>
        <p><strong>Applied Role:</strong> ${role}</p>
    `;

   
    document.getElementById("jobForm").reset();
});