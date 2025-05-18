"use client";

import { motion } from "framer-motion";
import { Users, Code2, Heart, MessageSquare } from "lucide-react";

const StatsSection = () => {
  const stats = [
    {
      icon: <Users className="h-6 w-6" />,
      value: "10,000+",
      label: "Active Developers",
    },
    {
      icon: <Code2 className="h-6 w-6" />,
      value: "500+",
      label: "Successful Projects",
    },
    {
      icon: <Heart className="h-6 w-6" />,
      value: "2,000+",
      label: "Perfect Matches",
    },
    {
      icon: <MessageSquare className="h-6 w-6" />,
      value: "50,000+",
      label: "Messages Sent",
    },
  ];

  return (
    <section className="py-12">
      <div className="container mx-auto px-4 py-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="text-center"
            >
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 text-primary mb-4">
                {stat.icon}
              </div>
              <h3 className="text-3xl font-bold mb-2">{stat.value}</h3>
              <p className="text-muted-foreground">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default StatsSection;
