/**
   Реализовать двусторонний двусвязный список
   
   const list = LinkedList();
  
   list.add(1);
   list.add(2);
   list.add(3);
   
   console.log(list.first.value);           // 1
   console.log(list.last.value);            // 3
   console.log(list.first.next.value);      // 2
   console.log(list.first.next.prev.value); // 1
 */

function LinkedList() {

  return {
    head: {
      value: 1,
      next: {
        value: 2,
        next: {
          value: null
        }
      }
    },
    add: function (arg) {
      // console.log(this.head)
    }
  }
}

const list = LinkedList();
console.log(list.head.next.next)
