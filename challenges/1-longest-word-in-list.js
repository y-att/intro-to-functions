/*Write a function that, given a list of strings, 
returns the string which has the greatest character count (including duplicates).

When there are multiple string which are tied for largest character count, 
return the string that occurs earliest in the list.

You may assume that each string in the list is a single word.
You may assume that there are always at least two strings in the list.

*/

/*
function longestInList ("x")
{
longest = words [0]
for (let word = 0, word < longest.length, i++)
{
 if 
 {
   word.length > longest.length
   longest = word 
 }
return longest
}

}

console.log(longestInList(["England", "Wales", "Scotland", "Northern Ireland"])) //should be "Northern Ireland"


/*

function:
=========
name: longestInList

parameter: words: list of strings

return type: string

pseudo code:
============
*/

function longestInList (words) 
{
    let longest = words[0]

    for (let word of words)
    {
        if (word.length > longest.length)
        {
            longest = word 
        }
    }
    return longest
}

console.log(longestInList(["England", "Wales", "Scotland", "Northern Ireland"])) //should be "Northern Ireland"

// set longest to first string in words



// for each string word in words
// 	if word has more characters than longest
// 		set longest to word

// return longest

// test cases:
// ===========
// longestInList(["England", "Wales", "Scotland", "Northern Ireland"]) should be "Northern Ireland"
// longestInList(["the", "quick", "brown", "fox"]) should be "quick"
// longestInList(["hello", "hi", "greetings", "hey"]) should be "greetings"
// */
        

//console.log(longestInList(["England", "Wales", "Scotland", "Northern Ireland"])) //should be "Northern Ireland"
//longestInList(["the", "quick", "brown", "fox"]) should be "quick"
//longestInList(["hello", "hi", "greetings", "hey"]) should be "greetings