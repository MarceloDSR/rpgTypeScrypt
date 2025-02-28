/*. Personagens (Classes e Herança) 👤⚔️
Classe Personagem: Crie uma classe base chamada Personagem com os atributos principais que um personagem de RPG teria. Por exemplo:

nome: o nome do personagem.
vida: a quantidade de vida do personagem.
força: quanto dano o personagem pode causar.
defesa: a resistência do personagem.
itens: um inventário de itens que o personagem possui.
Classes de Personagem: Crie pelo menos duas classes filhas de Personagem:

Guerreiro: com habilidades de combate, maior força, mas vida média.
Mago: com habilidades mágicas, maior inteligência, mas vida baixa. */



class Personagem {
    nome: string;
    vida: number;
    forca: number;
    defesa: number;

    constructor(nome: string, vida: number, forca: number, defesa: number){
        this.nome = nome;
        this.vida = vida;
        this.forca = forca;
        this.defesa = defesa;
    }

    itens(): void {
    
    }

}