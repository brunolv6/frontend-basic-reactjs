import React from 'react';

export default function Header({ title, children}){
    return(
        <header>
            <h1>{title} ReactJS</h1>
            <h2>
                {children}
            </h2>
        </header>
    )
}