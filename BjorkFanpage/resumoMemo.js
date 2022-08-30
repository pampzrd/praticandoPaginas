//declarações
var nome="Paula"
let idade=36
peso=83.5
a=5
b=20

//array
picapau=[0,1,2,3,5]


//função sem retorno
function imprimirSoma(a,b) 
{
    console.log(a+b)
}

imprimirSoma(2,3)

//função com retorno

function soma(a,b=0)
{
    return a+b
}

console.log(soma(2,5))