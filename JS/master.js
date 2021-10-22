let mainCol = localStorage.getItem('color_option');
let colOp = document.querySelectorAll('.option-box li');

if (mainCol !== null) {
    document.documentElement.style.setProperty('--main--color', mainCol);
    colOp.forEach(function (li) {
        li.classList.remove('active');

        if (li.dataset.color === mainCol) {
            li.classList.add('active')
        }
    });

}
var randomBackOp = true;
let randomBackButton = document.querySelectorAll('.random-background span');
let backgroundInterval;
let ranBackOp = localStorage.getItem("Back_Op");
if (ranBackOp !== null) {
    randomBackButton.forEach((li) => {
        li.classList.remove('active');
        if (li.dataset.back === ranBackOp) {
            li.classList.add('active');
        }
        if (ranBackOp === "yes") {
            randomBackOp = true;
            randomizeBack();
        }
        else {
            randomBackOp = false;
            clearInterval(backgroundInterval);
        }
    })
}
let landing = document.querySelector("div.landing");
let log = document.querySelector("header .logo img");
console.log(landing)


let btn = document.querySelector('.gear-container');
let set = document.querySelector('.setting-box');
let gear = document.querySelector('.setting-box i');
btn.addEventListener("click", function () {
    set.classList.toggle('opened');
    gear.classList.toggle('fa-spin');
    if (set.classList.contains('opened')) {
        log.style.display = "none";
    }
    else {
        log.style.display = "block";
    }
});


colOp.forEach(li => {
    li.addEventListener("click", function (li) {
        colOp.forEach((li) => li.classList.remove('active'));
        this.classList.add('active');
        document.documentElement.style.setProperty('--main--color', li.target.dataset.color);
        localStorage.setItem('color_option', li.target.dataset.color)
    })
})

let arrImg = ["business_plan-wallpaper-1920x1080.jpg", "coffee_break_2-wallpaper-1920x1080.jpg", "imac-wallpaper-1920x1080.jpg", "workspace_2-wallpaper-1920x1080.jpg"];
randomBackButton.forEach(span => {
    span.addEventListener("click", function (span) {
        randomBackButton.forEach((span) => {
            span.classList.remove('active');
        })
        span.target.classList.add('active');
        if (span.target.dataset.back === "yes") {
            randomBackOp = true;
            randomizeBack();
            localStorage.setItem("Back_Op", "yes");
        }
        else {
            randomBackOp = false;
            clearInterval(backgroundInterval);
            localStorage.setItem("Back_Op", "no");
        }
    })
});
function randomizeBack() {
    if (randomBackOp === true) {
        backgroundInterval = setInterval(() => {
            let rand = Math.floor(Math.random() * arrImg.length);
            landing.style.backgroundImage = 'url("imgs/' + arrImg[rand] + '")';

        }, 4000);
    }
}
randomizeBack();



let aboutImg = document.querySelector('.about-me .image-box img');
let skillsMain1 = document.querySelector(".skills main:nth-of-type(1)");
let skillsMain2 = document.querySelector('.skills main:nth-of-type(2)')
let featImgs = document.querySelectorAll('.feat-box img');
let featH4 = document.querySelectorAll('.feat-box h4');
let featP = document.querySelectorAll('.feat-box p');
window.addEventListener('scroll', function () {
    if (window.scrollY > 290) {
        aboutImg.classList.add('active');
        document.querySelector('.about-me h2').classList.add('active');
    }
    if (window.scrollY > 860) {
        skillsMain1.classList.add('active');
        skillsMain2.classList.add('active');
        document.querySelector('.skills h2').classList.add('active');

    }
    if (window.scrollY > 1100) {
        document.querySelector('.features h2').classList.add('active');
        featImgs.forEach((li) => {
            li.classList.add('active');
        })
        featP.forEach((li) => {
            li.classList.add('active');
        })
        featH4.forEach((li) => {
            li.classList.add('active');
        })
    }
    if (window.scrollY > 1900) {
        document.querySelector('.projects h2').classList.add('active')
    }
    if (window.scrollY > 2600) {
        document.querySelector('.contact h2').classList.add('active')
    }
}
);

let skills = document.querySelector('.skills');
window.onscroll = function () {
    let skillsOffsetTop = skills.offsetTop;
    if (window.scrollY > (skillsOffsetTop + skills.offsetHeight - window.innerHeight)) {
        let mySpan = this.document.querySelectorAll('.skills span');
        mySpan.forEach((li) => {
            li.style.width = `${li.dataset.progress}`;
        })
    }
}

let bullets = document.querySelectorAll('.nav-bullets .bullet');
let headerLi = document.querySelectorAll('header li');
function scrollToSomeWhere(ele) {
    ele.forEach(e => {
        e.addEventListener('click', (e) => {
            e.preventDefault();
            document.querySelector(e.target.dataset.section).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
}

scrollToSomeWhere(bullets);
scrollToSomeWhere(headerLi);


let showBul = document.querySelectorAll('.option-box:nth-child(3) span');
let bulletCon = document.querySelector('.nav-bullets');
let bulletLocalItem = localStorage.getItem('bullet-option');
if (bulletLocalItem !== null) {
    if (bulletLocalItem === "block") {
        bulletCon.style.display = 'block';
        document.querySelector('.option-box:nth-child(3) .yes').classList.add('active');
    } else {
        bulletCon.style.display = 'none';
        document.querySelector('.option-box:nth-child(3) .yes').classList.remove('active');
        document.querySelector('.option-box:nth-child(3) .no').classList.add('active');
    }
}
showBul.forEach((e) => {
    e.addEventListener('click', (e) => {
        showBul.forEach((e) => {
            e.classList.remove('active')
        })
        e.target.classList.add('active');
        if (e.target.dataset.disp === "block") {
            bulletCon.style.display = 'block';
            localStorage.setItem('bullet-option', 'block');
        } else {
            bulletCon.style.display = 'none';
            localStorage.setItem('bullet-option', 'none');
        }
    })
})

document.querySelector('.settings-container button').onclick = function () {
    localStorage.removeItem('bullet-option');
    localStorage.removeItem('color_option');
    localStorage.removeItem('Back_Op');
    window.location.reload();
}
document.querySelector('.toggle-menu').addEventListener('click', function (e) {
    e.stopPropagation();
    document.querySelector('.links').classList.toggle('open');
    this.classList.toggle('active');
})
document.addEventListener('click', function (e) {
    if (e.target !== document.querySelector('.toggle-menu') && e.target !== document.querySelector('.landing ul li')) {
        document.querySelector('.links').classList.remove('open');
        document.querySelector('.toggle-menu').classList.remove('active');
    }
})
document.querySelector('.landing ul ').onclick = function (e) {
    e.stopPropagation();
}
