const { createList } = require('./linkedlist')

const list = createList()

list.append('Iroulegy')
list.append('Bordeaux')
list.append('Haut Medoc')
list.append('Loire Valley')
list.append('Beaujolais')
list.append('Alsace')
list.append('Rhone')
list.append('Burgundy')

console.log(list.toString())
