# Dag 1 25 oktober

## **Work done**

* Github repo klaarzetten
* Codeer omgeving opzetten
* Document opzetten met uitwerking raw data types
* Live server omgeving klaarzetten
* Local JSON fetch gemaakt

## **Recap**

Vandaag heb ik de start gemaakt voor het vak Functional Programming. 
Voor mijzelf en mijn team heb ik een document geschreven waar ik elke vraag vanuit het formulier heb gecategoriseerd naar data type (integer, string), of het data result vanuit het formulier restricties is, een open input is, multiple choice of multiple choice met meerdere goede antwoorden en/of een combinatie hiervan.  

https://docs.google.com/document/d/1pQ-0GGS7FpZEWNUNpXas0OgmcRYb_OkHDY-0QwYGqBg/edit?usp=sharing

# Dag 2 26 oktober 

## **Work done**

* Installed NPM in my work folder
* updated dependancies. 
* extracted data from JSON array into separate variable.
* cleaned, filtered and sorted data in separate array.
* made sure Github is up to date.


## **Recap**
Vandaag heb ik gekozen om data van de vraag "Kaas is ook een zoogdier?" te gebruiken en te sorteren, cleanen en filteren.
Daarnaast probeer ik zo goed mogelijk deze wiki met mijn progress bij te houden. 

```javascript
var cleaning = []

cleaning.push(data[i]["Kaas is ook een zoogdier?"].toString().toLowerCase())
```



Dit stukje code voegt data vanuit het JSON bestand toe aan een nieuwe array en transformeert de data naar een string en zet alle tekst om naar lowercase. 

```
cleaning.sort().reverse()
```

met sort() en reverse() sorteer je de waardes en met reverse draai je de volgorde om waardoor de data op alfabetische volgorde staat. 

# Dag 3 27 oktober 

## **Work done**

Cleaned up code somewhat.
Brainstorming all day about Object.assign()

## **Recap**

Vandaag was niet erg productief. Ik had me zelf als doel gezet met behulp van Object.assign() en een switch statement de keys (vragen) te veranderen naar betere namen. Echter liep ik hier zodanig op vast dat ik hulp nodig had van een docent die op dat moment helaas niet aanwezig was. 

# Dag 4 28 oktober

## **Work done**
Changed file into Promise function 
form keys simplified 
started looking into d3.js
Starting on preparing data to be put into data charts.

## **Recap**
Vandaag is het me gelukt mijn code in een staat te krijgen waarbij ik nu de volgende stap kan nemen in het visualiseren van mijn dataset.
De functies de data schoonmaakte is nu modulair en zodanig verwerkt in een Promise functie.

Hierdoor ben ik nu begonnen met het inlezen en oefenen met d3.js om een bar chart te maken en hierin waardes van de "zin" factor te visualiseren. 

```javascript
function graphCreation() {

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

}
```

# Dag 5 29 oktober 

## **Work done**
Started working on a D3.js based chart implementing the excitement factor for track Tech.
Getting a better understanding of D3.js

## **Recap**
Ik heb mij vandaag gefocused op het visualiseren van data uit de dataset over het "excitement" cijfer voor track Tech.
Na veel debuggen ben ik nu instaat een bar chart te produceren. 

# Dag 7 2 november

## **Work done**
Fetching raw data from RIVM 
creating script to take values from RIVM data and putting it in a clean array + object.


## **Recap**
Vandaag ben ik bezig geweest met het kiezen van een toepasselijke API. Na onderzoek heb ik besloten corona riooldeeltjes te gaan visualiseren met behulp van data van het RIVM. 

Ik heb de data weten te extracten op de manier die ik wil gebruiken in de visualisatie. 

```javascript
        data.forEach(e => {
            cityValue.push({
                particles: e['RNA_flow_per_100000'],
                date: e['Date_measurement'],
                location: e['RWZI_AWZI_name']
            })
        })
```

Ik ben van plan de informatie te visualiseren op een kaart van Nederland. 

# Dag 8 3 november

## **Work done**
Imported CBS dataset with town/city places matching the province
Cleaned up dataset 
Came up with the idea to visualise data from Corona dashboard data

```js
const provinceFetch = fetch('./datasets/province.json')
    .then(results => results.json())
```

## **Recap**

Mijn initiële plan was om op een kaart gemaakt met D3.js per plaats aan te geven hoeveel corona deeltjes er aanwezig waren in het rioolwater. 
Dit zou ik doen met behulp van Geocoding van Google. Echter door de schaal van de dataset (30.000+ waardes) zou ik heel snel over mijn 2500 requests per dag gaan. 

Na overleg met Suus heb ik besloten inplaats van plaatsen met data over te stappen naar gemiddeld aantal deeltjes per provincie. De RIVM dataset geeft alleen de plaatsnamen aan dus ik moet de plaatsnamen koppelen aan een provincie.
Dit ga ik doen met behulp van een dataset van het CBS, hierin staan de naamplaatsen met de toebehorende provincie. 

Als ik de twee datasets met elkaar kan vergelijk en met een functie de toebehorende provincie kan koppelen aan de naamplaats, kan ik dit visualiseren in een D3.js kaart met de gemiddelde aantal deeltjes. 

# Dag 9 4 november 

## **Work done**
* Finished README.md
* Finished creating wiki.md
* Added code comments to script.js 
* Made sure everything is correct for assignment turn-in 

## **Recap**

Vandaag ben ik bezig geweest met de puntjes op de i zetten voor het inlever moment. 
Omdat de wiki niet makkelijk te exporteren is heb ik de markdown in een apart wiki.md bestand gestopt en op mijn repo gezet. 