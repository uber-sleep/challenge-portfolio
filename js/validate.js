// Todos os campos com atributo required
const formFields = document.querySelectorAll("[required]");
// Campos individualmente selecionados do form
const inputName = document.getElementById("nome");
const inputEmail = document.getElementById("email");
const inputTopic = document.getElementById("assunto");
const inputMessage = document.getElementById("mensagem");
// Botão de envio
const submitBtn = document.querySelector(".formcontato__botao");

// Adiciona os eventos de validação de input e previne o comportamento padrão de erro
formFields.forEach(field => {
    field.addEventListener("blur", () => inputCheck(field));
    field.addEventListener("invalid", event => event.preventDefault());
});

// Tipos de erro
const errorType = [
    "valueMissing",
    "typeMismatch",
    "tooLong"
];

//Mensagens personalizadas para cada tipo de erro e cada campo
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

// Função de validação
function inputCheck(field) {
    let message = "";
    const inputValidate = field.checkValidity(); 

    errorType.forEach(error => { //busca os erros e define a msg apropriada para o tipo de erro encontrado
        if (field.validity[error]) {
            message = messages[field.name][error];
        };
    });

    const errorMessage = field.parentNode.querySelector(".error"); //seleciona o elemento pai do input para mostrar o estilo de erro

    //muda o texto de erro de acordo com a checagem
    if (!inputValidate) {
        errorMessage.textContent = message;
    } else {
        errorMessage.textContent = "";
    };

    enableButton(); //chama a validação do botão de submit
};

// Habilitar/desabilitar o botão de envio
function enableButton() {
    
    // Checa individualmente o estado de cada input após a checagem da função de validate e altera o estado do botão de acordo
    if (inputName.value.trim() === "" || inputEmail.value.trim() === "" || inputTopic.value.trim() === "" || inputMessage.value.trim() === "") {
        submitBtn.setAttribute("disabled", "");
        submitBtn.style.cursor = "default";

    } else {
        submitBtn.removeAttribute("disabled");
        submitBtn.style.cursor = "pointer";
    };
};