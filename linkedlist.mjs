import { Node } from './node.mjs'

class LinkedList {
  constructor() {
    this.head = null
  }
  append(value) {
    const newNode = new Node(value)
    if (this.head === null) {
      this.head = newNode
    } else {
      let current = this.head
      while (current.next !== null) {
        current = current.next
      }
      current.next = newNode
    }
  }
  prepend(value) {
    const newNode = new Node(value)
    newNode.next = this.head
    this.head = newNode
  }
  size() {
    let size = 0
    if (this.head === null) {
      size = 0
    } else {
      let current = this.head
      while (current !== null) {
        current = current.next
        size += 1
      }
    }
    return size
  }
  getHead() {
    if (this.head === null) {
      return this.head
    } else {
      return this.head
    }
  }
  getTail() {
    let current = this.head
    while (current.next !== null) {
      current = current.next
    }
    return current
  }
  at(index) {
    let current = this.head
    if (current.next !== null) {
      for (let curIdx = 0; curIdx < index; curIdx++) {
        current = current.next
      }
      return current
    }
  }
  pop() {
    if (this.head === null) {
      return this.head
    }
    if (this.head.next === null) {
      this.head = null
      return this.head
    }
    let current = this.head
    let previous = null
    while (current.next !== null) {
      previous = current
      current = current.next
    }
    previous.next = null
    return previous
  }
  contains(value) {
    let current = this.head
    while (current.next !== null) {
      if (current.value === value) {
        return true
      }
      current = current.next
    }
    return false
  }
  find(value) {
    let current = this.head
    let index = 0
    while (current.next !== null) {
      index += 1
      if (current.value === value) {
        return index - 1
      }
      current = current.next
    }
    return index
  }
  toString() {
    let current = this.head
    let string = ''
    while (current !== null) {
      string += `( ${current.value} ) -> `
      current = current.next
    }
    return string + 'null'
  }
}

export { LinkedList }
