"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";

const SuccessStoriesSection = () => {
  const stories = [
    {
      title: "From Match to Startup Co-Founders",
      description:
        "Met through DevMatch, now running a successful SaaS company together.",
      image:
        "https://images.pexels.com/photos/3182781/pexels-photo-3182781.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      names: "Alex & Sarah",
      tech: "React, Node.js",
    },
    {
      title: "Open Source Love Story",
      description:
        "Connected over shared interests in open source, now maintaining popular projects together.",
      image:
        "https://images.pexels.com/photos/3182812/pexels-photo-3182812.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      names: "Mike & Emily",
      tech: "Python, TypeScript",
    },
    {
      title: "Hackathon Champions",
      description:
        "Met on DevMatch, won multiple hackathons as a team, and started a dev consultancy.",
      image:
        "https://images.pexels.com/photos/3182833/pexels-photo-3182833.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      names: "David & Lisa",
      tech: "Vue.js, Go",
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
            Success Stories
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Real developers who found their perfect match on DevMatch. From
            co-founders to life partners, these stories inspire our community.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {stories.map((story, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="overflow-hidden h-full">
                <div className="relative h-48">
                  <Image
                    src={story.image}
                    alt={story.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{story.title}</h3>
                  <p className="text-muted-foreground mb-4">
                    {story.description}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium">{story.names}</span>
                    <span className="text-sm text-muted-foreground">
                      {story.tech}
                    </span>
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
export default SuccessStoriesSection;
