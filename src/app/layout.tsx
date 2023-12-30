import './globales.css';
import { openSans } from '@/fuentes';
import type { Metadata } from 'next';
import Navegacion from '@/componentes/Navegacion';

export const metadata: Metadata = {
    title: 'Jugueteria',
    description: 'Aplicación web para tienda de juguetes',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang='es'>
            <body className={openSans.className}>
                <Navegacion />
                <main>{children}</main>
            </body>
        </html>
    );
}
