"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Heart, Code } from "lucide-react";

const CTASection = () => {
  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-blue-600/20 via-violet-600/20 to-purple-600/20 border border-border p-8 md:p-12"
        >
          <div className="absolute inset-0 bg-grid-white/5" />
          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="text-center md:text-left">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Ready to meet your{" "}
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-pink-500">
                  coding match
                </span>
                ?
              </h2>
              <p className="text-lg text-muted-foreground mb-8 max-w-xl">
                Join thousands of developers who are finding meaningful
                connections, collaborative projects, and new opportunities.
              </p>
              <div className="flex flex-col sm:flex-row justify-center md:justify-start gap-4">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-blue-500 to-pink-500 hover:from-blue-600 hover:to-pink-600"
                >
                  Get Started
                </Button>
                <Button variant="outline" size="lg">
                  Learn More
                </Button>
              </div>
            </div>

            <div className="flex items-center justify-center">
              <motion.div
                initial={{ scale: 0.8 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  type: "spring",
                  stiffness: 200,
                }}
                className="relative w-32 h-32 md:w-48 md:h-48"
              >
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{
                    duration: 20,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                  className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500/40 to-pink-500/40 blur-lg"
                />
                <div className="absolute inset-4 rounded-full bg-background flex items-center justify-center">
                  <motion.div
                    whileHover={{ scale: 1.2 }}
                    transition={{ type: "spring", stiffness: 400 }}
                  >
                    <div className="relative">
                      <Code className="h-12 w-12 text-primary absolute -top-8 -left-4 transform -rotate-12" />
                      <Heart className="h-12 w-12 text-pink-500" />
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;
