import { createSlice } from "@reduxjs/toolkit";

const positionSlice = createSlice({
    name: 'position',
    initialState: [],
    reducers: {
        addPosition: (_, action) => action.payload
    }
})

export const { addPosition } = positionSlice.actions;
export const positionReducer = positionSlice.reducer;

export const selectAllVisible = (state, filters = []) => {
    if (filters.length === 0) return state.positions;

    return state.positions.filter(pos => {
        const positionFilters = [].concat(pos.role, pos.level, ...pos.languages, ...pos.tools);
        return filters.every(filter => positionFilters.includes(filter));
    })

}