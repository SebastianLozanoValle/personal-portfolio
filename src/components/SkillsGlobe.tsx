import IconCloud from "@/components/magicui/icon-cloud";

const slugs = [
  "react",
  "nextdotjs",
  "expo",
  "astro",
  "git",
  "github",
  "jsonwebtokens",
  "android",
  "apple",
  "gnubash",
  "supabase",
  "express",
  "prisma",
  "apollographql",
  "postgresql",
  "firebase",
  "mongodb",
  "vercel",
  "testinglibrary",
  "jest",
  "cloudflare",
  "docker",
  "typescript",
  "javascript",
  "java",
  "springboot",
  "visualstudiocode",
  "androidstudio",
  "spring",
  "figma",
];

export function SkillsGlobe() {
  return (
    <div className="relative flex h-full w-full max-w-[32rem] items-center justify-center overflow-hidden bg-background dark:bg-pseudoblack px-20 pb-20 pt-8">
      <IconCloud iconSlugs={slugs} />
    </div>
  );
}
