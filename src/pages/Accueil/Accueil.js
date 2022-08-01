import React from "react";
import "./Accueil.css";
import Banniere from "../../components/Banner/Banner";
import banniereImg from "../../assets/img/Banniere.png";
import ListeLogements from "../../assets/data/logements.json";
import { NavLink } from "react-router-dom";
import FlatComponents from "../../components/flatComponents/flatComponents";

function Accueil() {

    return (

    <div className="Accueil">

        <Banniere image={banniereImg} texte="Chez vous, partout et ailleurs"/>

            <div className="liste-logements">

            {ListeLogements.map((logement) => <NavLink key={logement.id} to={"/logement/"+logement.id+"/#"}><FlatComponents image={logement.cover} titre={logement.title} /></NavLink>)}

            </div>

    </div>
        
    )

}

export default Accueil;