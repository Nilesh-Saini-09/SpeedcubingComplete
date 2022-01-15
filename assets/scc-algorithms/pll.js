fetch('https://scc-algs-api.herokuapp.com/algs')
.then(response => response.json())
.then(data => {
    for(let i in data["3x3x3"].pll) {
        algCard(data["3x3x3"].pll[i][0], data["3x3x3"].pll[i].slice(1))
        //console.log(data["3x3x3"].oll[i].slice(1))
        //console.log(data["3x3x3"].oll[i][0])
    }
})
.catch(err => console.log(err))
