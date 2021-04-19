var country = '//'
fetch("https://covid-19-coronavirus-statistics.p.rapidapi.com/v1/total?country=" + country, {
	"method": "GET",
	"headers": {
		"x-rapidapi-key": "7c615dcca4msh1256e61cbc40572p1f9723jsn712b498418d0",
		"x-rapidapi-host": "covid-19-coronavirus-statistics.p.rapidapi.com"
	}
}).then(response => {
	return response.json();
}).then(data => {
	x = data['data']
	console.log(data)
	console.log(x['deaths'])
    document.getElementById('world-death').innerHTML = x['deaths']
	console.log(x['recovered'])
    document.getElementById('world-confirmed').innerHTML = x['confirmed']
})
	.catch(err => {
		console.error(err);
	});


var country = 'India'
fetch("https://covid-19-coronavirus-statistics.p.rapidapi.com/v1/total?country=" + country, {
	"method": "GET",
	"headers": {
		"x-rapidapi-key": "7c615dcca4msh1256e61cbc40572p1f9723jsn712b498418d0",
		"x-rapidapi-host": "covid-19-coronavirus-statistics.p.rapidapi.com"
	}
}).then(response => {
	return response.json();
}).then(data => {
	x = data['data']
	console.log(data)
	console.log(x['deaths'])
    document.getElementById('india-death').innerHTML = x['deaths']
	console.log(x['confirmed'])
    document.getElementById('india-confirmed').innerHTML = x['confirmed']
	console.log(x['recovered'])
    document.getElementById('india-recovered').innerHTML = x['recovered']
})
	.catch(err => {
		console.error(err);
	});

function getData(){
    var country = document.getElementById('country').value
    document.getElementById('c-name').innerHTML = country
    fetch("https://covid-19-coronavirus-statistics.p.rapidapi.com/v1/total?country=" + country, {
	"method": "GET",
	"headers": {
		"x-rapidapi-key": "7c615dcca4msh1256e61cbc40572p1f9723jsn712b498418d0",
		"x-rapidapi-host": "covid-19-coronavirus-statistics.p.rapidapi.com"
	}
}).then(response => {
	return response.json();
}).then(data => {
	x = data['data']
	console.log(data)
	console.log(x['deaths'])
    document.getElementById('c-death').innerHTML = x['deaths']
	console.log(x['confirmed'])
    document.getElementById('c-confirm').innerHTML = x['confirmed']
	console.log(x['recovered'])
    document.getElementById('c-recover').innerHTML = x['recovered']
})
	.catch(err => {
		console.error(err);
	});
}    