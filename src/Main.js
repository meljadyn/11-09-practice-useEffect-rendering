import { useEffect, useState } from "react";

const Main = () => {
  const [toggleOne, setToggleOne] = useState(false);
  useEffect(() => {
    console.log("UseEffect1 Ran");
  }, []);

  const [toggleTwo, setToggleTwo] = useState(false);
  useEffect(() => {
    console.log("UseEffect2 Ran");
    if (toggleTwo) {
      console.log("toggleTwo slice of state is true so this code runs");
    }
  }, [toggleTwo]);

  const [count, setCount] = useState(0);

  useEffect(() => {
    const myInterval = setInterval(() => {
      console.log(`UseEffect3 with interval number ${count} is running`);
    }, 1000);

    return () => {
      console.log(
        `UseEffect3 cleanup ran.\nsetInterval number ${count} is being cleared out`
      );
      clearInterval(myInterval);
    };
  }, [count]);

  return (
    <div>
      {console.log("rendered or re-rendered")}
      <h1>Main Component</h1>
      <button
        onClick={() => {
          setToggleOne((bool) => !bool);
        }}
      >
        ToggleOne
      </button>
      <button
        onClick={() => {
          setToggleTwo((bool) => !bool);
        }}
      >
        ToggleTwo
      </button>
      <button
        onClick={() => {
          setCount((num) => num + 1);
        }}
      >
        Increment Count ({count})
      </button>
    </div>
  );
};

export default Main;
