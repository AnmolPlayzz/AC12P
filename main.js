

hljs.initHighlightingOnLoad();
const anchorTags = document.querySelectorAll('.navbar__desktop a');
const drawerTags = document.querySelectorAll(".drawer a")
const info = document.querySelector('#nb_c2');
const preTags = document.querySelectorAll('.module');
preTags.forEach(preTag => {
    const moduleName = preTag.getAttribute("data-module-name");
    const scriptTag = document.createElement('script');
    scriptTag.type = "text/python";
    scriptTag.textContent = preTag.textContent;
    scriptTag.setAttribute("id", moduleName);
    preTag.insertAdjacentElement('afterend', scriptTag);
});
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
        document.querySelector(".drawer").style.transform = "translateX(100%)";
        document.querySelector("#cross").style.transform = "translateY(-200%)";
        document.querySelector("#mnav").style.transform = "translateY(0%)";
    });
});

const mnav = document.querySelector("#mnav");
const cross = document.querySelector("#cross");

const drawer = document.querySelector(".drawer");


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
const mobileLinks = document.querySelectorAll(".drawer a");

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
        const targetLink = document.querySelector(`.drawer a[href="#${targetId}"]`);
        mobileLinks.forEach((link) => link.classList.remove("active", "active1"));
        targetLink.classList.add("active", "active1");
    });
});

const home = document.querySelectorAll('a[href="#home"]');
home.forEach((link) => {
    link.addEventListener("click", () => {
        let main = document.querySelector(".current");
        main.style.opacity="0";
        main.style.transition="0.5s all ease";
        new Promise((resolve) => {
            setTimeout(() => {
                main.classList.remove("current");
                resolve();
            }, 500); // set the time for the transition to complete
        }).then(() => {
            new Promise((resolve) => {
                document.querySelector("#home").classList.add("current")
                resolve();
            }).then(() => {
                setTimeout(() => {
                    document.querySelector("#home").style.opacity="1"
                    document.querySelector("#home").style.transition="0.5s all ease";
                }, 500);
            });
        });
    });
});

const code1 = document.querySelectorAll('a[href="#code"]');
code1.forEach((link) => {
    link.addEventListener("click", () => {
        let main = document.querySelector(".current");
        main.style.opacity="0";
        main.style.transition="0.5s all ease";
        new Promise((resolve) => {
            setTimeout(() => {
                main.classList.remove("current");
                resolve();
            }, 500); // set the time for the transition to complete
        }).then(() => {
            new Promise((resolve) => {
                document.querySelector("#code").classList.add("current")
                resolve();
            }).then(() => {
                setTimeout(() => {
                    document.querySelector("#code").style.opacity="1"
                    document.querySelector("#code").style.transition="0.5s all ease";
                }, 500);
            });
        });
    });
});

const terminal = document.querySelectorAll('a[href="#terminal"]');
terminal.forEach((link) => {
    link.addEventListener("click", () => {
        let main = document.querySelector(".current");
        main.style.opacity="0";
        main.style.transition="0.5s all ease";
        new Promise((resolve) => {
            setTimeout(() => {
                main.classList.remove("current");
                resolve();
            }, 500); // set the time for the transition to complete
        }).then(() => {
            new Promise((resolve) => {
                document.querySelector("#terminal").classList.add("current")
                resolve();
            }).then(() => {
                setTimeout(() => {
                    document.querySelector("#terminal").style.opacity="1"
                    document.querySelector("#terminal").style.transition="0.5s all ease";
                }, 500);
            });
        });
    });
});

const ide = document.querySelectorAll('a[href="#ide"]');
ide.forEach((link) => {
    link.addEventListener("click", () => {
        let main = document.querySelector(".current");
        main.style.opacity="0";
        main.style.transition="0.5s all ease";
        new Promise((resolve) => {
            setTimeout(() => {
                main.classList.remove("current");
                resolve();
            }, 500); // set the time for the transition to complete
        }).then(() => {
            new Promise((resolve) => {
                document.querySelector("#webide").classList.add("current")
                resolve();
            }).then(() => {
                setTimeout(() => {
                    document.querySelector("#webide").style.opacity="1"
                    document.querySelector("#webide").style.transition="0.5s all ease";
                }, 500);
            });
        });
    });
});

const about = document.querySelectorAll('a[href="#about"]');
about.forEach((link) => {
    link.addEventListener("click", () => {
        let main = document.querySelector(".current");
        main.style.opacity="0";
        main.style.transition="0.5s all ease";
        new Promise((resolve) => {
            setTimeout(() => {
                main.classList.remove("current");
                resolve();
            }, 500); // set the time for the transition to complete
        }).then(() => {
            new Promise((resolve) => {
                document.querySelector("#about").classList.add("current")
                resolve();
            }).then(() => {
                setTimeout(() => {
                    document.querySelector("#about").style.opacity="1"
                    document.querySelector("#about").style.transition="0.5s all ease";
                }, 500);
            });
        });
    });
});

//code/buttons

const codeBlocks = document.querySelectorAll(".code-block");
var code = document.querySelector("code").textContent;
document.querySelectorAll("code").forEach(codeBlock => {
    var copyBtn = document.createElement("button");
    copyBtn.innerHTML = "Copy";
    copyBtn.style.marginLeft = "10px";
    copyBtn.classList.add("copy-btn")
    copyBtn.addEventListener("click", function() {
        navigator.clipboard.writeText(codeBlock.textContent).then(function() {
            const alert = document.querySelector(".copy-a")
            alert.classList.add("show-a")
            setTimeout(() => {
                alert.classList.remove("show-a");
            }, 5000);
        });
    });
    codeBlock.parentNode.insertBefore(copyBtn, codeBlock.nextSibling);
});

document.querySelector(".exp").addEventListener("click", function () {
    anchorTags.forEach(tag => tag.classList.remove('active','active1'))
    drawerTags.forEach(tag => tag.classList.remove('active','active1'));
    document.querySelectorAll("a[href=\"#code\"]").forEach(l => {
        l.classList.add('active', 'active1')
    })
});