import { Item } from "../ITENS/item";
import { Personagem } from "../PERSONAGENS/Personagem";

export class EspadaDeAco extends Item {
    constructor() {
        super("Espada de Aço", "Aumenta o ataque físico em 10");
    }

    aplicarEfeito(personagem: Personagem): void {
        personagem.força += 10;
        console.log(`${personagem.nome} equipou a Espada de Aço! Ataque aumentado para ${personagem.força}.`);
    }
}