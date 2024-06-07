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

const errorType = [
    "valueMissing",
    "typeMismatch",
    "tooLong"
];

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
        };
    });

    const errorMessage = field.parentNode.querySelector(".error");

    if (!inputValidate) {
        errorMessage.textContent = message;
    } else {
        errorMessage.textContent = "";
    };

    enableButton();
};

function enableButton() {
    
    if (inputName.value.trim() === "" || inputEmail.value.trim() === "" || inputTopic.value.trim() === "" || inputMessage.value.trim() === "") {
        submitBtn.setAttribute("disabled", "");
        submitBtn.style.cursor = "default";

    } else {
        submitBtn.removeAttribute("disabled");
        submitBtn.style.cursor = "pointer";
    };
};