import React, { Component } from 'react';
export default class Header extends Component {
  render() {
    return (
      <section id='resume' className='s-resume target-section'>
        <div className='row s-resume__section'>
          <div className='column large-3 tab-12'>
            <h3 className='section-header-allcaps'>Career</h3>
          </div>
          <div className='column large-9 tab-12'>
            <div className='resume-block'>
              <div className='resume-block__header'>
                <h4 className='h3'>Indie</h4>
                <p className='resume-block__header-meta'>
                  <span>Mobile Games & Apps developer </span>
                  <span className='resume-block__header-date'>
                    2018 - Present
                  </span>
                </p>
              </div>
            </div>{' '}
            {/* end resume-block */}
            <div className='resume-block'>
              <div className='resume-block__header'>
                <h4 className='h3'>ministry of Endowments </h4>
                <p className='resume-block__header-meta'>
                  <span>Software Developer </span>
                  <span className='resume-block__header-date'>
                    February 2015 - Present
                  </span>
                </p>
              </div>
            </div>
            {/* end resume-block */}
          </div>
        </div>{' '}
        {/* s-resume__section */}
        <div className='row s-resume__section'>
          <div className='column large-3 tab-12'>
            <h3 className='section-header-allcaps'>Education</h3>
          </div>
          <div className='column large-9 tab-12'>
            <div className='resume-block'>
              <div className='resume-block__header'>
                <h4 className='h3'>Coursera</h4>
                <p className='resume-block__header-meta'>
                  <span>Neural Networks and Deep Learning</span>
                  <span className='resume-block__header-date'>August 2020</span>
                </p>
              </div>
            </div>
            <div className='resume-block'>
              <div className='resume-block__header'>
                <h4 className='h3'>Udacity</h4>
                <p className='resume-block__header-meta'>
                  <span>Fullstack developer nanodegree program</span>
                  <span className='resume-block__header-date'>May 2020</span>
                </p>
              </div>
            </div>
            <div className='resume-block'>
              <div className='resume-block__header'>
                <h4 className='h3'>Udemy</h4>
                <p className='resume-block__header-meta'>
                  <span>Unity :</span>
                  <p>- Learn How To Make Hyper Casual Games With Unity</p>
                  <p>
                    - Learn how lighting works in the Unity game engine and make
                    AAA quality scenes
                  </p>
                  <p>
                    - Game development made easy. Learn C# using Unity and
                    create your very own 3D Platformer!
                  </p>
                </p>
              </div>
            </div>
            <div className='resume-block'>
              <div className='resume-block__header'>
                <h4 className='h3'>IBM</h4>
                <p className='resume-block__header-meta'>
                  <span>Python 101 for Data Science</span>
                  <span className='resume-block__header-date'>
                    January 2020
                  </span>
                </p>
              </div>
            </div>
            <div className='resume-block'>
              <div className='resume-block__header'>
                <h4 className='h3'>University Moulay Ismail Meknes</h4>
                <p className='resume-block__header-meta'>
                  <span>Bachelor's degree - computer science</span>
                  <span className='resume-block__header-date'>August 2013</span>
                </p>
              </div>
            </div>
            {/* end resume-block */}
          </div>
        </div>{' '}
        {/* s-resume__section */}
        <div className='row s-resume__section'>
          <div className='column large-3 tab-12'>
            <h3 className='section-header-allcaps'>Skills</h3>
          </div>
          <div className='column large-9 tab-12'>
            <div className='resume-block'>
              {/* <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Inventore vero quidem nobis maxime dolorem aliquam quisquam eum
                ipsum amet. Vitae aut atque fuga dolorem. Vel voluptatibus
                fugiat nam. Impedit aperiam nesciunt facilis! Porro architecto
                dicta inventore tempora ratione quia odio.
              </p> */}
              <ul className='skill-bars-fat'>
                <li>
                  <div className='progress percent85' />
                  <strong>C#</strong>
                </li>
                <li>
                  <div className='progress percent80' />
                  <strong>Unity</strong>
                </li>
                <li>
                  <div className='progress percent75' />
                  <strong>CSS</strong>
                </li>
                <li>
                  <div className='progress percent85' />
                  <strong>React Native</strong>
                </li>
                <li>
                  <div className='progress percent75' />
                  <strong>CSS</strong>
                </li>
                <li>
                  <div className='progress percent90' />
                  <strong>Javascript</strong>
                </li>
                <li>
                  <div className='progress percent65' />
                  <strong>AI</strong>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
