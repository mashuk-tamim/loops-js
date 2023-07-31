// task 1
// var moneyGiven=1000, applePrice=400, orangePrice=300, moneyReturn;

// moneyReturn=moneyGiven-(applePrice+orangePrice);
// console.log(moneyReturn);

// task 2
// var marks=[75.25, 65.00, 80.00, 35.45, 99.50];
// var i, totalMarks=0, avgMark;
// for(i=0; i<marks.length; i++){
//     totalMarks=totalMarks+marks[i];
// }
// avgMark=totalMarks/marks.length;
// console.log(avgMark.toFixed(2));

// task 3
// var string1='I am going to be';
// var string2='an awesome web developer';

// console.log(string1 + ' ' + string2); 
// var result= string1.concat(' ', string2); //using concat() function
// console.log(result);

// task 4
// var bookPrice= [138, 234, 675, 632, 345, 23, 742, 89, 99];
// for(var i=0; i<bookPrice.length; i++){
//     if(bookPrice[i]>=200)
//         console.log(bookPrice[i]);
// }

// task 4: alternative
// var bookPrice= [138, 234, 675, 632, 345, 23, 742, 89, 99];
// for(var i=0; i<bookPrice.length; i++){
//     if(bookPrice[i]<=200)
//         continue;
//     else
//     console.log(bookPrice[i]);
// }

// task 5
var friendName=['John', 'James', 'Jane', 'Ratul']
for(var i=0; i<friendName.length; i++){
    if(friendName[i].length%2==0){
        console.log('Even number of letter!')
    }
}