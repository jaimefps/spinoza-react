import React from 'react';
import '../assets/who.css';

export default class Who extends React.Component {
  render() {
    return (
      <div className="who">
        <div className="boxy-title">who</div>
        <div className="contact-links">
          <h1 className="author">Jaime Pericás</h1>
          <p>
            Software engineer with an academic background in Philosphy, and Art History, and Math.
            Since writing his first lines of code, Jaime has been enthralled by code's creative power.
            <br/><br/>
            You can contact him at: jaime.pericas.saez@gmail.com
            <br/><br/>
            Or send an invite on any of the following platforms.
          </p>
          <a className="link linkedin" target="_blank" href="https://www.linkedin.com/in/jaime-pericas-saez/" />
          <a className="link github" target="_blank" href="https://github.com/jaimefps" />
          <a className="link facebook" target="_blank" href="https://www.facebook.com/jaime.f.pericas" />
        </div>
      </div>
    )
  }
};