const UTM_KEYS = [
  "utm_source",
  "utm_medium",
  "utm_campaign",
  "utm_term",
  "utm_content",
] as const;

const STORAGE_KEY = "enclave_detached_utm";

export type StoredUtm = Partial<Record<(typeof UTM_KEYS)[number], string>>;

export function captureUtmFromLocation() {
  if (typeof window === "undefined") return;
  const params = new URLSearchParams(window.location.search);
  const next: StoredUtm = {};
  let found = false;
  for (const key of UTM_KEYS) {
    const value = params.get(key);
    if (value) {
      next[key] = value.slice(0, 200);
      found = true;
    }
  }
  if (!found) return;
  try {
    sessionStorage.setItem(STORAGE_KEY, JSON.stringify(next));
  } catch {
    // Storage can be blocked. The form still submits without attribution.
  }
}

export function getStoredUtm(): StoredUtm {
  if (typeof window === "undefined") return {};
  try {
    const raw = sessionStorage.getItem(STORAGE_KEY);
    if (!raw) return {};
    const parsed = JSON.parse(raw) as StoredUtm;
    const clean: StoredUtm = {};
    for (const key of UTM_KEYS) {
      const value = parsed[key];
      if (typeof value === "string" && value) clean[key] = value.slice(0, 200);
    }
    return clean;
  } catch {
    return {};
  }
}
