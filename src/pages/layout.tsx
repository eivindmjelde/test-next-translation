import { useRouter } from "next/router";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Layout({ children }: { children: React.ReactNode }) {
  const { defaultLocale } = useRouter();
  return (
    <main
      className={` max-w-screen-xl mx-auto flex min-h-screen flex-col items-center gap-20 p-24 ${inter.className}`}
    >
      Current locale: {defaultLocale}
      <p>ENDRING</p>
      {children}
    </main>
  );
}
