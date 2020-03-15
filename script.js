// We need to get our JSON with all our data
const url = './resources.json'
let resources

function get_resources()
{
	fetch(url)
		.then(function(res){
			return res.json()
		})
		.then(function(json){
			// console.log(json)
		  	resources = json
		  	// console.log(resources)
		  	generate_sentence(resources)
	  	})
}

// console.log(resources)

function generate_sentence(resources)
{
	var type = Math.random() < 0.8 ? "individual" : "industrial"
	var subject = resources["subject"][type][Math.floor(Math.random() * resources["subject"][type].length)]
	var using = resources["using"][Math.floor(Math.random() * resources["using"].length)]
	var to = resources["to"][Math.floor(Math.random() * resources["to"].length)]
	var thing = resources["process"][type][Math.floor(Math.random() * resources["process"][type].length)]
	document.getElementById("pitch").innerHTML = '"' +subject + " using " + using + " to " + to + " " + thing + '."'
}

document.onload = get_resources()

document.getElementById("regenBtn").addEventListener("click", get_resources)