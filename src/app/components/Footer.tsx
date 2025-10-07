import { SocialMediaIcons } from "./footer/SocialMediaIcons";

export default function Footer() {
  return (
    <footer className="w-full max-w-6xl mx-auto px-6 py-5 flex flex-col items-center lg:flex-row lg:justify-between lg:items-center gap-7">
      <span className="font-sans text-[0.94rem] text-white/50">
        © 2025 Handcrafted Haven
      </span>

      <SocialMediaIcons />
    </footer>
  );
}
