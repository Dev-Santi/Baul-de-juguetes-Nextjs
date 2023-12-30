'use client';

import { usePathname } from 'next/navigation';
import Link from 'next/link';
import estilos from './navigation.module.css';
import { oswald } from '@/fuentes';

export default function Menu() {
    const rutaActual = usePathname();

    function agregarClaseSegunRutaActual(path: string) {
        const esLaRutaCorrecta = path == rutaActual;

        if (esLaRutaCorrecta) {
            return estilos.activo;
        }
    }

    return (
        <ul className={estilos.menu + ' ' + oswald.className}>
            <li>
                <Link className={agregarClaseSegunRutaActual('/')} href='/'>
                    Inicio
                </Link>
            </li>
            <li>
                <Link className={agregarClaseSegunRutaActual('/tienda')} href='/tienda'>
                    Tienda
                </Link>
            </li>
            <li>
                <Link className={agregarClaseSegunRutaActual('/nosotros')} href='/nosotros'>
                    Nosotros
                </Link>
            </li>
            <li>
                <Link className={agregarClaseSegunRutaActual('/contacto')} href='/contacto'>
                    Contacto
                </Link>
            </li>
        </ul>
    );
}
