import Link from 'next/link';
import React, { ReactNode } from 'react'

interface Props {
    children: ReactNode;
    description: string;
}

export default function Course(props: Props) {
    return (
        <div className="bg-blue-200 hover:bg-blue-400 text-black block p-10 m-5 rounded-xl">
            <Link href="" className="text-4xl p-3 hover:underline">{props.children}</Link>
            <p className="text-sm p-3">{props.description}</p>
        </div>
    )
}