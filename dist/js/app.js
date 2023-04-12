import { NegociacaoController } from "./controllers/negociacao-controller.js";
import { NegociacoesView } from "./views/negociaçeosView.js";
const controller = new NegociacaoController();
const form = document.querySelector(".form");
form.addEventListener("submit", (event) => {
    event.preventDefault();
    controller.adiciona();
});
const view = new NegociacoesView();
const template = view.template();
console.log(template);
