async function loadAdministration() {

    try {

        const response = await fetch("data/administration.json");

        const administration = await response.json();

        const container = document.getElementById("administration-content");

        if (!container) return;

        container.innerHTML = "";

        administration.forEach(item => {

            container.innerHTML += `
                <div class="education-item">
                    <h3>${item.position}</h3> 
                    <p><strong>Institution:</strong> ${item.institution}</p>
                    <p><strong>Period:</strong> ${item.period}</p>
                </div>
            `;

        });

    }
    catch(error){

        console.error(error);

    }

}