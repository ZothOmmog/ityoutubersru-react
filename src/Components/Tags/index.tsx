import React, { SetStateAction } from 'react';
import classNames from 'classnames';
import './index.scss';
import { ITag } from '../../models';
import { tagGroup } from '../../enums';

interface IProps {
  tags: ITag[],
  activeTags: string[],
  setActiveTags: React.Dispatch<SetStateAction<string[]>>
}

export const Tags: React.FC<IProps> = ({ tags, activeTags, setActiveTags }) => {
  const tagsFrontend = tags.filter(tag => tag.group === tagGroup.FRONTEND);
  const tagsBackend = tags.filter(tag => tag.group === tagGroup.BACKEND);
  
  const changeActive = (tagValue: string, isActive: boolean) => () => {
    if (isActive) {
      setActiveTags([...activeTags.filter((activeTagValue) => activeTagValue !== tagValue)]);
    } else setActiveTags([...activeTags, tagValue]);
  }

  const getTagsForUi = (tags: ITag[]) =>
    tags.map((tag) => {
      const isActive = activeTags.includes(tag.value);

      return (
        <button
          key={tag.value}
          className={classNames('Tag', { Tag_Active: isActive }, 'TagGroup__ContentItem')}
          onClick={changeActive(tag.value, isActive)}
        >
          {tag.displayValue}
        </button>
      );
  });

  const tagsFrontendForUi = getTagsForUi(tagsFrontend);
  const tagsBackendForUi = getTagsForUi(tagsBackend);

  return (
    <div className='TagGroups'>
      <div className='TagGroup TagGroups__Item'>
        <div className='TagGroup__Title'>Frontend</div>
        <div className='TagGroup__Content'>{tagsFrontendForUi}</div>
      </div>
      <div className='TagGroup TagGroups__Item'>
        <div className='TagGroup__Title'>Backend</div>
        <div className='TagGroup__Content'>{tagsBackendForUi}</div>
      </div>
    </div>
  );
};