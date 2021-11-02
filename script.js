var count;
var status;
var users = [];

function check(x) {
	if(x == 'count')
	{

	} else
		{
			if(x == 'status')
			{

			} else
				{
					if(x == 'users')
					{

					}
				}
		}
}

setInterval(function()
{
	document.getElementById('server-status').innerHTML = 'Server Status: ' + status;
	document.getElementById('count').innerHTML = 'Users Online: ' + count;
}, 1);
for(let i = 0; i < users.length; i++)
{
 var Elem = document.createElement("h5");
 Elem.innerText = users[i];
 Elem.style.color = 'white';
 document.getElementById('center-user').appendChild(Elem);
}

document.getElementById("discord").addEventListener("click", function() {
 location.replace('https://discord.gg/WhwAZNGbxu');
});

document.getElementById("download").addEventListener("click", function() {
 location.replace('https://github.com/DasJNNJ/CrabGame-Cheat/releases');
});

document.getElementById("github").addEventListener("click", function() {
	location.replace('https://github.com/DasJNNJ/CrabGame-Cheat');
});

document.getElementById("details").addEventListener("click", function() {
	document.getElementById('paragraph').innerHTML = 'Crab Game Cheat consists of the following features: Fly, AirHop, ClickTP, GlassBreak ESP, God Mode, Mega Jump, Mega Slap, Speed and more to come...        This has taken a while to make so please enjoy this wonderful creation! When the cheat is fully released all the features and fixes will be put onto this website so stay tuned! Please remember that we are not responsible for you getting kicked/banned in any parties!';
})

document.getElementById('home').addEventListener("click", function() {
	document.getElementById('paragraph').innerHTML = 'Hello Everyone! Welcome to the official website for the Crab Game Cheat, feel free to join us with this community (Non Toxic). Our Director (JNNJ) has led us to this point and we appreciate him! JNNJ is the one that has created this whole cheat and he has spent many hours into it. If you want to, press the download button on the side to download the cheat. PS, we are not responsible for your misbehavings with the cheat.';
});