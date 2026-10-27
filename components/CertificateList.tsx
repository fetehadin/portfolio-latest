"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import { certificates, type Certificate } from "@/content/cv";

/** A plain list; the certificate image only loads when its row is opened. */
export default function CertificateList() {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const [open, setOpen] = useState<Certificate | null>(null);

  function show(cert: Certificate) {
    setOpen(cert);
    dialogRef.current?.showModal();
  }

  return (
    <>
      <ul>
        {certificates.map((cert) => (
          <li key={cert.image}>
            <button
              type="button"
              onClick={() => show(cert)}
              className="group flex w-full flex-wrap items-baseline justify-between gap-x-6 py-0.5 text-left"
              aria-haspopup="dialog"
            >
              <span className="underline decoration-rule decoration-1 underline-offset-3 group-hover:text-accent group-hover:decoration-accent print:no-underline">
                {cert.name}
                <span className="text-muted"> · {cert.issuer}</span>
              </span>
              <span className="text-muted">{cert.year}</span>
            </button>
          </li>
        ))}
      </ul>

      <dialog
        ref={dialogRef}
        className="sheet-dialog w-full"
        aria-label={open ? `${open.name} certificate` : "Certificate"}
        onClose={() => setOpen(null)}
        onClick={(event) => {
          if (event.target === event.currentTarget) event.currentTarget.close();
        }}
      >
        {open && (
          <>
            <div className="mb-3 flex items-baseline justify-between gap-4">
              <p>
                <span className="font-sans font-semibold">{open.name}</span>
                <span className="text-muted">
                  {" "}
                  · {open.issuer} · {open.year}
                </span>
              </p>
              <form method="dialog">
                <button className="label hover:text-accent">close · esc</button>
              </form>
            </div>
            <Image
              src={open.image}
              alt={`${open.name} certificate from ${open.issuer}`}
              width={open.width}
              height={open.height}
              sizes="(max-width: 900px) 100vw, 54rem"
              className="mx-auto h-auto max-h-[78dvh] w-auto max-w-full rounded-[2px]"
            />
          </>
        )}
      </dialog>
    </>
  );
}
