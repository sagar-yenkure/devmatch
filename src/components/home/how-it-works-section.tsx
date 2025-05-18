"use client";

import { motion } from "framer-motion";
import { Code, Heart, Sparkles, Users, Zap } from "lucide-react";
import { cn } from "@/lib/utils";

const steps = [
  {
    icon: <Code className="h-8 w-8" />,
    title: "Create Your Tech Profile",
    description:
      "Showcase your coding skills, favorite languages, and development preferences that make you unique.",
    gradient: "from-blue-500 to-indigo-500",
    delay: 0.1,
  },
  {
    icon: <Zap className="h-8 w-8" />,
    title: "Get Smart Matches",
    description:
      "Our algorithm finds developers who complement your skills and share your technical interests.",
    gradient: "from-indigo-500 to-purple-500",
    delay: 0.2,
  },
  {
    icon: <Heart className="h-8 w-8" />,
    title: "Connect Through Code",
    description:
      "Share code snippets, solve problems together, and discover if you have coding chemistry.",
    gradient: "from-purple-500 to-pink-500",
    delay: 0.3,
  },
  {
    icon: <Sparkles className="h-8 w-8" />,
    title: "Build Something Amazing",
    description:
      "From projects to relationships, create meaningful connections with like-minded developers.",
    gradient: "from-pink-500 to-blue-500",
    delay: 0.4,
  },
];

const HowItWorksSection = () => {
  return (
    <section className="py-20 bg-muted/30 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-1/4 -right-1/4 w-1/2 h-1/2 bg-gradient-to-b from-blue-500/5 to-purple-500/5 blur-3xl rounded-full" />
        <div className="absolute -bottom-1/4 -left-1/4 w-1/2 h-1/2 bg-gradient-to-t from-pink-500/5 to-blue-500/5 blur-3xl rounded-full" />

        {/* Code symbols */}
        <div className="absolute top-1/4 left-[10%] text-foreground/5 text-5xl font-mono">
          {"{}"}
        </div>
        <div className="absolute bottom-1/4 right-[10%] text-foreground/5 text-5xl font-mono">
          {"</>"}
        </div>
        <div className="absolute top-3/4 left-[30%] text-foreground/5 text-4xl font-mono">
          {"[]"}
        </div>
        <div className="absolute top-1/3 right-[20%] text-foreground/5 text-3xl font-mono">
          {"()"}
        </div>
      </div>

      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16 relative z-10"
        >
          <div className="flex justify-center items-center mb-4 gap-2">
            <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
              <Users className="h-4 w-4 text-primary" />
            </div>
            <h3 className="text-lg font-medium text-primary">How It Works</h3>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Finding Your Developer Match is{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-pink-500">
              Simple
            </span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Our tech-powered matching system connects developers based on
            compatibility in coding styles, technical interests, and career
            goals.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: step.delay }}
              className="relative"
            >
              <div className="bg-card/50 backdrop-blur-sm border border-border rounded-xl p-6 h-full hover:shadow-lg transition-all duration-300 hover:translate-y-[-5px] group relative z-10">
                <div
                  className={cn(
                    "w-16 h-16 rounded-2xl flex items-center justify-center mb-6 text-white",
                    `bg-gradient-to-r ${step.gradient}`
                  )}
                >
                  {step.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
                <p className="text-muted-foreground">{step.description}</p>

                {/* Connect lines between steps (only visible on larger screens) */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-8 left-full w-full h-0.5 bg-gradient-to-r from-transparent via-border to-transparent z-0">
                    <div className="absolute top-1/2 left-full -translate-y-1/2 w-3 h-3 rounded-full bg-card border-2 border-primary"></div>
                  </div>
                )}

                {/* Step number */}
                <div className="absolute -top-3 -right-3 w-8 h-8 rounded-full bg-muted border border-border flex items-center justify-center text-sm font-medium">
                  {index + 1}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
