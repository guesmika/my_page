async function loadEducation() {

    try {

        const response = await fetch("data/education.json");

        const education = await response.json();

        const container = document.getElementById("education-content");

        if (!container) return;

        container.innerHTML = "";

        education.forEach(item => {

            container.innerHTML += `
                <div class="education-item">
                    <h3>${item.degree}</h3>

                    <p><strong>Institution:</strong> ${item.institution}</p>

                    <p><strong>Distinction:</strong> ${item.distinction}</p>

                    <p><strong>Period:</strong> ${item.period}</p>
                </div>
            `;

        });

    }
    catch(error){

        console.error(error);

    }

}