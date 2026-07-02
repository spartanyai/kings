let menu = document.querySelector('#menu-icon');
let navlist = document.querySelector('.navlist');

menu.onclick = () => {
    menu.classList.toggle('bx-x');
    navlist.classList.toggle('open')
}

const sr = ScrollReveal ({
    distance: '65px',
    duration: 2600,
    delay: 450,
    reset: true
});

sr.reveal('.hero-text',{delay:200, origin:'top'});
sr.reveal('.hero-img',{delay:100, origin:'top'});
sr.reveal('.icons',{delay:600, origin:'left'});
sr.reveal('.scroll-down',{delay:100, origin:'right'});

const heroSection = document.getElementById('hero-section')

const heroTitle = document.getElementById('hero-title');
const heroDesc = document.getElementById('hero-desc');
const heroImage = document.getElementById('hero-image');
const herolead = document.getElementById('hero-lead');
const herosub = document.getElementById('hero-sub');

const btnking1 = document.querySelector('.king1')
const btnking2 = document.querySelector('.king2')
const btnking3 = document.querySelector('.king3')
const btnking4 = document.querySelector('.king4')

const btntew1 = document.querySelector('.tew1')
const btntew2 = document.querySelector('.tew2')
const btntew3 = document.querySelector('.tew3')
const btntew4 = document.querySelector('.tew4')

// 2. ຟັງຊັນສຳລັບປ່ຽນຂໍ້ມູນແບບມີ Transition .55s
function changeHeroContent(newTitle, newDesc, newImgSrc) {
    // ກົດປຸ່ມປຸບ -> ໃຫ້ຈາງຫາຍໄປກ່ອນ (Fade Out)
    heroSection.classList.add('fade');

    // ໜ່ວງເວລາໄວ້ 250 ມິນລິວິນາທີ (ໃຫ້ມັນຈາງລົງເຄິ່ງໜຶ່ງກ່ອນ ແລ້ວປ່ຽນຂໍ້ມູນທັນທີ)
    setTimeout(() => {
        heroTitle.textContent = newTitle;
        heroDesc.innerHTML = newDesc;
        heroImage.src = newImgSrc;

        // ປ່ຽນຂໍ້ມູນແລ້ວ -> ເອົາ class fade ອອກ ເພື່ອໃຫ້ມັນຄ່ອຍໆສະແດງຂຶ້ນມາ (Fade In)
        heroSection.classList.remove('fade');
    }, 250); 
}

btnking1.addEventListener('click', () => {
    changeHeroContent( 
        'King Go', 
        'ตอนนี้ King กำลังจะได้รับ RTX2234 จาก Spy', 
        './image/king01-removebg-preview.png'
    );
});

btnking2.addEventListener('click', ()=>{
    changeHeroContent( 
        'King back', 
        'นี่มันสุดยอด แต่เป็นสุดยอดในแบบย้อนยุค', 
        './image/king02-removebg-preview.png'
    );
});

btnking3.addEventListener('click', ()=>{
    changeHeroContent(
        'Kingger',
        'King ที่เป็น kingger',
        './image/kinger01-removebg-preview.png'
    );
});

btnking4.addEventListener('click', ()=>{
    changeHeroContent(
        'Kingging',
        'King King King King King King King King King <br> King King King King King King King King King King King',
        './image/king.png'
    );
});

btntew1.addEventListener('click', () => {
    changeHeroContent( 
        'Tew', 
        'Tew Tew Tew Tew Tew Tew Tew Tew Tew Tew Tew Tew <br> Tew Tew Tew Tew Tew Tew Tew Tew Tew Tew Tew Tew', 
        './image/tew04-removebg-preview.png'
    );
});

btntew2.addEventListener('click', () => {
    changeHeroContent( 
        'Tew angry', 
        'Tew โมโหแล้ว 😡', 
        './image/tew01-removebg-preview.png'
    );
});

btntew3.addEventListener('click', () => {
    changeHeroContent( 
        'Tew Cow', 
        'Tew ที่เป็น วัว ', 
        './image/tew02-removebg-preview.png'
    );
});

btntew4.addEventListener('click', () => {
    changeHeroContent( 
        'Tew LGBTQ+', 
        'Tew ที่เป็น LGBTQ+ ', 
        './image/tew03-removebg-preview.png'
    );
});