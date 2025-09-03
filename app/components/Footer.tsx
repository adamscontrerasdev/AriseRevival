"use client";

import Link from "next/link";
import React from "react";

export const Footer = () => {
  return (
    <footer className="w-full border-t border-white/10 bg-background text-foreground py-8 px-4 md:px-10">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between gap-6 text-sm leading-relaxed">
        {/* Info fiscal */}
        <div>
          <h2 className="text-lg font-semibold mb-1">Arise International LLC
</h2>
          <p>3625 NW 82ND AVE STE 100-K</p>
          <p>DORAL, FL, 33166</p>
          <p>United States</p>
        </div>

        {/* Contacto */}
        <div className="flex flex-col justify-end">
          <p>
            Tel:{" "}
            <a href="tel:+13073937026" className="hover:underline">
              +1 (307) 393-7026
            </a>
          </p>
          <p>
            Email:{" "}
            <a href="mailto:sales@arise.com" className="hover:underline">
              sales@arise.com
            </a>
          </p>
        </div>
      </div>

      {/* Legal */}
      <div className="max-w-6xl mx-auto mt-6 flex flex-col md:flex-row justify-between items-center text-xs gap-2 md:gap-4 text-muted">
        <div className="flex gap-4">
          <Link href="/terms" className="hover:underline">
            Términos y Condiciones
          </Link>
          <Link href="/privacy" className="hover:underline">
            Política de Privacidad
          </Link>
        </div>
        <div className="text-center md:text-right">
          &copy; {new Date().getFullYear()} Arise International LLC. Todos los derechos reservados.
        </div>
      </div>
    </footer>
  );
};
