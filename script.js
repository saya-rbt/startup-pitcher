// We need to get our JSON with all our data
const url = './resources.json'
let remote_resources

function get_resources()
{
	fetch(url)
		.then(function(res){
			return res.json()
		})
		.then(function(json){
			remote_resources = json
			generate_sentence(remote_resources)
		})
}

function generate_sentence(resources = remote_resources)
{
	var type = Math.random() < 0.8 ? "individual" : "industrial"
	var subject = resources["subject"][type][Math.floor(Math.random() * resources["subject"][type].length)]
	var using = resources["using"][Math.floor(Math.random() * resources["using"].length)]
	var to = resources["to"][Math.floor(Math.random() * resources["to"].length)]
	var thing = resources["process"][type][Math.floor(Math.random() * resources["process"][type].length)]
	document.getElementById("pitch").innerHTML = '"' +subject + " using " + using + " to " + to + " " + thing + '."'
}

document.onload = get_resources()

document.getElementById("regenBtn").addEventListener("click", () => generate_sentence())
