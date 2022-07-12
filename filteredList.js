https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Strict_mode
'use strict'

const inputButton = document.querySelector('.inputButton')
const inputNameList = document.querySelector('.inputNameList')
const inputNameArea = document.querySelector('#inputNameArea')
const cross = document.querySelector('#cross')

const nameList = [
  "アンパンマン",
  "食パンマン",
  "カレーパンマン",
  "天丼マン",
  "メロンパンナちゃん",
];

let tmpNameList = [];

const init = () => {
  nameList.forEach(e => {
    let list = document.createElement("li");
    let li = inputNameList.appendChild(list);
    li.classList.add("inputName");
    li.innerHTML = e;
  })
}

inputButton.addEventListener('click', function() {
  inputNameList.classList.toggle("extended");
})

inputNameArea.addEventListener('input', function() {
  let input = this.value
  inputNameList.innerHTML = filteredNameList(input)
})

const closeList = () => {
  inputNameList.classList.remove("extended");
}

init();
const inputName = document.querySelectorAll('.inputName')

inputName.forEach(e => 
  e.addEventListener('click', function() {
    inputButton.innerHTML = this.innerHTML
    closeList();
  })
)


const filteredNameList = input => {
  return filterNames(nameList, input)
}

const filterNames = (nameList, input) => {
  let tmpNameList = nameList.filter(e => e.match(input));
  return tmpNameList
}

cross.addEventListener('click', function() {
  clearList();
})

const clearList = () => {
  inputButton.innerHTML = ""
}
