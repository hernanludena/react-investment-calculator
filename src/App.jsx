import Header from "./components/Header"
import Results from "./components/Results";
import UserInput from "./components/UserInput"
import { useState } from "react";

function App() {
    const [userInput, setUserInput] = useState({
        initialInvestment: 10000,
        annualInvestment: 1200,
        expectedReturn: 6,
        duration: 10,
    });

    const durationIsValid = userInput.duration > 0;

    const handleChange = (input, newValue) => {
        setUserInput((prevStateUserInput) => ({
            ...prevStateUserInput,
            [input]: +newValue
        }));
    };
  return (
    <>
      <Header />
      <UserInput onChange={handleChange} userInput={userInput} />
      {!durationIsValid && <p className="center">Please enter a valid duration (0 or more years).</p>}
      {durationIsValid && <Results input={userInput} />}
    </>
  )
}

export default App
