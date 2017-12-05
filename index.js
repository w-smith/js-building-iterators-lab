var myEach = require('./myEach');
var myMap = require('./myMap');
var myReduce = require('./myReduce');
/* *********************************************************************
  You can edit this file
  It will make use of your code in myEach.js, myMap.js and myReduce.js
  To run it on the console do: `node index.js`
***********************************************************************/

var numArray = [0,1,10,100,1000];


function myEach(arr, callback) {
  
for (var i=0; i< arr.length; i++) {
callback(arr[i], i, arr);
	
  }
}




function myMap(arr, callback) {


let newArray = [];
for (var i=0; i< arr.length; i++) {
newArray.push(callback(arr[i], i, arr));
}

return newArray;


}

