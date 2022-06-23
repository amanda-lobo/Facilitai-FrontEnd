import { Container } from "@material-ui/core";
import React from "react";
import "./Home.css";

function Home() {

    return (
        <>

            <div className="bodyHome">
                <div className="navBar">
                    <div className="logoSite"><img src="https://i.imgur.com/YIrGnM3.png" alt="" /></div>
                    <div className="navBarContent">
                        <div className="navigationStyle"> <div className="iconHome"></div> Inicio</div>
                        <div className="navigationStyle"> <div className="iconPerfil"></div> Perfil</div>
                        <div className="navigationStyle"> <div className="iconContato"></div> Contato</div>
                        <div className="navigationStyle"> <div className="iconSair"></div> Sair</div>
                      </div>
                </div>

                <div className="bodyHomeContent">
                    <div className="infoUser">

                    </div>
                </div>


            </div>

        </>
    );
}
export default Home;