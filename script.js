const input = document.querySelector('input');
const add = document.querySelector('button');
const second = document.getElementById('second');
add.addEventListener('click',()=>{

         const task = input.value;
         const h1 = document.createElement('h1');
         h1.className = "h1";
         const div = document.createElement('div');
         div.className = "tasklist";
         const checkbox = document.createElement('input');
         checkbox.className = "checkbox";
         checkbox.type = "checkbox";
         h1.innerText = task;
        div.append(checkbox,h1)
         input.value = "";
         document.getElementById('first').appendChild(div);

         
});


const date = new Date();
const d1 = date.toLocaleDateString();
const d = document.getElementsByClassName('date')[0];
d.innerHTML = `Date: ${d1}`;

// document.getElementById('second').appendChild(d);