document.addEventListener("DOMContentLoaded", () => {

    if(typeof loadProfile === "function"){
        loadProfile();
    }

    if(typeof loadEducation === "function"){
        loadEducation();
    }

    if(typeof loadTeaching === "function"){
        loadTeaching();
    }

    if(typeof loadAdministration === "function"){
        loadAdministration();
    }

    if(typeof loadAcademicLinks === "function"){
        loadAcademicLinks();
    }

    if(typeof loadResearch === "function"){
        loadResearch();
    }

    if(typeof loadContact === "function"){
        loadContact();
    }

});


