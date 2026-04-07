import { useState } from "react"


const Menu = ()=>{

    const [menu,setMenu] = useState(0)

    return (
        <div>
            <h1>Menu</h1>
            <ul>
                <li><a  onClick={()=>setMenu(0)}>Home</a></li>
                <li><a  onClick={()=>setMenu(1)}>Sobre</a></li>
                <li><a  onClick={()=>setMenu(2)}>Contato</a></li>
            </ul>
            { menu ==0 &&
            <div>
                Home
            </div>
            }

            { menu ==1 &&
            <div>
                Sobre
            </div>
            }

            { menu ==2 &&
            <div>
                Contato
            </div>
            }
        </div>
    )
}

export default Menu