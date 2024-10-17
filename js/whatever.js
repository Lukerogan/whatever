const d = new Date();
let hour = d.getHours();
// let hour = 

if(hour <= 12){
    console.log('monin');
}
else if(hour <17 && hour > 12){
    console.log('afternoon');
}
else if(hour > 17){
    console.log('night');
}
else{console.log('invalid time')}

