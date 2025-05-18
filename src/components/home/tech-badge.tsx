"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { Badge } from "@/components/ui/badge";
import { TECH_STACKS } from "@/lib/constants";

interface TechBadgeProps {
  name: string;
  className?: string;
  animate?: boolean;
}

const TechBadge = ({ name, className, animate = true }: TechBadgeProps) => {
  const tech = TECH_STACKS.find((t) => t.name === name);
  const color = tech?.color || "#666";

  const badgeContent = (
    <Badge
      className={cn(
        "text-xs font-medium transition-all px-2 py-0.5",
        className
      )}
      style={{
        backgroundColor: `${color}20`,
        color: color,
        borderColor: `${color}40`,
      }}
    >
      {name}
    </Badge>
  );

  if (!animate) {
    return badgeContent;
  }

  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.2 }}
    >
      {badgeContent}
    </motion.div>
  );
};
export default TechBadge;
