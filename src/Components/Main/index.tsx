import React from 'react';
import classNames from 'classnames';
import './index.scss';

export const Main = () => {
    return (
      <div className='Main'>
        <div className='Main__Item'>
          <div className='TagGroups'>
            <div className='TagGroup TagGroups__Item'>
              <div className='TagGroup__Title'>Frontend</div>
              <div className='TagGroup__Content'>
                <button className={classNames('Tag', { Tag_Active: true }, 'TagGroup__ContentItem')}>JavaScript</button>
                <button className='Tag TagGroup__ContentItem'>HTML</button>
                <button className='Tag TagGroup__ContentItem'>CSS</button>
              </div>
            </div>
            <div className='TagGroup TagGroups__Item'>
              <div className='TagGroup__Title'>Backend</div>
              <div className='TagGroup__Content'>
                <button className='Tag TagGroup__ContentItem'>TypeScript</button>
                <button className='Tag TagGroup__ContentItem'>C#</button>
                <button className='Tag TagGroup__ContentItem'>Go</button>
              </div>
            </div>
          </div>
        </div>

        <div className='Main__Item'>
          <div className='Channels'>
            <div className='Channels__Item'>
              <a className='Channels__Link' href='https://google.com' target='_blank'>
                <i className='fab fa-youtube Channels__LinkIcon'></i>
                YouTube Channel
              </a>
            </div>
            <div className='Channels__Item'>
              <a className='Channels__Link' href='https://google.com' target='_blank'>
                <i className='fab fa-youtube Channels__LinkIcon'></i>
                YouTube Channel
              </a>
            </div>
            <div className='Channels__Item'>
              <a className='Channels__Link' href='https://google.com' target='_blank'>
                <i className='fab fa-youtube Channels__LinkIcon'></i>
                YouTube Channel YouTube Channel YouTube Channel YouTube Channel
              </a>
            </div>
            <div className='Channels__Item'>
              <a className='Channels__Link' href='https://google.com' target='_blank'>
                <i className='fab fa-youtube Channels__LinkIcon'></i>
                YouTube Channel
              </a>
            </div>
            <div className='Channels__Item'>
              <a className='Channels__Link' href='https://google.com' target='_blank'>
                <i className='fab fa-youtube Channels__LinkIcon'></i>
                YouTube Channel
              </a>
            </div>
            <div className='Channels__Item'>
              <a className='Channels__Link' href='https://google.com' target='_blank'>
                <i className='fab fa-youtube Channels__LinkIcon'></i>
                YouTube Channel
              </a>
            </div>
            <div className='Channels__Item'>
              <a className='Channels__Link' href='https://google.com' target='_blank'>
                <i className='fab fa-youtube Channels__LinkIcon'></i>
                YouTube Channel
              </a>
            </div>
            <div className='Channels__Item'>
              <a className='Channels__Link' href='https://google.com' target='_blank'>
                <i className='fab fa-youtube Channels__LinkIcon'></i>
                YouTube Channel
              </a>
            </div>
            <div className='Channels__Item'>
              <a className='Channels__Link' href='https://google.com' target='_blank'>
                <i className='fab fa-youtube Channels__LinkIcon'></i>
                YouTube Channel
              </a>
            </div>
          </div>
        </div>
      </div>
    );
}