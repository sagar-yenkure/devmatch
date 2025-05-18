"use client";

import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Avatar } from "@/components/ui/avatar";
import {
  Code,
  DotSquare,
  Menu,
  Paperclip,
  Phone,
  Send,
  Video,
  Zap,
} from "lucide-react";

const ChatPreviewSection = () => {
  const messages = [
    {
      sender: "Alex",
      avatar:
        "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg",
      message:
        "Hey! I saw you're working with React and TypeScript. I'm building a new project with those technologies.",
      time: "2:30 PM",
      type: "received",
    },
    {
      sender: "Sarah",
      avatar:
        "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg",
      message:
        "That's awesome! I'm actually using Next.js 13 with TypeScript. Have you tried the new app router?",
      time: "2:31 PM",
      type: "sent",
    },
    {
      sender: "Alex",
      avatar:
        "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg",
      message:
        "Not yet! I'd love to learn more about it. Maybe we could collaborate on a project?",
      time: "2:32 PM",
      type: "received",
    },
    {
      sender: "Sarah",
      avatar:
        "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg",
      message:
        "Definitely! I've been wanting to build a real-time chat app with server components.",
      time: "2:33 PM",
      type: "sent",
    },
  ];

  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Connect Through Code
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Chat about your favorite technologies, share code snippets, and find
            your next coding partner.
          </p>
        </motion.div>

        <div className="max-w-2xl mx-auto">
          <Card className="border border-border bg-card/50 backdrop-blur-sm">
            {/* chat header */}
            <div className="p-4 border-b border-slate-600 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <img
                  src="https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg"
                  alt="Alex"
                  className="w-10 h-10 rounded-full object-cover"
                />
                <div>
                  <div className="font-medium">Alex</div>
                  <div className="text-sm text-slate-400">
                    Full Stack Developer
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <button className="p-2 hover:bg-slate-800 rounded-full transition-colors">
                  <Phone className="w-5 h-5 text-slate-400" />
                </button>
                <button className="p-2 hover:bg-slate-800 rounded-full transition-colors">
                  <Video className="w-5 h-5 text-slate-400" />
                </button>
                <button className="p-2 hover:bg-slate-800 rounded-full transition-colors">
                  <Menu className="w-5 h-5 text-slate-400" />
                </button>
              </div>
            </div>
            <div className="space-y-4 p-3">
              {messages?.map((message, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  className={`flex ${
                    message.type === "sent" ? "justify-end" : "justify-start"
                  }`}
                >
                  <div
                    className={`flex ${
                      message.type === "sent" ? "flex-row-reverse" : "flex-row"
                    } items-end gap-2 max-w-[80%]`}
                  >
                    <Avatar className="w-8 h-8">
                      <img
                        src={message.avatar}
                        alt={message.sender}
                        className="w-full h-full object-cover"
                      />
                    </Avatar>
                    <div
                      className={`rounded-lg p-3 ${
                        message.type === "sent"
                          ? "bg-primary text-primary-foreground"
                          : "bg-muted"
                      }`}
                    >
                      <p className="text-sm">{message.message}</p>
                      <span className="text-xs opacity-70 mt-1 block">
                        {message.time}
                      </span>
                    </div>
                  </div>
                </motion.div>
              ))}
              {/* Chat Input */}
              <div className="p-2">
                <div className="flex items-center gap-2">
                  <button className="p-2 hover:bg-slate-800 rounded-full transition-colors">
                    <Paperclip className="w-5 h-5 text-slate-400" />
                  </button>
                  <input
                    type="text"
                    placeholder="Type a message..."
                    className="flex-1 bg-slate-900 rounded-full px-4 py-4 text-white focus:outline-none"
                  />
                  <button className="p-2 bg-blue-600 rounded-full hover:bg-blue-700 transition-colors">
                    <Send className="w-5 h-5 text-white" />
                  </button>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ChatPreviewSection;
