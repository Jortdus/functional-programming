let zininInts = [];
const zininScale = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]


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
	zininInts = data.map(v => {
		return parseInt(v.zinin);
	});
}

parseData().then(cleanData => {
	answersToNumbers(cleanData)
	// console.log(zininInts)
	graphCreation()

});

function graphCreation() {

	// set the dimensions and margins of the graph
	var margin = {
			top: 20,
			right: 20,
			bottom: 30,
			left: 40
		},
		width = 960 - margin.left - margin.right,
		height = 500 - margin.top - margin.bottom;

	// set the ranges
	var x = d3.scaleBand()
		.range([0, width])
		.padding(0.1);

	var y = d3.scaleBand()
		.range([0, height])
		.padding(0.1);

	var svg = d3.select("body").append("svg")
		.attr("width", width + margin.left + margin.right)
		.attr("height", height + margin.top + margin.bottom)
		.append("g")
		.attr("transform",
			"translate(" + margin.left + "," + margin.top + ")");

	console.log(zininInts)
	console.log(d3.max(zininInts));

	x.domain(zininScale);
	y.domain(zininInts);

	// append the rectangles for the bar chart
	svg.selectAll(".bar")
		.data(zininInts)
		.enter().append("rect")
		.attr("class", "bar")
		.attr("x", function (d) {
			return x(d);
		})
		.attr("width", x.bandwidth())
		.attr("length", y.bandwidth())
		.attr("y", function (d) {
			return y(d);
		})
		.attr("height", function (d) {
			return height - y(d);
		});

	// add the x Axis
	svg.append("g")
		.attr("transform", "translate(0," + height + ")")
		.call(d3.axisBottom(x));

	// add the y Axis
	svg.append("g")
		.call(d3.axisLeft(y));

};