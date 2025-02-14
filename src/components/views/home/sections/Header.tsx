"use client";

import { useState } from "react";
import Link from "next/link";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  Button,
  SheetHeader,
  SheetTitle,
  SheetDescription,
} from "@/components/ui";
import { Code2, Menu } from "lucide-react";
import { motion } from "framer-motion";
import { ModeToggle } from "@/components/custom";

const navItems = [
  { name: "About", href: "#about" },
  { name: "Experience", href: "#experience" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.header
      className="fixed left-0 right-0 top-3 z-50 mx-10 max-w-4xl rounded-full lg:mx-auto"
      initial={{
        boxShadow: "0 4px 6px rgba(0, 0, 0, 0)",
        border: "1px solid transparent",
        backdropFilter: "blur(0)",
        backgroundColor: "transparent",
      }}
      animate={{
        boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
        border: "1px solid hsl(var(--border))",
        backdropFilter: "blur(3px)",
        backgroundColor: "hsl(var(--background))",
      }}
      transition={{ duration: 0.5, ease: "linear" }}
    >
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="text-2xl font-bold">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="flex items-center space-x-2"
            >
              <Code2 className="h-8 w-8 text-primary" />
              <span className="gradient-text">AM</span>
            </motion.div>
          </Link>
          <nav className="hidden items-center space-x-1 md:flex">
            {navItems.map((item, index) => (
              <motion.div
                key={item.name}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Link
                  href={item.href}
                  className="rounded-lg px-4 py-2 text-sm font-medium transition-all hover:bg-accent hover:text-accent-foreground"
                >
                  {item.name}
                </Link>
              </motion.div>
            ))}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: navItems.length * 0.1 }}
            >
              <ModeToggle />
            </motion.div>
          </nav>

          <div className="flex gap-4 md:hidden">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: navItems.length * 0.1 }}
            >
              <ModeToggle />
            </motion.div>
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: navItems.length * 0.1 }}
              >
                <SheetTrigger asChild>
                  <Button variant="outline" size="icon" className="group">
                    <Menu className="!h-6 !w-6 group-hover:text-white" />
                    <span className="sr-only">Toggle menu</span>
                  </Button>
                </SheetTrigger>
              </motion.div>
              <SheetContent side="right" className="w-[300px] sm:w-[400px]">
                <SheetHeader className="hidden">
                  <SheetTitle>Mobile Navbar</SheetTitle>
                  <SheetDescription>
                    This is the mobile navigation bar
                  </SheetDescription>
                </SheetHeader>
                <nav className="mt-40 flex flex-col items-center gap-y-14">
                  {navItems.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      className="text-3xl font-medium transition-all hover:scale-110 hover:font-bold hover:text-primary"
                      onClick={() => setIsOpen(false)}
                    >
                      {item.name}
                    </Link>
                  ))}
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </motion.header>
  );
}
