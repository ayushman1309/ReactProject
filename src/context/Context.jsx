import React ,{ createContext , useState} from "react";
import runChat from "../config/gemini";

export const Context = createContext();

const ContextProvider = (props) => {

  const [input , setInput] = useState("")
  const [recentPrompt , setRecentPrompt] = useState("");
  const [previousPrompt , setPreviousPrompt] = useState([]);
  const [showResults, setShowResults] = useState(false);
  const [loading , setLoading] = useState(false);
  const [resultData , setResultData] = useState("");


  const onSent = async(prompt) => {
    setResultData("");
    setLoading(true);
    setShowResults(true);
    setRecentPrompt(input);
    const response = await runChat(input);
    setResultData(response);
    setLoading(false);
    setInput("");

  }

  // onSent("What is React Js")

  const contextValue = {
    previousPrompt,
    setPreviousPrompt,
    onSent,
    setRecentPrompt,
    recentPrompt,
    showResults,
    resultData,
    input,
    setInput,
    loading,
  }
  return (
    <Context.Provider value={contextValue}>
      {props.children}
    </Context.Provider>
  )
}

export default ContextProvider;