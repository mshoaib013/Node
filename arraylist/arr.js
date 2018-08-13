var array = [];
// calendars.forEach(function(item) {
//     array.push(item.id);
// });
array.push('shoaib');
array.push('mehedi');
array.push('shoaib.mehedi');
array.push('shoaib.mehedi@gmail.com');
for (let index = 0; index < array.length; index++) {
    console.log(array[index]);
    
}
array.pop('shoaib');
console.log(array.length);