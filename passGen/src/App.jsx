import { useState, useCallback, useEffect, useRef } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [length, setLength] = useState(8);
  const [isNumberAllow, setIsNumberAllow] = useState(false);
  const [isCharector, setIsCharector] = useState(false);
  const [password, setPassword] = useState("");

  const PasswordGenrator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if (isNumberAllow) str += "0123456789";
    if (isCharector) str += "~`!@#$%^^&*()_+-={}|[]/.,<>?;:''";
    for (let i = 0; i < length; i++) {
      let char = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(char);
    }
    setPassword(pass);
  }, [length, isCharector, isNumberAllow, setPassword]);

  const passwordCopy  =  useCallback(()=>{
    window.navigator.clipboard.writeText(password)
  },[password])
  useEffect(() => {
    PasswordGenrator();
  }, [length, isNumberAllow, isCharector, setPassword]);
  return (
    <>
      <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 bg-gray-800 text-orange-500">
        <h1 className="text-white text-center my-3">Password generator</h1>
        <div className="flex shadow rounded-lg overflow-hidden mb-4">
          <input type="text" value={password} readOnly placeholder="Password" />
          <button className="outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0" onClick={passwordCopy()}>
            copy
          </button>
        </div>
        <div className="flex text-sm gap-x-2">
          <div className="flex items-center gap-x-1">
            <input
              type="range"
              value={length}
              onChange={(e) => setLength(e.target.value)}
            />

            <label>length: {length}</label>
            <input
              type="checkbox"
              value={isCharector}
              onChange={() => setIsCharector((prev) => !prev)}
            />
            <label>Charector: {isCharector}</label>
            <input
              type="checkbox"
              value={isNumberAllow}
              onChange={() => setIsNumberAllow((prev) => !prev)}
            />

            <label>Numbers: {isNumberAllow}</label>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
