"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import { certificates, type Certificate } from "@/content/site";

/** A plain list; each certificate image only loads when its row is opened in a native dialog. */
export default function CertificateList() {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const [open, setOpen] = useState<Certificate | null>(null);

  function show(cert: Certificate) {
    setOpen(cert);
    dialogRef.current?.showModal();
  }

  return (
    <>
      <ul className="divide-y divide-rule border-y border-rule">
        {certificates.map((cert) => (
          <li key={cert.image}>
            <button
              type="button"
              onClick={() => show(cert)}
              aria-haspopup="dialog"
              className="group flex w-full items-baseline justify-between gap-x-6 py-2.5 text-left print:py-0.5"
            >
              <span className="min-w-0">
                <span className="underline decoration-rule underline-offset-[3px] group-hover:text-accent group-hover:decoration-accent print:no-underline">
                  {cert.name}
                </span>
                <span className="text-muted"> · {cert.issuer}</span>
              </span>
              <span className="label shrink-0">{cert.year}</span>
            </button>
          </li>
        ))}
      </ul>

      <dialog
        ref={dialogRef}
        className="dialog w-full"
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
                <span className="font-semibold">{open.name}</span>
                <span className="text-muted">
                  {" "}
                  · {open.issuer} · {open.year}
                </span>
              </p>
              <form method="dialog">
                <button className="label hover:text-accent">Close · Esc</button>
              </form>
            </div>
            <Image
              src={open.image}
              alt={`${open.name} certificate from ${open.issuer}`}
              width={open.width}
              height={open.height}
              sizes="(max-width: 900px) 92vw, 54rem"
              className="mx-auto h-auto max-h-[78dvh] w-auto max-w-full rounded"
            />
          </>
        )}
      </dialog>
    </>
  );
}
