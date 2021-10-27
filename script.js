var cleaning = [];

const JSONfetch  = fetch('./datasets/form-data.json')

JSONfetch
    .then(results => results.json())
    .then(data => data.forEach(function (value, index, obj) {
        cleaning.push(data[index]["Kaas is ook een zoogdier?"].toString().toLowerCase())
        cleaning.sort().reverse()

        Object.keys(value).forEach(key => {
            switch (key) {
                case "Wat is je favoriete soort huisdier?":
                    keyCleanup("huisdier", key, obj)
                    console.log(obj) 
                    break;
            }
        });

    }));

function keyCleanup(newKey, oldKey, o) {
    delete Object.assign(o, {
        [newKey]: o[oldKey]
    })[oldKey];
}
