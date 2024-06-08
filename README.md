# Challenge ONE | Front End - Portfólio

Este projeto foi desenvolvido como parte da formação Front-End da iniciativa Oracle One + Alura. Ele inclui seções sobre mim, minhas habilidades, experiências, formação acadêmica, hobbies e uma área de contato. O objetivo é fornecer uma visão geral das minhas qualificações e experiências de forma interativa.

## Índice

- [Objetivos](#objetivos)
- [Desafios](#desafios)
- [Funcionalidades](#funcionalidades)
- [Tecnologias Utilizadas](#tecnologias-utilizadas)
- [Navegação](#navegação)
- [Estrutura do Código](#estrutura-do-código)
- [Como Usar](#como-usar)
- [Autor](#autor)
- [Licença](#licença)

## Objetivos

- Desenvolver um portfólio pessoal que destaque minhas habilidades e experiências.
- Aplicar os conhecimentos adquiridos no curso de Front-End da Oracle One + Alura.
- Criar uma interface interativa e responsiva utilizando HTML, CSS e JavaScript.

## Desafios

- Implementar um design responsivo que funcione bem em diferentes dispositivos.
- Criar animações e transições suaves para melhorar a experiência do usuário.
- Validar formulários de contato de forma eficiente usando javascript.

## Funcionalidades

- Seções sobre mim, habilidades, experiências, formação acadêmica e hobbies.
- Formulário de contato com validação de campos.
- Animações e transições para interações do usuário.
- Scroll suave para navegação entre seções.

## Tecnologias Utilizadas

- HTML5 para a estrutura da página.
- CSS3 para estilos, responsividade e animações.
- JavaScript para validação de formulários e comportamento de scroll suave.

## Navegação

- **Menu**: Links para as diferentes seções do portfólio.
- **Sobre**: Informações sobre mim.
- **Habilidades**: Lista de habilidades técnicas.
- **Experiência**: Detalhes sobre minhas experiências profissionais.
- **Formação Acadêmica**: Informação sobre minha formação.
- **Hobbies**: Atividades que gosto de fazer no meu tempo livre.
- **Contato**: Formulário para entrar em contato comigo.

## Estrutura do Código

A estrutura básica do projeto é a seguinte:

```
meu-portfolio/
├── index.html             # Página principal do portfólio
├── assets                 # Recursos como imagens e ícones
├── js
│   ├── scroll.js          # Script para scroll suave
│   └── validate.js        # Script para validação do formulário
├── styles
│   ├── animations.css     # Estilos para animações
│   └── style.css          # Estilos principais do portfólio
├── README.md              # Documentação do projeto
```

### Estilo Principal (CSS)

O arquivo `style.css` contém os estilos principais do portfólio, incluindo variáveis de cores, transições e transformações para efeitos de hover.

Exemplo de código CSS:

```css
:root {
    --pink-hightlight: #FF79D1;
    --green-hightlight: #2BAA9B;
}

li.menu__list__item a:hover {
    color: var(--pink-hightlight);
}

li.menu__list__item  {
    transition: transform 0.3s ease;
}

li.menu__list__item:hover  {
    transform: scale(1.08);
}

/* ... outros estilos ... */
```

### Animações e Interações (CSS e JavaScript)

O arquivo `animations.css` inclui animações e interações usando transições e transformações. Os arquivos `scroll.js` e `validate.js` complementam essas interações com comportamentos adicionais.

Exemplo de código CSS para animações:

```css
div.skills__box {
    transition: transform 0.3s ease;
}

div.skills__box:hover {
    transform: scale(1.1);
}

/* ... outros estilos de animação ... */
```

### Script de Validação do Formulário

O `validate.js` contém o código para validação de formulários. Ele verifica se todos os campos obrigatórios estão preenchidos corretamente e exibe mensagens de erro personalizadas.

Exemplo de código JavaScript para validação:

```javascript
const formFields = document.querySelectorAll("[required]");
const inputName = document.getElementById("nome");
const inputEmail = document.getElementById("email");
const inputTopic = document.getElementById("assunto");
const inputMessage = document.getElementById("mensagem");
const submitBtn = document.querySelector(".formcontato__botao");

formFields.forEach(field => {
    field.addEventListener("blur", () => inputCheck(field));
    field.addEventListener("invalid", event => event.preventDefault());
});

const errorType = ["valueMissing", "typeMismatch", "tooLong"];
const messages = {
    nome: {
        valueMissing: "O campo de nome não pode estar vazio.",
        typeMismatch: "Por favor, preencha um nome válido.",
        tooLong: "Por favor, preencha um nome válido."
    },
    email: {
        valueMissing: "O campo de e-mail não pode estar vazio.",
        typeMismatch: "Por favor, preencha um email válido.",
    },
    assunto: {
        valueMissing: "O campo de assunto não pode estar vazio.",
        typeMismatch: "Por favor, preencha um assunto válido.",
        tooLong: "O campo de assunto não pode ultrapassar 50 caractéres."
    },
    mensagem: {
        valueMissing: 'O campo de mensagem não pode estar vazio.',
        tooLong: "O campo de assunto não pode ultrapassar 300 caractéres."
    }
};

function inputCheck(field) {
    let message = "";
    const inputValidate = field.checkValidity(); 

    errorType.forEach(error => {
        if (field.validity[error]) {
            message = messages[field.name][error];
        }
    });

    const errorMessage = field.parentNode.querySelector(".error");

    if (!inputValidate) {
        errorMessage.textContent = message;
    } else {
        errorMessage.textContent = "";
    }

    enableButton();
};

function enableButton() {
    if (inputName.value.trim() === "" || inputEmail.value.trim() === "" || inputTopic.value.trim() === "" || inputMessage.value.trim() === "") {
        submitBtn.setAttribute("disabled", "");
        submitBtn.style.cursor = "default";
    } else {
        submitBtn.removeAttribute("disabled");
        submitBtn.style.cursor = "pointer";
    }
};
```

### Scroll Suave

O `scroll.js` implementa um comportamento de rolagem suave para links de navegação.

Exemplo de código JavaScript para scroll suave:

```javascript
document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener("click", function(event) {
        event.preventDefault();

        const target = document.querySelector(this.getAttribute("href"));

        window.scrollTo({
            top: target.offsetTop,
            behavior: "smooth"
        });
    });
});
```

## Como Usar

1. Clone o repositório para o seu computador.
2. Abra o arquivo `index.html` em um navegador web.
3. Navegue pelas seções e interaja com os elementos para ver os efeitos de animação e validação.

## Autor

Desenvolvido por Carolina Gonçalves.

## Licença

Este projeto é licenciado sob a licença MIT. Veja o arquivo `LICENSE` para mais detalhes.
