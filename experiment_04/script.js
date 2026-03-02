


document.getElementById("jobForm").addEventListener("submit", function(e) {
    e.preventDefault();

    const title = document.getElementById("title").value;
    const company = document.getElementById("company").value;
    const location = document.getElementById("location").value;
    const description = document.getElementById("description").value;

    const card = document.createElement("div");
    card.classList.add("job-card");

    card.innerHTML = `
        <h3>${title}</h3>
        <p><strong>Company:</strong> ${company}</p>
        <p><strong>Location:</strong> ${location}</p>
        <p>${description}</p>
    `;
    document.getElementById("jobCards").appendChild(card);

    document.getElementById("jobForm").reset();
});