import Image from "next/image";
import styles from "../../styles/Consulting.module.css";

export default function Consulting() {
  return (
    <div className={styles.container}>
      <div>
        <h2>Porque ser um(a) consultor(a)?</h2>
        <p>
          Ser um consultor(a) JAFRA é fazer parte de uma marca que lhe dá
          oportunidade de empreender com um negócio simples e transparente.
        </p>
      </div>

      <div>
        <div>
          <h3>
            LIBERDADE para SER VOCÊ e para ESCOLHER os PRODUTOS que desejar no
            seu PRIMEIRO PEDIDO
          </h3>
          <span>Aqui você não paga para entrar e revende com facilidade.</span>
        </div>
      </div>

      <Image src="/assets/images/banner.png" width={500} height="auto"/>

    </div>
  );
}
