import { useState } from "react";
import { useRouter } from "next/router";
import { FaWhatsappSquare } from "react-icons/fa";
import styles from "../../styles/Contact.module.css";

export default function Contact() {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [number, setNumber] = useState("");
    const [email, setEmail] = useState("");

    const { push } = useRouter();

    function handleSubmit(e) {
        e.preventDefault();
    }

    function handleSendWhatsapp() {
        push(`https://api.whatsapp.com/send?phone=558586516133&text=Oi, gostaria de realizar meu cadastro na Jafra.`);
    }

    return (
        <div className={styles.container}>
            <div className={styles.form}>
                <form onSubmit={handleSubmit} id="cadastro">
                    <div>
                        <input 
                            placeholder="Nome" 
                            autoComplete="new-password" 
                            value={firstName} 
                            onChange={(e) => setFirstName(e.target.value)} 
                        />
                        <input 
                            placeholder="Sobrenome" 
                            autoComplete="new-password" 
                            value={lastName} 
                            onChange={(e) => setLastName(e.target.value)} 
                        />
                    </div>
                    
                    <input 
                        placeholder="DDD + Telefone/Whatsapp" 
                        autoComplete="new-password" 
                        value={number} 
                        onChange={(e) => {setNumber(e.target.value)}} 
                    />
                    <input 
                        placeholder="E-mail"  
                        autoComplete="new-password" 
                        value={email} 
                        onChange={(e) => setEmail(e.target.value)} 
                    />
                    <button>Enviar</button>

                    <span>Nos comprometemos a não compartilhar suas informações com terceiros.</span>
                </form>
            </div>

            <div className={styles.profile}>
                <span className={styles.photo} />
                <span>imagem</span>
                <span>imagem</span>
            </div>

            <div className={styles.whatsapp}>
                <FaWhatsappSquare color="green" size={50} onClick={handleSendWhatsapp}/>
            </div>
        </div>
    );
}