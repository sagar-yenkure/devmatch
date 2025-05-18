"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Quote, Star, MessageSquare } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const testimonials = [
  {
    name: "Sarah L.",
    role: "Frontend Developer",
    company: "TechCorp",
    image:
      "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    quote:
      "DevMatch helped me find the perfect collaborator for my side project. We had the same technical interests and complementary skills!",
    rating: 5,
    techStack: ["React", "CSS"],
  },
  {
    name: "Jason M.",
    role: "Full Stack Engineer",
    company: "StartupX",
    image:
      "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    quote:
      "I was looking for a mentor with experience in my tech stack. Through DevMatch, I found someone who's been guiding me through complex architectural decisions.",
    rating: 5,
    techStack: ["Vue", "Node.js"],
  },
  {
    name: "Emily K.",
    role: "DevOps Specialist",
    company: "CloudTech",
    image:
      "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    quote:
      "The tech-focused matching algorithm made all the difference. I've tried other platforms, but DevMatch actually understood what I was looking for in a coding partner.",
    rating: 5,
    techStack: ["AWS", "Docker"],
  },
];

const TestimonialSection = () => {
  return (
    <section className="py-20 bg-muted/30 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          animate={{
            y: [0, 15, 0],
            opacity: [0.3, 0.2, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-gradient-to-tr from-blue-500/5 via-purple-500/5 to-transparent blur-3xl"
        />
        <motion.div
          animate={{
            y: [0, -20, 0],
            opacity: [0.2, 0.3, 0.2],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute bottom-1/3 right-1/4 w-80 h-80 rounded-full bg-gradient-to-bl from-pink-500/5 via-orange-500/5 to-transparent blur-3xl"
        />

        {/* Floating hearts */}
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            initial={{
              y: 0,
              x: Math.random() * 100 - 50,
              opacity: 0.1 + Math.random() * 0.3,
            }}
            animate={{
              y: -300,
              opacity: [
                0.1 + Math.random() * 0.3,
                0.2 + Math.random() * 0.3,
                0,
              ],
            }}
            transition={{
              duration: 10 + Math.random() * 15,
              repeat: Infinity,
              delay: Math.random() * 10,
              ease: "linear",
            }}
            className="absolute bottom-0 text-pink-500/10 text-2xl"
            style={{ left: `${10 + i * 15}%` }}
          >
            ❤️
          </motion.div>
        ))}

        {/* Code symbols */}
        <div className="absolute bottom-10 left-10 text-foreground/5 text-4xl font-mono rotate-12">
          {"{}"}
        </div>
        <div className="absolute top-10 right-10 text-foreground/5 text-4xl font-mono -rotate-12">
          {"</>"}
        </div>
      </div>

      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16 relative"
        >
          <div className="flex justify-center items-center mb-4 gap-2">
            <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
              <MessageSquare className="h-4 w-4 text-primary" />
            </div>
            <h3 className="text-lg font-medium text-primary">Testimonials</h3>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Developers{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-pink-500">
              Love
            </span>{" "}
            DevMatch
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            See what our community has to say about the connections they've made
            and the collaborative projects they've started.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
            >
              <Card className="h-full border-border shadow-sm bg-card/70 backdrop-blur-sm hover:shadow-lg transition-all duration-300 relative overflow-hidden group">
                {/* Background gradient effect */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-transparent to-pink-500/5"></div>
                </div>

                <CardContent className="pt-6 relative">
                  {/* Quote icon with gradient background */}
                  <div className="inline-flex mb-4">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-500/20 to-pink-500/20 flex items-center justify-center">
                      <Quote className="h-5 w-5 text-primary" />
                    </div>
                  </div>

                  {/* Rating stars */}
                  <div className="flex mb-3">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star
                        key={i}
                        className="h-4 w-4 fill-amber-400 text-amber-400"
                      />
                    ))}
                  </div>

                  {/* Quote */}
                  <p className="mb-6 text-muted-foreground relative">
                    "{testimonial.quote}"
                  </p>

                  {/* Profile information */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <div className="relative w-12 h-12 mr-4 rounded-full overflow-hidden border-2 border-background shadow-sm">
                        <Image
                          src={testimonial.image}
                          alt={testimonial.name}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div>
                        <p className="font-semibold">{testimonial.name}</p>
                        <p className="text-sm text-muted-foreground">
                          {testimonial.role}, {testimonial.company}
                        </p>
                      </div>
                    </div>

                    {/* Tech badges */}
                    <div className="flex flex-col items-end">
                      <div className="flex space-x-1">
                        {testimonial.techStack.map((tech, i) => (
                          <div
                            key={i}
                            className="text-xs px-2 py-1 rounded-full bg-primary/10 text-primary-foreground whitespace-nowrap"
                          >
                            {tech}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* View more testimonials button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex justify-center mt-12"
        >
          <Button variant="outline" className="group">
            View more testimonials
            <motion.span
              animate={{ x: [0, 5, 0] }}
              transition={{ duration: 1, repeat: Infinity, repeatDelay: 1 }}
              className="ml-2"
            >
              →
            </motion.span>
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default TestimonialSection;
