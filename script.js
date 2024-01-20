document.addEventListener("DOMContentLoaded", function () {
    const oval = document.getElementById("oval");
    const profileImage = document.getElementById("profile");

    const scrollToSection = (hash) => {
        const navLinks = document.querySelectorAll('.nav-link');
        
        switch (hash) {
            case "#aboutme":
                oval.style.width = "38vw";
                oval.style.height = "38vw";
                oval.style.left = "50%";
                profileImage.style.left = "50%";
                break;
            case "#education":
                oval.style.width = "20vw";
                oval.style.height = "20vw";
                oval.style.left = "28%";
                profileImage.style.left = window.innerWidth <= 1200 ? "200%" : "28%";
                break;
            case "#skills":
                oval.style.width = "200vw";
                oval.style.height = "200vw";
                profileImage.style.left = "200%";
                break;
            case "#contacts":
                oval.style.width = "200vw";
                oval.style.height = "200vw";
                profileImage.style.left = "200%";
                break;
            default:
                break;
        }

        navLinks.forEach(link => link.classList.remove('active'));

        const activeLink = document.querySelector(`.nav-link[href="${hash}"]`);
        if (activeLink) {
            activeLink.classList.add('active');
        }
    };

    const handleHashChange = () => {
        const newHash = window.location.hash;
        scrollToSection(newHash);
        localStorage.setItem("currentHash", newHash);
    };

    window.addEventListener("hashchange", handleHashChange);

    const storedHash = localStorage.getItem("currentHash");
    if (storedHash) {
        scrollToSection(storedHash);
    } else {
        scrollToSection("#aboutme");
    }
});
