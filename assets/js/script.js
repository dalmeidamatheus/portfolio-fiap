
//console.log( document.querySelector("#quantidade").value )
//manipulacao do DOM (document object model) interpretação do html na memoria do navegador

document.querySelector("#quantidade").addEventListener("change", calcular_orcamento)
document.querySelector("#js").addEventListener("change", calcular_orcamento)
document.querySelector("#layout_sim").addEventListener("change", calcular_orcamento)
document.querySelector("#layout_nao").addEventListener("change", calcular_orcamento)
document.querySelector("#prazo").addEventListener("change", calcular_orcamento)

function calcular_orcamento() {
    //let quantidade = document.querySelector("#quantidade").value
    let preco = quantidade.value * 100
    
    //let js = document.querySelector("#js").checked
    if (js.checked) preco *= 1.1

    //let layout = document.querySelector("#layout_sim").checked
    if (layout_sim.checked) preco += 500

    //let prazo = document.querySelector("#prazo").value
    let taxa_de_urgencia = preco * (1.1 - prazo.value * 0.1)
    preco += taxa_de_urgencia

    //document.querySelector("#label_prazo").innerHTML = "Prazo (" + prazo + " semanas)"
    label_prazo.innerHTML = `Prazo (${prazo.value} semanas)`

    //document.querySelector("#preco").innerHTML = "R$ " + preco.toFixed(2)
    output.innerHTML = "R$ " + preco.toFixed(2)

}

