import React, { createContext, useState } from "react";
import runChat from "../config/gemini";

export const Context = createContext();

const ContextProvider = (props) => {
  const [input, setInput] = useState("");
  const [recentPrompt, setRecentPrompt] = useState("");
  const [previousPrompt, setPreviousPrompt] = useState([]); // [{prompt, response}]
  const [showResults, setShowResults] = useState(false);
  const [loading, setLoading] = useState(false);
  const [resultData, setResultData] = useState("");

  const delayPara = (index, nextWord) => {
    setTimeout(() => {
      setResultData((prev) => prev + nextWord);
    }, 200 * index);
  };

  const onSent = async (prompt) => {
  setResultData("");
  setLoading(true);
  setShowResults(true);

  const finalPrompt =
    typeof prompt === "string" && prompt.trim() !== ""
      ? prompt.trim()
      : input.trim();

  if (!finalPrompt) {
    setLoading(false);
    return;
  }

  setRecentPrompt(finalPrompt);

  try {
    const response = await runChat(finalPrompt);
    setPreviousPrompt((prev) => [...prev, { prompt: finalPrompt, response }]);

    // ✅ Convert markdown-style stars into HTML
    let formattedResponse = response
      .replace(/\*\*\*(.*?)\*\*\*/g, "<b><i>$1</i></b>") // bold+italic
      .replace(/\*\*(.*?)\*\*/g, "<b>$1</b>")            // bold
      .replace(/\*(.*?)\*/g, "<i>$1</i>")                // italic
      .replace(/\n/g, "<br/>");                          // newlines

    // ✅ Animate the formatted HTML instead of raw response
    let words = formattedResponse.split(" ");
    words.forEach((word, i) => {
      setTimeout(() => {
        setResultData((prev) => prev + word + " ");
      }, 75 * i);
    });

  } catch (err) {
    console.error("Error in onSent:", err);
    setResultData("⚠️ Something went wrong, please try again.");
  }

  setLoading(false);
  setInput("");
};


  const contextValue = {
    previousPrompt,
    setPreviousPrompt,
    onSent,
    setRecentPrompt,
    recentPrompt,
    showResults,
    setShowResults,
    resultData,
    setResultData,
    input,
    setInput,
    loading,
  };

  return (
    <Context.Provider value={contextValue}>
      {props.children}
    </Context.Provider>
  );
};

export default ContextProvider;
