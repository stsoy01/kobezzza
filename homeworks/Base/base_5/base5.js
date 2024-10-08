// // Реализовать Priority Queue 

// function PQueue() {
//   pqueue = [];
//   return {
//     add: function (value) {
//       if (!pqueue.length) {
//         pqueue[0] = value;
//         return;
//       }
//       step = pqueue.length;
//       pqueue.length++;


//       for (let i = 0; i < pqueue.length; i++) {
//         if (value > pqueue[i]) {
//           pqueue[step] = pqueue[step - 1];
//           step--;
//         }
//         pqueue[i] = value;
//       }


//     },
//     shift: function () {

//     },
//     show: function () {
//       return pqueue
//     }
//   }
// }

// const pQueue = PQueue();
// pQueue.add(6)
// pQueue.add(11)
// pQueue.add(45)



// console.log(pQueue.show())


