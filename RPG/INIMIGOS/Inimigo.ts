import { Personagem } from "../PERSONAGENS/Personagem";

export interface Inimigo extends Personagem{

    nome: string;
    tipo: string;
    vida: number;
    forca: number;
    defesa: number;

    atacar(personagem: Personagem): void;
    receberDano(dano: number): void;
    estaVivo(): boolean;
 
}