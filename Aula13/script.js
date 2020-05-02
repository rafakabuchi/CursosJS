function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var formAno = document.getElementById('txtAno')
    var res = document.getElementById('res')

    if (formAno.value.length == 0 || formAno.value > ano) {
        window.alert('[ERRO] Verifique os dados e tente novamente!')
    } else {
        var genSex = document.getElementsByName('radGen')
        var idade = ano - formAno.value
            //res.innerHTML = `Idade calculada: ${idade} anos`
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')

        if (genSex[0].checked) {
            genero = 'masculino'
            if (idade >= 0 && idade < 10) {
                //criança
                img.setAttribute('src', 'img/criancaMenino.jpg')
                document.body.style.background = '#2ade2c'
            } else if (idade < 18) {
                //xoven
                img.setAttribute('src', 'img/menino.jpg')
                document.body.style.background = '#5cad5d'
            } else if (idade < 50) {
                //adulto
                img.setAttribute('src', 'img/rapaz.jpg')
                document.body.style.background = '#5c9dad'
            } else {
                //idoso
                img.setAttribute('src', 'img/idoso.jpg')
                document.body.style.background = '#43575c'
            }
        } else if (genSex[1].checked) {
            genero = 'feminino'
            if (idade >= 0 && idade < 10) {
                //criança
                img.setAttribute('src', 'img/criancaMenina.jpg')
                document.body.style.background = '#ed4583'
            } else if (idade < 21) {
                //xoven
                img.setAttribute('src', 'img/menina.jpg')
                document.body.style.background = '#ba4387'
            } else if (idade < 50) {
                //adulto
                img.setAttribute('src', 'img/rapaz.jpg')
                document.body.style.background = '#bf373a'
            } else {
                //idoso
                img.setAttribute('src', 'img/idosa.jpg')
                document.body.style.background = '#a66a6b'
            }
        }
        res.innerHTML = `<p>Você se identifica ${genero} e tem ${idade} anos</p>`
        res.appendChild(img)
    }
}