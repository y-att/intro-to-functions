

function censorMessage (message, banList)
{
    let rawWords = message.split(' ')
    //rawWords works
    let scrubbedWords = []
    //appearing as empty array
    for (word of rawWords)
    {
        let lowercaseWord = word.toLowerCase()
        //printed all words in lower case- this works

        if (banList.includes(lowercaseWord))
        {
            // append lowercaseWord to end of scrubbedWords
            scrubbedWords.push('*****')
            //console.log(scrubbedWords)
        }
        else 
        {
            //append word to scrubbedWords
            scrubbedWords.push(word)
            //console.log(word)
        }
    }
    let scrubbedMessage = scrubbedWords.join('')
    //string created by joining together each string in scrubbedWords with '' as join character

    return scrubbedMessage
}


//console.log(censorMessage("don't mess with cats", ["mess"])) //should be "don't ***** with cats"
console.log(censorMessage("Are you sure that this is safe", ["are", "is"]))// should be "***** you sure that this ***** safe"
// censorMessage("I CANNOT HELP YOU", ["can", "not", "help", "you"]) should be "I CANNOT ***** *****"
