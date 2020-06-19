var nomes = ["Cosme Raposo",
"Deise Cantanhede",
"Doroteia Fogassa",
"Enia   Mainha",
"Ernesto Vidal",
"Fernao Veleda",
"Iolanda Vianna",
"Jacir Torcuato",
"Leopoldina Estrada",
"Lidia Porto",
"Mateus Rodriguez",
"Otavio Rico",
"Penelope Valadares",
"Rosalina Malheiro",
"Xenia Faria",
"Cleusa Ximenes",
"Cassia Camilo",
"Doroteia Coimbra",
"Giovana Iglesias",
"Guilherme Vieyra",
"Ibere Miera",
"Iraci Barroqueiro",
"Judite Bulhoes",
"Leopoldo Veloso",
"Lua Rico",
"Leia Fraga",
"Otilia Leite",
"Roberto Losada",
"Rosaura Canadas",
"Virgilia Collaço"];


var i = 0;

while(i != 10){
    var alea = Math.floor(Math.random()*30);
    var z = nomes[alea];

i++

if (nomes.indexOf(alea) == -1)
    nomes.push(alea);
    

    document.write(z+"<br>")
}