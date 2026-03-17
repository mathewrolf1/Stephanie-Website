import Image from "next/image";

export function Footer() {
  return (
    <footer className="border-t border-black/5 bg-[--color-background]">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-3 px-6 py-8">
      <div className="flex w-full items-center justify-between">
        <p className="font-heading text-base italic text-neutral-500">
          Follow Me On Social Media
        </p>
        <p className="font-heading text-2xl italic text-neutral-600 absolute left-1/2 -translate-x-1/2">
          @stephanieguerraphoto
        </p>
        <div className="flex items-center gap-3">
          <a
            href="https://www.instagram.com/stephanieguerraphoto/?hl=en"
            target="_blank"
            rel="noopener noreferrer"
            className="opacity-70 transition hover:opacity-100"
          >
            <Image
              src="https://res.cloudinary.com/dwvx7bzki/image/upload/v1773717103/instagram_mdllyt.png"
              alt="Instagram"
              width={22}
              height={22}
              className="object-contain"
            />
          </a>
          <a
            href="https://www.facebook.com/profile.php?id=61573110899738&mibextid=wwXIfr"
            target="_blank"
            rel="noopener noreferrer"
            className="opacity-70 transition hover:opacity-100"
          >
            <Image
              src="https://res.cloudinary.com/dwvx7bzki/image/upload/v1773717103/facebook_dq0jxt.png"
              alt="Facebook"
              width={28}
              height={28}
              className="object-contain"
            />
          </a>
        </div>
      </div>
      <p className="text-[10px] tracking-[0.2em] text-neutral-400">
        © {new Date().getFullYear()} Stephanie Guerra Photography. All rights reserved.
      </p>
      </div>
    </footer>
  );
}
