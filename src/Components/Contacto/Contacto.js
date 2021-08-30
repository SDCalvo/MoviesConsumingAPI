import './Contacto.css';
//make a component for a contact page using react that has a link to instagram with its icon, link to facebook with facebook icon
export default function Contacto (props){
    
    return (
        <div className="container glass border text-white rounded mt-5 margin-bot">
            <div className="row">
                <div className="col-md-12 text-center my-5">
                    <h1>Contact</h1>
                </div>
            </div>
            <div className="row">
                <div className="col-md-12 d-flex justify-content-center align-items-center">
                    <a className="mx-2" target="_blank" href="https://www.facebook.com" rel="noreferrer"><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/fb/Facebook_icon_2013.svg/2048px-Facebook_icon_2013.svg.png" alt="Santiago Calvo" className="facebook-icon" /></a>
                    <a className="mx-2" target="_blank" href="https://www.linkedin.com/in/santiago-d-calvo/" rel="noreferrer"><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c9/Linkedin.svg/1200px-Linkedin.svg.png" alt="Santiago Calvo" className="facebook-icon" /></a>
                    <a className="mx-2" target="_blank" href="https://github.com/SDCalvo" rel="noreferrer"><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Octicons-mark-github.svg/2048px-Octicons-mark-github.svg.png" alt="Santiago Calvo" className="facebook-icon" /></a>    
                </div>
                <div className="col-md-12 text-center my-3">
                    <h4>Santiago Calvo</h4>
                    <p>Phone: +5403815043542</p>
                    <p>Email: santiago.d.calvo@gmail.com</p>
                </div>
            </div>
            <div className="row">
                <div className="col-md-12 text-center my-5">
                    <div className="bg-dark rounded p-3 text-center">
                        <h1 className="glass p-3">About this project</h1>
                        <p className="mt-5">
                            This is a simple project for showcasing a movie webapp using React and Bootstrap, consuming OMDB API to get movie data.
                            <br/>
                            I've used the following technologies:
                            <br/>
                            <b>React</b>
                            <br/>
                            <b>Bootstrap</b>
                            <br/>
                            <b>Node.js</b>
                            <br/>
                            <b>HTML5</b>
                            <br/>
                            <b>CSS3</b>
                            <br/>
                            <b>ES6</b>
                            <br/>
                            <b>OMDB API</b>
                        </p>
                    </div>    
                </div>
            </div>
        </div>
    );
}
