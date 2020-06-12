import { tagGroup } from "./enums";

export interface IAdmin {
    telegramId: string
}

export interface ITag {
    group: tagGroup,
    displayValue: string,
    value: string
}

export interface IChannel {
    link: string,
    name: string,
    tags: ITag[]
}