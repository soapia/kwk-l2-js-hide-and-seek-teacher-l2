//Code your solution here

function getFirstSelector(selector) {
  const element = document.querySelector(selector) // find the selector in the document
  return element // show me the element corresponding to the selector
}

function nestedTarget() {
  const element = document.getElementById('nested').querySelector('div.target') // find the div with a class of target within something with an id of #nested
  return element // show it to meeeeee
}

function deepestChild() {
  let element = document.getElementById('grand-node') // find the element with an id of #grand-node
  let firstBorn = element.children[0] // find the first item within grand node

  while (firstBorn) { // when another child still exists
    element = firstBorn // make the thing we're parsing through the child
    firstBorn = element.children[0]
  }

  return element
}

function increaseRankBy(n) {
  const element = document.querySelectorAll('.ranked-list') // find the elements with a class of ranked-list
  for (let key = 0, size = element.length; key < size; key++) { // start with the key being 0, define the size of the array, do smth when the key is less than the size, add to key each time
    let children = element[key].children
    for (let value = 0, length = children.length; value < length; value++) {
      children[value].innerHTML = parseInt(children[value].innerHTML) + n
    }
  }
}