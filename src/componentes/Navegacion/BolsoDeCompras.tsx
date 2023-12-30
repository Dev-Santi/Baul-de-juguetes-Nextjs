'use client';

import { useState } from 'react';
import { BsFillHandbagFill } from 'react-icons/bs';
import estilos from './navigation.module.css';

export default function BolsoDeCompras() {
    const [menuDeCompraVisible, cambiarMenuDeCompraVisible] = useState(false);

    function cambiarEstado() {
        cambiarMenuDeCompraVisible(!menuDeCompraVisible);
    }

    function agregarClaseSiMenuEsVisible() {
        if (menuDeCompraVisible) {
            return estilos.activo;
        }
    }

    return (
        <>
            <button onClick={cambiarEstado} className={estilos.bolso}>
                <BsFillHandbagFill />
                <span className={estilos.numero}>0</span>
            </button>
            <div className={estilos.menu_del_bolso + ' ' + agregarClaseSiMenuEsVisible()}></div>
        </>
    );
}
