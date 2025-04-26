export function fixImageUrl(url: string): string {
  if (!url) return "/images/placeholder.png"; // jika kosong, fallback ke default

  try {
    const parsed = new URL(url);
    if (parsed.hostname === "localhost") {
      parsed.hostname = "127.0.0.1";
    }
    return parsed.toString();
  } catch (e) {
    console.log(e);
    return url; // kalau bukan URL valid, return original
  }
}
