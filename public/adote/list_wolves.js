var wolves = []
var position = 0

var filter = []
var number_of_page = 0

async function getMensages() {
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
                    wolves = arr1;
                    console.log(wolves)
                    filter = wolves.filter(function (obj) { return obj.adotado == false });
                    pass_page(0)
                    numbers()
                    seach(nomeId)
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

getMensages()

function numbers() {
    navigation_number.innerHTML = " "
    if ((number_of_page / 4) < 4) {
        for (var count2 = 0; count2 < 5; count2++) {
            let number_page = document.createElement("a");
            number_page.innerText = count2 + 1
            navigation_number.append(number_page);
            number_page.setAttribute("onclick", `newPage(${count2 * 4})`);
        }
        navigation_number.innerHTML = navigation_number.innerHTML + `<a class='number_page' onclick='newPage(${number_of_page + 16})'> ... >> </a>`
    } else {
        navigation_number.innerHTML = `<a class='number_page' onclick='newPage(${number_of_page - 16 })'> << ...  </a>`
        for (var count2 = number_of_page/4; count2 < number_of_page/4 + 4; count2++) {
            let number_page = document.createElement("a");
            number_page.innerText = count2 + 1
            navigation_number.append(number_page);
            number_page.setAttribute("onclick", `newPage(${count2*4})`);
        }
        navigation_number.innerHTML = navigation_number.innerHTML + `<a class='number_page' onclick='newPage(${number_of_page + 16 })'> ... >> </a>`
    }
    
}



function card_wolf(name, age, adopted, description, imgWolf, adopted_by, id) {
    let card = document.createElement("div");

    let div_text = document.createElement("div");
    let title = document.createElement("h2");
    let text_age = document.createElement("p");
    let description_wolf = document.createElement("p");
    let button_adop = document.createElement("a");
    let box = document.createElement("div");
    let back = document.createElement("div");
    let img = document.createElement("img");
    let owner = document.createElement("p");

    box.classList.add("box")
    div_text.classList.add("div_text");

    img.setAttribute('src', `${imgWolf}`);
    title.innerText = name;
    text_age.innerText = "Idade: " + age + " anos";
    description_wolf.innerText = description;
    owner.innerText = "Adotado por: " + adopted_by;

    div_text.append(title);
    div_text.append(text_age);
    div_text.append(description_wolf);
    div_text.append(button_adop);
    box.append(back);
    box.append(img);
    card.append(box);
    card.append(div_text);

    if (position % 2 == 0) {
        card.classList.add("div_wolf");
        img.classList.add("img_wolves");
        back.classList.add("back");
        title.classList.add("name_wolf");
        text_age.classList.add("age");
        description_wolf.classList.add("t_text");
        owner.classList.add("owner");
        if (adopted == true) {
            button_adop.classList.add("button_ad")
            button_adop.innerText = "Adotado";
            div_text.append(owner)
        } else {
            button_adop.classList.add("button_adt");
            button_adop.innerText = "Adotar";
            button_adop.setAttribute("href", `show-lobinho.html?id=${id}`);         

        }
    } else {
        card.classList.add("div_wolf2");
        img.classList.add("img_wolves2");
        back.classList.add("back2");
        title.classList.add("name_wolf2");
        text_age.classList.add("age2");
        description_wolf.classList.add("t_text2");
        owner.classList.add("owner2");
        if (adopted == true) {
            button_adop.classList.add("button_ad2")
            button_adop.innerText = "Adotado";
            div_text.append(owner)
            
        } else {
            button_adop.classList.add("button_adt2");
            button_adop.innerText = "Adotar";
            button_adop.setAttribute("href", `show-lobinho.html?id=${id}`);   

        }
    }

    position++




    let main = document.querySelector(".main")

    main.append(card);
}



let navigation_number = document.querySelector(".navigation_numbers")

function pass_page(a) {
    for (var count = a; count < a + 4; count++) {
        card_wolf(filter[count].nome, filter[count].idade, filter[count].adotado, filter[count].descricao, filter[count].imagem, filter[count].nomeDono, filter[count].id)
    }
}

function newPage(a) {
    if(a*4 < filter.length){
    console.log("clicou " + a)
    let main = document.querySelector(".main")
    main.innerHTML = ""
    pass_page(a)
    number_of_page = a 
    console.log(number_of_page)
    numbers()
    }
}




let check = document.querySelector("#mark_adopt")

check.addEventListener('change', function () {
    if (this.checked) {
        console.log("Checkbox is checked..");
        filter = [...wolves.filter(function (obj) { return obj.adotado == true })];
        newPage(0)
        navigation_number.innerHTML = "<a class='number_page'> << </a>"
        numbers()

       

    } else {
        console.log("Checkbox is not checked..");
        filter = [...wolves.filter(function (obj) { return obj.adotado == false })]
        newPage(0)
        numbers()
    }
}
)


function isAdopted(value) {
    return value.adopted.find(element => element == true)
}

let button_search = document.querySelector(".button_search")
button_search.addEventListener("click", () => search_animal())

function search_animal() {
    let input = document.querySelector(".input_search").value
    input = input.toLowerCase();

    filter = [...wolves.filter(function (obj) { return obj.nome.toLowerCase().includes(input) })];

    navigation_number.innerHTML = " "
    console.log(filter.length)
    if (filter.length > 0) {
       numbers()
        newPage(0)
    } else {
        let main = document.querySelector(".main");
        main.innerHTML = "<div class='div_nFind'><text class='text_nFind'>O lobinho não foi encontrado</text></div>"

    }
}

const urlParams = new URLSearchParams(window.location.search);
const nomeId = urlParams.get("id")

function seach(id) { 
    console.log(wolves.filter(function (obj) { return obj.id == id }))
}


