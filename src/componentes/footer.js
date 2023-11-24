import React from "react";

function Footer() {
    let año = new Date().getFullYear();
    return (
        <footer>
            <p>
                Copyright {año}
            </p>
        </footer>
    )
}

export default Footer;