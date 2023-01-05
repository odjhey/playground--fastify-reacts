import { useState } from "react";
import reactLogo from "./assets/react.svg";
import { useForm } from "react-hook-form";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  const { handleSubmit, register } = useForm();

  return (
    <div className="App">
      <form
        onSubmit={handleSubmit((data) => {
          console.log(data);

          const fd = new FormData();
          fd.append("file", data.file[0]);

          fetch("http://localhost:3000/upload", {
            method: "POST",
            body: fd,
          });
        })}
      >
        <input {...register("file")} type="file"></input>
        <button type="submit">save</button>
      </form>
    </div>
  );
}

export default App;
