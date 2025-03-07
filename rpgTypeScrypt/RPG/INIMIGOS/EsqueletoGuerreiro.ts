
import { Inimigo } from "./Inimigo";
import { Personagem } from "../PERSONAGENS/Personagem";

export class EsqueletoGuerreiro implements Inimigo {
    constructor(
        public nome: string = "Esqueleto Guerreiro",
        public tipo: string = "Morto-Vivo",
        public vida: number = 80,
        public forca: number = 15,
        public defesa: number = 10
    ) {}

    atacar(personagem: Personagem): number {
        console.log(`${this.nome} atacou com sua espada enferrujada, causando ${this.forca} de dano!`);
        return this.forca;
    }

    receberDano(dano: number): void {
        const danoRecebido = dano - this.defesa;
        if (danoRecebido > 0) {
            this.vida -= danoRecebido;
            console.log(`${this.nome} recebeu ${danoRecebido} de dano! Vida restante: ${this.vida}`);
        } else {
            console.log(`${this.nome} bloqueou o ataque!`);
        }
    }

    estaVivo(): boolean {
        return this.vida > 0;
    }
}