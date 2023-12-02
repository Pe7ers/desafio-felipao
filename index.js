let nome = "Aventureiro"
let xp = 6000

switch (true) {
    
    case xp < 1001:
        xp = "Ferro"
    break;

    case xp > 1000 && xp < 2001:
        xp = "Bronze"
    break;

    case xp > 2000 && xp < 5001:
        xp = "Prata"
    break;

    case xp > 5000 && xp < 7001:
        xp = "Ouro"
    break;

    case xp > 7000 && xp < 8001:
        xp = "Platina"
    break;

    case xp > 8000 && xp < 9001:
        xp = "Ascendente"   
    break;

    case xp > 9000 && xp < 10001:
        xp = "Imortal"    
    break;

    default:
        xp = "Radiante"
    
}
console.log("O Herói " + nome + " está no nível de: " + xp);