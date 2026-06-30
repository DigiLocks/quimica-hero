import { useState, useEffect, useRef } from "react";
import { MessageCircle, X, Send } from "lucide-react";

export default function ChatBubble() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([
    { from: "agent", text: "👋 Hi! I'm Emma from DigiLock. How can I help today?" }
  ]);
  const [input, setInput] = useState("");
  const [typing, setTyping] = useState(false);
  const scrollRef = useRef(null);

  const quickReplies = [
    { id: "pricing", label: "💰 Pricing", reply: "Our plans start at $29/mo for Starter, $99/mo for Pro, and custom Enterprise pricing. Want me to send a comparison?" },
    { id: "demo", label: "🎬 Demo", reply: "Sure! Book a 15-min demo here: https://calendly.com/digilock/demo — I'll personally walk you through it." },
    { id: "support", label: "🛠 Support", reply: "I can help with that. What's the issue? (Login, billing, integration, bug…)" },
    { id: "sales", label: "🚀 Talk to Sales", reply: "Connecting you with our sales team now. They'll reach out within 1 hour via email." }
  ];

  useEffect(() => {
    if (scrollRef.current) scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
  }, [messages, typing]);

  const sendMessage = (text, fromUser = true) => {
    setMessages((m) => [...m, { from: fromUser ? "user" : "agent", text }]);
    if (fromUser) {
      setTyping(true);
      setTimeout(() => {
        const lower = text.toLowerCase();
        let response = "Got it! Let me check that for you... 👍";
        if (lower.includes("price") || lower.includes("cost")) response = "Pricing starts at $29/mo. Want details?";
        else if (lower.includes("hi") || lower.includes("hello") || lower.includes("hey")) response = "Hey there! 👋 What can I help with?";
        else if (lower.includes("?")) response = "Great question. Our team typically gets back within 1 hour on these.";
        setTyping(false);
        setMessages((m) => [...m, { from: "agent", text: response }]);
      }, 900 + Math.random() * 600);
    }
  };

  const handleQuick = (item) => {
    sendMessage(item.label.replace(/^[^\w]+/, ""), true);
    setTyping(true);
    setTimeout(() => {
      setTyping(false);
      setMessages((m) => [...m, { from: "agent", text: item.reply }]);
    }, 1100);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!input.trim()) return;
    sendMessage(input.trim());
    setInput("");
  };

  return (
    <>
      {/* Floating button */}
      <button
        onClick={() => setOpen(!open)}
        className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-gradient-to-br from-orange-500 to-purple-600 text-white shadow-lg shadow-orange-500/40 hover:scale-110 transition-transform flex items-center justify-center"
      >
        {open ? <X className="w-6 h-6" /> : <MessageCircle className="w-6 h-6" />}
        {!open && (
          <span className="absolute -top-1 -right-1 w-3 h-3 bg-green-400 rounded-full border-2 border-black">
            <span className="absolute inset-0 rounded-full bg-green-400 animate-ping opacity-75" />
          </span>
        )}
      </button>

      {/* Chat window */}
      {open && (
        <div className="fixed bottom-24 right-6 z-50 w-[360px] max-w-[calc(100vw-2rem)] h-[500px] flex flex-col rounded-3xl overflow-hidden bg-gradient-to-br from-neutral-900 to-neutral-950 border border-white/10 shadow-2xl shadow-purple-500/20 animate-[pop-in_0.25s_ease-out]">
          {/* Header */}
          <div className="flex items-center gap-3 px-5 py-4 bg-gradient-to-r from-orange-500/10 to-purple-600/10 border-b border-white/10">
            <div className="relative w-10 h-10 rounded-full bg-gradient-to-br from-orange-400 to-purple-500 flex items-center justify-center text-white font-bold">
              E
              <span className="absolute bottom-0 right-0 w-3 h-3 bg-green-400 rounded-full border-2 border-neutral-900" />
            </div>
            <div className="flex-1">
              <div className="text-white font-semibold text-sm">Emma from DigiLock</div>
              <div className="text-xs text-green-400">● Online now</div>
            </div>
          </div>

          {/* Messages */}
          <div ref={scrollRef} className="flex-1 overflow-y-auto px-4 py-4 space-y-3">
            {messages.map((msg, i) => (
              <div key={i} className={"flex " + (msg.from === "user" ? "justify-end" : "justify-start")}>
                <div
                  className={
                    "max-w-[80%] px-4 py-2 rounded-2xl text-sm " +
                    (msg.from === "user"
                      ? "bg-gradient-to-br from-orange-500 to-purple-600 text-white rounded-br-sm"
                      : "bg-white/10 text-white rounded-bl-sm")
                  }
                >
                  {msg.text}
                </div>
              </div>
            ))}

            {/* Quick replies (visible când sunt doar 1-2 mesaje) */}
            {messages.length <= 2 && (
              <div className="flex flex-wrap gap-2 pt-2">
                {quickReplies.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => handleQuick(item)}
                    className="px-3 py-1.5 rounded-full bg-white/5 hover:bg-white/15 border border-white/10 text-white text-xs transition-colors"
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            )}

            {/* Typing indicator */}
            {typing && (
              <div className="flex justify-start">
                <div className="bg-white/10 px-4 py-3 rounded-2xl rounded-bl-sm flex gap-1">
                  <span className="w-2 h-2 bg-white/60 rounded-full animate-bounce" style={{ animationDelay: "0ms" }} />
                  <span className="w-2 h-2 bg-white/60 rounded-full animate-bounce" style={{ animationDelay: "150ms" }} />
                  <span className="w-2 h-2 bg-white/60 rounded-full animate-bounce" style={{ animationDelay: "300ms" }} />
                </div>
              </div>
            )}
          </div>

          {/* Input */}
          <form onSubmit={handleSubmit} className="p-3 border-t border-white/10 bg-black/50 flex gap-2">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Type a message…"
              className="flex-1 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-white text-sm placeholder-white/30 focus:outline-none focus:border-orange-500/50"
            />
            <button
              type="submit"
              disabled={!input.trim()}
              className="w-10 h-10 rounded-full bg-gradient-to-br from-orange-500 to-purple-600 text-white flex items-center justify-center disabled:opacity-40 disabled:cursor-not-allowed hover:scale-105 transition-transform"
            >
              <Send className="w-4 h-4" />
            </button>
          </form>
        </div>
      )}
    </>
  );
}
