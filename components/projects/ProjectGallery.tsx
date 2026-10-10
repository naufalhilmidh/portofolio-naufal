import Image from "next/image";
import Reveal from "@/components/ui/Reveal";

type GalleryProps = {
  images: string[];
  title: string;
};

// Galeri hasil project: gambar pertama lebar penuh, sisanya berjajar di bawahnya
export default function ProjectGallery({ images, title }: GalleryProps) {
  if (images.length === 0) {
    return (
      <div className="rounded-2xl border border-dashed border-line p-12 text-center text-sm text-subtle">
        Gambar hasil belum ditambahkan.
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
      {images.map((src, index) => (
        <Reveal key={src} delay={index * 0.08} className={index === 0 ? "md:col-span-2" : ""}>
          <div
            className={`group relative overflow-hidden rounded-2xl border border-line bg-surface ${
              index === 0 ? "aspect-[16/9]" : "aspect-[4/3]"
            }`}
          >
            <Image
              src={src}
              alt={`${title}, hasil ${index + 1}`}
              fill
              sizes="(max-width: 768px) 100vw, 800px"
              className="object-cover transition-transform duration-700 group-hover:scale-105"
            />
          </div>
        </Reveal>
      ))}
    </div>
  );
}
