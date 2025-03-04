//your JS code here. If required.
async function displayMessageAfterDelay(message, delay){
	await new Promise(resolve => setTimeout(resolve,delay));
	document.getElementById('output').innerText = message;
}


const btn = document.getElementById('btn');
const textinput = document.getElementById('text');
const delayInput = document.getElementById('delay');

btn.addEventListener('click',function(){
	const message = textinput.value;
	const delay = parseInt(delayInput.value);

	if(message && !isNaN(delay) && delay >= 0){
		displayMessageAfterDelay(message,delay);
	}
	else{
		document.getElementById('output').innerText = "please enter a valid message and delay."
	}
})
