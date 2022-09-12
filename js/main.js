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


    `Hi! I'm Alex. And I am a developer of this team. I like front-end developing because I enjoy watching something new being born from a few lines of code. I find crushing bugs in code to be somewhat similar to solving riddles. And what can be better than a good riddle`,

    
    ``Hi, Evica strives to become a become a versatile designer capable of various styles and art mediums. Whether it is creating website, indie games, prints, animations and many other forms of digital media, she loves creating a product exuding her style while staying authentic to the message and goal of the task. In fact, she is passionate on projects that strikes the perfect balance between user experience and design. She is ready to take on anything with her pink pastel attitude.`,

.`
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
