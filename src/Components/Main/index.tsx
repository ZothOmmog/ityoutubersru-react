import React, { useState } from 'react';
import './index.scss';
import { ITag, IChannel } from '../../models';
import { tagGroup } from '../../enums';
import { Tags } from '../Tags';
import { Channels } from '../Channels';

const TAGS: ITag[] = [
  {
    group: tagGroup.FRONTEND,
    displayValue: 'CSS',
    value: 'css',
  },
  {
    group: tagGroup.FRONTEND,
    displayValue: 'HTML',
    value: 'html',
  },
  {
    group: tagGroup.FRONTEND,
    displayValue: 'JavaScript',
    value: 'javascript',
  },
  {
    group: tagGroup.FRONTEND,
    displayValue: 'React',
    value: 'react',
  },
  {
    group: tagGroup.BACKEND,
    displayValue: 'TypeScript',
    value: 'typescript',
  },
  {
    group: tagGroup.BACKEND,
    displayValue: 'C#',
    value: 'c#',
  },
  {
    group: tagGroup.BACKEND,
    displayValue: 'Go',
    value: 'go',
  },
];

const CHANNELS: IChannel[] = [
  {
    name: 'Просто: разработка',
    link: 'https://google.com',
    tags: [
      {
        group: tagGroup.FRONTEND,
        displayValue: 'CSS',
        value: 'css',
      },
      {
        group: tagGroup.FRONTEND,
        displayValue: 'HTML',
        value: 'html',
      },
      {
        group: tagGroup.FRONTEND,
        displayValue: 'JavaScript',
        value: 'javascript',
      },
    ],
  },
  {
    name: 'АйТиБорода',
    link: 'https://google.com',
    tags: [
      {
        group: tagGroup.BACKEND,
        displayValue: 'C#',
        value: 'c#',
      },
    ],
  },
  {
    name: 'Владилен Минин',
    link: 'https://google.com',
    tags: [
      {
        group: tagGroup.FRONTEND,
        displayValue: 'JavaScript',
        value: 'javascript',
      },
    ],
  },
  {
    name: 'IT-KAMASUTRA',
    link: 'https://google.com',
    tags: [
      {
        group: tagGroup.FRONTEND,
        displayValue: 'React',
        value: 'react',
      },
      {
        group: tagGroup.FRONTEND,
        displayValue: 'JavaScript',
        value: 'javascript',
      },
    ],
  },
  {
    name: 'Vadim Makeev',
    link: 'https://google.com',
    tags: [
      {
        group: tagGroup.FRONTEND,
        displayValue: 'CSS',
        value: 'css',
      },
    ],
  },
  {
    name: 'ExtremeCode',
    link: 'https://google.com',
    tags: [
      {
        group: tagGroup.BACKEND,
        displayValue: 'C#',
        value: 'c#',
      },
    ],
  },
];

export const Main: React.FC = () => {
    const [activeTags, setActiveTags] = useState<string[]>([]);

    return(
      <div className='Main'>
        <div className='Main__Item'>
          <Tags tags={TAGS} activeTags={activeTags} setActiveTags={setActiveTags} />
        </div>

        <div className='Main__Item'>
          <Channels channels={CHANNELS} activeTags={activeTags} />
        </div>
      </div>
    );
}