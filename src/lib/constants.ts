// Tech stacks used in the app
export const TECH_STACKS = [
  { name: "React", color: "#61DAFB", category: "frontend" },
  { name: "Next.js", color: "#000000", category: "fullstack" },
  { name: "TypeScript", color: "#3178C6", category: "language" },
  { name: "Node.js", color: "#339933", category: "backend" },
  { name: "Python", color: "#3776AB", category: "language" },
  { name: "Vue", color: "#4FC08D", category: "frontend" },
  { name: "Angular", color: "#DD0031", category: "frontend" },
  { name: "Ruby on Rails", color: "#CC0000", category: "fullstack" },
  { name: "AWS", color: "#232F3E", category: "devops" },
  { name: "Docker", color: "#2496ED", category: "devops" },
  { name: "GraphQL", color: "#E10098", category: "api" },
  { name: "MongoDB", color: "#47A248", category: "database" },
  { name: "PostgreSQL", color: "#4169E1", category: "database" },
  { name: "Firebase", color: "#FFCA28", category: "backend" },
  { name: "Tailwind CSS", color: "#38B2AC", category: "frontend" },
  { name: "Rust", color: "#000000", category: "language" },
  { name: "Go", color: "#00ADD8", category: "language" },
  { name: "Django", color: "#092E20", category: "backend" },
  { name: "Swift", color: "#FA7343", category: "mobile" },
  { name: "Kotlin", color: "#7F52FF", category: "mobile" },
];

// Developer profiles for the app
export const SAMPLE_PROFILES = [
  {
    id: 1,
    name: "Alex Johnson",
    age: 28,
    location: "San Francisco, CA",
    bio: "Full-stack developer passionate about React and Node.js. When I'm not coding, I enjoy hiking and playing the guitar.",
    imageUrl:
      "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    techStack: ["React", "Node.js", "TypeScript", "MongoDB"],
    interests: ["Hiking", "Guitar", "Open Source", "AI"],
    lookingFor: "Collaboration on open-source projects and networking",
  },
  {
    id: 2,
    name: "Sophia Chen",
    age: 26,
    location: "New York, NY",
    bio: "Frontend engineer specialized in creating beautiful user experiences. Coffee enthusiast and amateur photographer.",
    imageUrl:
      "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    techStack: ["Vue", "TypeScript", "Tailwind CSS", "GraphQL"],
    interests: ["Photography", "Coffee", "UI Design", "Traveling"],
    lookingFor: "Mentorship opportunities and design-focused projects",
  },
  {
    id: 3,
    name: "Michael Rodriguez",
    age: 31,
    location: "Austin, TX",
    bio: "Backend developer with expertise in distributed systems. Love solving complex problems and contributing to tech communities.",
    imageUrl:
      "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    techStack: ["Go", "Python", "AWS", "PostgreSQL"],
    interests: ["Machine Learning", "Cycling", "Hackathons", "Reading"],
    lookingFor:
      "Technical discussion partners and potential startup co-founders",
  },
  {
    id: 4,
    name: "Emma Wilson",
    age: 29,
    location: "Seattle, WA",
    bio: "DevOps engineer focused on CI/CD pipelines and infrastructure as code. Part-time indie game developer.",
    imageUrl:
      "https://images.pexels.com/photos/1587009/pexels-photo-1587009.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    techStack: ["Docker", "Kubernetes", "Terraform", "AWS"],
    interests: ["Game Development", "Cooking", "Hiking", "SciFi"],
    lookingFor: "Game jam partners and networking with fellow indie developers",
  },
];

export type Profile = (typeof SAMPLE_PROFILES)[number];
