const allDetails = document.querySelectorAll("details");

allDetails.forEach(d => {
    d.addEventListener("toggle", () => {
        if (d.open) {
            allDetails.forEach(other => {
                if (other !== d) {
                    other.removeAttribute("open");
                }
            });
        }
    });
});
