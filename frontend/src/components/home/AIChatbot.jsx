import { useState } from "react";
import { MessageCircle, X, Send } from "lucide-react";

export default function AIChatbot() {
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([
    {
      sender: "bot",
      text: "👋 Hi! Welcome to Digital In App. How can I help you today?",
    },
  ]);

  const handleSend = () => {
    if (!input.trim()) return;

    const userMessage = {
      sender: "user",
      text: input,
    };

    let botReply =
      "Thanks for contacting us. Our team will get back to you shortly.";

    if (input.toLowerCase().includes("website")) {
      botReply =
        "🌐 We provide Website Design & Development services.";
    } else if (input.toLowerCase().includes("app")) {
      botReply =
        "📱 We build Android, iOS and Cross-platform applications.";
    } else if (input.toLowerCase().includes("seo")) {
      botReply =
        "🚀 We provide SEO, Google Ads and Digital Marketing services.";
    }

    setMessages((prev) => [
      ...prev,
      userMessage,
      {
        sender: "bot",
        text: botReply,
      },
    ]);

    setInput("");
  };

  return (
    <>
      {/* Floating Button */}
      <button
        onClick={() => setOpen(!open)}
        className="fixed bottom-24 right-6 z-50 flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-r from-purple-600 to-pink-500 text-white shadow-2xl"
      >
        {open ? <X size={28} /> : <MessageCircle size={28} />}
      </button>

      {/* Chat Window */}
      {open && (
        <div className="fixed bottom-44 right-6 z-50 w-96 overflow-hidden rounded-3xl bg-white shadow-2xl border border-purple-100">
          {/* Header */}
          <div className="bg-gradient-to-r from-purple-600 to-pink-500 p-5 text-white">
            <h2 className="font-bold text-lg">AI Assistant</h2>
            <p className="text-sm opacity-90">
              Ask anything about our services
            </p>
          </div>

          {/* Messages */}
          <div className="h-96 overflow-y-auto p-4 bg-slate-50">
            {messages.map((msg, i) => (
              <div
                key={i}
                className={`mb-4 flex ${
                  msg.sender === "user"
                    ? "justify-end"
                    : "justify-start"
                }`}
              >
                <div
                  className={`max-w-[75%] rounded-2xl px-4 py-3 text-sm ${
                    msg.sender === "user"
                      ? "bg-purple-600 text-white"
                      : "bg-white shadow border"
                  }`}
                >
                  {msg.text}
                </div>
              </div>
            ))}
          </div>

          {/* Input */}
          <div className="flex border-t bg-white p-3">
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Type a message..."
              className="flex-1 rounded-xl border px-4 py-3 outline-none"
              onKeyDown={(e) => e.key === "Enter" && handleSend()}
            />

            <button
              onClick={handleSend}
              className="ml-3 rounded-xl bg-purple-600 p-3 text-white"
            >
              <Send size={18} />
            </button>
          </div>
        </div>
      )}
    </>
  );
}