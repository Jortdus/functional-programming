const JSONfetch = fetch('./datasets/form-data.json')
	.then(results => results.json())

function parseData() {
	return new Promise((resolve, reject) => {
			let dataSet = JSONfetch;
			resolve(dataSet);
		}).then(data => {
			return data.map(obj => {
				Object.keys(obj).forEach(key => {
					obj[key] = normalizeAnswers(obj[key])
					obj[key] = answersToNumbers(obj[key]);
				})
				return obj;
			})
		})
		.then(data => {
			return data.map(obj => {
				return obj;
			})
		}).then(json => json.map((v, i, arr) => {
			keyCleanup("Wat is je oogkleur?", "oogkleur", v)
			keyCleanup("Wat is je favoriete soort huisdier?", "huisdier", v)
			keyCleanup("Wat is je favoriete windrichting?", "wind", v)
			keyCleanup("Op een schaal van 1 tot 10, hoeveel zin heb je in de Tech Track?", "zinin", v)
			keyCleanup("Kies zelf of je deze vraag beantwoord.", "kies", v)
			keyCleanup("Wat is je favoriete datum?", "datumFormat", v)
			keyCleanup("Wat is je favoriete datum, maar nu in tekst!", "datumString", v)
			keyCleanup("Wat is je favoriete zuivelproduct?", "zuivel", v)
			keyCleanup("Welke kleur kledingstukken heb je aan vandaag? (Meerdere antwoorden mogelijk natuurlijk...)", "kleding", v)
			keyCleanup("Op welke verdieping van het TTH studeer je het liefst?", "tth", v)
			keyCleanup("Wat wil je worden als je groot bent?", "profession", v)
			keyCleanup("Wat wilde je later worden als je groot bent, maar nu toen je zelf 8 jaar was.", "grootKlein", v)
			keyCleanup("Kaas is ook een zoogdier?", "kaas", v)
			keyCleanup("Als je later een auto zou kopen, van welk merk zou deze dan zijn?", "auto", v)
			return v
		}))
		.catch(err => {
			console.log("error", err);
		})
}

function keyCleanup(oldKey, newKey, obj) {
	delete Object.assign(obj, {
		[newKey]: obj[oldKey]
	})[oldKey];
}

function normalizeAnswers(data) {
	return data.toString().toLowerCase()
}

function answersToNumbers(data) {
	return data.forEach(data => {
		data['zinin']
		console.log('oog')
	});

}

parseData().then(cleanData => {
	// console.log(cleanData[3]['zinin'])
	// console.table(cleanData);
	// d3.select('div')
	// .selectAll('p')
	// .data(cleanData)
	// .enter()
	// .append('p')
	// .text();
});