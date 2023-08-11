function carregar() {
    var msg = document.getElementById("msg");
    var img = document.getElementById("imagem");
    var data = new Date();
    // hora = data.getHours();
    var hora = 20
    msg.innerHTML = `Agora são ${hora} horas.`

    if (hora >= 0 && hora < 12) {
        // Bom dia
        //msg.innerHTML = `Bom dia, agora são ${hora} horas.`
        img.src = "./manhã.jpg";
        document.body.style.background = '#ADD8E6'
    } else if (hora >= 12 && hora <= 18) {
        // Boa tarde
        //msg.innerHTML = `Bom tarde, agora são ${hora} horas.`
        img.src = "./tarde.jpg";
        document.body.style.background = '#FF4500'
    } else {
        // Boa noite
        //msg.innerHTML = `Bom noite, agora são ${hora} horas.`
        img.src = "./noite.jpg";
        document.body.style.background = '#696969' 
    }
}
