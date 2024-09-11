import { Icon } from "@iconify/react/dist/iconify.js";
import './TechStack.scss'

import reactIcon from '@iconify-icons/logos/react';
import nodejsIcon from '@iconify-icons/logos/nodejs';
import typescriptIcon from '@iconify-icons/logos/typescript-icon';
import javascriptIcon from '@iconify-icons/logos/javascript';
import pythonIcon from '@iconify-icons/logos/python';
import dockerIcon from '@iconify-icons/logos/docker';
import gitIcon from '@iconify-icons/logos/git-icon';
import githubIcon from '@iconify-icons/logos/github-icon';
import npmIcon from '@iconify-icons/logos/npm-icon';
import ubuntuIcon from '@iconify-icons/logos/ubuntu';
import expressIcon from '@iconify-icons/logos/express';
import sequelizeIcon from '@iconify-icons/logos/sequelize';
import mysqlIcon from '@iconify-icons/logos/mysql';
import jwtIcon from '@iconify-icons/logos/jwt';
import jsonIcon from '@iconify-icons/logos/json';
import html5Icon from '@iconify-icons/logos/html-5';
import css3Icon from '@iconify-icons/logos/css-3';
import reduxIcon from '@iconify-icons/logos/redux';

const TechStack = () => {
    return (
      <div className="tech-stack">
        <div className="tech-item">
          <Icon icon={javascriptIcon} className="iconify" />
          <p>JavaScript</p>
      </div>
      <div className="tech-item">
        <Icon icon={typescriptIcon} className="iconify" />
        <p>TypeScript</p>
      </div>
      <div className="tech-item">
        <Icon icon={pythonIcon} className="iconify" />
        <p>Python</p>
      </div>
      <div className="tech-item">
        <Icon icon={dockerIcon} className="iconify" />
        <p>Docker</p>
      </div>
      <div className="tech-item">
        <Icon icon={gitIcon} className="iconify" />
        <p>Git</p>
      </div>
      <div className="tech-item">
        <Icon icon={githubIcon} className="iconify" />
        <p>GitHub</p>
      </div>
      <div className="tech-item">
        <Icon icon={npmIcon} className="iconify" />
        <p>NPM</p>
      </div>
      <div className="tech-item">
        <Icon icon={ubuntuIcon} className="iconify" />
        <p>Ubuntu</p>
      </div>
      <div className="tech-item">
        <Icon icon={nodejsIcon} className="iconify" />
        <p>Node.js</p>
      </div>
      <div className="tech-item">
        <Icon icon={expressIcon} className="iconify" />
        <p>Express.js</p>
      </div>
      <div className="tech-item">
        <Icon icon={sequelizeIcon} className="iconify" />
        <p>Sequelize</p>
      </div>
      <div className="tech-item">
        <Icon icon={jwtIcon} className="iconify" />
        <p>JWT</p>
      </div>
      <div className="tech-item">
        <Icon icon={mysqlIcon} className="iconify" />
        <p>MySQL</p>
      </div>
      <div className="tech-item">
        <Icon icon={jsonIcon} className="iconify" />
        <p>JSON</p>
      </div>
      <div className="tech-item">
        <Icon icon={html5Icon} className="iconify" />
        <p>HTML5</p>
      </div>
      <div className="tech-item">
        <Icon icon={css3Icon} className="iconify" />
        <p>CSS3</p>
      </div>
      <div className="tech-item">
        <Icon icon={reactIcon} className="iconify" />
        <p>React</p>
      </div>
      <div className="tech-item">
        <Icon icon={reduxIcon} className="iconify" />
        <p>Redux</p>
      </div>
    </div>

    )
}

export default TechStack