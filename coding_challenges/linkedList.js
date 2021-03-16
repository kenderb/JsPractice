function LinkedList() {
  this.length = 0;
  this.head = null;
}

function Node(element) {
  this.element = element;
  this.next = null;
}

//  This adds a new item to the end of the list.
LinkedList.prototype.append = function(element) {
  var node =  new Node(element);
  var current;

  if (!this.head) {
    this.head = node;
  } else {
    current = this.head;

    //loop the list until find last item
    while(current.next) {
      current = current.next;
    }

    //get last item and assign next to node to make the link
    current.next = node;
  }
  //update size of list
  this.length++; 
}

// This inserts a new item at a specified position in the list.
LinkedList.prototype.insert = function(position, element) {
  //check for out-of-bounds values

 if (position >= 0 && position <= this.length){ //{1}
      var node = new Node(element),
      current = this.head,
      previous,
      index = 0;

    if (position === 0) { //add on first position
        node.next = current; //{2}
        this.head = node;

    } else {
        while (index++ < position) { //{3}
          previous = current;
          current = current.next;
        }

        node.next = current; //{4}
        previous.next = node; //{5}
    }

    this.length++; //update size of list
    return true;

    } else {

      return false; //{6}

    }
}

// This removes an item from a specified position in the list
LinkedList.prototype.removeAt = function(position) {
  //check for out-of-bounds values
  if (position > -1 && position < this.lenth) { // {1}
    var current = this.head,  // {2}
     previous, // {3}
     index = 0; // {4}
    //removing first item
    if (position === 0) { // {5}
      this.head = current.next;
    } else {
      while (index++ < position){ // {6}
        previous = current; // {7}
        current = current.next; // {8}
      }
      //link previous with current's next: skip it to remove
      previous.next = current.next; // {9}
    }
    this.length--; // {10}
    return current.element;
  } else {
    return null; // {11}
  }
  
}

// This removes an item from the list.
LinkedList.prototype.remove = function(element) {}

/*  This returns the index of the element in the list. 
    If the element is not in the list, it returns -1.*/
LinkedList.prototype.indexOf = function(element) {
  var current = this.head, //{1}
      index = 0;
      
  while (current) { //{2}
    if (element === current.element) {
        return index; //{3}
    }
    index++; //{4}
    current = current.next; //{5}
  }
  return -1;
}

/*  This returns true if the linked list does not contain any elements
    and false if the size of the linked list is bigger than 0. */
LinkedList.prototype.isEmpty = function() {
  if(!this.head) {
    return true;
  }
  return false;
}

/* This returns how many elements the linked list contains. It is similar
    to the length property of the array. */
LinkedList.prototype.size = function() {
  return this.length;
}

/*  As the list uses a Node class as an item, we need to overwrite
    the default toString method inherited from the JavaScript object to output
    only the element values. */
LinkedList.prototype.toString = function() {
  var current = this.head, //{1}
      string = ''; //{2}
  while (current) { //{3}
    string += "[" + current.element + "]--> "; //{4}
    current = current.next; //{5}
  }
  return string + "null"; //{6}
}

// tests

var list = new LinkedList();
list.append(1);
list.append(2);
list.append(3);
list.append(4);
list.append("hi");
list.insert(2, "Kender");
console.log(list.toString());
console.log(list.isEmpty());
