window.addEventListener("load", (el) => {
    [...Array(10).keys()].forEach(() => {
        img = document.createElement("img");
        img.src = "./images/what.svg";
        img.style.marginTop = (Math.random() * (window.innerHeight*0.95 - img.offsetHeight)) + "px";
        img.style.marginLeft = (Math.random() * (window.innerWidth - img.offsetWidth)) + "px";
        document.getElementById("backpic").appendChild(img);
    })

    var circle = document.getElementById('lightning');

    document.addEventListener('mousemove', function(event) {
        var mouseX = event.clientX;
        var mouseY = event.clientY;
    
        circle.style.left = mouseX - circle.offsetWidth / 2 + 'px';
        circle.style.top = mouseY - circle.offsetHeight / 2 + 'px';
    });

    Array.from(document.getElementsByClassName("contact")).forEach((contact) => {
        contact.addEventListener("click", (ev) => {
            const currentUrl = window.location.href; 
            switch (contact.id) {
                case "email":
                    window.location.href = "mailto:rhssh@rhssh.xyz&body=Hello!";
                    setTimeout(function() {
                        window.location.href = currentUrl;
                    }, 500);
                    break;
                
                case "twitter":
                    window.location.href = "https://twitter.com/nordrtp";
                    break;

                case "snapchat":
                    window.location.href = "https://snapchat.com/add/visualmedium";
                    break;

                case "discord":
                    navigator.clipboard.writeText("t1nklas");
                    document.getElementById("discords").classList.add("focused");
                    setTimeout(function() {
                        document.getElementById("discords").classList.remove("focused");
                    }, 500);
                    break;
            } 
        }) 
    })
})