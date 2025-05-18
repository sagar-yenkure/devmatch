"use client";

import { motion } from "framer-motion";
import { ArrowRight, Code, Heart, Terminal, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";

const CTASection = () => {
  // Animation for code typing effect
  const [typedCode, setTypedCode] = useState("");
  const codeString = "await DevMatch.connect({\n  you,\n  perfectMatch\n});";

  useEffect(() => {
    let i = 0;
    const typeCode = () => {
      if (i < codeString.length) {
        setTypedCode(codeString.substring(0, i + 1));
        i++;
        setTimeout(typeCode, Math.random() * 50 + 30);
      }
    };

    setTimeout(typeCode, 500);
  }, []);

  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          animate={{
            opacity: [0.05, 0.1, 0.05],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute top-1/4 left-1/4 w-1/2 h-1/2 rounded-full bg-gradient-to-tr from-blue-500/10 via-purple-500/10 to-transparent blur-3xl"
        />
        <motion.div
          animate={{
            opacity: [0.05, 0.1, 0.05],
            scale: [1.1, 1, 1.1],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute bottom-1/3 right-1/4 w-1/3 h-1/3 rounded-full bg-gradient-to-bl from-pink-500/10 via-orange-500/10 to-transparent blur-3xl"
        />

        {/* Code symbols */}
        <div className="absolute -top-10 left-10 text-foreground/5 text-7xl font-mono rotate-12">
          {"{}"}
        </div>
        <div className="absolute top-1/3 right-10 text-foreground/5 text-5xl font-mono -rotate-6">
          {"</>"}
        </div>
        <div className="absolute bottom-10 left-1/4 text-foreground/5 text-5xl font-mono rotate-3">
          {"()"}
        </div>
        <div className="absolute -bottom-5 right-1/4 text-foreground/5 text-6xl font-mono -rotate-12">
          {"[]"}
        </div>

        {/* Binary pattern */}
        <div className="absolute top-0 left-0 w-full h-full opacity-[0.02] pointer-events-none select-none">
          <div className="absolute inset-0 overflow-hidden">
            {Array.from({ length: 15 }).map((_, i) => (
              <div
                key={i}
                className="absolute text-xs font-mono tracking-tight leading-none text-primary"
                style={{
                  top: `${Math.random() * 100}%`,
                  left: `${Math.random() * 100}%`,
                  opacity: 0.3 + Math.random() * 0.7,
                }}
              >
                {Array.from({ length: 20 })
                  .map(() => Math.round(Math.random()))
                  .join("")}
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="relative z-10 rounded-3xl overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-background/95 via-background/90 to-background/80"></div>
          <div className="absolute inset-0 border border-border/30 rounded-3xl"></div>

          {/* Glowing borders */}
          <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500/30 via-purple-500/30 to-pink-500/30 rounded-[24px] opacity-20 blur-xl"></div>
          <div className="absolute inset-0 border border-white/5 rounded-3xl"></div>

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 p-8 md:p-16">
            <div className="flex flex-col justify-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary mb-6">
                  <Zap className="h-4 w-4" />
                  <span className="text-sm font-medium">
                    Start Coding Together
                  </span>
                </div>

                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight">
                  Ready to Find Your{" "}
                  <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-pink-500">
                    Developer Match
                  </span>
                  ?
                </h2>

                <p className="text-muted-foreground text-lg mb-8">
                  Join thousands of developers who've found meaningful
                  connections through shared passion for technology. Whether
                  you're looking for a coding partner, mentor, or something
                  more, DevMatch brings like-minded developers together.
                </p>

                <div className="flex flex-col sm:flex-row gap-4">
                  <Button
                    size="lg"
                    className="bg-gradient-to-r from-blue-500 to-pink-500 hover:from-blue-600 hover:to-pink-600 transition-all duration-300 text-white group"
                  >
                    <span>Create Your Profile</span>
                    <motion.div
                      animate={{ x: [0, 5, 0] }}
                      transition={{
                        duration: 1.5,
                        repeat: Infinity,
                        repeatDelay: 1,
                      }}
                    >
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </motion.div>
                  </Button>
                  <Button variant="outline" size="lg" className="group">
                    <Terminal className="mr-2 h-4 w-4 group-hover:text-primary transition-colors duration-300" />
                    <span>View API Docs</span>
                  </Button>
                </div>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="flex justify-center items-center"
            >
              <div className="relative max-w-md w-full">
                {/* Terminal-like interface */}
                <div className="rounded-xl overflow-hidden shadow-2xl border border-border/50 bg-card">
                  {/* Terminal header */}
                  <div className="bg-muted/80 px-4 py-2 flex items-center justify-between border-b border-border/50">
                    <div className="flex items-center gap-1">
                      <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
                      <div className="w-3 h-3 rounded-full bg-amber-500/80"></div>
                      <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
                    </div>
                    <div className="text-xs text-muted-foreground">
                      connect.devmatch.sh
                    </div>
                    <div className="w-4"></div>
                  </div>

                  {/* Terminal content */}
                  <div className="p-6 font-mono text-sm bg-card/95">
                    <div className="text-muted-foreground mb-2">
                      <span className="text-blue-400">import</span>{" "}
                      <span className="text-green-400">DevMatch</span>{" "}
                      <span className="text-blue-400">from</span>{" "}
                      <span className="text-orange-400">'dev-match'</span>;
                    </div>
                    <div className="text-muted-foreground mb-4">
                      <span className="text-purple-400">const</span>{" "}
                      <span className="text-green-400">you</span>{" "}
                      <span className="text-muted-foreground">=</span>{" "}
                      <span className="text-blue-400">await</span>{" "}
                      <span className="text-green-400">Developer</span>.
                      <span className="text-yellow-400">create</span>();
                    </div>
                    <div className="text-muted-foreground mb-4">
                      <span className="text-purple-400">const</span>{" "}
                      <span className="text-green-400">perfectMatch</span>{" "}
                      <span className="text-muted-foreground">=</span>{" "}
                      <span className="text-blue-400">await</span>{" "}
                      <span className="text-green-400">DevMatch</span>.
                      <span className="text-yellow-400">findCompatible</span>(
                      <span className="text-green-400">you</span>);
                    </div>

                    <div className="text-muted-foreground mb-4">
                      <span className="text-green-400">console</span>.
                      <span className="text-yellow-400">log</span>(
                      <span className="text-orange-400">
                        'Compatibility score:'
                      </span>
                      , <span className="text-green-400">perfectMatch</span>.
                      <span className="text-yellow-400">score</span>);
                      <div className="text-green-400 ml-4">
                        // Compatibility score: 98.5%
                      </div>
                    </div>

                    <div className="flex items-start">
                      <div className="text-green-400 mr-2">❯</div>
                      <div className="text-foreground">
                        {typedCode}
                        <motion.span
                          animate={{ opacity: [1, 0, 1] }}
                          transition={{ repeat: Infinity, duration: 1 }}
                          className="inline-block w-2 h-4 bg-primary ml-0.5"
                        />
                      </div>
                    </div>

                    {/* Result */}
                    {typedCode === codeString && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5 }}
                        className="mt-4 px-4 py-3 rounded-lg bg-gradient-to-r from-blue-500/10 to-pink-500/10 border border-border/50"
                      >
                        <div className="flex items-center gap-2 text-foreground">
                          <div className="flex-shrink-0">
                            <Heart className="h-5 w-5 text-pink-500" />
                          </div>
                          <div>
                            Connection established!{" "}
                            <span className="text-green-400">
                              Ready to code together.
                            </span>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </div>
                </div>

                {/* Decorative elements */}
                <motion.div
                  animate={{
                    scale: [1, 1.1, 1],
                    opacity: [0.5, 0.8, 0.5],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="absolute -bottom-6 -right-6 w-24 h-24 bg-gradient-to-r from-blue-500/20 to-pink-500/20 rounded-full blur-xl"
                />
                <motion.div
                  animate={{
                    scale: [1.1, 1, 1.1],
                    opacity: [0.5, 0.8, 0.5],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 2,
                  }}
                  className="absolute -top-6 -left-6 w-24 h-24 bg-gradient-to-r from-purple-500/20 to-blue-500/20 rounded-full blur-xl"
                />

                {/* Floating hearts */}
                {[...Array(5)].map((_, i) => (
                  <motion.div
                    key={i}
                    initial={{ y: 0, x: Math.random() * 100 - 50, opacity: 0 }}
                    animate={{
                      y: -200,
                      opacity: [0, 0.7, 0],
                    }}
                    transition={{
                      duration: 6 + Math.random() * 5,
                      repeat: Infinity,
                      delay: Math.random() * 5,
                      ease: "easeOut",
                    }}
                    className="absolute bottom-10 text-pink-500/30"
                    style={{
                      left: `${20 + i * 15}%`,
                      fontSize: `${1 + Math.random() * 1}rem`,
                    }}
                  >
                    <Code className="inline-block transform rotate-45" />
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;
