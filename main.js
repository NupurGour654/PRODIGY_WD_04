document.addEventListener("DOMContentLoaded", function() {
    // animation for the home section
    new Typed(".text", {
        strings: ["Data Analyst", "Full Stack Developer", "Database Manager", "Python Programmer"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });

    // Show skill progress statistics
    const progressBars = document.querySelectorAll(".progress-line span");
    progressBars.forEach(bar => {
        const width = bar.getAttribute("style");
        bar.style.width = 0;
        setTimeout(() => {
            bar.style.width = width.split(":")[1];
        }, 500);
    });

    // Show "top again" button on scroll
    const topButton = document.querySelector(".top");
    window.addEventListener("scroll", () => {
        if (window.pageYOffset > 300) {
            topButton.style.display = "block";
        } else {
            topButton.style.display = "none";
        }
    });
});
