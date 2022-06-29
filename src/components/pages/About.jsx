import '../styles/About.css'

function About() {
  //links are unclickable on purpose
  return (
    <div className="container about-area p-5">
        <h3 className="heading-text">About us</h3>
        <section>
            <p className="content">Hello!, I am CipherKill (Alan), the creator. The man that will blur the lines between fantasy and reality. There are all sorts of books you can find here. It is made using react and using react made the experience more calming and less stressful.</p>
            <p className="info-content m-0">Github: <span className="link">https://github.com/CipherKill</span></p>
            <p className="info-content m-0">Twitter: <span className="link">https://in.linkedin.com/in/iamalanraju</span></p>
            <div className="version mt-4">
                <p className="version-content p-0 m-0">Version: <span className="version-highlight">0.0.1</span></p>    
            </div>
        </section>

    </div>
  )
}

export default About