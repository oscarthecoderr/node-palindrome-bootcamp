

function palindrome(text){


  let reversedText = text.toLowerCase().split('').reverse.join('')
  return text === reversedText
}