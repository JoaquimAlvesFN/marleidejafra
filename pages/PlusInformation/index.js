import styles from "../../styles/PlusInformation.module.css";

export default function PlusInformation() {
  return (
    <div className={styles.plusInformationContainer}>
      <div>
        <h2>Descubra porque a JAFRA é apoixonante</h2>
      </div>

      <div className={styles.cardContainer}>
        <div className={styles.card}>
          <span>
            Empresa com + de <strong>60 anos</strong>, em + de{" "}
            <strong>10 países</strong> e com + de{" "}
            <strong>600 mil empreendedores</strong>
          </span>
        </div>
        <div className={styles.card}>
          <span>
            A <strong>JAFRA</strong> integra o grupo alemão{" "}
            <strong>VORWERK</strong>, quinto maior em vendas diretas no mundo.
          </span>
        </div>
        <div className={styles.card}>
          <span>
            Produtos de <strong>altíssima qualidade</strong>. Beneficios
            comprovados cientificamente.
          </span>
        </div>

        <div className={styles.card}>
          <span>
            <strong>Ferramentas modernas</strong> para acelerar seu crescimento.
          </span>
        </div>
        <div className={styles.card}>
          <span>
            Grande <strong>potencial de retorno</strong> com baixo investimento
            inicial.
          </span>
        </div>
        <div className={styles.card}>
          <span>
            Ganhos extras com <strong>bônus</strong>, <strong>premios</strong> e{" "}
            <strong>construção de rede</strong>.
          </span>
        </div>
      </div>
    </div>
  );
}
