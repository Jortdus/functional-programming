const rawdata = fetch('./datasets/form-data.json')
    .then(results => results.json())
    .then(data => data.forEach(function(item, index, array) {
        console.log(item, index);
    }));




