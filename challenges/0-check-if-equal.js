/* Write a function that, given two numbers, returns a boolean representing whether or not the two numbers are equal.

You may assume that the numbers are always integers (i.e. whole numbers).

function:
=========
name: isEqual 

parameter a: number

parameter b: number

return: boolean

pseudo code:
============
if a is equal to b
	return True
else
	return False

test cases:
===========
isEqual(4, 4) should be True
isEqual(0, 0) should be True
isEqual(-4, -4) should be True
isEqual(4, -4) should be False
isEqual(0, 1) should be False
*/

function isEqual (a,b) {
    if (a === b){
	
        return true
    }else{

	return false
}}

console.log(isEqual(4,4))
console.log(isEqual(0,0))
console.log(isEqual(-4,-4))
console.log(isEqual(4,-4))
console.log(isEqual(0,1))