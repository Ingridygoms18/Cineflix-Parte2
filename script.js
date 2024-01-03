const buttonMobile = document.querySelector('button');
function toggleMenu() {
   const nav = document.querySelector('nav');
   nav.classList.toggle("active");
}

const carousel = document.querySelector(".wrapper"),
firstImg = carousel.querySelectorAll("img")[0];
arrowIcons = document.querySelectorAll(".wrapper i");

let isDragStart = false, prevPageX, prevScrollLeft;

const showHideIcons = () => {
   let scrollWidth = carousel.scrollWidth - carousel.clientWidth;
    arrowIcons[0].style.display = carousel.scrollLeft == 0 ? "none" : "block";
    arrowIcons[1].style.display = carousel.scrollLeft == scrollWidth ? "none" : "block";
}

arrowIcons.forEach(icon => {
    icon.addEventListener("click", () => {
        let firstImgWidth = firstImg.clientWidth + 14;
        carousel.scrollLeft += icon.id == "left" ? -firstImgWidth : firstImgWidth;
        setTimeout(() => showHideIcons(), 60);
    });
});

const dragStart = (e) => {
    isDragStart = true;
    prevPageX = e.pageX;
    prevScrollLeft = carousel.scrollLeft;
}

const dragging = (e) => {
    if(!isDragStart) return;
    e.preventDefault();
    carousel.classList.add("dragging");
    let positionDiff = e.pageX - prevPageX;
    carousel.scrollLeft = prevScrollLeft - positionDiff;
    showHideIcons();
}

const dragStop = () => {
    isDragStart = false;
    carousel.classList.remove("dragging");
}

carousel.addEventListener("mousedown", dragStart);
carousel.addEventListener("mousemove", dragging);
carousel.addEventListener("mouseup", dragStop);
carousel.addEventListener("mouseleave", dragStop);

function fazerLogin() {
    var name = document.getElementById('name').value;
    var password = document.getElementById('password').value;
    if (name === 'Nome' && password === 'Senha') {
      alert('Login feito com sucesso!');
    } else {
      alert('Usuário ou senha incorretos. Tente novamente.');
    }
  }

function fazerCadastro() {
    var name = document.getElementById('name').value;
    var sname = document.getElementById('sname').value;
    var email = document.getElementById('email').value;
    var senha = document.getElementById('senha').value;
    var adress = document.getElementById('adress').value;
    var phone = document.getElementById('phone').value;
    if (name === 'name' && sname === 'snome' && email === 'email' && senha === 'senha' && adress === 'adress' && phone === 'phone') {
        alert('Cadastro feito com sucesso!');
    } else {
        alert('Usuário ou senha incorretos. Tente novamente.');
    }
}

function fazerLogin() {
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var senha = document.getElementById('senha').value;
    if (name === 'name' && email === 'email' && senha === 'senha') {
        alert('Login feito com sucesso!');
    } else {
        alert('Usuário ou senha incorretos. Tente novamente.');
    }
}

