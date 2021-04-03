import Head from "next/head";
import Consulting from "./Consulting";
import Contact from "./Contact";
import HeadContent from "./HeadContent";
import PlusInformation from "./PlusInformation";
import Products from "./Products";

export default function Home() {
  return (
    <div>
      <Head>
        <meta name="keywords" content="jafra, marleide, marleide jafra, revenda, revender cosmeticos, ganhar dinheiro, vender, vender na internet, jafra brasil," />
        <meta name="description" content="Marleide Jafra. Seja uma revendedora de sucesso, fazendo parte da maior e melhor marca de cosmeticos do mundo!" />
        <meta name="robots" content="index, follow, noimageindex" />
        <title>Seja uma consultor(a) Jafra na sua região - Marleide Jafra</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <HeadContent />
        <Consulting />
        <Products />
        <PlusInformation />
        <Contact />
      </main>
    </div>
  );
}
