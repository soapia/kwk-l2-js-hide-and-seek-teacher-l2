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
  let child = element.querySelectorAll('div') // find the items within grand node

  return child[3] // return the final div in the array
}

function increaseRankBy(num) {
  const children = document.querySelectorAll('ul.ranked-list') // find the ul elements with a class of ranked-list
    for (let key = 0, length = children.length; key < length; key++) { // start off with a key of 0, make the variable length equal to the length of the children array, add one to the key for when the key is less than the length
      children[key].innerHTML = parseInt(children[key].innerHTML) + num // find the text at a given key of the array and convert it to an integer, THEN add the number to it
    }
}