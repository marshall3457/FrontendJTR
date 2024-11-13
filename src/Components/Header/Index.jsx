import { useState } from "react";
import styled from "styled-components";
import { Link, useNavigate } from 'react-router-dom';
import Logo from "../Logo";
import { Button, TextField } from "@mui/material"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons';


const Buscar = styled.div`
    display: flex;
    align-items: center;
    gap: 0.5rem;
    margin-right: 1rem;

`


const Header = () => {
    const [busqueda, setBusqueda] = useState('');
    const navigate = useNavigate();

    const handleKeyDown = (e) => {
        if(e.key === 'Enter'){
            navigate(`/resultado?data=${busqueda}`)
        }
    };

    return(
        <>
            <Link><Logo src="Logo.png" alt="Logo del restaurante JTR"></Logo></Link>
            <Buscar>
                <TextField value={busqueda} onKeyDown={handleKeyDown} onChange={(e) => {setBusqueda(e.target.value)}}></TextField>
                <Link to={`/resultado?data=${busqueda}`}><FontAwesomeIcon icon={faSearch} /></Link>
            </Buscar>
            <Link to="/formVideo"><Button variant="contained">Nuevo Video</Button></Link>
        </>
    )

}

export default Header