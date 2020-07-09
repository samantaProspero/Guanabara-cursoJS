let valores = []
let soma=0
function adicionar(){
    let num = document.getElementById('txtn')
    num = num.value
    if(num<=0 || num>100 || num==' '){
        alert('Valor é inválido ou já se encontra na lista')
    } else{
        valores.push(num)
        soma += Number(num)
        let adic = document.getElementById('adic')
        adic.innerHTML += `Valor ${num} adicionado `
    }
}
function finalizar(){
    let tamanho = valores.length
    total.innerHTML+= `Ao todo temos ${tamanho} números cadastrados.` 
    let arrumado = valores.sort()
    maior.innerHTML += `O maior valor informado foi ${arrumado[tamanho-1]}.`  
    menor.innerHTML += `O menor valor informado foi ${arrumado[0]}.`
    somatorio.innerHTML += `Somando todos os valores temos: ${soma}.`
    media.innerHTML += `A média dos valores digitado é: ${soma/tamanho}.`
}

