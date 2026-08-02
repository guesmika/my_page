async function loadAcademicLinks() {

    try {

        const response = await fetch("data/academicLinks.json");
        const links = await response.json();

        const container = document.getElementById("academic-links-content");

        container.innerHTML = "";

        links.forEach(link => {

            container.innerHTML += `
                <p>
                    ${link.icon}
                    <a href="${link.url}" target="_blank">
                        ${link.name}
                    </a>
                </p>
            `;

        });

    } catch (error) {

        console.error("Error loading academic links:", error);

    }

}