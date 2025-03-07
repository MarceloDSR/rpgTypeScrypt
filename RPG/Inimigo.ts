import { Personagem } from "./Personagem";

export interface Inimigo {

    nome: string;
    tipo: string;
    vida: number;
    forca: number;
    defesa: number;

    atacar(personagem: Personagem): number;
    receberDano(dano: number): void;
 
}