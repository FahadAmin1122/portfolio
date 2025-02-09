import { useEffect, useRef } from "react";
import ContactForm from "@/components/ContactForm";
import { Card } from "@/components/ui/card";
import { Mail, Linkedin, Github } from "lucide-react";
import { fadeInUp } from "@/lib/animations";

export default function Contact() {
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (contentRef.current) {
      fadeInUp(contentRef.current);
    }
  }, []);

  return (
    <div className="min-h-screen pt-20 pb-12">
      <div className="container">
        <div ref={contentRef} className="max-w-3xl mx-auto">
          <h1 className="text-4xl font-bold mb-8">Get in Touch</h1>
          
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <Card className="p-6">
              <div className="flex items-center gap-4 mb-4">
                <Mail className="w-6 h-6 text-primary" />
                <h3 className="font-semibold">Email</h3>
              </div>
              <a href="mailto:fahad.amin@example.com" className="text-muted-foreground hover:text-primary">
                fahad.amin@example.com
              </a>
            </Card>
            
            <Card className="p-6">
              <div className="flex items-center gap-4 mb-4">
                <Linkedin className="w-6 h-6 text-primary" />
                <h3 className="font-semibold">LinkedIn</h3>
              </div>
              <a
                href="https://linkedin.com/in/fahadamin"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary"
              >
                linkedin.com/in/fahadamin
              </a>
            </Card>
          </div>

          <Card className="p-8">
            <h2 className="text-2xl font-bold mb-6">Send a Message</h2>
            <ContactForm />
          </Card>
        </div>
      </div>
    </div>
  );
}
