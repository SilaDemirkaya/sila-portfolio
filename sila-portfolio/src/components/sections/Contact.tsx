// src/components/sections/Contact.tsx
import { Mail, Phone, Linkedin } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="py-10">
      <h2 className="text-3xl font-bold mb-6">Contact</h2>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
        <a
          href="mailto:demirkayasila@gmail.com"
          className="rounded-xl border p-4 inline-flex items-center gap-3"
        >
          <Mail className="h-4 w-4" /> demirkayasila@gmail.com
        </a>

        <a
          href="tel:403-399-2162"
          className="rounded-xl border p-4 inline-flex items-center gap-3"
        >
          <Phone className="h-4 w-4" /> 403-399-2162
        </a>

        <a
          href="https://linkedin.com/in/sila"
          target="_blank"
          className="rounded-xl border p-4 inline-flex items-center gap-3"
        >
          <Linkedin className="h-4 w-4" /> LinkedIn
        </a>
      </div>
    </section>
  );
}
