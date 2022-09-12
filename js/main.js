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

    `tttttttttt`,

    `Hi! I'm Alex. And I am a developer of this team. I like front-end developing because I enjoy watching something new being born from a few lines of code. I find crushing bugs in code to be somewhat similar to solving riddles. And what can be better than a good riddle`,

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