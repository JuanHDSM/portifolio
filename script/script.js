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