import { Personagem } from "./Personagem";

export class Mago extends Personagem {
    constructor(nome: string) {
        super(nome, 60, 10, 5);
    }

    atacar(inimigo: Personagem): void {
        console.log(`${this.nome} lança um feitiço poderoso!`);
        inimigo.receberDano(this.forca + 10); // Magos têm dano mágico adicional
    }
}