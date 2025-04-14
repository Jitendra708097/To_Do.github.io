const input = document.querySelector('input');
const search = document.querySelector('label');
const second = document.getElementById('second');
search.addEventListener('click',()=>{

         const task = input.value;
         const h1 = document.createElement('h1');
         const inp = document.createElement('input');
         const seperator = document.createElement('hr');
         inp.type = "checkbox";
         h1.innerText = h1;
         second.innerHTML = h1;
         input.value = "";
         
})

const date = new Date();
const d1 = date.toLocaleDateString();
const d = document.getElementsByClassName('date')[0];
d.innerHTML = `Date: ${d1}`;

// document.getElementById('second').appendChild(d);