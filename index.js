//Desafio: Classificador de nível de Herói
//Descrição do Desafio: no Git / Readme.md

let nomeHeroi = "CobaltShadow", nivelHeroi = ""

// inicio iteração a cada 500 (a partir de 0) para testar/identificar o nível e imprimir o resultado no console

for (numXP = 0; numXP<=10500;numXP+=500){
	
	// avaliação
	if (numXP <= 1000){
		nivelHeroi = "Ferro"
	} 
		else if (numXP <= 2000){
		nivelHeroi = "Bronze"
	}
		else if (numXP <=5000){
		nivelHeroi = "Prata"
	} 
		else if (numXP <= 7000){
		nivelHeroi = "Ouro"
	} 
		else if (numXP <=8000){
		nivelHeroi = "Platina"
	} 
		else if (numXP <= 9000){
		nivelHeroi = "Ascendente"
	} 
		else if (numXP <= 10000){
		nivelHeroi = "Imortal"
	} 
		else if (numXP >= 10001){
		nivelHeroi = "Radiante"
	}
	//fim avaliação

	//impressão
	console.log("O herói de nome "+nomeHeroi+" está no nível de "+nivelHeroi + " (Qtd. XP = "+numXP+")")

}
// fim iteração