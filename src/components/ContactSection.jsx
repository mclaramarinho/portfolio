import React, { useState } from "react";
import CopyToClipboard from "react-copy-to-clipboard";
import Snackbar from '@mui/material/Snackbar';

function ContactSection(){
    const [copied, setCopied] = useState(false);
    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
          return;
        }
        setCopied(false);
      };
    return(
        <section id="contact">
            <Snackbar
                open={copied}
                autoHideDuration={3000}
                onClose={handleClose}
                message="E-mail copied to clipboard!"
            />
            <div className="container text-center">
                
                <div className="row">
                    <h2>CONTACT ME</h2>
                </div>
                <div className="row">
                    <p>If you have an offer or want more information. I always answer ASAP!</p>
                </div>
                <div className="row w-25 m-auto">
                    <CopyToClipboard  text="marinho.claramb@gmail.com" onCopy={()=> setCopied(true)}>
                        <button className="btn"><i class="fa-solid fa-envelope" /><br/>Copy E-mail</button>
                    </CopyToClipboard>
                </div>
                <div className="row w-25 m-auto">
                    <div className="col-6"><i class="fa-brands fa-linkedin"></i></div>
                    <div className="col-6"><i class="fa-brands fa-github"></i></div>
                </div>
                
            </div>
        </section>
    )
}

export default ContactSection;