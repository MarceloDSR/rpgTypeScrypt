import { Inimigo } from "./Inimigo";
import { Personagem } from "../PERSONAGENS/Personagem";
import { Item } from "../ITENS/item";

export class AranhaGigante implements Inimigo {
    nome: string;
    tipo: string;
    vida: number;
    forca: number;
    defesa: number;
    itens: Item[];

    constructor(
        nome: string = "Aranha Gigante",
        tipo: string = "Monstro",
        vida: number = 60,
        forca: number = 20,
        defesa: number = 5
    ) {
        this.nome = nome;
        this.tipo = tipo;
        this.vida = vida;
        this.forca = forca;
        this.defesa = defesa;
        this.itens = []; // Inicializa o inventário vazio
    }

    atacar(personagem: Personagem): void {
        console.log(`${this.nome} mordeu e injetou veneno, causando ${this.forca} de dano!`);
        personagem.receberDano(this.forca);
    }

    receberDano(dano: number): void {
        const danoRecebido = Math.max(dano - this.defesa, 0);
        this.vida -= danoRecebido;
        if (this.vida <= 0) {
            console.log(`${this.nome} foi derrotada.`);
        } else {
            console.log(`${this.nome} recebeu ${danoRecebido} de dano! Vida restante: ${this.vida}`);
        }
    }

    usarItem(item: Item): void {
        console.log(`${this.nome} tentou usar um item, mas aranhas não usam itens!`);
    }

    estaVivo(): boolean {
        return this.vida > 0;
    }
}