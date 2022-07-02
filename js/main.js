const nav = document.querySelector('.nav');
const navBtn = document.querySelector('.hamburger');
const allNavLinks = document.querySelectorAll('.nav__link');

const handleNav = () => {
    navBtn.classList.toggle('is-active');
    nav.classList.toggle('nav--active');

    allNavLinks.forEach(link => {
        link.addEventListener('click', () =>{
            navMobile.classList.remove('nav--active')
        })
    })
}

navBtn.addEventListener('click', handleNav);