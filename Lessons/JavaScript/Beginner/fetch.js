fetch('https://swapi.dev/api/people/1/').then(function(response){
    return response.json()
})
.then(function(res){
    luke = res

    luke.films.forEach(function(url, index){
        console.log(index, url)
    })
})