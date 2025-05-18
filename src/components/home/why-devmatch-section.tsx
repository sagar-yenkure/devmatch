"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";
import Image from "next/image";

const WhyDevMatchSection = () => {
  const benefits = [
    "Algorithm optimized for developer compatibility",
    "Focus on both technical skills and personal interests",
    "Built-in code sharing and collaboration tools",
    "Verified developer profiles",
    "Privacy-focused platform",
    "Active community of passionate developers",
  ];

  return (
    <section className="py-16 md:py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Why Choose DevMatch?
            </h2>
            <p className="text-muted-foreground mb-8">
              DevMatch is more than just a dating app - it's a platform built
              specifically for developers to find meaningful connections based
              on shared technical interests and coding passions.
            </p>
            <div className="space-y-4">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  className="flex items-center gap-3"
                >
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center">
                    <Check className="h-4 w-4 text-primary" />
                  </div>
                  <span>{benefit}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="relative"
          >
            <div className="aspect-square rounded-2xl overflow-hidden">
              <Image
                src="https://images.pexels.com/photos/3182812/pexels-photo-3182812.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt="Developers collaborating"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
export default WhyDevMatchSection;
