"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { images } from "@/lib/images";

const EMAIL = "sophie59595@gmail.com";

// replace these with your real links
const links = [
  { label: "LinkedIn", href: "https://www.linkedin.com/in/sophie-suzuki-shih-724371316/" },
];

export default function Contact() {
  return (
    <section
      id="contact"
      className="relative flex min-h-screen flex-col justify-center overflow-hidden bg-brand-yellow px-6 py-24 text-brand-blue md:px-20 lg:pl-32"
    >
      {/* wrapper handles position so the drift animation can own `transform` */}
      <div
        aria-hidden
        className="pointer-events-none absolute -right-16 top-12 w-60 md:right-10 md:top-1/2 md:w-[420px] md:-translate-y-1/2"
      >
        <Image
          src={images.sun}
          alt=""
          sizes="(min-width: 768px) 420px, 240px"
          className="pixel-art w-full animate-drift-slow opacity-90"
        />
      </div>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5 }}
        className="relative max-w-xl"
      >
        <h2 className="text-4xl font-medium sm:text-6xl">Let&apos;s connect.</h2>
        <p className="mt-4 text-brand-blue/80 sm:text-lg">
          I&apos;m always happy to talk about research, technology,
          neuroscience, interesting ideas, or whatever you&apos;re building.
        </p>

        <div className="mt-10 flex flex-col gap-3 font-pixel text-sm">
          <CopyEmail />
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              {...(link.href.startsWith("http") ? { target: "_blank", rel: "noopener noreferrer" } : {})}
              className="w-fit border-b border-brand-blue/30 pb-1 transition-colors duration-200 hover:border-navy hover:text-navy"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* drop resume.pdf into /public and this just works */}
        <a
          href="/resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="group mt-10 inline-flex w-fit items-center gap-2 rounded-full bg-brand-blue px-6 py-3 font-pixel text-sm text-brand-yellow transition-transform duration-300 hover:scale-[1.03]"
        >
          Download resume
          <span className="transition-transform duration-300 group-hover:translate-x-1">
            →
          </span>
        </a>
      </motion.div>

      <footer className="relative mt-24 font-pixel text-sm text-brand-blue/50">
        <p>Sophie Shih</p>
        <p className="mt-1">Different pursuits, same curiosity.</p>
      </footer>
    </section>
  );
}

/** Shows the email address; clicking copies it and briefly confirms. */
function CopyEmail() {
  const [copied, setCopied] = useState(false);

  async function copy() {
    try {
      await navigator.clipboard.writeText(EMAIL);
    } catch {
      // older browsers / non-https: fall back to a hidden textarea
      const t = document.createElement("textarea");
      t.value = EMAIL;
      document.body.appendChild(t);
      t.select();
      document.execCommand("copy");
      t.remove();
    }
    setCopied(true);
    setTimeout(() => setCopied(false), 1800);
  }

  return (
    <button
      type="button"
      onClick={copy}
      aria-label={`Copy email address ${EMAIL}`}
      className="group flex w-fit items-center gap-3 border-b border-brand-blue/30 pb-1 text-left transition-colors duration-200 hover:border-navy hover:text-navy"
    >
      {EMAIL}
      <span className="text-xs uppercase tracking-wider text-brand-blue/60 transition-colors duration-200 group-hover:text-navy">
        {copied ? "copied!" : "copy"}
      </span>
      <span aria-live="polite" className="sr-only">
        {copied ? "Email copied to clipboard" : ""}
      </span>
    </button>
  );
}
