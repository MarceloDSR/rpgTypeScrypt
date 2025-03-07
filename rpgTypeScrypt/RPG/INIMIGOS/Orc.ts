import { Inimigo } from "./Inimigo";
import { Personagem } from "../PERSONAGENS/Personagem";

 export class Orc implements Inimigo {

    constructor(public nome:string, public tipo:string, public vida: number, public forca: number, public defesa: number) {
        this.nome = nome;
        this.tipo = tipo;
        this.vida = vida;
        this.forca = forca;
        this.defesa = defesa;
    }    
  
    atacar(personagem: Personagem): number {
      console.log(`${this.nome} atacou causando ${this.forca} de dano!`);
      return this.forca;
    }
  
    receberDano(dano: number): void {
      const danoRecebido = dano - this.defesa;
      if (danoRecebido > 0) {
        this.vida -= danoRecebido;
        console.log(`${this.nome} recebeu ${danoRecebido} de dano! Vida restante: ${this.vida}`);
      } else {
        console.log(`${this.nome} bloqueou o ataque!`);
      }''
    }
  
   estaVivo(): boolean {
   return this.vida > 0;
  }
  }