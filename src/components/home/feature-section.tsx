"use client";

import { motion } from "framer-motion";
import { Code, Heart, Github, MessageCircle, Rocket } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const FeatureSection = () => {
  const features = [
    {
      icon: <Code className="h-8 w-8 text-chart-1" />,
      title: "Tech Stack Matching",
      description:
        "Connect with developers who share your programming language preferences and technical interests.",
    },
    {
      icon: <Heart className="h-8 w-8 text-chart-2" />,
      title: "Personality & Interests",
      description:
        "Find people who share your hobbies and values outside of coding for balanced connections.",
    },
    {
      icon: <Github className="h-8 w-8 text-chart-3" />,
      title: "GitHub Integration",
      description:
        "Showcase your projects and contributions to find collaborators with complementary skills.",
    },
    {
      icon: <MessageCircle className="h-8 w-8 text-chart-4" />,
      title: "Developer Chat",
      description:
        "Communicate with code snippets, technical discussions, and project planning tools.",
    },
    {
      icon: <Rocket className="h-8 w-8 text-chart-5" />,
      title: "Hackathon Matching",
      description:
        "Find the perfect team members for your next hackathon or coding competition.",
    },
  ];

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

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
            Not Just Another Dating App
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            DevMatch is designed specifically for developers to find meaningful
            connections based on shared technical interests and coding passions.
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {features.map((feature, index) => (
            <motion.div key={index} variants={item}>
              <Card className="h-full border border-border bg-card/50 backdrop-blur-sm hover:bg-card/80 transition-colors">
                <CardHeader>
                  <div className="w-12 h-12 rounded-full bg-muted/50 flex items-center justify-center mb-4">
                    {feature.icon}
                  </div>
                  <CardTitle>{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
export default FeatureSection;
