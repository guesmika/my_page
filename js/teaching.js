async function loadTeaching() {

    try {

        const response = await fetch("data/teaching.json");

        const teaching = await response.json();

        const container = document.getElementById("teaching-content");

        if (!container) return;

        container.innerHTML = "";

        teaching.forEach(item => {

            container.innerHTML += `
                <div class="education-item">
                    <h3>${item.module}</h3>

                    <p><strong>Level:</strong> ${item.level}</p>

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