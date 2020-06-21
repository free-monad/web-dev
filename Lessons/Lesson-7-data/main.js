let table = document.querySelector('table');

data.forEach(r => {
let tr = document.createElement('tr');
let td1 = document.createElement('td');
let td2 = document.createElement('td');

td1.innerHTML = r.percentile;
td2.innerHTML = r.household_income;

tr.appendChild(td1);
tr.appendChild(td2);
table.appendChild(tr);
});







/*fetch('http://www.whalebellies.com/data.json')
	.then(res => res.json())
	.then(data => { 
         console.log(data); 
	})
	.catch(err => console.error(err));
*/


