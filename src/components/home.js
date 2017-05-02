import React from 'react';
import '../assets/home.css';

class Home extends React.Component {
  render() {
    return(
      <div className="home-component">
        <div className="about">
          <div>About</div>
          <p> 
            This website was built for those who tackle Spinoza's Ethics. <br/>
            It will continue as a work in progress for the following weeks. <br/>
            Etc ... <br/>
            etc ... <br/>
            etc ... <br/>
          </p>
        </div>
        <div className="acknow-contact">
          <div className="inspiration">
            <div>inspiration</div>
            <div>website</div>
            <div>website</div>
            <div>website</div>
          </div>
          <div className="contact-links">
            <a href="" className="linkedin"/>
            <a href="https://github.com/jaimefps" className="github"/>
            <a href="" className="facebook"/>
          </div>
        </div>
      </div>
    )
  }  
};

export default Home;
