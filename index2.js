//DESAFIO: CALCULADORA DE PARTIDAS RANKEADAS

//imprimir no console a lista de resultados de teste
rankearSaldoVitorias()

//retornar a diferença entre as quantidades de Vitórias e Derrotas
function calcularSaldoVitorias(nVitorias, nDerrotas){
    return nVitorias - nDerrotas
}

//1. testar variações nas quantidades de Vitórias (incremento:15) e de Derrotas (incremento:5)
//2. avaliar conforme regras do switch / case
//3. imprimir resultado
function rankearSaldoVitorias(){
    
    let numDerrotas = 0
    
    for (let numVitorias=0; numVitorias<=165; numVitorias+=15){
        
        let saldoVitorias = calcularSaldoVitorias(numVitorias,numDerrotas)
        let nivel

            switch (true){
                case saldoVitorias>=0 && saldoVitorias <= 10:
                    nivel = "Ferro"
                    break
                case saldoVitorias>=11 && saldoVitorias <= 20:
                    nivel = "Bronze"
                    break
                case saldoVitorias>=21 && saldoVitorias <= 50:
                    nivel = "Prata"
                    break
                case saldoVitorias>=51 && saldoVitorias <= 80:
                    nivel = "Ouro"
                    break
                case saldoVitorias>=81 && saldoVitorias <= 90:
                    nivel = "Diamante"
                    break
                case saldoVitorias>=91 && saldoVitorias <= 100:
                    nivel = "Lendário"
                    break
                case saldoVitorias >= 101:
                    nivel = "Imortal"
            }
            
            console.log(`O Herói tem saldo de ${saldoVitorias} vitórias e está no nível de ${nivel}`)
            
            numDerrotas+=5
                       
    } 
}