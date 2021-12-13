// 6C
import Bonus from "../bonus/Bonus";


// 1A & 3B
function Exercise({good = "Great", bad = "Not Great"}){
  // 2A
  return(
    <div>
      {/*3C*/}
      <h1>{good}</h1>
      <h1>{bad}</h1>
      {/*6C*/}
    </div>
  );
}
// 1B
export default Exercise;