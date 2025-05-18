"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, useMotionValue, useTransform } from "framer-motion";
import { Heart, Mail } from "lucide-react";
import { Profile } from "@/lib/constants";
import { Button } from "@/components/ui/button";
import TechBadge from "./tech-badge";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";

interface DevCardProps {
  profile: Profile;
}

const DevCard = ({ profile }: DevCardProps) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const x = useMotionValue(0);
  const rotate = useTransform(x, [-200, 200], [-10, 10]);

  return (
    <motion.div
      className="w-full h-full max-w-xl"
      style={{ x, rotate }}
      whileTap={{ cursor: "grab" }}
    >
      <Card className=" shadow-md border border-border rounded-2xl">
        <div className="relative aspect-[3/3] w-full cursor-grab active:cursor-grabbing">
          <Image
            src={profile.imageUrl}
            alt={profile.name}
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent pointer-events-none" />
          <div className="absolute bottom-0 left-0 right-0 p-4 text-left text-white">
            <h2 className="text-lg font-semibold">
              {profile.name}, {profile.age}
            </h2>
            <p className="text-white/80 text-sm">{profile.location}</p>
            <div className="flex flex-wrap gap-1 mt-2">
              {profile.techStack.slice(0, 3).map((tech) => (
                <TechBadge key={tech} name={tech} />
              ))}
              {profile.techStack.length > 3 && (
                <Badge variant="outline" className="text-xs">
                  +{profile.techStack.length - 3}
                </Badge>
              )}
            </div>
          </div>
        </div>

        <CardContent
          className={`p-4 ${isExpanded ? "" : "max-h-24 overflow-hidden"}`}
        >
          <p className="text-foreground/80 mb-3 text-sm">{profile.bio}</p>

          {isExpanded && (
            <>
              <div className="mt-2">
                <h3 className="text-sm font-medium mb-2">Tech Stack</h3>
                <div className="flex flex-wrap gap-1 mb-3">
                  {profile.techStack.map((tech) => (
                    <TechBadge key={tech} name={tech} />
                  ))}
                </div>
              </div>

              <div className="mt-2">
                <h3 className="text-sm font-medium mb-2">Interests</h3>
                <div className="flex flex-wrap gap-1 mb-3">
                  {profile.interests.map((interest) => (
                    <Badge key={interest} variant="outline" className="text-xs">
                      {interest}
                    </Badge>
                  ))}
                </div>
              </div>

              <div className="mt-2">
                <h3 className="text-sm font-medium mb-2">Looking For</h3>
                <p className="text-sm text-muted-foreground">
                  {profile.lookingFor}
                </p>
              </div>
            </>
          )}

          <Button
            variant="ghost"
            size="sm"
            onClick={() => setIsExpanded(!isExpanded)}
            className="p-0 h-auto mt-1 text-xs text-muted-foreground hover:text-primary"
          >
            {isExpanded ? "Show Less" : "Show More"}
          </Button>
        </CardContent>

        <div className="px-4 pb-4 mt-2 flex justify-between gap-4">
          <Button
            size="sm"
            variant="outline"
            className="flex items-center gap-2"
            onClick={() => alert(`Invitation sent to ${profile.name}!`)}
          >
            <Mail className="h-4 w-4" />
            Send Invitation
          </Button>

          <Button
            size="sm"
            variant="default"
            className="flex items-center gap-2 bg-gradient-to-r from-pink-500 to-blue-500"
            onClick={() => alert(`You liked ${profile.name}'s profile!`)}
          >
            <Heart className="h-4 w-4" />
            Like Profile
          </Button>
        </div>
      </Card>
    </motion.div>
  );
};

export default DevCard;
