import React from 'react';

import styles from './Footer.module.scss';

const Footer = (props) => {
    return (
        <footer className={styles.Footer}>
            <div>
                <small>desenvolvido por</small> <span>Ricardo Almendro Ruiz</span>
                <i className="fa fa-whatsapp"></i> <small>(19) 99941-2206</small>
            </div>
            <div>
                <a href="https://www.linkedin.com/in/ricardo-almendro-ruiz-a1599122/" target="_blank" rel="noopener noreferrer"><i className="fa fa-linkedin"></i></a>
                <a href="https://github.com/ricardoaruiz" target="_blank" rel="noopener noreferrer"><i className="fa fa-github"></i></a>
                <a href="https://www.facebook.com/ricardo.almendro.ruiz" rel="noopener noreferrer"><i className="fa fa-facebook"></i></a>
            </div>
        </footer>
    );
}
 
export default Footer;