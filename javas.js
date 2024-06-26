
function somar()
{
    // recebe valores do html input - Enrtada da função
    var a =document.getElementById("op1").value; // pega valor de op1
    var b =document.getElementById("op2").value;// pega valor de op2
    //realizar operação
    var c = parseFloat(a) + (parseFloat(b));
    
    // limpar os inputs
    document.getElementById("op1").value = "";
    document.getElementById("op2").value = "";
    //marcar o input op1
    document.getElementById("op1").focus();

    // devolver resultado para html H1 - Saída da Função
    return document.getElementById("produto").value = c;
}

function subtrair()
{
    // recebe valores do html input - Enrtada da função
    var a =document.getElementById("op1").value; // pega valor de op1
    var b =document.getElementById("op2").value;// pega valor de op2
    //realizar operação
    var c = parseFloat(a) - (parseFloat(b));

    // limpar os inputs
    document.getElementById("op1").value = "";
    document.getElementById("op2").value = "";
    //marcar o input op1
    document.getElementById("op1").focus();

    // devolver resultado para html H1 - Saída da Função
    return document.getElementById("produto").value = c;
}

function dividir()
{
    // recebe valores do html input - Enrtada da função
    var a =document.getElementById("op1").value; // pega valor de op1
    var b =document.getElementById("op2").value;// pega valor de op2
    //realizar operação
    var c = parseFloat(a) / (parseFloat(b));
    
    // limpar os inputs
    document.getElementById("op1").value = "";
    document.getElementById("op2").value = "";
    //marcar o input op1
    document.getElementById("op1").focus();

    // devolver resultado para html H1 - Saída da Função
    return document.getElementById("produto").value = c;
}

function multiplicar()
{
    // recebe valores do html input - Enrtada da função
    var a =document.getElementById("op1").value; // pega valor de op1
    var b =document.getElementById("op2").value;// pega valor de op2
    //realizar operação
    var c = parseFloat(a) * (parseFloat(b));
    
    // limpar os inputs
    document.getElementById("op1").value = "";
    document.getElementById("op2").value = "";
    //marcar o input op1
    document.getElementById("op1").focus();

    // devolver resultado para html H1 - Saída da Função
    return document.getElementById("produto").value = c;
}