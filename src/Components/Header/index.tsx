import React from 'react';
import './index.scss';

export const Header: React.FC = (props) => {
  return (
    <header className='Header'>
      <div className='Header__Item'>
        <h1 className='Header__Title'>#ITYouTubersRu</h1>
        <div className='Header__Subtitle'>Сообщество русскоязычных IT-ютуберов</div>
      </div>
      <div className='Header__Item'>
        <div className='Header__Description'>По вопросам вступления обращайтесь в телеграм:</div>
        <div className='Header__Admins'>
          <a className='Header__Link' href='http://'>
            @iamitbeard
          </a>
          <a className='Header__Link' href='http://'>
            @soexpired
          </a>
          <a className='Header__Link' href='http://'>
            @evgeniy_sergeev
          </a>
        </div>
      </div>
    </header>
  );
};