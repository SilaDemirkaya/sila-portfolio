// src/components/layout/Footer.tsx
export default function Footer() {
  return (
    <footer className="py-10 text-center text-sm text-[var(--foreground)]/70 border-t">
      © {new Date().getFullYear()} Sila Demirkaya. All rights reserved.
    </footer>
  );
}
