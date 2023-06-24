import './PageLink.css'
import React from 'react';

function Pagelink({PageName,Link}){
    return(
        <p class="PageLinkStyle"><a href={Link}>{PageName}</a></p>
    );

}

export default Pagelink;