import { Personagem } from "../PERSONAGENS/Personagem";

export class Item {
    nome: string;
    efeito: string;

    constructor(nome: string, efeito: string) {
        this.nome = nome;
        this.efeito = efeito;
    }

    aplicarEfeito(personagem: Personagem): void {
        this.efeito(personagem);
    }
}