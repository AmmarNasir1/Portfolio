const menuIcon = document.querySelector('#menu-icon');
const navlinks = document.querySelector('.nav-links');

menuIcon.onclick = () => {
    navLinks.classList.toggle('active');
}