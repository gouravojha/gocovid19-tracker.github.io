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



// News
fetch("https://covid-19-news.p.rapidapi.com/v1/covid?q=covid&lang=en&country=IN&topic=news&page=5&media=True", {
	"method": "GET",
	"headers": {
		"x-rapidapi-key": "7c615dcca4msh1256e61cbc40572p1f9723jsn712b498418d0",
		"x-rapidapi-host": "covid-19-news.p.rapidapi.com"
	}
})
.then(response => {
	return (response.json());
}).then(data =>{
	x = data['articles']
	console.log(data)
	document.getElementById('c-link').href = x[0]['link'];
	document.getElementById('c-link2').href = x[1]['link'];
	document.getElementById('c-link3').href = x[2]['link'];
	document.getElementById('c-link4').href = x[3]['link'];
	document.getElementById('c-link5').href = x[4]['link'];
	document.getElementById('c-link6').href = x[5]['link'];
	document.getElementById('c-img').src = x[0]['media'];
	document.getElementById('c-img2').src = x[1]['media'];
	document.getElementById('c-img3').src = x[2]['media'];
	document.getElementById('c-img4').src = x[3]['media'];
	document.getElementById('c-img5').src = x[4]['media'];
	document.getElementById('c-img6').src = x[5]['media'];
	document.getElementById('c-title').innerHTML = x[0]['title']
	document.getElementById('c-title2').innerHTML = x[1]['title']
	document.getElementById('c-title3').innerHTML = x[2]['title']
	document.getElementById('c-title4').innerHTML = x[3]['title']
	document.getElementById('c-title5').innerHTML = x[4]['title']
	document.getElementById('c-title6').innerHTML = x[5]['title']
})
.catch(err => {
	console.error(err);
});