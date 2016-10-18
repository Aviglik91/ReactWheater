var names = ['avi', 'or', 'itay'];
//
// names.forEach(function(name){
//   console.log('forEach', name);
// });
//
// names.forEach((name) => {
//   console.log("arrowFunc", name);
// });
//
// names.forEach((name) => console.log(name));
//

// var returnMe = (name) => name + '!'
// console.log(returnMe('Avi'));
//
//
// var person = {
//   name: "Avi",
//   greet: function(){
//         names.forEach((name) => {
//           console.log(this.name + 'syas hi to '+ name);
//         });
//   }
// };
//
// person.greet();

// function add(a,b) {
//   return a + b;
// }
// var add = (a,b) => a+b;
var add = (a, b) => {
  return a+b;
}
console.log(add(1,3));
console.log(add(9,0));
