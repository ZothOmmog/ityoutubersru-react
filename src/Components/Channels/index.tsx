import React from 'react';
import './index.scss';
import { IChannel } from '../../models';

interface IProps {
  channels: IChannel[],
  activeTags: string[]
}

export const Channels: React.FC<IProps> = ({ channels, activeTags }) => {
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
  
  return (
    <div className='Channels'>
      {channelsForUi}
    </div>
  );
}