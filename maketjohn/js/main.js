const nav = document.querySelector('#nav');
const navBtn = document.querySelector('#nav-btn');
const navBtnImg = document.querySelector('#nav-btn-img');

navBtn.onclick = () => {
    if (nav.classList.toggle('open')) {
        navBtnImg.src = "./images/icons/nav-close.svg";
    } else {
        navBtnImg.src = './images/icons/nav-open.svg';
    }
}

AOS.init({
    disable: 'phone'
    // once: true
});

let username = 'Вася' ;
let user = 'Rubi' ;
user = username;
console.log(username);