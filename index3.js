//DESAFIO: ESCREVENDO AS CLASSES DE UM JOGO

class heroi{

    constructor(nome, idade, tipo){
        //Atributos
        this.nome = nome
        this.idade = idade
        this.tipo = tipo
    }
    //Metodos
    atacar(tipo){

        let ataque

        switch (tipo){

            case "mago":
                ataque = "magia"
                break
            case "guerreiro":
                ataque = "espada"
                break
            case "monge":
                ataque = "artes marciais"
                break
            case "ninja":
                ataque = "shuriken"
        }
        console.log(`${this.nome} é ${this.tipo} e atacou usando ${ataque}`)

    }  
}
//Instanciando 4 herois
let tarock = new heroi("Tarock",30,"guerreiro")
let eldrin = new heroi("Eldrin",50,"mago")
let kailon = new heroi("Kailon",30,"monge")
let shinra = new heroi("Shinra",40,"ninja")

//Imprimindo resultado no console
tarock.atacar(tarock.tipo)
eldrin.atacar(eldrin.tipo)
kailon.atacar(kailon.tipo)
shinra.atacar(shinra.tipo)
