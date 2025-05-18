"use client";

import { motion } from "framer-motion";
import {
  Check,
  BrainCircuit,
  Code,
  Heart,
  Star,
  Shield,
  Users,
  Laptop,
} from "lucide-react";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";

const benefits = [
  {
    icon: <BrainCircuit className="h-5 w-5" />,
    title: "Algorithm optimized for developer compatibility",
    description:
      "Our matching algorithm evaluates technical skills, project interests, and coding style preferences.",
  },
  {
    icon: <Code className="h-5 w-5" />,
    title: "Focus on both technical skills and personal interests",
    description:
      "Find someone who complements your skill set and shares your passion for technology.",
  },
  {
    icon: <Laptop className="h-5 w-5" />,
    title: "Built-in code sharing and collaboration tools",
    description:
      "Share snippets, solve problems together, and collaborate on projects in real-time.",
  },
  {
    icon: <Shield className="h-5 w-5" />,
    title: "Verified developer profiles",
    description:
      "All profiles are verified through GitHub or other coding platforms for authenticity.",
  },
  {
    icon: <Users className="h-5 w-5" />,
    title: "Privacy-focused platform",
    description:
      "Control what you share and who can see your professional and personal information.",
  },
  {
    icon: <Star className="h-5 w-5" />,
    title: "Active community of passionate developers",
    description:
      "Join thousands of like-minded developers seeking meaningful connections.",
  },
];

const WhyDevMatchSection = () => {
  return (
    <section className="py-20 bg-background relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-20 bg-gradient-to-b from-muted/30 to-transparent"></div>
        <div className="absolute bottom-0 left-0 w-full h-20 bg-gradient-to-t from-muted/30 to-transparent"></div>

        {/* Code patterns */}
        <div className="absolute left-[5%] top-[20%] text-[10px] font-mono text-primary/5 whitespace-pre leading-tight">
          {`function findMatch(developer) {
  const matches = developers.filter(d => 
    d.skills.some(s => 
      developer.interests.includes(s)
    )
  );
  return matches.sort((a, b) => 
    calculateCompatibility(developer, b) - 
    calculateCompatibility(developer, a)
  );
}`}
        </div>

        <div className="absolute right-[5%] bottom-[20%] text-[10px] font-mono text-primary/5 whitespace-pre leading-tight">
          {`class Connection {
  constructor(dev1, dev2) {
    this.techMatch = 
      calculateTechScore(dev1, dev2);
    this.personalityMatch = 
      calculatePersonalityScore(dev1, dev2);
    this.sharedInterests = 
      findSharedInterests(dev1, dev2);
  }
  
  getCompatibilityScore() {
    return this.techMatch * 0.6 + 
      this.personalityMatch * 0.4;
  }
}`}
        </div>
      </div>

      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="relative"
          >
            <div className="bg-card/30 backdrop-blur-sm border border-border p-1 rounded-2xl relative">
              {/* Gradient accent */}
              <div className="absolute -inset-0.5 bg-gradient-to-tr from-blue-500/30 to-pink-500/30 rounded-2xl blur-sm opacity-50"></div>

              {/* Content */}
              <div className="relative bg-gradient-to-tr from-card to-card/95 rounded-xl overflow-hidden">
                <div className="aspect-square relative overflow-hidden">
                  <Image
                    src="https://images.pexels.com/photos/3182812/pexels-photo-3182812.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                    alt="Developers collaborating"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-tr from-background/80 to-background/20"></div>

                  {/* Overlay content */}
                  <div className="absolute inset-0 flex flex-col justify-center items-center text-center p-8">
                    <motion.div
                      initial={{ scale: 0.8, opacity: 0 }}
                      whileInView={{ scale: 1, opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6 }}
                      className="relative"
                    >
                      <div className="absolute -inset-4 rounded-full bg-gradient-to-r from-blue-500/20 to-pink-500/20 blur-xl"></div>
                      <div className="flex items-center justify-center gap-2 bg-background/30 backdrop-blur-md p-3 rounded-full border border-white/10 relative">
                        <Code className="h-5 w-5 text-blue-400" />
                        <Heart className="h-5 w-5 text-pink-400" />
                      </div>
                    </motion.div>

                    <motion.h3
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: 0.2 }}
                      className="text-2xl font-bold mt-6 mb-2 text-white"
                    >
                      Where Tech & Heart Connect
                    </motion.h3>

                    <motion.p
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: 0.3 }}
                      className="text-white/80 max-w-sm"
                    >
                      DevMatch creates meaningful connections between developers
                      through shared passions for technology and innovation.
                    </motion.p>

                    {/* Statistics */}
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: 0.4 }}
                      className="flex flex-wrap justify-center gap-4 mt-8 w-full max-w-sm"
                    >
                      {[
                        { label: "Matches Made", value: "12K+" },
                        { label: "Active Developers", value: "50K+" },
                        { label: "Success Rate", value: "89%" },
                      ].map((stat, index) => (
                        <div
                          key={index}
                          className="bg-background/20 backdrop-blur-md px-4 py-2 rounded-lg border border-white/10"
                        >
                          <p className="text-2xl font-bold text-white">
                            {stat.value}
                          </p>
                          <p className="text-xs text-white/70">{stat.label}</p>
                        </div>
                      ))}
                    </motion.div>

                    {/* Tech badges */}
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: 0.5 }}
                      className="flex flex-wrap justify-center gap-2 mt-6"
                    >
                      {[
                        "React",
                        "Node.js",
                        "Python",
                        "TypeScript",
                        "AWS",
                        "Docker",
                      ].map((tech, index) => (
                        <Badge
                          key={index}
                          variant="secondary"
                          className="bg-white/10 hover:bg-white/20 text-white border-none"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </motion.div>
                  </div>
                </div>
              </div>
            </div>

            {/* Decorative elements */}
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
              className="absolute -bottom-6 -right-6 w-24 h-24 bg-gradient-to-r from-blue-500/20 to-pink-500/20 rounded-full blur-2xl"
            />
            <motion.div
              animate={{
                scale: [1.1, 1, 1.1],
                rotate: [5, 0, 5],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute -top-6 -left-6 w-24 h-24 bg-gradient-to-r from-purple-500/20 to-blue-500/20 rounded-full blur-2xl"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-2">
                Why Choose{" "}
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-pink-500">
                  DevMatch
                </span>
                ?
              </h2>
              <div className="h-1 w-20 bg-gradient-to-r from-blue-500 to-pink-500 rounded-full mb-6"></div>
              <p className="text-muted-foreground mb-8 text-lg">
                DevMatch is more than just a dating app - it's a platform built
                specifically for developers to find meaningful connections based
                on shared technical interests and coding passions.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="group"
                >
                  <div className="flex items-start gap-4 p-4 rounded-xl hover:bg-card/50 transition-all duration-300">
                    <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300">
                      <div className="text-primary">{benefit.icon}</div>
                    </div>
                    <div>
                      <h3 className="font-medium mb-1">{benefit.title}</h3>
                      <p className="text-sm text-muted-foreground">
                        {benefit.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default WhyDevMatchSection;
