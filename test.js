https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Strict_mode
'use strict'

const submitButton = document.querySelector('#submit')
const emailArea = document.querySelector('.emailArea')
const passArea = document.querySelector('.passArea')
const counter = document.querySelector('#counter');
const reset = document.querySelector('#reset');
const counterArea = document.querySelector('.counterArea');
const fileArea = document.querySelector('.fileArea');
const reload = document.querySelector('#reload');

let cnt = 0;
counterArea.innerHTML = cnt;


submitButton.addEventListener('click', () => {
  let mail = document.querySelector('#email').value
  let pass = document.querySelector('#pass').value
  emailArea.innerHTML = `Email: ${mail}`;
  passArea.innerHTML = `Password: ${pass}`;
})


counter.addEventListener('click', () => {
  counterArea.innerHTML = cnt += 1;
}
)

reset.addEventListener('click', () => {
  counterArea.innerHTML = cnt = 0;
}
)

const fetchDogImage = () => {
  fetch("https://dog.ceo", {
    mode: 'cors'
  }).then(
    res => {
      res.json().then(
        data =>{
          console.log(data)
          const dog = document.querySelector('#dog');
          const dogImageUrl = data.message
          dog.src = dogImageUrl
        })
  }).catch(error => {
    console.error(error)
 })
}

reload.addEventListener('click', () => {
  fetchDogImage()
})


window.addEventListener('DOMContentLoaded', e => {
  fetchDogImage()
})

new gridjs.Grid({
  columns: ["Name", "Email", "Phone Number"],
  data: [
    ["John", "john@example.com", "(353) 01 222 3333"],
    ["Mark", "mark@gmail.com", "(01) 22 888 4444"],
    ["Eoin", "eoin@gmail.com", "0097 22 654 00033"],
    ["Sarah", "sarahcdd@gmail.com", "+322 876 1233"],
    ["Afshin", "afshin@mail.com", "(353) 22 87 8356"]
  ]
}).render(document.getElementById("wrapper"));
