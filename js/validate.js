const formFields = document.querySelectorAll("[required]");
const form = document.querySelector(".formcontato__form");
const submitBtn = document.querySelector(".formcontato__botao");
console.log(submitBtn.disabled);

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
    console.log("Chamando enableButton");
    
    let isValid = true;

    formFields.forEach(field => {
        if (field.value === "" && field.hasAttribute("required")) {
            isValid = false;
            console.log("Campo vazio detectado:", field.name);
        }
    });

    submitBtn.disabled = !isValid;
    console.log("Botão desabilitado:", submitBtn.disabled);
};