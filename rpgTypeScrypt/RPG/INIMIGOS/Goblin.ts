import { Inimigo } from "./Inimigo";
import { Personagem } from "../PERSONAGENS/Personagem";

export class Goblin implements Inimigo {
    constructor(
        public nome: string,
        public vida: number,
        public forca: number,
        public defesa: number
    ) {}

    atacar(personagem: Personagem): void {
        console.log(`${this.nome} ataca!`);
        personagem.receberDano(this.forca);
    }

    receberDano(dano: number): void {
        const danoReal = Math.max(dano - this.defesa, 0);
        this.vida -= danoReal;
        if (this.vida <= 0) {
            console.log(`${this.nome} foi derrotado.`);
        }
    }
}