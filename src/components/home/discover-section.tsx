"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { SAMPLE_PROFILES, Profile } from "@/lib/constants";
import DevCard from "./dev-card";

const DiscoverSection = () => {
  const [profiles, setProfiles] = useState<Profile[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const shuffled = [...SAMPLE_PROFILES].sort(() => 0.5 - Math.random());
    setProfiles(shuffled);
  }, []);

  return (
    <section className="bg-gradient-to-b from-background to-muted/30 py-16 md:py-24">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Discover Developers
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Swipe through potential matches based on shared tech interests,
            skills, and coding passion. Find your perfect coding partner!
          </p>
        </motion.div>

        {profiles.length > 0 && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {profiles.map((profile) => (
              <DevCard key={profile.id} profile={profile} />
            ))}
          </div>
        )}

        {currentIndex >= profiles.length && profiles.length > 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="mt-10 flex flex-col items-center justify-center text-center bg-card/80 backdrop-blur-sm rounded-lg p-6"
          >
            <h3 className="text-2xl font-bold mb-2">No more profiles</h3>
            <p className="text-muted-foreground mb-4">
              You've seen all developers for now.
            </p>
            <button
              onClick={() => setCurrentIndex(0)}
              className="text-primary hover:underline"
            >
              Start over
            </button>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default DiscoverSection;
