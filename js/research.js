/*
==========================================================
research.js
Academic Portfolio
==========================================================
*/

async function loadResearch() {

    const categories = [

        {
            title: "International Publications",
            file: "internationalPublications.json"
        },
        {
            title: "National Publications",
            file: "nationalPublications.json"
        },
        {
            title: "International Communications",
            file: "internationalCommunications.json"
        },
        {
            title: "National Communications",
            file: "nationalCommunications.json"
        },
        {
            title: "Books",
            file: "books.json"
        },
        {
            title: "Book Chapters",
            file: "chapters.json"
        },
        {
            title: "Research Projects",
            file: "researchProjects.json"
        },
        {
            title: "PhD Supervision",
            file: "phdSupervision.json"
        },
        {
            title: "Master/Magister/Engineer Supervision",
            file: "masterSupervision.json"
        },
        {
            title: "Review/Evaluation Activities",
            file: "reviewActivities.json"
        }

    ];

    const container = document.getElementById("research-content");

    container.innerHTML = "";

    for (const category of categories) {

        try {

            const response = await fetch("data/research/" + category.file);

            if (!response.ok) continue;

            const data = await response.json();

            if (data.length === 0) continue;

            let html = `
                <div class="research-category">

                    <h3>${category.title}</h3>

                    <ol class="research-list">
            `;

            data.forEach(item => {

                html += `
                    <li>

                        ${item.citation}

                        ${item.doi
                            ? ` | <a href="${item.doi}" target="_blank">DOI</a>`
                            : ""
                        }

                        ${item.pdf
                            ? ` | <a href="${item.pdf}" target="_blank">PDF</a>`
                            : ""
                        }

                    </li>
                `;

            });

            html += `
                    </ol>

                </div>
            `;

            container.innerHTML += html;

        }
        catch (error) {

            console.error("Cannot load " + category.file, error);

        }

    }

}