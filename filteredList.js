https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Strict_mode
'use strict'

const inputButton = document.querySelector('.inputButton')
const inputButtonText = document.querySelector('.inputButtonText')
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
  createNameList(nameList);
  createEvent();
}

const createEvent = () => {
  const inputName = document.querySelectorAll('.inputName')
  inputName.forEach(e => 
    e.addEventListener('click', function() {
      inputButtonText.innerHTML = this.innerHTML
    })
  )
  toggleExtended();
}

const createNameList = list => {
  clearList();
  list.forEach(e => {
    let list = document.createElement("li");
    let span = document.createElement("span");
    let wrapper = document.createElement("div");
    let icon = inputNameList.appendChild(span);
    let wra = inputNameList.appendChild(wrapper);
    wra.appendChild(icon);
    let li = wra.appendChild(list);
    wrapper.classList.add("nameListWrapper");
    li.classList.add("inputName");
    icon.classList.add("material-symbols-outlined")
    icon.innerHTML = "account_circle"
    li.innerHTML = e;
  })
}

const toggleExtended = () => {
  inputButton.addEventListener('click', function() {
    inputNameList.classList.toggle("extended");
  })
}

inputNameArea.addEventListener('input', function() {
  let input = this.value
  createNameList(filteredNameList(input))
  createEvent();
})

const filteredNameList = input => {
  return nameList.indexOf(input) === -1 ? filterNames(nameList, input) : nameList
}

const filterNames = (nameList, input) => {
  let tmpNameList = nameList.filter(e => e.match(input));
  return tmpNameList
}

// cross.addEventListener('click', function() {
//   clearList();
// })

const clearList = () => {
  inputNameList.innerHTML = ""
}
init();
