import React, { useState, useEffect } from "react";
import { FaComments, FaTimes } from "react-icons/fa";

const Chatbot = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  const botResponses = {
    hi: "Hello! How can I help you?",
    hello: "Hi there! 😊",
    help: "Sure! What do you need help with?",
    bye: "Goodbye! Have a great day! 👋",
    buy: "What type of assets you want?",

    "real estate":
      "We offer real estate services, including buying and selling properties. What are you looking for?",
    "buy property":
      "Are you looking for a plot, villa, or apartment? Let me know your preference!",
    "sell property":
      "Great! Please provide the property details, and we will assist you in selling it.",
    "buy villa":
      "We have a wide range of luxury and affordable villas. What location are you interested in?",
    "sell villa":
      "We can help you sell your villa at the best price. Please share the location and details.",
    "buy plot":
      "We have plots available in multiple locations. What size and location are you looking for?",
    "sell plot":
      "We can list your plot for sale. Please share the location and dimensions.",
    "property in delhi":
      "Yes! We have properties available in Delhi. What type of property are you interested in?",
    "property in mumbai":
      "Mumbai has great real estate options. Are you looking to buy or sell?",

    default: "Feel free to contact me directly at +91 99710-02874 for any inquiries.",
  };

  const handleSend = () => {
    if (!input.trim()) return;

    const userMessage = { text: input, type: "user" };
    const botReply = botResponses[input.toLowerCase()] || botResponses.default;
    const botMessage = { text: botReply, type: "bot" };

    setMessages((prevMessages) => [...prevMessages, userMessage, botMessage]);
    setInput("");
  };

  useEffect(() => {
    if (isOpen && messages.length === 0) {
      setMessages([{ text: botResponses.hi, type: "bot" }]);
    }
  }, [isOpen]);

  return (
    <div className="fixed bottom-5 right-5 z-50">
      {/* Open Button */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="bg-[#236d6f] text-white p-4 cursor-pointer rounded-full shadow-lg hover:bg-blue-600 transition"
        >
          <FaComments size={24} />
        </button>
      )}

      {/* Chatbot Window */}
      {isOpen && (
        <div className="w-80 bg-white shadow-lg border rounded-lg overflow-hidden">
          <div className="p-4 border-b bg-[#236d6f] text-white font-bold flex justify-between items-center">
            <span>Chatbot 🤖</span>
            <button onClick={() => setIsOpen(false)} className="text-white cursor-pointer">
              <FaTimes size={18} />
            </button>
          </div>

          <div className="h-60 overflow-y-auto p-3 space-y-2">
            {messages.map((msg, index) => (
              <div
                key={index}
                className={`p-2 rounded-lg ${
                  msg.type === "user"
                    ? "bg-blue-100 text-right"
                    : "bg-gray-100 text-left"
                }`}
              >
                {msg.text}
              </div>
            ))}
          </div>

          <div className="flex p-2 border-t">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              className="flex-1 p-2 border rounded-l-xl"
              placeholder="Type a message..."
            />
            <button
              onClick={handleSend}
              className="bg-[#236d6f] text-white px-4 py-2 rounded-r-xl cursor-pointer border border-slate-700"
            >
              Send
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Chatbot;
