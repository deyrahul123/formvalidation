import { useRef } from "react";
import "./App.css";
import FormInputs from "./components/FormInputs";

function App() {
  const userefUsername = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(userefUsername);
  };
  return (
    <div refer={userefUsername} className="App">
      <form onSubmit={handleSubmit}>
        <FormInputs placeholder="username" />
        <FormInputs placeholder="email" />
        <FormInputs placeholder="Full Name" />
        <FormInputs placeholder="username" />
        <button>Submit</button>
      </form>
    </div>
  );
}

export default App;
