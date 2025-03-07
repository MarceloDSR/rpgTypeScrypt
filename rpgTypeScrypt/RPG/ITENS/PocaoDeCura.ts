
import { Item } from "../ITENS/item";
import { Personagem } from "../PERSONAGENS/Personagem";

export class PocaoDeCura extends Item {
    constructor() {
        super("Poção de Cura", "Restaura 30 pontos de vida");
    }

    aplicarEfeito(personagem: Personagem): void {
        personagem.vida += 30;
        console.log(`${personagem.nome} usou a Poção de Cura! Vida restaurada para ${personagem.vida}.`);
    }
}