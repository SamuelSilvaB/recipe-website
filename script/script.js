const menu =  document.querySelector(".menu");
const navMenu = document.querySelector(".links");

menu.addEventListener("click", () => {
    menu.classList.toggle("active");
    navMenu.classList.toggle("active");
})

// botão para voltar ao topo da pagina receitas

const btnTopo = document.querySelector("#btn-topo");

btnTopo.addEventListener("click", function() {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
});

// botap visivel somente no fim do scroll

