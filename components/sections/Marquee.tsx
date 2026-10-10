// Barisan nama skill yang berjalan perlahan.
// Daftar diduplikasi supaya putarannya tersambung mulus.
export default function Marquee({ items }: { items: string[] }) {
  const doubled = [...items, ...items];

  return (
    <div className="overflow-hidden border-y border-line/60 py-5" aria-hidden>
      <div className="flex w-max animate-marquee whitespace-nowrap hover:[animation-play-state:paused]">
        {doubled.map((item, index) => (
          <span key={index} className="px-6 font-mono text-sm text-subtle">
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}
