//1

let dato1 = "Juan ";
let dato2 =2023;
function tipoDato(dato1,dato2){
    console.log(typeof dato1);
    console.log(typeof dato2)
};
tipoDato(dato1,dato2);


//2
let num1=45;
//let num=23;

function resta(num1, num2){
    console.log(num1-num2);
};
resta(num1,num2);


//3
let a = 369;
let b = 725;
let c =null;

function dosParametrosDistintos(a,b){
    if (a===b) return 'los valores deben ser distintos';
    c=a;
    a=b;
    b=c;
    return{
        a:a,
        b:b
    }
}

console.log(dosParametrosDistintos(a,b));


//4
let lado = 5;

function cuadrado(lado){
    let perimetro = lado *4;
    let superficie = lado * lado;
    return{
        perimetro:perimetro,
        superficie:superficie
    }
}
console.log (cuadrado(lado));


//5
let fahrenheit = 50;

function celsius(fahrenheit){
    let celsius =(fahrenheit - 32) * 5/9;
    return celsius;
};

console.log(celsius(fahrenheit));


//6
let num = 5;
function factorial(num){
    if(num>0 && num <=10){
        let factorial = 1;
        for(let i = 1;i <= num;i++)
            return factorial;}
        else{
            return'el numero ingresado no puede ser negativo ni mator de 10' 
        };
    };

    console.log(factorial(num));


 //7
let  cadena ="somos o no somos";

function palindromo(cadena){
cadena = cadena.toloweCase().replace(/\s/g,"");
let reves = cadena.split("").reverse(join("");

if (cadena === reves)return ('el texto ingresado esun palindromo');
return('el texto ingresado no es un palindromo');
 
}



//8
let cadena2 = "somos o no somos";

function mayusculas(cadena2){
    let may = cadena2.toUpperCase();
    let min = cadena2.tolowerCase();
    return min+' '+may;
}
console.log(mayusculas(cadena2));

//9
let nota = 7;

function calificacion(nota){
    if (nota>=0 && nota <= 3) {
        return 'muy deficiente';
    }
    else if(nota>=3 && notan<=5){
        return 'insuficiente';
    }
    else if(nota>=5 && nota <=6){
        return 'suficiente';
    }
    else if(nota>=6 && nota <=7){
        return 'bien';
    }
    else if (nota>=7 && nota <=9){
        return'notable':
    }
    else if(nota>=9 && nota <=10){
        return 'sobresaliente';

    }
    else{
        return'nota invalida';
    }
}
console.log(calificacion(nota));


//10
let mes=1;

function tiene30dias(mes){
    if(mes ===1 ||mes ===3||mes===5||mes===7||mes===8||mes==10||mes===12){
        return 'Tiene 31 días';
    } else{
        return 'No tiene 31 días';
    };
};

console.log(tiene}(mes));
