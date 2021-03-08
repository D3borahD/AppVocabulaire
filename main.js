class FlashCard {
    constructor( japonais, francais, furigana, phrase){
        this.japonais = japonais;
        this.francais = francais;
        this.furigana = furigana;
        this.phrase = phrase;
    }
}

let vocabulaire = [
    new vocabulaire(
        "池", 
        "étang",
        "いけ",
        "",
    ),
    new vocabulaire(
        "遅い",
        "tard - lent",
        "おそい",
        "tu es lent"
    )
]

const test = document.querySelector('.test');

