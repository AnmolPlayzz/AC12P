const anchorTags = document.querySelectorAll('.navbar__desktop a');
const drawerTags = document.querySelectorAll(".drawer a")
const info = document.querySelector('#nb_c2');
anchorTags.forEach(anchor => {
    anchor.addEventListener('click', function(event) {

        // Remove active class from all anchor tags
        anchorTags.forEach(tag => tag.classList.remove('active','active1'))
        this.classList.add('active','active1');
        info.classList.remove('active');

    });
});
info.addEventListener('click', function(event) {
    anchorTags.forEach(tag => tag.classList.remove('active'));
    info.classList.add('active');
});
drawerTags.forEach(drawer => {
    drawer.addEventListener('click', function(event) {

        // Remove active class from all anchor tags
        drawerTags.forEach(tag => tag.classList.remove('active','active1'));

        // Add active class to clicked anchor tag
        this.classList.add('active','active1');
        info.classList.remove('active');

    });
});

const mnav = document.querySelector("#mnav");
const cross = document.querySelector("#cross");

const drawer = document.querySelector(".navbar__mobile .drawer");


mnav.addEventListener("click", () => {
        // if drawer is closed, open it
        mnav.style.transform = "translateY(100%)";
        cross.style.transform = "translateY(0%)";
        drawer.style.transform = "translateX(0%)";
});

cross.addEventListener("click", () => {
    // if drawer is closed, open it
    cross.style.transform = "translateY(-200%)";
    mnav.style.transform = "translateY(0%)";
    drawer.style.transform = "translateX(100%)";
});
const desktopLinks = document.querySelectorAll(".navbar__desktop a");
const mobileLinks = document.querySelectorAll(".navbar__mobile .drawer a");

// add click event listener to each mobile link
mobileLinks.forEach((link) => {
    link.addEventListener("click", () => {
        // activate the corresponding desktop link
        const targetId = link.getAttribute("href").slice(1);
        const targetLink = document.querySelector(`.navbar__desktop a[href="#${targetId}"]`);
        desktopLinks.forEach((link) => link.classList.remove("active", "active1"));
        console.log(targetLink.getAttribute("href"))
        if (targetLink.getAttribute("href")!="#about") {
            targetLink.classList.add("active", "active1");
        } else {
            document.querySelector("#nb_c2").classList.add("active", "active1");
        }
    });
});

// add click event listener to each desktop link
desktopLinks.forEach((link) => {
    link.addEventListener("click", () => {
        // activate the corresponding mobile link
        const targetId = link.getAttribute("href").slice(1);
        const targetLink = document.querySelector(`.navbar__mobile .drawer a[href="#${targetId}"]`);
        mobileLinks.forEach((link) => link.classList.remove("active", "active1"));
        targetLink.classList.add("active", "active1");
    });
});
