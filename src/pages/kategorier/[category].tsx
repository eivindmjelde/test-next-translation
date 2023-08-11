export default function Category({ category }: { category: string }) {
  return (
    <>
      <p>Valgt kategori er: {category}</p>
    </>
  );
}
export async function getStaticPaths() {
  return {
    paths: [
      { params: { category: "hest" } },
      { params: { category: "gris" } },
      { params: { category: "katt" } },
    ],
    fallback: false,
  };
}
export async function getStaticProps({
  params,
}: {
  params: { category: string };
}) {
  return {
    props: {
      category: params.category,
    },
  };
}
