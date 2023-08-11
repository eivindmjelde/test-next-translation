import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <h1 className="text-xl">Her er masse text på norsk</h1>
      <p className="text-lg">
        – Det er kritisk i de yttersvingene i elva som renner, og vi frykter at
        den erosjonen som skjer kan medføre ras. Det vil være en fortløpende
        vurdering om nye evakueringsområder. Magnus Nilholm. Magnus Nilholm er
        beredskapsleder i Ringerike kommune. FOTO: CHRISTINE BREIVIK ØEN / NRK
        Det sier beredskapsleder i Ringerike kommune, Magnus Nilholm, til NRK.
        Nær 2000 innbyggere er evakuert fra hjemmene sine i Hønefoss. Kommunen
        gjør nå fortløpende vurderinger om nye områder skal evakueres. – Vi har
        et stort apparat som står klart hvis det blir boligområder som raser ut.
        Vi prøver hele tiden å tenke noen skritt lenger frem enn der vi er. Vi
        er klare for å trykke på en enda større rød knapp, sier Nilholm. Han
        forteller at de har større evakueringshoteller i bakhånd, hvis de
        trenger dette.
      </p>
      <Link href="/kategorier" className="underline">
        Sjekk underside
      </Link>
    </>
  );
}
