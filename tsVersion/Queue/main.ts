import ArrayQueue, {Queue} from "./queue";
import LoopQueue from "./LoopQueue";

function testQueue(q: Queue<number>, count: number): number{
  const startTime = (new Date()).getTime()
  for (let i = 0; i < count; i ++){
    q.enqueue(i);
  }
  for (let i = 0; i < count; i ++){
    q.dequeue();
  }
  const endTime = (new Date()).getTime()
  
  return (endTime - startTime) / 1000;
}


const count = 100000;
const time1 = testQueue(new ArrayQueue<number>(), count);
console.log(`ArrayQueue, time: ${time1} s`);
const time2 = testQueue(new LoopQueue<number>(), count);
console.log(`LoopQueue, time: ${time2} s`);