import './header.scss';
import React, { Component } from 'react';
import { AutomataService } from '../../services/automata.service';
import { FaLinkedin } from 'react-icons/fa';
import { GoMarkGithub } from 'react-icons/go';
import { MdEmail } from 'react-icons/md';

export class HeaderComponent extends Component {
  automataService;
  componentDidMount() {
    this.automataService = new AutomataService(document.querySelector('#hero-background'));
    this.automataService.start();
  }

  render() {
    return (
      <div className="header">

        <div id="hero-background"></div>

        <div className="hero">

          <div className="hero-flex">
            <div className="left">

              <h1 className="hero-title">Jonathon Orsi</h1>

              <ul className="media-list">
                <li className="media-list-item">
                  <a href="mailto:jonathon.orsi@gmail.com"
                    className="red">
                    <MdEmail />
                  </a>
                </li>
                <li className="media-list-item">
                  <a href="https://github.com/jorsi"
                    target="_blank"
                    className="green">
                    <GoMarkGithub />
                  </a>
                </li>
                <li className="media-list-item">
                  <a href="https://www.linkedin.com/in/jonorsi/"
                    target="_blank"
                    className="blue">
                    <FaLinkedin />
                  </a>
                </li>
              </ul>

            </div>
            <div className="right">

              <nav className="navigation-main">
                <ul className="navigation-list">
                  <li className="navigation-list-item">
                    <a href="#projects">
                      Projects
                    </a>
                  </li>
                  <li className="navigation-list-item">
                    <a href="#skills">
                      Skills
                    </a>
                  </li>
                  <li className="navigation-list-item">
                    <a href="#work">
                      Work
                    </a>
                  </li>
                </ul>
              </nav>

            </div>
          </div>
          
          <p className="hero-paragraph">
            <em>Hello!</em> I'm Jonathon Orsi, a developer and designer based in Toronto, Canada.
          </p>
          <p className="hero-currently">
            I specialize in web development and user experience. You'll also find me playing music on <a href="https://www.youtube.com/watch?v=eyLexd5MCCw&feature=youtu.be&t=14">some</a> <a href="https://www.youtube.com/watch?v=zOHUfhNQsoc&feature=youtu.be&t=1231">sort of</a> <a href="http://jojogun.ca">instrument</a>. Currently looking for new work, so if you are looking for a developer or designer, <a href="mailto:jonathon.orsi@gmail.com">let me know.</a>
          </p>
        </div>

      </div>
    );
  }
}
