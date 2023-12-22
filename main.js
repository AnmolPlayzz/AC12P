document.querySelector(".python-pms").style.opacity="1"

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
document.querySelectorAll(".codeh").forEach(codeBlock => {
    const form = document.createElement("form")
    form.classList.add("comment-form")
    form.setAttribute("data-final-id",codeBlock.getAttribute("data-code-id"))
    form.innerHTML='<label for="comment">Comment:</label>\n' +
        '<textarea maxlength="969" id="comment" required></textarea>\n' +
        '\n' +
        '<button class="copy-btn post-btn" type="submit">Post</button>'
    form.addEventListener("submit", async (e) => {
        e.preventDefault()
    })
    codeBlock.appendChild(form)
});
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
    /*
    const div = document.createElement('div');
    div.classList.add("all-com")
    codeBlock.parentNode.parentNode.appendChild(div)

     */
    codeBlock.parentNode.insertBefore(copyBtn, codeBlock.nextSibling);
});

document.querySelector(".exp").addEventListener("click", function () {
    anchorTags.forEach(tag => tag.classList.remove('active','active1'))
    drawerTags.forEach(tag => tag.classList.remove('active','active1'));
    document.querySelectorAll("a[href=\"#code\"]").forEach(l => {
        l.classList.add('active', 'active1')
    })
});

/*
document.querySelectorAll(".codeh code").forEach(codeBlock => {
    var cmt = document.createElement("button");
    cmt.innerHTML = "Comment";
    cmt.style.marginLeft = "10px";
    cmt.classList.add("copy-btn", "com-btn")
    cmt.addEventListener("click", function() {
        console.log(codeBlock.parentNode.parentNode.getAttribute("data-code-id"))
    });
    codeBlock.parentNode.insertBefore(cmt, codeBlock.nextSibling);
});
*/
// function to fetch all comments
async function fetchComments() {
    try {
        const response = await fetch('/.netlify/functions/fetch-com');

        if (response.ok) {
            const comments = await response.json();
            console.log(`Retrieved ${comments.length} comments`);
            return comments;
        } else {
            console.error('Error fetching comments');
            return [];
        }
    } catch (err) {
        console.error(err);
        return [];
    }
}

// get all code blocks on the page
const codeBlocks = document.querySelectorAll('.codeh');
/*
// fetch all comments and add them to their respective code blocks
(async function() {
    const comments = await fetchComments();
    comments.forEach((commentObj) => {
        const [com, key] = Object.entries(commentObj);
        const comment = key[1]

        console.log(key)
        const codeBlock = document.querySelector(`[data-code-id="${comment.codeId}"] pre`);
        if (codeBlock) {
            const commentList = codeBlock.nextElementSibling.nextElementSibling;
            const divItem = document.createElement('div');
            divItem.classList.add("com-div")
            const auth = document.createElement("h6")
            auth.innerText=comment.uName
            auth.classList.add("com-auth")
            divItem.appendChild(auth)
            const com = document.createElement("p")
            com.innerText=comment.content
            com.classList.add("com-text")
            divItem.appendChild(com)
            commentList.appendChild(divItem);
        }
    });
})();

 */

function appendDiv() {
    return new Promise((resolve, reject) => {
        document.querySelectorAll("form").forEach(e => {
            const div = document.createElement('div');
            div.classList.add("all-com")
            e.parentNode.appendChild(div)
        })
        resolve();
    });
}
appendDiv().then(() => {
    (async function () {
        const comments = await fetchComments();
        comments.forEach((commentObj) => {
            const [com, key] = Object.entries(commentObj);
            const comment = key[1]

            console.log(key)
            const codeBlock = document.querySelector(`[data-code-id="${comment.codeId}"]`);
            if (codeBlock) {
                const commentList = codeBlock.lastElementChild;
                const divItem = document.createElement('div');
                divItem.classList.add("com-div")
                const auth = document.createElement("h6")
                auth.innerText = comment.uName
                auth.classList.add("com-auth")
                divItem.appendChild(auth)
                const com = document.createElement("p")
                com.innerText = comment.content
                com.classList.add("com-text")
                divItem.appendChild(com)
                commentList.appendChild(divItem);
            }
        });
    })();
});


document.querySelectorAll(".post-btn").forEach(btn => {
    btn.addEventListener("click", async function() {
        const user = netlifyIdentity.currentUser();
        btn.disabled=true
        if (user) {
            if (btn.previousElementSibling.value && btn.previousElementSibling.value.trim().length != 0) {
                const formData = {
                    codeId: `${btn.parentNode.getAttribute("data-final-id")}`,
                    content: `${btn.previousElementSibling.value}`,
                    uEmail: `${user.email}`,
                    uName: `${user.user_metadata.full_name}`
                };
                console.log(JSON.stringify(formData))

                const response = await fetch('/.netlify/functions/post-com', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': `Bearer ${netlifyIdentity.currentUser().token.access_token}`
                    },
                    body: `${JSON.stringify(formData)}`,
                });

                const result = await response.json();
                console.log(result)
                await fetchComments()
                const codeBlocks = document.querySelectorAll('.codeh');
                await (async function () {
                    const comments = await fetchComments();
                    const blocks = document.querySelectorAll(`.codeh > .all-com`);

                    blocks.forEach((b) => {
                        console.log(b)
                        b.parentNode.removeChild(b)
                    })
                    document.querySelectorAll("form").forEach(codeBlock => {
                        const div = document.createElement('div');
                        div.classList.add("all-com")
                        codeBlock.parentNode.appendChild(div)
                    });
                    comments.forEach((commentObj) => {
                        const [com, key] = Object.entries(commentObj);
                        const comment = key[1]

                        console.log(key)
                        const codeBlock = document.querySelector(`[data-code-id="${comment.codeId}"]`);
                        if (codeBlock) {
                            const commentList = codeBlock.lastElementChild;
                            console.log(commentList)
                            const divItem = document.createElement('div');
                            divItem.classList.add("com-div")
                            const auth = document.createElement("h6")
                            auth.innerText = comment.uName
                            auth.classList.add("com-auth")
                            divItem.appendChild(auth)
                            const com = document.createElement("p")
                            com.innerText = comment.content
                            com.classList.add("com-text")
                            divItem.appendChild(com)
                            commentList.appendChild(divItem);
                        }
                    });


                })();

            } else {
                alert("Invalid text.")
            }
        } else {
            alert("Sign up/Log in to comment.")

            console.log('User is not logged in');
        }
        console.log(btn.parentNode.getAttribute("data-final-id"))
        btn.disabled=false
    });
});

