import { Cena } from "../CENAS/Cena";
import { CenaIntroducao } from "../CENAS/CenaIntroducao";
import { CenaFloresta } from "../CENAS/CenaFloresta";
import { CenaBatalha } from "../CENAS/CenaBatalha";
import { Guerreiro } from "../PERSONAGENS/Guerreiro";
import { Goblin } from "../INIMIGOS/Goblin";
import { AranhaGigante } from "../INIMIGOS/AranhaGigante";
import { DragaoNegro } from "../INIMIGOS/DragaoNegro";

export class Jogo {
    private cenaAtual: Cena;

    constructor() {
        this.cenaAtual = new CenaIntroducao();
    }

    iniciar(): void {
        console.log("Iniciando o jogo...");
        this.cenaAtual.jogar();

        // Simula a escolha do jogador (Guerreiro)
        const jogador = new Guerreiro("Aragorn");

        // Cena 1: Floresta Escura
        this.cenaAtual = new CenaFloresta(jogador);
        this.cenaAtual.jogar();

        // Cena 2: Caverna da Aranha
        const aranha = new AranhaGigante();
        this.cenaAtual = new CenaBatalha(jogador, aranha);
        this.cenaAtual.jogar();

        // Cena 3: Dragão Negro
        const dragao = new DragaoNegro();
        this.cenaAtual = new CenaBatalha(jogador, dragao);
        this.cenaAtual.jogar();

        // Verifica o final do jogo
        if (jogador.estaVivo()) {
            console.log("Parabéns! Você derrotou o Dragão Negro e salvou o reino!");
        } else {
            console.log("Você foi derrotado... O reino caiu na escuridão.");
        }
    }
}