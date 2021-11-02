let cityValue = []

//Datafetch from RIVM
// const dataFetch = fetch('https://data.rivm.nl/covid-19/COVID-19_rioolwaterdata.json ')
//     .then(results => results.json())


const dataFetch = fetch('./datasets/covid.json')
    .then(results => results.json())

function parseData() {
    return new Promise((resolve, reject) => {
        let data = dataFetch
        resolve(data)
    }).then(data => {
        data.forEach(e => {
            cityValue.push({
                particles: e['RNA_flow_per_100000'],
                date: e['Date_measurement'],
                location: e['RWZI_AWZI_name']
            })
        })

    }).catch(err => {
        console.log(err)
    })
}

parseData().then(data => {
    console.log(cityValue)
})