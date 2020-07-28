import React from 'react';

function ButtonLink(prop){
    return(
        <a href={prop.href} className={prop.className}>
            {prop.children}
        </a>
    );
}

export default ButtonLink;