import { Inimigo } from "./Inimigo";
import { Personagem } from "../PERSONAGENS/Personagem";
import { Item } from "../ITENS/item";

export class Goblin implements Inimigo{
    
    public nome: string;
    public tipo: string;
    public vida: number;
    public forca: number;
    public defesa: number;
    public itens: Item[];
    
    
    constructor(nome: string = "Goblin", tipo: string = "Goblin", vida: number = 200, força: number = 30, defesa: number = 20) {

        this.nome = nome;
        this.tipo = tipo;
        this.vida = vida;
        this.forca = força;
        this.defesa = defesa;
        this.itens = []; // Inicializa o inventário vazio
    }

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

    usarItem(item: Item): void {
        console.log(`${this.nome} tentou usar um item, mas goblins não usam itens!`);
    }

    estaVivo(): boolean {
        return this.vida > 0;
    }
}