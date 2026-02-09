import { useState, useRef, useEffect } from "react";
import { Send, Mic, Loader, Volume2, X } from "lucide-react";

const Chatbot = () => {
  const [messages, setMessages] = useState([
    {
      id: 1,
      text: "Hello! I'm here to help. How can I assist you today?",
      sender: "bot",
    },
  ]);
  const [input, setInput] = useState("");
  const [isListening, setIsListening] = useState(false);
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const messagesEndRef = useRef(null);
  const recognitionRef = useRef(null);

  // Initialize Web Speech API
  useEffect(() => {
    const SpeechRecognition =
      window.SpeechRecognition || window.webkitSpeechRecognition;
    if (SpeechRecognition) {
      recognitionRef.current = new SpeechRecognition();
      recognitionRef.current.continuous = false;
      recognitionRef.current.interimResults = false;
      recognitionRef.current.lang = "en-US";

      recognitionRef.current.onresult = (event) => {
        let transcript = "";
        for (let i = event.resultIndex; i < event.results.length; i++) {
          transcript += event.results[i][0].transcript;
        }
        setInput(transcript);
        setIsListening(false);
      };

      recognitionRef.current.onerror = () => {
        setIsListening(false);
      };

      recognitionRef.current.onend = () => {
        setIsListening(false);
      };
    }
  }, []);

  // Scroll to bottom
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  // Generate bot response
  const generateBotResponse = (userMessage) => {
    const responses = {
      hello: "Hi there! How can I help you?",
      help: "I can assist you with information about our NGO, events, books, feedback, and more. What would you like to know?",
      event:
        "We regularly organize events to promote social awareness. Would you like to know about our upcoming events?",
      book: "We have a great collection of e-books available for free download. Are you interested in any particular topic?",
      contact:
        "You can contact us through our contact page or email us directly. Would you like contact details?",
      thank: "You're welcome! Is there anything else I can help you with?",
      "how are you":
        "I'm doing great, thank you for asking! How can I assist you?",
      default:
        "That's interesting! Can you tell me more about what you're looking for? I'm here to help with our NGO's services and resources.",
    };

    const lowerMessage = userMessage.toLowerCase();
    for (let key in responses) {
      if (lowerMessage.includes(key)) {
        return responses[key];
      }
    }
    return responses.default;
  };

  // Handle sending message
  const handleSendMessage = (e) => {
    e.preventDefault();
    if (input.trim() === "") return;

    const userMessage = {
      id: Date.now(),
      text: input,
      sender: "user",
    };

    setMessages((prev) => [...prev, userMessage]);
    setInput("");

    // Simulate bot typing delay
    setTimeout(() => {
      const botResponse = {
        id: Date.now() + 1,
        text: generateBotResponse(input),
        sender: "bot",
      };
      setMessages((prev) => [...prev, botResponse]);
    }, 500);
  };

  // Handle voice input
  const handleVoiceInput = () => {
    if (!recognitionRef.current) {
      alert("Speech Recognition not supported in your browser");
      return;
    }

    if (isListening) {
      recognitionRef.current.stop();
      setIsListening(false);
    } else {
      recognitionRef.current.start();
      setIsListening(true);
    }
  };

  // Handle text-to-speech
  const handleSpeak = (text) => {
    if (isSpeaking) {
      window.speechSynthesis.cancel();
      setIsSpeaking(false);
    } else {
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.rate = 1;
      utterance.pitch = 1;
      utterance.volume = 1;

      utterance.onend = () => {
        setIsSpeaking(false);
      };

      window.speechSynthesis.speak(utterance);
      setIsSpeaking(true);
    }
  };

  if (!isOpen) {
    return (
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 w-16 h-16 bg-blue-600 hover:bg-blue-700 text-white rounded-full shadow-lg flex items-center justify-center transition-all duration-300 hover:scale-110"
      >
        <span className="text-2xl">💬</span>
      </button>
    );
  }

  return (
    <div className="fixed bottom-6 right-6 w-96 h-screen md:h-[600px] bg-white rounded-lg shadow-2xl flex flex-col overflow-hidden z-50 animate-fadeIn">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-700 text-white p-4 flex justify-between items-center">
        <div>
          <h3 className="font-bold text-lg">NGO Assistant</h3>
          <p className="text-sm text-blue-100">Always here to help</p>
        </div>
        <button
          onClick={() => setIsOpen(false)}
          className="hover:bg-blue-500 p-1 rounded-full transition"
        >
          <X size={20} />
        </button>
      </div>

      {/* Messages Container */}
      <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-gray-50">
        {messages.map((message) => (
          <div
            key={message.id}
            className={`flex ${message.sender === "user" ? "justify-end" : "justify-start"}`}
          >
            <div
              className={`max-w-xs px-4 py-3 rounded-lg ${
                message.sender === "user"
                  ? "bg-blue-600 text-white rounded-br-none"
                  : "bg-gray-300 text-gray-800 rounded-bl-none"
              }`}
            >
              <p className="text-sm">{message.text}</p>
              {message.sender === "bot" && (
                <button
                  onClick={() => handleSpeak(message.text)}
                  className="mt-2 text-xs bg-white text-blue-600 px-2 py-1 rounded hover:bg-gray-100 transition flex items-center gap-1"
                >
                  <Volume2 size={14} />
                  {isSpeaking ? "Stop" : "Speak"}
                </button>
              )}
            </div>
          </div>
        ))}
        <div ref={messagesEndRef} />
      </div>

      {/* Input Area */}
      <div className="border-t bg-white p-4 space-y-3">
        {/* Voice Input Status */}
        {isListening && (
          <div className="text-center text-sm text-blue-600 flex items-center justify-center gap-2">
            <Loader size={16} className="animate-spin" />
            Listening...
          </div>
        )}

        {/* Input Form */}
        <form onSubmit={handleSendMessage} className="flex gap-2">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Type your message..."
            className="flex-1 border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:border-blue-600 transition"
          />
          <button
            type="button"
            onClick={handleVoiceInput}
            className={`px-3 py-2 rounded-lg transition ${
              isListening
                ? "bg-red-500 hover:bg-red-600 text-white"
                : "bg-gray-200 hover:bg-gray-300"
            }`}
            title="Click to start/stop voice input"
          >
            <Mic size={20} />
          </button>
          <button
            type="submit"
            className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition flex items-center gap-2"
          >
            <Send size={18} />
          </button>
        </form>

        <p className="text-xs text-gray-500 text-center">
          💡 Tip: Click the microphone to use voice input!
        </p>
      </div>
    </div>
  );
};

export default Chatbot;
