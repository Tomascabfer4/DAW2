"use client"

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

function MenuLink({href, children}){
    
    const currentPath = usePathname();
    //console.log(currentPath)
    const resaltado = href === currentPath ? 'bg-red-900' : '';
    return (
        <Link href={href} className={`p-2 bg-blue-900 text-white ${resaltado}`}>
            {children}
        </Link>
    )
}

export default MenuLink