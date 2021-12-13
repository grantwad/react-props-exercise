// 2B
import Exercise from "./exercise/Exercise";

function App() {
  return (
    <div>
      {/*2C*/}
      <Exercise />
      {/*3C*/}
      <Exercise good="Awesome" bad="Terrible" />
    </div>
  );
}

export default App;