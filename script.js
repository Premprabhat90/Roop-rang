var tablinks = document.getElementsByClassName("tab-links");
var tabcontents = document.getElementsByClassName("tab-contents");
function opentab(opentab) {
    for (tablink of tablinks) {
        tablink.classList.remove("active-link");
    }

    for (tabcontent of tabcontents) {
        tabcontent.classList.remove("active-tab");
    }
    event.currentTarget.classList.add("active-link");
    document.getElementById(opentab).classList.add("active-tab");
}
let sidemeu = document.getElementById("sidemenu");
function openmenu() {
    sidemeu.style.right = "0";
}
function closenmenu() {
    sidemeu.style.right = "-200px";
}

const scriptURL =
    "https://script.google.com/macros/s/AKfycbwLqHcVBoyzeYnoI6LchKu8QVu0jhEbNP_Na3nKTlJZs-6ehKymU8n3xSzfTvQ8cbf8HQ/exec";
const form = document.forms["submit-to-google-sheet"];
const msg = document.getElementById("msg");

form.addEventListener("submit", (e) => {
    e.preventDefault();
    fetch(scriptURL, { method: "POST", body: new FormData(form) })
        .then((response) => {
            msg.innerHTML = "Message sent successfully";
            setTimeout(function () {
                msg.innerHTML = "";
            }, 5000);
            form.reset();
        })
        .catch((error) => console.error("Error!", error.Message));
});

const sr = ScrollReveal({
    distance: "60px",
    duration: 2500,
    delay: 400,
    reset: true,
});

sr.reveal(".logo", { delay: 200, origin: "top" });
sr.reveal(".hero-col-1", { delay: 200, origin: "left" });
sr.reveal(".hero-col-2", { delay: 200, origin: "right" });
sr.reveal(".about-col-1", { delay: 200, origin: "top" });
sr.reveal(".about-col-2", { delay: 200, origin: "right" });
sr.reveal(".first", { delay: 200, origin: "right" });
sr.reveal(".second", { delay: 200, origin: "left" });
sr.reveal(".threed", { delay: 200, origin: "bottam" });
sr.reveal(".sub-title", { delay: 200, origin: "left" });
sr.reveal(".work", { delay: 200, origin: "top" });
sr.reveal(".on", { delay: 200, origin: "right" });
sr.reveal(".social-icons", { delay: 200, origin: "top" });
sr.reveal(".contact-right", { delay: 200, origin: "left" });
