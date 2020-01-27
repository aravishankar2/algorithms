
// function HashTable() {
//     this.size = 0;
//     this.dataStore = {}
// }

// // create some methods on our prototype:

// // show contents of
// HashTable.prototype.enumerate = function() {
//     for (var elements in this) {
//        console.log(elements)
//     }
// }

// // check if empty
// HashTable.prototype.isEmpty = function() {
//     return this.size > 0 ? false : true
// }

// // clear the hash table
// HashTable.prototype.clear = function() {
//     this.dataStore = {}
//     this.size = 0;
//     return this.dataStore
// }

// // check if the hash table contains a value
// HashTable.prototype.contains = function(key) {
//     if (this.dataStore.hasOwnProperty(key)) {
//         return true
//     } else {
//         return false
//     }
// }



// var ht = new HashTable()



let newObj = Object.assign({}, ['a','b','c'])

let test = ['a','b','c']
var rv = {};
function toObject(arr) {
  
    for (var i = 0; i < arr.length; i++) {
        rv[i] = arr[i]
    }
    console.log(rv);
    return rv
  }
  toObject(test)

// let a = 1;
// let b = 2;

// [a, b] = [b, a];

// console.log(a);
// console.log(b);

// console.log(newObj)