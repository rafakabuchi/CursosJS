function carregar() {
    var msg = window.document.getElementById('msg')

    var img = window.document.getElementById('imagem')

    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `Agora são ${hora} horas.`

    if (hora >= 0 && hora < 12) {
        img.src = 'img/manha.jpg'
        document.body.style.background = '#c78d4c'
    } else if (hora >= 12 && hora <= 17) {
        img.src = 'img/tarde.jpg'
        document.body.style.background = '#9b3c9e'
    } else {
        img.src = 'img/noite.jpg'
        document.body.style.background = '#291f29'
    }
}