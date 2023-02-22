function getMensages3() {
    const fetchConfig = {
        "method": "GET",

    }
    const url = 'https://in-api-lobinhos.vercel.app/api/lobinhos'

    fetch(url, fetchConfig)
        .then((resposta) => {
            resposta.json()
                .then((resposta) => {
                    arr = resposta
                    let num1 = Math.floor(Math.random() * 200 + 1)
                    postContent(arr[num1], arr[num1 + 2])
                }
                )
                .catch((error) => {
                    console.log(error)
                })
        })
        .catch((error) => {
            console.log(error)
        })
}

function postContent(randomArr1, randomArr2) {
    let image = document.querySelector('.img_wolves')
    image.setAttribute('src', randomArr1.imagem)
    let name = document.querySelector('.wolf1_name')
    name.innerText = randomArr1.nome
    let age = document.querySelector('.wolf1_age')
    age.innerText = 'Idade: ' + randomArr1.idade + ' anos'
    let description = document.querySelector('.wolf1_dscp')
    description.innerText = randomArr1.descricao

    let image2 = document.querySelector('.img_wolves2')
    image2.setAttribute('src', randomArr2.imagem)
    let name2 = document.querySelector('.wolf2_name')
    name2.innerText = randomArr2.nome
    let age2 = document.querySelector('.wolf2_age')
    age2.innerText = 'Idade: ' + randomArr2.idade + ' anos'
    let description2 = document.querySelector('.wolf2_dscp')
    description2.innerText = randomArr2.descricao
}

getMensages3()