'use client';

import { useState } from 'react';
import { BsFillHandbagFill } from 'react-icons/bs';
import estilos from './navigation.module.css';

export default function BolsoDeCompras() {
    return (
        <>
            <button className={estilos.bolso}>
                <BsFillHandbagFill />
                <span>0</span>
            </button>
            <div className={estilos.menu_del_bolso}></div>
        </>
    );
}
