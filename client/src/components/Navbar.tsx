import { Link, useLocation } from "wouter";
import { cn } from "@/lib/utils";

export default function Navbar() {
  const [location] = useLocation();

  const navItems = [
    { href: "/", label: "Home" },
    { href: "/projects", label: "Projects" },
    { href: "/about", label: "About" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <nav className="fixed top-0 w-full bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 z-50 border-b">
      <div className="container flex h-16 items-center">
        <Link href="/">
          <a className="font-bold text-2xl text-primary">Fahad Amin</a>
        </Link>
        <div className="ml-auto flex gap-6">
          {navItems.map(({ href, label }) => (
            <Link key={href} href={href}>
              <a
                className={cn(
                  "text-sm font-medium transition-colors hover:text-primary",
                  location === href ? "text-primary" : "text-muted-foreground"
                )}
              >
                {label}
              </a>
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}
