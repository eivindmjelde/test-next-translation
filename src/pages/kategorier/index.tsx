import Link from "next/link";

export default function Kategorier() {
  return (
    <>
      <p>Her er en underside for kategorier</p>
      <p>Sjekk ut en av de her</p>
      <ul>
        <li>
          <Link href={"kategorier/hest"}>Hest</Link>
        </li>
        <li>
          <Link href={"kategorier/gris"}>Gris</Link>
        </li>
        <li>
          <Link href={"kategorier/katt"}>Katt</Link>
        </li>
      </ul>
    </>
  );
}
