
function calculadora() {
    let leite = Number(document.getElementById("leite").value)
    let doacaosangue = Number(document.getElementById("doacaosangue").value)
    let acaosocial = Number(document.getElementById("acaosocial").value)
    let apmusical = Number(document.getElementById("apmusical").value)
    let mascote = Number(document.getElementById("mascote").value)
    let quiz = Number(document.getElementById("quiz").value)
    let kits = Number(document.getElementById("kits").value)
    let suplementos = Number(document.getElementById("suplementos").value)
    let equipe = Number(document.getElementById("equipe").value)
    let kitextra = Number(document.getElementById("kitextra").value)
    let latasuplemento = Number(document.getElementById("latasuplemento").value)
    let arroz5 = Number(document.getElementById("arroz5").value)
    let arroz1 = Number(document.getElementById("arroz1").value)
    let feijao2 = Number(document.getElementById("feijao2").value)
    let feijao1 = Number(document.getElementById("feijao1").value)
    let macarrao = Number(document.getElementById("macarrao").value)
    let oleo = Number(document.getElementById("oleo").value)
    let resultadototal
    let avulso
    let mensagem
    
    if (leite < 0) {
        alert("Por favor, insira um valor de litros de leite maior que zero") 
    }
    else if (doacaosangue < 0) {
        alert("Por favor, insira um número de doações maior que zero")
    }
    else if(acaosocial < 0 || acaosocial > 2000){
        alert("Por favor insira uma pontuação para a ação social entre 0 e 2.000")
    }
    else if(apmusical < 0 || apmusical > 1500){
        alert("Por favor digite uma pontuação para a apresentação musical maior que 0 e menor que 1.500")
    }
    else if(mascote < 0 || mascote > 500){
        alert("Por favor digite uma pontuação para o mascote maior que 0 e menor que 500")
    }
    else {
        resultadototal = (leite * 2) + (doacaosangue * 20) + acaosocial + apmusical + mascote + quiz
    }

    switch(equipe){
        case 1:
            if (kits <= 18 && suplementos <= 9) {
                result = 1.000
            } else if (kits <= 46 && suplementos <= 23) {
                result = 2.500
            } else if (kits <= 73 && suplementos <= 37) {
                result = 4.000
            } else if (kits <= 91 && suplementos <= 46) {
                result = 5.000
            }
        break;
        case 2:
            if (kits <= 17 && suplementos <= 8) {
                result = 1.000
            } else if (kits <= 42 && suplementos <= 21) {
                result = 2.500
            } else if (kits <= 67 && suplementos <= 34) {
                result = 4.000
            } else if (kits <= 84 && suplementos <= 42) {
                result = 5.000
            }
        break;
        case 3:
            if (kits <= 17 && suplementos <= 9) {
                result = 1.000
            } else if (kits <= 42 && suplementos <= 21) {
                result = 2.500
            } else if (kits <= 68 && suplementos <= 34) {
                result = 4.000
            } else if (kits <= 84 && suplementos <= 42) {
                result = 5.000
            }
        break;
        case 4:
            if (kits <= 16 && suplementos <= 8) {
                result = 1.000
            } else if (kits <= 41 && suplementos <= 21) {
                result = 2.500
            } else if (kits <= 65 && suplementos <= 33) {
                result = 4.000
            } else if (kits <= 81 && suplementos <= 41) {
                result = 5.000
            }
        break;
        case 5:
            if (kits <= 21 && suplementos <= 10) {
                result = 1.000
            } else if (kits <= 52 && suplementos <= 26) {
                result = 2.500
            } else if (kits <= 83 && suplementos <= 42) {
                result = 4.000
            } else if (kits <= 104 && suplementos <= 52) {
                result = 5.000
            }
        break;
    }

    avulso = (kitextra * 30) + (latasuplemento * 15) + (arroz5 * 5) + arroz1 + (feijao2 * 2) + (feijao1) + (macarrao * 0.5) + oleo

    mensagem = 
    document.getElementById("resultado").innerHTML = `Parabéns! Sua pontuação foi total foi de: ${resultadototal + result + avulso}`
}