// connect to WebSocket and listen for new comments
if (localStorage.getItem("accepted")===null) {
    document.querySelector(".comment-rules").style.display="flex"
    document.querySelector(".com-rules-acc").addEventListener("click", () => {
        localStorage.setItem("accepted", "1");
        document.querySelector(".comment-rules").style.display="none"
    })
}



// get the channel to subscribe to
const ably = new Ably.Realtime('9B841g.wqnpkQ:yhJapCSFPdYzQPqdCoQAXFohpj3DFG8mi0HiB9arTxU');
ably.connection.once('connected');
const channel = ably.channels.get('com');


/*
  Subscribe to a channel.
  The promise resolves when the channel is attached
  (and resolves synchronously if the channel is already attached).
*/
channel.subscribe('comment', async (message) => {
    if (message.data == "added") {
        await fetchComments()
        const codeBlocks = document.querySelectorAll('.codeh');
        await (async function () {
            const comments = await fetchComments();
            const blocks = document.querySelectorAll(`.codeh > .all-com`);

            blocks.forEach((b) => {
                console.log(b)
                b.parentNode.removeChild(b)
            })
            document.querySelectorAll("form").forEach(codeBlock => {
                const div = document.createElement('div');
                div.classList.add("all-com")
                codeBlock.parentNode.appendChild(div)
            });
            comments.forEach((commentObj) => {
                const [com, key] = Object.entries(commentObj);
                const comment = key[1]

                console.log(key)
                const codeBlock = document.querySelector(`[data-code-id="${comment.codeId}"]`);
                if (codeBlock) {
                    const commentList = codeBlock.lastElementChild;
                    console.log(commentList)
                    const divItem = document.createElement('div');
                    divItem.classList.add("com-div")
                    const auth = document.createElement("h6")
                    auth.innerText = comment.uName
                    auth.classList.add("com-auth")
                    divItem.appendChild(auth)
                    const com = document.createElement("p")
                    com.innerText = comment.content
                    com.classList.add("com-text")
                    divItem.appendChild(com)
                    commentList.appendChild(divItem);
                }
            });
        })();
    }
});
codeTabs = document.querySelectorAll(".code-tabs div")
codeTabs.forEach(tab => {
    tab.addEventListener('click', function(event) {

        // Remove active class from all anchor tags
        codeTabs.forEach(tag => tag.classList.remove('cur-tab'));

        // Add active class to clicked anchor tag
        this.classList.add('cur-tab');

    });
});

const sqlth = document.querySelector('.cd-sql');
sqlth.addEventListener("click", () => {
    let main = document.querySelector(".code-cur");
    main.style.opacity="0";
    main.style.transition="0.5s all ease";
    new Promise((resolve) => {
        setTimeout(() => {
            main.classList.remove("code-cur");
            resolve();
        }, 500); // set the time for the transition to complete
    }).then(() => {
        new Promise((resolve) => {
            document.querySelector(".sql-pms").classList.add("code-cur")
            resolve();
        }).then(() => {
            setTimeout(() => {
                document.querySelector(".sql-pms").style.opacity="1"
                document.querySelector(".sql-pms").style.transition="0.5s all ease";
            }, 500);
        });
    });
});
const pyth = document.querySelector('.cd-py');
pyth.addEventListener("click", () => {
    let main = document.querySelector(".code-cur");
    main.style.opacity="0";
    main.style.transition="0.5s all ease";
    new Promise((resolve) => {
        setTimeout(() => {
            main.classList.remove("code-cur");
            resolve();
        }, 500); // set the time for the transition to complete
    }).then(() => {
        new Promise((resolve) => {
            document.querySelector(".python-pms").classList.add("code-cur")
            resolve();
        }).then(() => {
            setTimeout(() => {
                document.querySelector(".python-pms").style.opacity="1"
                document.querySelector(".python-pms").style.transition="0.5s all ease";
            }, 500);
        });
    });
});
const sqpyth = document.querySelector('.cd-py-sql');
sqpyth.addEventListener("click", () => {
    let main = document.querySelector(".code-cur");
    main.style.opacity="0";
    main.style.transition="0.5s all ease";
    new Promise((resolve) => {
        setTimeout(() => {
            main.classList.remove("code-cur");
            resolve();
        }, 500); // set the time for the transition to complete
    }).then(() => {
        new Promise((resolve) => {
            document.querySelector(".py-sql-pms").classList.add("code-cur")
            resolve();
        }).then(() => {
            setTimeout(() => {
                document.querySelector(".py-sql-pms").style.opacity="1"
                document.querySelector(".py-sql-pms").style.transition="0.5s all ease";
            }, 500);
        });
    });
});
