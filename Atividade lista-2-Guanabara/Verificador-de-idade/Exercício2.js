function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.getElementById('res')
    if (fano.value.length == 0 || Number(fano.value) > ano) {
        window.alert('Verifique os dados e tente novamente!')

    }

    else {

        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked) {
            genero = 'Homem'
            if (idade >= 0 && idade < 10) {
                //Criança
                img.setAttribute('src', 'criançahomem.jpg')


            } else if (idade < 21) {
                //Jovem
                img.setAttribute('src', 'jovemadulto.png')



            }

            else if (idade < 50) {
                //Adulto
                img.setAttribute('src', 'adulto.png')



            }

            else {

                //Idoso
                img.setAttribute('src', 'idoso.png')


            }

        }

        else if (fsex[1].checked) {
            genero = 'Mulher'

            if (idade >= 0 && idade < 10) {
                //Criança

                img.setAttribute('src', 'bebe.png')


            } else if (idade < 21) {
                //Jovem

                img.setAttribute('src', 'jovemmulher.png')

            }

            else if (idade < 50) {
                //Adulto

                img.setAttribute('src', 'mulheradulta.png')

            }

            else {

                //Idoso

                img.setAttribute('src', 'mulheridosa.png')



            }



        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        res.appendChild(img)
    }


}