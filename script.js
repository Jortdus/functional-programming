const data = fetch('./datasets/form-data.json')
    .then(results => results.json())
    .then(console.log);
