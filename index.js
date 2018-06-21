//Code your solution here

function getFirstSelector(selector) {
  const element = document.querySelector(selector)
  return element
}

function nestedTarget() {
  const element = document.getElementById('nested').querySelector('div.target')
  return element
}

function deepestChild() {
  let element = document.getElementById('grand-node')
  let firstBorn = element.children[0]

  while (firstBorn) {
    element = firstBorn
    firstBorn = element.children[0]
  }

  return element
}

function increaseRankBy(n) {
  const element = document.querySelectorAll('.ranked-list')
  for (let key = 0, size = element.length; key < size; key++) {
    let children = element[key].children
    for (let value = 0, length = children.length; value < length; value++) {
      children[value].innerHTML = parseInt(children[value].innerHTML) + n
    }
  }
}