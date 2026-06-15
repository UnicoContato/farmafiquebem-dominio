document.addEventListener('DOMContentLoaded', () => {
const header = document.getElementById('main-header');
const mobileMenuBtn = document.getElementById('mobile-menu-btn');
const mobileMenu = document.getElementById('mobile-menu');
const mobileLinks = mobileMenu.querySelectorAll('a');

const openModalBtn = document.getElementById('open-modal');
const closeModalBtns = [document.getElementById('close-modal'), document.getElementById('close-modal-btn')];
const modal = document.getElementById('privacy-modal');

let lastScrollTop = 0;

window.addEventListener('scroll', () => {
let scrollTop = window.pageYOffset || document.documentElement.scrollTop;

if (scrollTop > lastScrollTop && scrollTop > header.offsetHeight) {
header.style.transform = 'translateY(-100%)';
mobileMenu.classList.add('hidden');
} else {
header.style.transform = 'translateY(0)';
}
lastScrollTop = scrollTop;
});

mobileMenuBtn.addEventListener('click', () => {
mobileMenu.classList.toggle('hidden');
});

mobileLinks.forEach(link => {
link.addEventListener('click', () => {
mobileMenu.classList.add('hidden');
});
});

const toggleModal = () => {
if (modal.classList.contains('hidden')) {
modal.classList.remove('hidden');
document.body.style.overflow = 'hidden';
} else {
modal.classList.add('hidden');
document.body.style.overflow = '';
}
};

openModalBtn.addEventListener('click', toggleModal);

closeModalBtns.forEach(btn => {
if(btn) btn.addEventListener('click', toggleModal);
});

modal.addEventListener('click', (e) => {
if (e.target === modal) {
toggleModal();
}
});
});