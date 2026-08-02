async function loadContact() {

    try {

        const response = await fetch("data/contact.json");

        const contact = await response.json();

        document.getElementById("contact-content").innerHTML = `

            <div class="contact-line">

                <span>${contact.name}</span>

                <span>•</span>

                <span>${contact.department}</span>

                <span>•</span>

                <span>${contact.address}</span>

                <span>•</span>

                <span>${contact.phone}</span>

                <span>•</span>

                <span>${contact.mobile}</span>

                <span>•</span>

                <span>

                    ${contact.emails
                        .map(email =>
                            `<a href="mailto:${email}">${email}</a>`)
                        .join(", ")}

                </span>

            </div>

        `;

    }
    catch(error){

        console.error(error);

    }

}