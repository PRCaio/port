async function getWolves() {
    const fetchConfig = {
        "method": "GET",

    }
    const url = `https://in-api-lobinhos.vercel.app/api/lobinhos`

    await fetch(url, fetchConfig)
        .then((resposta) => {
            resposta.json()
                .then((resposta) => {
                    arr1 = resposta
                    console.log(arr1)
                    seach(nomeId, arr1)
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

getWolves()


const urlParams = new URLSearchParams(window.location.search);
const nomeId = urlParams.get("id")



function seach(id, wolves) { 
    var wolf = wolves.filter(function (obj) { return obj.id == id })
    console.log(wolf[0].imagem)

    var img = document.querySelector(".img_wolves")
    img.setAttribute('src', `${wolf[0].imagem}`);

    var description = document.querySelector("#description")
    description.innerText = wolf[0].descricao

    var name_wolf = document.querySelector(".name_wolf")
    name_wolf.innerText = wolf[0].nome


}