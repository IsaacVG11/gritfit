export default function About (){
    return (
        <div className="about">
            <div className="about-hero-wrapper">
                <img src={"algo.png"} alt="algo"/>
                <div className="about-hero-info">
                    <h1> ABOUT US </h1>
                    <p> Texto pequeño que hable sobre nosotros... </p>
                </div>
            </div>
            <div className="about-wrapper">
                <div className="block-1">
                    <img className="img-about" src="src/assets/logo.png" alt="algo"/>
                    <p> Texto que acompañe la imagen </p>
                </div>
                <div className="block-2">
                    <img className="img-about" src="src/assets/logo.png" alt="algo"/>
                    <p> Texto que acompañe la imagen </p>
                </div>
                <div className="block-3">
                    <img className="img-about" src="src/assets/logo.png" alt="algo"/>
                    <p> Texto que acompañe la imagen </p>
                </div>
            </div>
        </div>
    );
}