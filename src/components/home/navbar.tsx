"use client";

import Link from "next/link";
import { Code, Heart, MessageCircle, User } from "lucide-react";
import { motion } from "framer-motion";

import { ThemeToggle } from "@/components/theme-toggle";
import { Button } from "@/components/ui/button";

const NavLink = ({
  href,
  children,
  icon,
}: {
  href: string;
  children: React.ReactNode;
  icon?: React.ReactNode;
}) => {
  return (
    <Link
      href={href}
      className="flex items-center text-muted-foreground hover:text-foreground transition-colors"
    >
      {icon}
      {children}
    </Link>
  );
};

const Navbar = () => {
  return (
    <motion.header
      className="fixed top-0 w-full z-50 backdrop-blur-md bg-background/80 border-b border-border"
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      <div className="container mx-auto flex items-center justify-between px-4 py-3">
        <Link href="/" className="flex items-center gap-2">
          <motion.div
            whileHover={{ rotate: 10 }}
            transition={{ type: "spring", stiffness: 500 }}
          >
            <Code className="h-6 w-6 text-primary" />
          </motion.div>
          <span className="font-bold text-xl bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-pink-500">
            DevMatch
          </span>
        </Link>

        <div className="hidden md:flex items-center gap-6">
          <NavLink href="/discover" icon={<Heart className="h-4 w-4 mr-1" />}>
            Discover
          </NavLink>
          <NavLink href="/matches" icon={<User className="h-4 w-4 mr-1" />}>
            Matches
          </NavLink>
          <NavLink
            href="/messages"
            icon={<MessageCircle className="h-4 w-4 mr-1" />}
          >
            Messages
          </NavLink>
        </div>

        <div className="flex items-center gap-2">
          <ThemeToggle />
          <Button size="sm" className="hidden md:flex">
            Sign In
          </Button>
          <Button variant="default" size="sm">
            Join Now
          </Button>
        </div>
      </div>
    </motion.header>
  );
};

export default Navbar;
