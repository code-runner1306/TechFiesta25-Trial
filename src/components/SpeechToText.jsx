import React, { useState, useEffect } from "react";

// Check if the browser supports SpeechRecognition
const SpeechRecognition =
  window.SpeechRecognition || window.webkitSpeechRecognition;

const VoiceToText = () => {
  const [text, setText] = useState("");
  const [isListening, setIsListening] = useState(false);
  const recognition = new SpeechRecognition();

  useEffect(() => {
    if (SpeechRecognition) {
      recognition.continuous = true;
      recognition.interimResults = true;

      recognition.onstart = () => setIsListening(true);
      recognition.onend = () => setIsListening(false);

      recognition.onresult = (event) => {
        let speechToText = "";
        for (let i = event.resultIndex; i < event.results.length; i++) {
          speechToText += event.results[i][0].transcript;
        }
        setText(speechToText);
      };
    }
  }, [recognition]);

  const startListening = () => {
    if (SpeechRecognition) {
      recognition.start();
    }
  };

  const stopListening = () => {
    if (SpeechRecognition) {
      recognition.stop();
    }
  };

  const sendToBackend = () => {
    // Send the captured text to the backend
    fetch("/api/incident", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ incidentText: text }),
    });
  };

  const styles = {
    container: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      padding: "20px",
      fontFamily: "'Arial', sans-serif",
    },
    button: {
      padding: "10px 20px",
      fontSize: "16px",
      margin: "10px",
      cursor: "pointer",
      borderRadius: "5px",
      border: "1px solid #ddd",
      backgroundColor: "#4CAF50",
      color: "white",
      transition: "background-color 0.3s ease",
    },
    buttonDisabled: {
      backgroundColor: "#ccc",
      cursor: "not-allowed",
    },
    textDisplay: {
      margin: "20px 0",
      padding: "10px",
      border: "1px solid #ddd",
      borderRadius: "5px",
      width: "100%",
      maxWidth: "500px",
      minHeight: "60px",
      textAlign: "center",
      wordWrap: "break-word",
    },
    header: {
      fontSize: "24px",
      fontWeight: "bold",
      marginBottom: "20px",
    },
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.header}>Voice to Text</h1>
      <button
        onClick={startListening}
        disabled={isListening}
        style={{ ...styles.button, ...(isListening && styles.buttonDisabled) }}
      >
        Start Listening
      </button>
      <button
        onClick={stopListening}
        disabled={!isListening}
        style={{ ...styles.button, ...(!isListening && styles.buttonDisabled) }}
      >
        Stop Listening
      </button>
      <p style={styles.textDisplay}>{text}</p>
      <button
        onClick={sendToBackend}
        disabled={!text}
        style={{ ...styles.button, ...(!text && styles.buttonDisabled) }}
      >
        Send to Backend
      </button>
    </div>
  );
};

export default VoiceToText;
