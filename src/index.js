//условные 1
const  sumIfEven = (a, b) => {
    if(a % 2 == 0) {
        return a * b;
    } else return a + b;   
};
 
//условные 2
function getQuarter (x, y) {
    if ( x === 0 && y === 0 ) {
        return "origin";
    } else if ( x === 0 && y === 1 ) {
        return "y-axis";
    } else if ( x===1 && y===0 ) {
        return "x-axis"
    } else if ( x>0 && y>0 ) {
        return "first quarter"
    } else if ( x>0 && y<0 ) {
        return "second quarter"
    } else if ( x<0 && y<0 ) {
        return "third quarter"
    } else if ( x<0 && y>0 ) {
        return "forth quarter"
    }
};

//условные 3
// function getSumPositives(first, second, third) {
//     let sum = 0;

//     if (first > 0){
//         sum += first;
//     }
//     if (second > 0 ){
//         sum += second;
//     }
//     if (third > 0){
//         sum += third;
//     } 

//     return sum;
// };

//условные 4
function calculateMax (a,b,c) {
    let sum = a + b + c;
    let product = a * b * c;
    let result = 0;
    
    if(sum === product) {
        result = 3;
    }
    if(sum > product) {
        result = sum + 3;
    } else result = product + 3;
    
    return result;
};

//условные 5
const getMark = rate =>  {
    let result = "" ;
    
    if (rate <0 || rate > 100) {
        return result ;
    } else if (rate > 0 && rate < 20) {
        result = "F"
    } else if (rate < 40) {
        result = "E"
    } else if (rate < 60) {
       result = "D"
    } else if (rate < 75) {
        result = "C"
    } else if (rate < 90) {
        result = "B"
    } else if (rate <= 100) {
        result = "A"
    } 
       return result;
};

//циклы 1
function getSum(){
    let sum = 0;

    for (i = 0; i < 99; i++){
        if ( i % 2 == 0 ){
            sum += i;
        }   
    } 
        return sum; 
};

//циклы 2
const getPrime = num => {
    for (let i = 0; i < num ; i++) {
        if (num % i) {
            return false;
        }
    }

    return true;
};

//циклы 3
const getPrime = number => {
    for (let i = 2; i < number ; i++) {
        if (number % i===0) {
            return false;
        } else return true;
    }
};

//циклы 4

//циклы 5
  function getSumNumber (num) {
    var sum = 0, tmp;
    while (num) {
        tmp = num % 10;
        num = (num - tmp) / 10;
        sum += tmp;
    }
     return sum;
  };

  //циклы 6
  function getMirror(num){
    let number = num;
    let result = 0;
    let counter = 0;

    if(num===0){
        result = false;
    }
    else if(num < 0){
        result = false;
    }
    while (number > 0){
        counter = number%10;
        result += counter;
        number = (number - counter)/10;
        number && (result *= 10) ;
    }

    return result; 
};

//массив 1
function getMinNumInMassive (numArray){
    let massive = [24, 21, 2, 7];
    let result;

    result = Math.min(24, 21, 2, 7);
    return result;
};

//массив 2
function getMaxNumInMassive (numArray){
    let massive = [24, 21, 2, 7];
    let result;

    result = Math.max(24, 21, 2, 7);
    return result;
};
//массив 3
function indexOfMax(arr) {
    if (arr.length === 0) {
         return -1;
    }
     var max = arr[0];
     var maxIndex = 0;
for (var i = 1; i < arr.length; i++) {
    if (arr[i] > max) {
         maxIndex = i;
         max = arr[i];
     }
 }
    return maxIndex;
};

//массив 4
    function indexOfMin(arr) {
        if (arr.length === 0) {
            return -1;
        }

        var min = arr[0];
        var minIndex = 0;

        for (var i = 1; i < arr.length; i++) {
            if (arr[i] < min) {
                minIndex = i;
                min = arr[i];
            }
        }

        return minIndex;
    };

//массив 5
function sumOddIndex (arr) {
        let sum = 0;

    for (let i = 0; i < arr.length; i++) {
        if (i % 2 !== 0) sum +=arr[i];
    };
    return sum;  
};

//массив 6
function getNameDay (dayNumber) {
    if (dayNumber > 7 ) {
        return "Error"
    } else if (dayNumber === 1) {
        return "понедельник"
    } else if (dayNumber === 2) {
        return "вторник"
    } else if (dayNumber === 3) {
        return "среда"
    } else if  (dayNumber === 4) {
        return "четверг"
    } else if (dayNumber === 5) {
        return "пятница"
    }else if (dayNumber === 6) {
        return "суббота"
    }else if (dayNumber === 7) {
        return "воскресенье"
    } else if (dayNumber < 0) {
        return "Error"
    }
};


/////////////////////////////////////////

// function getFactorial(n)  {
//     let result = 1;

//     for (let i=2; i<=n; i++) {

//    result = result * i;
//       }

//    return result
// };



// function sumIfEven (a,b) {
//     if (a%2==0) {
//         return a*b
//     } else return a+b
// };





// const getIsPrime= number => {
//     let tempNumber=number;
//     if(tempNumber<0){
//         tempNumber*=-1; // return false;
//     }
//     for(let i=2; i<tempNumber/2; i++){
//         if(number%i){
//             return false;
//         }
//     }return true;
// }


// const getFactorial = number =>{
//     let result=1;
//     for(let i=number; i>0; i++){
//         result*=i;
//     }return result;
// }
