/*
File: app.js
Author: Szalai Mónika
Copyright: 2022, Szalai Mónika
Group: Szoft I E 1/3
Date: 2022-04-03
Github: https://github.com/szamo88
Licenc: GNU GPL
 */

const oktogonOldalMezo = document.querySelector("#oktogonOldal");
const oktogonTeruletMezo = document.querySelector("#oktogonTerulet");
const oktogonSzamitasGomb = document.querySelector("#teruletSzamitas");
/*T = 2*(1+sqrt{2})*a^2*/
function teruletSzamitas(){




    let oldal = oktogonOldalMezo.value;
    if (isNaN(oldal)){
        oktogonTeruletMezo.value= "Számot kérek!"
    }
    else {
        if (oldal<=0){
            oktogonTeruletMezo.value= "Más számot kérek, ami nagyobb mint 0";
        }
        else{
    
        let eredmeny = 2* (1+ Math.sqrt(2)) * Math.pow(oldal, 2);
        
        oktogonTeruletMezo.value = eredmeny.toFixed(2);
        } 


    }

    
}

oktogonSzamitasGomb.addEventListener('click', function(){teruletSzamitas()} );
