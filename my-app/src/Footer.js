import './Footer.css';
import Pagelink from './component/PageLink';
import React from 'react';

function Footer(){
return(
    <div class="FooterContainer">
        <div>
                    <h4 class="FooterTitleStyle">Company </h4>
                    <Pagelink
                        PageName="About Us "
                        Link="google.com"/>
                    <Pagelink
                        PageName="Show My Muse "
                        Link="google.com"/>
                    <Pagelink
                        PageName="Site Internet "
                        Link="google.com"/>
               
    
             </div>
             <div>
             <h4 class="FooterTitleStyle">About us  </h4>
                     <Pagelink
                         PageName="Policy Privacy"
                         Link="google.com"/>
                     <Pagelink
                         PageName="About Us "
                         Link="google.com"/>
                     <Pagelink
                         PageName="About Us "
                         Link="google.com"/>
                
     
              </div>
      
     </div>
);
}

export default Footer;