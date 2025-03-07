import { Personagem } from "./Personagem";

export class Inimigo extends Personagem {
    tipo: string;

    constructor(nome: string, tipo: string, vida: number, força: number, defesa: number) {
        super(nome, vida, força, defesa);
        this.tipo = tipo;
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

// Exemplo de Combate entre Ranger e Inimigo
function combate(personagem: Personagem, inimigo: Inimigo): void {
    console.log(`${personagem.nome} enfrenta o ${inimigo.nome}!`);
    while (personagem.vida > 0 && inimigo.vida > 0) {
        personagem.atacar(inimigo);
        if (inimigo.vida > 0) {
            inimigo.atacar(personagem);
        }
    }

    if (personagem.vida <= 0) {
        console.log(`${personagem.nome} foi derrotado!`);
    } else {
        console.log(`${personagem.nome} venceu o combate!`);
    }
}