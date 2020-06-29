
/* Fizz Buzz:
1. Creamos un loop for para iterar de 1 al 100.
2. Dentro del loop miramos si el número es divisible entre 3 y 5 imprimimos FizzBuzz.
3. Luego miramos si el número es divisible entre 5 imprimimos Buzz.
4. Luego miramos si el número es divisible entre 3 imprimimos Fuzz.
5. Por último si no cumple las condiciones anteriores solo imprimimos el número.*/

for (let num = 1; num < 101; num++) {
    if (num%3==0&&num%5==0) {
        console.log("FizzBuzz");
    }else if(num%5==0){
        console.log("Buzz");
    }else if(num%3==0){
        console.log("Fizz"); 
    }else{
        console.log(num);
    }
}

/* Min and max:
1. Declaramos las variables; listNum que contiene la lista a comparar, 
    min que va a tener un valor que se encuentra en la lista,
    al igual que max puede ser cualquiera dentro de la misma.
2. Creamos un loop para iterar en nuestra lista declarada anteriormente
3. Dentro de nuestro loop comparamos cada ítem, 
    si el valor es menor al que ya teníamos asignado reemplazamos este valor en la variable min,
    si no es así en la variable max.
4. Al finalizar nuestro loop imprimimos el valor máximo y el mínimo del array.*/

let listNum = [1, 3, 0, -60, 12, 3, 50, 500, 300, 800];
let min = listNum[0];
let max = listNum[0];
for(let i = 0; i<listNum.length; i++) {
    if(listNum[i]<min){
        min = listNum[i];
    }else{
        max = listNum[i];
    }
}   
console.log("min: "+ min + " max: "+ max);

/*suma N
1. Declaramos nuestras variables; una listNum2 que tendrá nuestro array, 
    un compare que será el número a compara con la suma, 
    y un booleanop que tendrá nuestro boolean, le asignamos false por si al comprar no encontramos la suma.
2. Creamos un for loop para iterar en el array con un ítem.
3. Creamos otro loop para comprar nuestro ítem con el resto, 
    pero antes de eso colocamos un condicional para evitar comprar la suma de si mismo.
4. Luego comparamos ese item para ver si su suma es igual al valor dado en la variable compare, 
     si esto se cumple le asignamos a nuestra variable booleanop true.
5. En la última línea imprimimos nuestra variable booleanop con los resultados.
*/
let listNum2 = [1, 2, 4 , 5, 6];
let compare = 3;
let booleanop = false;
for (let item1 of listNum2) {
    for (let item2 of listNum2) {
        if (item1!=item2) {
            if ((item1 + item2)==compare){
                booleanop = true;
            }
        }    
    }
}
console.log(booleanop);
