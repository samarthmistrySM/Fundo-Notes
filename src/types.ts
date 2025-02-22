export interface BaseNote {
    id: string;
    title: string;
}

export interface TextNote extends BaseNote {
    type: 'note';
    description: string;
}

export interface ListNote extends BaseNote {
    type: 'list';
    items: {
        id: number;
        text: string;
        checked: boolean;
    }[];
}

export type Note = TextNote | ListNote;
