import Image from 'next/image';
import styles from "../../styles/Products.module.css";

const images = [
  {id: 1, image: "/assets/images/cosmetics_001.png"},
  {id: 2, image: "/assets/images/cosmetics_002.png"},
  {id: 3, image: "/assets/images/cosmetics_003.png"},
  {id: 4, image: "/assets/images/cosmetics_004.png"},
];

export default function Products() {
  return (
    <div className={styles.productsContainer}>
      <div>
        <h3>
          $$$ Investimentos que cabem no seu bolso, pedido mínimo de R$ 300 até
          R$ 400 garantindo 200 pontos.
        </h3>

        <p>
          O consultor(a) compra com um incrivel desconto de 40%. Revende com o
          valor sugerido no catálogo tendo um lucro de no mínimo 67%.
        </p>

        <p>
          Oportunidades extras com promoções exclusivas.
        </p>

        <p>
          Marca LÍDER mundial em produtos de MAQUIAGEM E PERFUMARIA que você
          pode se orgulhar em fazer parte.
        </p>

        <div className={styles.cardContainer}>
          {
            images.map((image) => (
              <div key={image.id} className={styles.card}>
                <Image src={image.image} height={150} width={150}/>
              </div>
            ))
          }
        </div>
      </div>
    </div>
  );
}
