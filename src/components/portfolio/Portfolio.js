import React, { Component } from 'react';
export default class Header extends Component {
  render() {
    return (
      <section id='portfolio' className='s-portfolio target-section'>
        <div className='row s-portfolio__header'>
          <div className='column large-12'>
            <h3>A Few Of My Latest Creations</h3>
          </div>
        </div>
        <div className='row collapse block-large-1-4 block-medium-1-3 block-tab-1-2 block-500-stack folio-list'>
          <div className='column folio-item'>
            <a
              href='https://youtu.be/d3lFvC4w1AA'
              className='folio-item__thumb'
            >
              <img
                src='images/portfolio/loverPath.png'
                srcSet='images/portfolio/loverPath.png 1x, 
                                   images/portfolio/loverPath.png 2x'
                alt=''
              />
            </a>
          </div>
          {/* end folio-item */}
          <div className='column folio-item'>
            <a
              href='https://youtu.be/8MrONqmdklM'
              className='folio-item__thumb'
            >
              <img
                src='images/portfolio/avoidObs.png'
                srcSet='images/portfolio/avoidObs.png 1x, 
                                   images/portfolio/avoidObs.png'
                alt=''
              />
            </a>
          </div>
          <div className='column folio-item'>
            <a
              href='https://youtu.be/8O8xZpXm0xw'
              className='folio-item__thumb'
            >
              <img
                src='images/portfolio/RopeClash.png'
                srcSet='images/portfolio/RopeClash.png 1x, 
                                   images/portfolio/RopeClash.png'
                alt=''
              />
            </a>
          </div>
          <div className='column folio-item'>
            <a
              href='https://www.youtube.com/watch?v=ZJO3u2me-2o'
              className='folio-item__thumb'
            >
              <img
                src='images/portfolio/allokhidma.png'
                srcSet='images/portfolio/allokhidma.png 1x, 
                                   images/portfolio/allokhidma.png 2x'
                alt=''
              />
            </a>
          </div>{' '}
          {/* end folio-item */}
          {/* end folio-item */}
        </div>
      </section>
    );
  }
}
