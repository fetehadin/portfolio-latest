"use client";

import { useSyncExternalStore } from "react";
import { profile } from "@/content/site";

const format = new Intl.DateTimeFormat("en-GB", {
  hour: "2-digit",
  minute: "2-digit",
  timeZone: profile.timezone,
});

function subscribe(onChange: () => void) {
  const id = window.setInterval(onChange, 15_000);
  return () => window.clearInterval(id);
}

/** My local time in Addis Ababa; renders "--:--" until hydrated. */
export default function LocalTime() {
  const time = useSyncExternalStore(
    subscribe,
    () => format.format(new Date()),
    () => "--:--",
  );

  return <time suppressHydrationWarning>{time}</time>;
}
