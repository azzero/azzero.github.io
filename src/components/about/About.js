import React, { Component } from 'react';
export default class Header extends Component {
  render() {
    return (
      <section id='about' className='s-about target-section'>
        <div className='row'>
          <div className='column large-3 tab-12'>
            <img
              className='s-about__pic'
              src='https://avatars.githubusercontent.com/u/45624109?v=4'
              alt=''
            />
          </div>
          <div className='column large-9 tab-12 s-about__content'>
            <h3>About Me</h3>
            <p>
              my name is Azzeddine Elatmani ,I'm an indie games-Apps developer ,
              I worked for years as web developer with react.js , node.js .. ,
              after that I switched to mobile and specially to mobile apps with
              react native , but covid19 give me a chance to try something new
              with my free time, and since then I give all my time to unity and
              game dev and I enjoy this new track , Im interested in all
              technology fields AI ,data science,mobile apps-games development,
              web development ..
            </p>
            <hr />
            <div className='row s-about__content-bottom'>
              <div className='column w-1000-stack'>
                <h3>Contact Details</h3>
                <p>
                  Azzeddine Elatmani <br />
                  14 Rue abdellah ben said Qu sidi ouassel <br />
                  Safi,Morocco
                  <br />
                  <a href='tel:+1975432345'>+212 602 297 135</a> <br />
                  <a href='mailto:#0'>azzeddine.elatmani@gmail.com</a>
                </p>
              </div>
              <div className='column w-1000-stack'>
                <a href='#0' className='btn btn--download'>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    width={24}
                    height={24}
                    viewBox='0 0 24 24'
                    style={{
                      fill: 'rgba(0, 0, 0, 1)',
                      transform: '',
                      msFilter: ''
                    }}
                  >
                    <path d='M12 16L16 11 13 11 13 4 11 4 11 11 8 11z' />
                    <path d='M20,18H4v-7H2v7c0,1.103,0.897,2,2,2h16c1.103,0,2-0.897,2-2v-7h-2V18z' />
                  </svg>
                  Download CV
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
