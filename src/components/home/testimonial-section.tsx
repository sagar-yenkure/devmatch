"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Quote } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const testimonials = [
  {
    name: "Sarah L.",
    role: "Frontend Developer",
    company: "TechCorp",
    image:
      "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    quote:
      "DevMatch helped me find the perfect collaborator for my side project. We had the same technical interests and complementary skills!",
  },
  {
    name: "Jason M.",
    role: "Full Stack Engineer",
    company: "StartupX",
    image:
      "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    quote:
      "I was looking for a mentor with experience in my tech stack. Through DevMatch, I found someone who's been guiding me through complex architectural decisions.",
  },
  {
    name: "Emily K.",
    role: "DevOps Specialist",
    company: "CloudTech",
    image:
      "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    quote:
      "The tech-focused matching algorithm made all the difference. I've tried other platforms, but DevMatch actually understood what I was looking for in a coding partner.",
  },
];

const TestimonialSection = () => {
  return (
    <section className="py-16 md:py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Developers Love DevMatch
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            See what our community has to say about the connections they've made
            and the collaborative projects they've started.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="h-full border border-border bg-card/50 backdrop-blur-sm">
                <CardContent className="pt-6">
                  <div className="mb-4 text-primary/80">
                    <Quote className="h-6 w-6" />
                  </div>
                  <p className="mb-6 text-muted-foreground">
                    "{testimonial.quote}"
                  </p>
                  <div className="flex items-center">
                    <div className="relative w-12 h-12 mr-4 rounded-full overflow-hidden">
                      <Image
                        src={testimonial.image}
                        alt={testimonial.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <p className="font-medium">{testimonial.name}</p>
                      <p className="text-sm text-muted-foreground">
                        {testimonial.role}, {testimonial.company}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default TestimonialSection;
