import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, Twitter } from "lucide-react";
import Link from "next/link";

import React from "react";

export default function Contact() {
  return (
    <section id="contact" className="py-32">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold mb-8 gradient-text">Get in Touch</h2>
        <p className="text-xl text-muted-foreground mb-12 max-w-2xl mx-auto">
          Ready to bring your ideas to life? Let&apos;s collaborate and create
          something amazing together!
        </p>
        <div className="flex flex-wrap justify-center gap-6">
          <Button
            asChild
            size="lg"
            className="rounded-full px-8 hover:scale-105 transition-transform"
          >
            <Link href="mailto:john.doe@example.com">
              <Mail className="mr-2 h-5 w-5" /> Email Me
            </Link>
          </Button>
          <Button
            variant="outline"
            asChild
            size="lg"
            className="rounded-full px-8 hover:scale-105 transition-transform"
          >
            <Link
              href="https://github.com/johndoe"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github className="mr-2 h-5 w-5" /> GitHub
            </Link>
          </Button>
          <Button
            variant="outline"
            asChild
            size="lg"
            className="rounded-full px-8 hover:scale-105 transition-transform"
          >
            <Link
              href="https://linkedin.com/in/johndoe"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Linkedin className="mr-2 h-5 w-5" /> LinkedIn
            </Link>
          </Button>
          <Button
            variant="outline"
            asChild
            size="lg"
            className="rounded-full px-8 hover:scale-105 transition-transform"
          >
            <Link
              href="https://twitter.com/johndoe"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Twitter className="mr-2 h-5 w-5" /> Twitter
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
