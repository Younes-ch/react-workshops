import { useState, useEffect, useRef, useMemo } from "react";
import { useCountDown } from "./hooks/useCountdown";

const App = () => {
  const countdownLength = 10;
  const [seconds, resetTimer] = useCountDown(countdownLength);

  const [answer, setAnswer] = useState("");
  const [status, setStatus] = useState("");

  const inputRef = useRef(null);

  const question = useMemo(() => {
    const num1 = Math.floor(Math.random() * 10) + 1;
    const num2 = Math.floor(Math.random() * 10) + 1;
    return {
      text: `${num1} + ${num2} = ?`,
      answer: num1 + num2,
    };
  }, []);

    const handleSubmit = () => {
    if (parseInt(answer) === question.answer) {
      setStatus("Correct!");
    } else {
      setStatus("Incorrect!");
    }
    inputRef.current.disabled = true;
  };

  const resetGame = () => {
    setStatus("");
    setAnswer("");
    inputRef.current.disabled = false;
    inputRef.current.focus();
    resetTimer();
  };

  useEffect(() => {
    if (seconds === 0) {
      setStatus("Time's up!");
      inputRef.current.disabled = true;
    }
  }, [seconds]);

  return (
    <div style={{ textAlign: "center", padding: "20px" }}>
      <h1>Simple Quiz</h1>
      <h2>{question.text}</h2>
      <h3>Time Left: {seconds}s</h3>
      <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
        
      <input
        ref={inputRef}
        type="number"
        value={answer}
        onChange={(e) => setAnswer(e.target.value)}
        disabled={status !== ""}
      />
      <div>
        <button onClick={handleSubmit} disabled={status !== ""}>
          Submit
        </button>
        <button onClick={resetGame} style={{ marginLeft: "10px" }}>
          Reset
        </button>
      </div>
      </div>
      {status && <h3>{status}</h3>}
    </div>
  );
};

export default App;
