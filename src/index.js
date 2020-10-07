module.exports = function toReadable(number) {

    const textNumbers = ['zero','one', 'two', 'three', 'four','five', 'six', 'seven', 'eight','nine', ];
    const firstTens = ['ten','eleven','twelve','thirteen','fourteen', 'fifteen','sixteen','seventeen','eighteen','nineteen',]
    
    const otherTens = [null, null, 'twenty', 'thirty', 'forty', 'fifty','sixty', 'seventy', 'eighty', 'ninety', ];


   let result;
    const length = number.toString().length;

    if (length === 1) {
        result = toNumbers(number);
    } else if (length === 2) {
        result = toTens(number);
    } else if (length === 3) {
        result = toHundreads(number);
    }


  function toNumbers(number) {
    return textNumbers[number];
  }

  function toTens(number) {
     
      if (number < 20 ) {
          return firstTens[number % 10];
      } else if (number % 10 === 0) {
        const tensIndex = Math.floor(number/ 10);
        return otherTens[tensIndex];
      } else {
          const tensIndex = Math.floor(number/ 10);
          const numberIndex = number % 10;
          return `${otherTens[tensIndex]} ${textNumbers[numberIndex]}`
      }
   
  }

  function toHundreads(number) {
    let result; 

    let hundreadNumber = Math.floor(number / 100);
    let hundreadText = `${textNumbers[hundreadNumber]} hundred`
    let lessNumber = number % 100;

    if (number % 100 === 0) {
        return hundreadText
    } else if (lessNumber < 10) {
        return `${hundreadText} ${toNumbers(lessNumber)}`
    } else {
        return `${hundreadText} ${toTens(lessNumber)}`
    }



  }
  
  return result;
   };



  

   




