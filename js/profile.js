async function loadProfile() {

    try {

        const response = await fetch("data/profile.json");
        const profile = await response.json();

        const container = document.getElementById("profile-content");

        container.innerHTML = `

        <div class="profile-container">

            <div class="profile-photo">

                <img src="${profile.photo}" alt="${profile.name}">

            </div>

            <div class="profile-info">

                <h1>${profile.name}</h1>

                <h2>${profile.academicPosition}</h2>

                <h3>${profile.institution}</h3>

                <p>${profile.biography}</p>

                
                <p class="research-interests">
                <span style="color:#0A4D8C;">Research Interests:</span>
                ${profile.researchInterests.join(", ")}
                </p>


                <p class="profesional-memberships">
                <span style="color:#0A4D8C;">Professional Situation:</span>
                ${profile.professionalMemberships.join(" | ")}
                </p>

                
                <p class="academic-ids">
                <span style="color:#0A4D8C;">Academic Profiles:</span>
                 <strong>:</strong>
                 ${profile.academicIds.map(link => `
                 <a href="${link.url}" target="_blank">${link.name}</a>
                 `).join(" | ")}
                </p>

                <a class="cv-button"
                   href="${profile.cv}"
                   target="_blank">

                    Download CV

                </a>

            </div>

            <div class="profile-qr">

                <img src="${profile.qr}" alt="QR Code">

            </div>

        </div>

        `;

    }

    catch(error){

        console.error("Unable to load profile:", error);

    }

}