import InstagramIcon from '@mui/icons-material/Instagram';
import EmailIcon from '@mui/icons-material/Email';
import FacebookIcon from '@mui/icons-material/Facebook';

export default function Contact() {
    return (
        <div className="contact-container">
            < div className="contact-wrapper">
                <h1> Contact Us</h1>
                <p>Feel free to contact us anytime. <br /> We will get back to you as soon as we can!</p>
                < div className="contact-socials">
                    <InstagramIcon> <a href="">Instagram</a> </InstagramIcon> <p>@gritfitcr</p>
                    <EmailIcon> <a href="">Email</a> </EmailIcon> <p>Email</p>
                    <FacebookIcon> <a href="">facebook</a> </FacebookIcon> <p>GritFit CR</p>
                </div>
            </div>
        </div>
    );
};