// for(var i=0; i<=20; i++){
//     if(i>10)
//         break;
//     console.log(i);
// }

// for(var i=0; i<=20; i++){
//     if(i>10)
//         break;
//     console.log(i);
// }

var itemsOnTable=['bottle', 'mouse', 'sunglass', 'pen'];
itemsOnTable.push('notebook');
itemsOnTable.unshift('monitor');
itemsOnTable.splice(2, 0, 'docking station');
itemsOnTable.splice(2, 0, 'monitor arms','laptop stand', 'desk');

var i;
console.log('**without continue--shows sunglass**');
for(i = 0; i < itemsOnTable.length; i++){
    console.log(itemsOnTable[i]);
}

console.log('**sunglass will be skipped**');
for(i = 0; i < itemsOnTable.length; i++){
    if(itemsOnTable[i]=='sunglass'){
        continue;
    }
    console.log(itemsOnTable[i]);
}
