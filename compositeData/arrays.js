const a = [];
const b = [ 1, true, "Hi", [2, 3, 4, 5]];
const c = Array.of("x", "y", " z", 9);
const d = Array(100).fill(false);
const e = new Array(1, 2, 3, 4, 5);

const colors = ["Red", "Green", "Blue"];
//Add element
colors.push("Black");
//Remove last element
colors.pop();

colors.forEach(function(e, index){
    console.log(`<li id=${index}>${e}</li>`);
});