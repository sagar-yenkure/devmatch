"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 300], [0, 100]);
  const y2 = useTransform(scrollY, [0, 300], [0, -100]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);

  return (
    <section className="relative pt-32 pb-16 md:pt-40 md:pb-24 overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.1 }}
          transition={{ duration: 2 }}
          className="absolute w-full h-full"
          style={{
            backgroundImage: `radial-gradient(circle at 50% 50%, rgba(99, 102, 241, 0.1) 0%, transparent 50%)`,
          }}
        />
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 90, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute -top-1/2 -left-1/2 w-full h-full bg-gradient-to-br from-blue-500/10 to-purple-500/10 blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1.2, 1, 1.2],
            rotate: [90, 0, 90],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute -bottom-1/2 -right-1/2 w-full h-full bg-gradient-to-tr from-pink-500/10 to-orange-500/10 blur-3xl"
        />
      </div>

      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            style={{ y: y1 }}
          >
            <div className="relative">
              <motion.div
                animate={{
                  scale: [1, 1.1, 1],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute -top-12 -left-12 w-32 h-32 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full blur-3xl"
              />
              <motion.div
                animate={{
                  scale: [1.1, 1, 1.1],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute -bottom-12 -right-12 w-40 h-40 bg-gradient-to-r from-pink-500/20 to-orange-500/20 rounded-full blur-3xl"
              />

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
                Find Your{" "}
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-pink-500 animate-gradient">
                  Perfect
                </span>{" "}
                Developer Match
              </h1>

              <p className="text-xl text-muted-foreground mb-8 md:pr-12">
                Connect with developers who share your tech stack, coding style,
                and interests. Build meaningful connections in the tech
                community.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-blue-500 to-pink-500 hover:from-blue-600 hover:to-pink-600"
                >
                  Get Started
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
                <Button variant="outline" size="lg">
                  Learn More
                </Button>
              </div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="flex items-center gap-2 mt-6"
              >
                <div className="flex -space-x-2">
                  {[
                    "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg",
                    "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg",
                    "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg",
                    "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg",
                  ].map((image, i) => (
                    <motion.div
                      key={i}
                      className="w-8 h-8 rounded-full border-2 border-background overflow-hidden"
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.1 * i }}
                    >
                      <img
                        src={image}
                        alt={`Developer ${i + 1}`}
                        className="w-full h-full object-cover"
                      />
                    </motion.div>
                  ))}
                </div>
                <p className="text-sm text-muted-foreground">
                  Join{" "}
                  <span className="font-medium text-foreground">2,000+</span>{" "}
                  developers
                </p>
              </motion.div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            style={{ y: y2, opacity }}
            className="relative"
          >
            <div className="aspect-[4/3] bg-gradient-to-tr from-blue-500/5 to-pink-500/5 rounded-2xl p-1 overflow-hidden border border-border">
              <div className="h-full w-full bg-card rounded-xl overflow-hidden p-4 md:p-6">
                <div className="grid grid-cols-1 gap-4">
                  {[1, 2, 3].map((i) => (
                    <motion.div
                      key={i}
                      className="h-24 rounded-lg bg-muted/50 border border-border"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{
                        duration: 0.5,
                        delay: i * 0.2,
                      }}
                    />
                  ))}
                </div>
              </div>
            </div>

            <motion.div
              animate={{
                scale: [1, 1.1, 1],
                rotate: [0, 5, 0],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute -bottom-6 -right-6 w-24 h-24 bg-gradient-to-r from-blue-500/10 to-pink-500/10 rounded-full blur-2xl"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};
export default HeroSection;
