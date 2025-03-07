import { Personagem } from "./Personagem";

export class Arqueiro extends Personagem {
    cor: string;
    habilidadeEspecial: string;

    constructor(nome: string, cor: string, habilidadeEspecial: string) {
        super(nome, 100, 20, 10); 
        this.cor = cor;
        this.habilidadeEspecial = habilidadeEspecial;
    }

    
    usarHabilidadeEspecial(inimigo: Personagem): void {
        console.log(`${this.nome} usa a habilidade especial: ${this.habilidadeEspecial}!`);
        let dano = this.forca * 2 - inimigo.defesa;
        if (dano > 0) {
            inimigo.receberDano(dano);
            console.log(`${this.nome} causou ${dano} de dano com a habilidade especial em ${inimigo.nome}!`);
        } else {
            console.log(`${this.nome} não causou dano com a habilidade especial em ${inimigo.nome}.`);
        }
    }
}