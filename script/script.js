function goTo() {
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: 'smooth'
  });
}

function toTop() {
  if(window.scrollY <= 300) {
    document.querySelector('.scroll-to').style.display = 'none';
  } else {
    document.querySelector('.scroll-to').style.display = 'block';
    if(window.screenY >= 670) {
      document.querySelector('.scroll-to').style.color = 'white'
    }
  }
}

window.addEventListener('scroll', toTop);
//

let list = document.querySelectorAll('ul li a');
function activeLink(){
  list.forEach((item) => 
  item.classList.remove('active'));
  this.classList.add('active');
} 
list.forEach((item) => 
item.addEventListener('mouseover', activeLink));

new TypeIt(".typeIt", {
  strings: "Juan Holy",
  speed: 300,
  delay: 900,
}).go()