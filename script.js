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