"use client";

import { motion } from "framer-motion";
import { UserPlus, Search, Heart, MessageSquare } from "lucide-react";

const HowItWorksSection = () => {
  const steps = [
    {
      icon: <UserPlus className="h-8 w-8" />,
      title: "Create Profile",
      description:
        "Sign up and showcase your tech stack, interests, and what you're looking for.",
    },
    {
      icon: <Search className="h-8 w-8" />,
      title: "Discover Matches",
      description:
        "Browse through curated profiles of developers who share your interests.",
    },
    {
      icon: <Heart className="h-8 w-8" />,
      title: "Connect",
      description:
        "Like profiles and get notified when there's a mutual match.",
    },
    {
      icon: <MessageSquare className="h-8 w-8" />,
      title: "Collaborate",
      description:
        "Start chatting and explore potential collaborations or mentorship.",
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
            How DevMatch Works
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Finding your perfect developer match has never been easier. Follow
            these simple steps to start connecting with like-minded developers.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative"
            >
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 text-primary mb-6">
                  {step.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
                <p className="text-muted-foreground">{step.description}</p>
              </div>

              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 right-0 transform translate-x-1/2 -translate-y-1/2">
                  <div className="w-8 h-0.5 bg-border" />
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default HowItWorksSection;
