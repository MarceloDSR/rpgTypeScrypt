import { Personagem } from "./Personagem";

export class Guerreiro extends Personagem {
    constructor(nome: string) {
        super(nome, 100, 20, 10);
    }

    // Ataque inimigo
    atacar(personagem: Personagem): void {
        let dano = this.força - personagem.defesa;
        if (dano > 0) {
            personagem.receberDano(dano);
            console.log(`${this.nome} causou ${dano} de dano em ${personagem.nome}!`);
        } else {
            console.log(`${this.nome} não causou dano em ${personagem.nome} devido à defesa!`);
        }
    }
}


