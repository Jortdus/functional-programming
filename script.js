var cleaning =[]
const rawdata = fetch('./datasets/form-data.json')
    .then(results => results.json())
    .then(data => data.forEach(function(v, i, data) {
        cleaning.push(data[i]["Kaas is ook een zoogdier?"].toString().toLowerCase())
        cleaning.sort().reverse()
    }));

console.log(cleaning)


