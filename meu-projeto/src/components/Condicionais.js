import { useState } from "react";

function Condicional() {
    const [email, setEmail] = useState('')
    const [userEmail, setUserEmail] = useState();


    function enviarEmail(e) {
        e.preventDefault();
        setUserEmail(email);
        console.log(userEmail);

    }

    function limparEmail(e) {
        e.preventDefault();
        setUserEmail('')
    }
    return (
        <div>
            <h2>Cadastre o seu e-mail:</h2>
            <form>
                <input type="email" placeholder="Digite o seu email" onChange={(e) => setEmail(e.target.value)} />
            </form>
            <button type="submit" onClick={enviarEmail}>Enviar Email</button>
            {userEmail && (
                <div>
                    <p>O email do user é: {userEmail}</p>
                    <button onClick={limparEmail}>Limpar email</button>
                </div>
            )}
        </div>
    )
}

export default Condicional;