import estilos from './navigation.module.css';
import { oswald } from '@/fuentes';
import { IoPersonCircleOutline } from 'react-icons/io5';
import { BsFillHandbagFill } from 'react-icons/bs';
import Link from 'next/link';
import Menu from './Menu';
import BolsoDeCompras from './BolsoDeCompras';

export default function Navegacion() {
    return (
        <nav className={estilos.navegacion}>
            <Link className={estilos.logo} href='/'>
                b<span className='texto-azul'>a</span>úl de juguet<span className='texto-rojo'>e</span>s
            </Link>

            <Menu />

            <div className='flex-container'>
                <Link href='/login' className={estilos.login + ' ' + oswald.className}>
                    <IoPersonCircleOutline />
                    Iniciar sesión
                </Link>
                <BolsoDeCompras />
            </div>
        </nav>
    );
}
