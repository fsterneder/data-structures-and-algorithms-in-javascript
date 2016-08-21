'use strict'
// An example of a real-world stack is a Pez dispenser.
// Imagine that your virtual Pez dispenser is filled with red, yellow, and white colors and you don’t like the yellow ones.
// Write a program that uses a stack (and maybe more than one) to remove the yellow ones without changing the order of the other candies in the dispenser.

class Stack {
  constructor(){
    this.data = []
    this.top = () => this.data.length
    this.push = (...element) => {for(var i of element){this.data.push(i)}}
    this.pop = () => this.data.pop()
    this.peek = () => this.data[this.data.length-1]
    this.clear = () => this.data = []
  }
}

function pez(color){
  // setup
  let orig = new Stack(), temp = new Stack()
  for(let i=0;i<12;i++){orig.push(['red','yellow','white'][Math.floor(Math.random()*3)])}
  // solution
    // selection process
  for(let i=0;i<12;i++){let sel = orig.pop();sel == color ? null : temp.push(sel)}
    // getting them back
  let len = temp.top()
  for(let i=0;i<len;i++){orig.push(temp.pop())}
}

pez('red')
