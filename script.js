let yoMismo = {
    nome: "Anthony",
    idade: "17",
    olhos: "verde"
}

yoMismo.hand = "small"

delete yoMismo.hand

console.log(yoMismo)

let cadastro = [
    {
        nome: "Zachary",
        idade: "23",
        telefone: "9898989",
        amigos: ["Mike", "Carlos", "Emanuel", "Pamela"]
    },
    {
        nome: "Ayanna",
        idade: "25",
        telefone: "7272727",
        amigos: ["Michael", "Marlon", "Ronaldo", "Lionel"]

    },
    {
        nome: "Camila",
        idade: "24",
        telefone: "4545454",
        amigos: ["Lauren", "Dinah" , "Ally", "Normani"]

    },
    {
        nome: "Harry",
        idade: "27",
        telefone: "2828282",
        amigos: ["Larry", "Zyan", "Niall", "Louis"]

    },
    {
        nome: "Lisa",
        idade: "24",
        telefone: "3737373",
        amigos: ["Jennie", "Rose", "Kim", "Jisoo"]

    },
]

console.log ("os amigos escolhidos foram", cadastro[0].amigos[2], cadastro[1].amigos[0], cadastro[2].amigos[1], cadastro[3].amigos[3], cadastro[4].amigos[0])