var sun_ray = document.getElementById('sun_ray')
TweenMax.to(sun_ray, 1, {ease: Sine.easeInOut, scale:1.3, repeat:-1, yoyo:true})


//////////////////

fetch('https://api.kanye.rest/')
.then(function(results){
	return results.json()
})
.then(function(jsonResults){

	console.log("results: ", jsonResults)
	var quoteResult = jsonResults.quote;
	console.log(quoteResult)
	document.getElementById("quote").innerHTML = ("&ldquo;" + quoteResult + "&rdquo;");


})
.catch(function(error){
	console.log("error message:", error)
})

////////////////

