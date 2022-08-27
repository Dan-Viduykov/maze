import { ICell, AppState } from './app.types';
import {createSlice, PayloadAction} from "@reduxjs/toolkit";

const uuid = require('uuid');

const initialState: AppState = {
    game: false,
    startPointIdx: 0,
    endPointIdx: 8,
    cells: [
        {id: uuid.v4()},
        {id: uuid.v4()},
        {id: uuid.v4()},
        {id: uuid.v4()},
        {id: uuid.v4()},
        {id: uuid.v4()},
        {id: uuid.v4()},
        {id: uuid.v4()},
        {id: uuid.v4()},
    ],
    directions: [],
}

export const appSlice = createSlice({
    name: 'app',
    initialState,
    reducers: {
        setStartPoint: (state, action: PayloadAction<number>) => {
            state.startPointIdx = action.payload
        },
        setEndPoint: (state, action: PayloadAction<number>) => {
            state.endPointIdx = action.payload
        },
        setDirection: (state, action: PayloadAction<number>) => {
            state.directions.push(action.payload)
        },
        setGameState: (state, action: PayloadAction<boolean>) => {
            state.game = action.payload
        }
    }
})

export const {
    setStartPoint,
    setDirection,
    setEndPoint,
    setGameState
} = appSlice.actions;

export const appReducer = appSlice.reducer;