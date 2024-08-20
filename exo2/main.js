let table = document.querySelector('table');

// demande la saisie de l'utilisateur
let n = null;

do{
    n = parseInt(prompt("Saisie le nombre à multiplier"));
}while(isNaN(n));

for(let i=1; i<=n; i++){
    table.innerHTML += `<tr><td colspan="2" style="background:  antiquewhite;"> table de ${i} </td></tr>`;
    for(let j=0; j<=10; j++){
        table.innerHTML += "<tr><td> "+i+" * "+j+" </td><td> "+(i*j)+" </td></tr>";
    }
}
