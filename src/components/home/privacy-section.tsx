"use client";

import { motion } from "framer-motion";
import { Shield, Eye, Lock, UserX } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const PrivacySection = () => {
  const features = [
    {
      icon: <Shield className="h-8 w-8" />,
      title: "Verified Profiles",
      description:
        "All profiles are verified to ensure you're connecting with real developers.",
    },
    {
      icon: <Eye className="h-8 w-8" />,
      title: "Ghost Mode",
      description: "Browse profiles anonymously when you need some privacy.",
    },
    {
      icon: <Lock className="h-8 w-8" />,
      title: "End-to-End Encryption",
      description:
        "Your messages and shared code snippets are fully encrypted.",
    },
    {
      icon: <UserX className="h-8 w-8" />,
      title: "Block & Report",
      description:
        "Powerful tools to maintain your personal space and boundaries.",
    },
  ];

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
            Your Privacy Matters
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            We take your privacy seriously. DevMatch provides powerful tools to
            help you control your online presence and protect your personal
            information.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="h-full border border-border bg-card/50 backdrop-blur-sm hover:bg-card/80 transition-colors">
                <CardContent className="pt-6">
                  <div className="rounded-full w-12 h-12 bg-primary/10 flex items-center justify-center mb-4 text-primary">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PrivacySection;
