const input = document.querySelector('input');
const add = document.querySelector('button');
const second = document.getElementById('second');
add.addEventListener('click',()=>{

         const task = input.value;
         const h1 = document.createElement('h1');
         h1.className = "h1";
         const div = document.createElement('div');
         const seperator = document.createElement('hr');
         h1.innerText = task;
        div.append(h1)
         input.value = "";
         document.querySelector('body').appendChild(div);
         
})

const date = new Date();
const d1 = date.toLocaleDateString();
const d = document.getElementsByClassName('date')[0];
d.innerHTML = `Date: ${d1}`;

// document.getElementById('second').appendChild(d);