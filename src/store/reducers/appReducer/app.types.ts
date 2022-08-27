export interface ICell {
    id: string;
}

export interface AppState {
    game: boolean;
    cells: ICell[];
    startPointIdx: number;
    endPointIdx: number;
    directions: number[]
}