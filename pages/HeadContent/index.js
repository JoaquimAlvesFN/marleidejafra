import Image from "next/image";
import styles from "../../styles/HeadContent.module.css";

export default function HeadContent() {
  return (
    <div className={styles.head}>
      <div className={styles.title}>
        <Image src="/assets/images/logo_jafra.png" width={80} height={80} />
        <span>Marleide Jafra</span>
      </div>

      <section className={styles.paragraph}>
        <h1>Realize seus sonhos com a Jafra</h1>
        <p>Ganhe descontos de 40% para revender nossos produtos.</p>
      </section>

      <a href="#cadastro">Solicitar Cadastro</a>
    </div>
  );
}
