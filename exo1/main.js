
const btn = document.getElementById("btn");
const input = document.getElementById("input");
const def = document.getElementById("def");
const synt = document.getElementById("synt");

btn.addEventListener("click", (e) => {
    e.preventDefault();
    // variable
    let definition = null;
    let syntaxte = null;
    let bcl = input.value;
  
    switch(bcl.toLowerCase()){
 
        case 'for':
            definition = "Une boucle for répète des instructions jusqu'à ce qu'une condition donnée ne soit plus vérifiée.";
            syntaxte = "Syntaxe: for([expressionInitiale]; [condition]; [expressionIncrément]){ Instruction }";
            break;

        case 'while':
            definition = "L'instruction while permet de créer une boucle qui s'exécute tant qu'une condition de test est vérifiée.";
            syntaxte = "Syntaxe: While ( condition ){ instruction }";
            break;

        case 'do while':
            definition = "L'instruction do...while crée une boucle qui exécute une instruction jusqu'à ce qu'une condition de test ne soit plus verifiée";
            syntaxte = "Syntaxe: do { Instruction; } while (condition);";
            break;
            
        default:
            definition = "Le boucle n'existe pas !";
            syntaxte = "";
    }
    
def.innerText = definition;
synt.innerText = syntaxte;
})
