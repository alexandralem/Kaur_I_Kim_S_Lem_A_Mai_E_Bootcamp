const hamburger = document.getElementById('hamburger');
const navUl = document.getElementById('nav-ul');

hamburger.addEventListener('click', () => {
    navUl.classList.toggle('show');
})

const   icon = document.querySelectorAll('.iconContainer'),
        thePhotos = document.getElementById('photos'),
        memberName = document.querySelector('#name'),
        bioInfo = document.querySelector('.bio-info');

let currentMember = '';
const bioText = [
    `Heyya! My name is Ishpreet. I work as a Graphic Designer in this company. I love to design modern and engaging logos, business cards, illustrations, layouts, magazines, product packaging and more. I put all my efforts to make the clients satisfied with my creativity.`,

    `hi, This is Sian Kim. I am currently working as an illustrator and visual designer. I want to visually express what my client imagines, and I want them to feel satisfied through my work.`,

    `hhhhhhhhh`,

    `rrrrrrrrrr.`
]

function animatePhotos() {
    
    thePhotos.style.right = `${this.dataset.offset * 300}px`;
    getBioText(this.classList, this.dataset.offset);

    currentMember = this.classList[1];
  }

  function getBioText(name, index) {
    console.log(name[1]);
    memberName.textContent = `${name[1]}`;
    bioInfo.textContent = bioText[index];
  }


  

  icon.forEach(icon => icon.addEventListener('click', animatePhotos));
