# dio-javascript-basic

## Requisição HTTP

URL: https://pokeapi.co/api/v2/pokemon?offset=4&limit=2
    `${adress}/${path = caminho de identificação do recurso}`

**Request Method:** 
GET | POST |PUT | DELETE

**Request Header:**
content-type: application/json

**Request Body:**
{
    "name: "o nome"
}

**Status Code:** 200 OK

**Response Headers:**

**Response Body:**

Fetch tem o processamento assíncrono, uma hora a resposta pode chegar
`fetch(url)
    .then(function(response){
        return response.json()        
    })
    .then(function(jsonBody){
        console.log(jsonBody)
    })
    .catch(function(error){
        console.log(error)
    })
    .finally(function(){
        console.log("Requisição concluída")
    })`
Transformando o código acima em arrow functions
`fetch(url)
    .then((response) => response.json())
    .then((jsonBody) => console.log(jsonBody))
    .catch((error) => console.log(error))`