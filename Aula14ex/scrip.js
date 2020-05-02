function contar() {
    let inicio = document.getElementById('txtInicio')
    let fim = document.getElementById('txtFim')
    let passo = document.getElementById('txtPasso')
    let resultado = document.getElementById('res')

    if (inicio.value.length == 0 || fim.value.length == 0 || passo.value.length == 0) {
        window.alert('[ERRO] faltam dados camarada!')
        resultado.innerHTML = 'impossivel contar meu bem'
    } else {
        resultado.innerHTML = 'contando...</br>'
        let i = Number(inicio.value)
        let f = Number(fim.value)
        let p = Number(passo.value)

        if (p <= 0) {
            resultado.innerHTML = 'passo inválido, iniciando em ...</br>'
            p = 1
        }

        if (i < f) {
            for (let c = i; c <= f; c += p) {
                resultado.innerHTML += `${c} \u{1F91F}`
            }
        } else {
            for (let c = i; c >= f; c -= p) {
                resultado.innerHTML += `${c} \u{1F596}`
            }
        }

    }
}