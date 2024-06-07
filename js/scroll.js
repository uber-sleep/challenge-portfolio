// Script que define o comportamento de rolagem para a página
document.querySelector('nav a').forEach(link => {
    link.addEventListener("click", function(event) {
        event.preventDefault(); //previne o comportamento padrão

        const target = document.querySelector(this.getAttribute("href")); //seleciona o href de cada elemento a presente na nav

        window.scrollTo({//adiciona o comportamento customizado de scroll
            top: target.offsetTop,
            behavior: "smooth"
        });
    });
});
