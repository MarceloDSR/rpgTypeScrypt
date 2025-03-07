import { Item } from "../ITENS/item";


 export class Personagem {
    nome: string;
    vida: number;
    forca: number;
    defesa: number;
    itens: Item[];

    constructor(nome: string, vida: number, forca: number, defesa: number) {
        this.nome = nome;
        this.vida = vida;
        this.forca = forca;
        this.defesa = defesa;
        this.itens = [];
    }


    receberDano(dano: number): void {
        this.vida -= dano;
        if (this.vida < 0) this.vida = 0;
        console.log(`${this.nome} agora tem ${this.vida} de vida.`);
    }


    atacar(inimigo: Personagem): void {
        let dano = this.forca - inimigo.defesa;
        if (dano > 0) {
            inimigo.receberDano(dano);  
            console.log(`${this.nome} causou ${dano} de dano em ${inimigo.nome}!`);
        } else {
            console.log(`${this.nome} não causou dano em ${inimigo.nome} devido à defesa!`);
        }
    }


    usarItem(item: Item): void {
        console.log(`${this.nome} usou o item: ${item.nome} - Efeito: ${item.efeito}`);
        this.itens = this.itens.filter(i => i !== item); // Remove o item do inventário após o uso
    }


    estaVivo(): boolean {
        return this.vida > 0;
    }
}