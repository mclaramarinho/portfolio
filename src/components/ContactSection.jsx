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
            <div className="sect-cont container w-50 text-center">
                
                <div className="row">
                    <h2>CONTACT ME</h2>
                </div>

                <div className="mt-3 row">
                    <p className="contact-parag w-75 m-auto">If you have an offer or want more information. I always answer ASAP!</p>
                </div>
                    
                <div className="mt-5 row m-auto text-center email-copy">
                    <CopyToClipboard text="marinho.claramb@gmail.com" onCopy={()=> setCopied(true)}>
                        <div>
                            <span className="col m-auto me-3"style={{width: "fit-content"}}>marinho.claramb@gmail.com</span>
                            <i class="col align-self-center fa-regular fa-clipboard"/>
                        </div>
                    </CopyToClipboard>
                </div>
                <div className="row w-25 m-auto mt-4">
                    <a style={{textDecoration:"none", color:"white"}} target="_blank" href="https://www.linkedin.com/in/mclaramarinho/" className="col-6"><i class="icon-contact fa-brands fa-linkedin"></i></a>
                    <a style={{textDecoration:"none", color:"white"}} target="_blank" href="https://github.com/mclaramarinho" className="col-6"><i class="icon-contact fa-brands fa-github"></i></a>
                </div>
                
            </div>
        </section>
    )
}

export default ContactSection;