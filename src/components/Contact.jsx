import { useState } from 'react'
import InstagramIcon from '@mui/icons-material/Instagram';
import EmailIcon from '@mui/icons-material/Email';
import FacebookIcon from '@mui/icons-material/Facebook';
import TextField from '@mui/material/TextField';

export default function Contact() {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    //Falta hacer la lógica de base de datos cuando enviamos los datos
    function onSubmit() {
        console.log("le di al boton de submit");
        console.log(name, email, message);
    }

    return (
        <div className="contact-container">
            <div className="contact-wrapper">
                <h1>CONTACT US</h1>
                <p>Feel free to contact us anytime. <br/> We will get back to you as soon as we can!</p>
                <form className="contact-form">
                    <div className="contact-form-container">
                        <TextField className="textField" id="outlined-basic" label="Name" variant="standard"
                                   onChange={(e) => setName(e.target.value)}/>
                        <TextField className="textField" id="outlined-basic" label="Email" variant="standard"
                                   onChange={(e) => setEmail(e.target.value)}/>
                        <TextField
                            className="textField"
                            id="outlined-multiline-static"
                            label="Message"
                            multiline
                            rows={3}
                            variant="standard"
                            onChange={(e) => setMessage(e.target.value)}
                        />
                        <button type="submit" onClick={onSubmit}>Send</button>
                    </div>
                </form>
            </div>
            <div className="contact-socials">
                <h3>INFO</h3>
                <div className="contact-socials-item">
                    <InstagramIcon/>
                    <p>@gritfitcr</p>
                </div>
                <div className="contact-socials-item">
                    <EmailIcon/>
                    <p>Fitgritcr@gmail.com</p>
                </div>
                <div className="contact-socials-item">
                    <FacebookIcon/>
                    <p>GritFit CR</p>
                </div>
            </div>
        </div>
    );
};