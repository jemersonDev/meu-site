const FALLBACK_SITE_URL = "https://jemerson.dev";

export const SITE_URL = (
  process.env.NEXT_PUBLIC_SITE_URL ?? FALLBACK_SITE_URL
).replace(/\/$/, "");
