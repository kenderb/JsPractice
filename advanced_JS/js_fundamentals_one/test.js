const list = new Array(600000).join('1.1').split('.');
 
function removeItemsFromList() {
    var item = list.pop();

    if (item) {
      setTimeout(removeItemsFromList, 0); // Fix the Maximum call stack size exceeded usgin the runtime node.js method setTimeout!!!
    }
};

removeItemsFromList();
console.log(list)