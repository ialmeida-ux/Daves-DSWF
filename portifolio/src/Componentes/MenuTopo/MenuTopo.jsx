import { NavLink, useNavigate } from "react-router"
import "./MenuTopo.css"
import { useEffect, useState } from "react"

const MenuTopo = () =>{

    const navigate = useNavigate()
    // const [logado, setLogado] = useState(false)

    // useEffect(()=>{
    //     setLogado( localStorage.getItem("logado") === "true" )
    // }, [])

    const logado = localStorage.getItem("logado") === "true"

    

    const callSobre = () =>{
        navigate("/sobre")
    }
    const callSair = () =>{
        localStorage.removeItem("logado")
        navigate("/login")
    }

    return(
        <div className="menuTopo">

            <ul>
                <li><NavLink to="/">Portifolio</NavLink></li>
                 { logado === false && 
                    <li><NavLink to="/login">Login</NavLink></li> 
                 }
                <li><a onClick={callSobre}>Sobre</a></li>
                { logado === true &&                     
                    <li><a>DashBoard</a></li>
                 }
                { logado === true &&          
                    <li><a onClick={callSair}>Sair</a></li>
                 }
            </ul>
        </div>
    )
}

export default MenuTopo