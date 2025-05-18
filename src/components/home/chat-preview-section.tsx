"use client";

import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Avatar } from "@/components/ui/avatar";

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
          <Card className="border border-border bg-card/50 backdrop-blur-sm p-6">
            <div className="space-y-4">
              {messages.map((message, index) => (
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
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ChatPreviewSection;
