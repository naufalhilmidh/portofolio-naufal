import Image from "next/image";
import fs from "fs";
import path from "path";

// Menampilkan foto profil.
// Jika file foto belum ada, tampil inisial nama supaya tidak error.
export default function ProfilePhoto({ src, name }: { src: string; name: string }) {
  const filePath = path.join(process.cwd(), "public", src);
  const fotoAda = fs.existsSync(filePath);

  if (!fotoAda) {
    const inisial = name
      .split(" ")
      .map((kata) => kata[0])
      .slice(0, 2)
      .join("");

    return (
      <div className="flex h-full w-full items-center justify-center bg-surface2 text-7xl font-semibold tracking-tighter text-subtle">
        {inisial}
      </div>
    );
  }

  return (
    <Image
      src={src}
      alt={`Foto ${name}`}
      fill
      priority
      sizes="(max-width: 1024px) 80vw, 400px"
      className="object-cover object-top"
    />
  );
}
