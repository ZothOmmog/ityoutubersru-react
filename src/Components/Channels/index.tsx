import React, { useState, useEffect } from 'react';
import './index.scss';
import { IChannel } from '../../models';
import { BASE_URL } from '../../consts';

interface IProps {
  activeTags: string[]
}

export const Channels: React.FC<IProps> = ({ activeTags }) => {
  const [channels, setChannels] = useState<IChannel[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    (async function () {
      const response = await fetch(`${BASE_URL}/channels`);
      setChannels(await response.json());
      setIsLoading(false);
    })();
  }, []);

  let activeChannels: IChannel[];
  if (activeTags.length !== 0) {
    const isIncludeActiveTag = (channel: IChannel, activeTag: string): boolean => {
      return Boolean(channel.tags.findIndex((tag) => tag.value === activeTag) + 1);
    };

    const isIncludeAllActiveTags = (channel: IChannel): boolean => {
      return !(activeTags.findIndex((tag) => !isIncludeActiveTag(channel, tag)) + 1);
    };

    activeChannels = channels.filter((channel) => isIncludeAllActiveTags(channel));
  } else activeChannels = channels;

  const channelsForUi = activeChannels.map((channel) => (
    <div key={channel.name} className='Channels__Item'>
      <a className='Channels__Link' href={channel.link} target='_blank' rel='noopener noreferrer'>
        <i className='fab fa-youtube Channels__LinkIcon'></i>
        {channel.name}
      </a>
    </div>
  ));
  
  return isLoading ? <div>Загрузка...</div> : (
    <div className='Channels'>
      {channelsForUi.length ? channelsForUi : <div>Нет каналов по таким тегам</div>}
    </div>
  );
}