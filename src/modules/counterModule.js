import produce from 'immer';
const INCREMENT = 'counter/num/increment';
const DECREMENT = 'counter/num/decrement';
const SET_DIFF = 'counter/num/set_diff';

export const increment = createAction(INCREMENT, value => ({diff: value}));
export const decrement = createAction(DECREMENT, value => ({diff: value}));
export const setDiff = createAction(SET_DIFF, value => ({diff: value}));


const counterInitialState = {
    value: 0,
    diff: 1
};

export default handleActions({
    [INCREMENT]: (state, action) => {
        return produce(state, draft => {
            console.log(action);
            draft.value += draft.diff;
        });
    },
    // :: { } 를 따로 열지 않고 바로 리턴하면 이런 형식입니다.
    [DECREMENT]: (state, action) => produce(state, draft => {
        draft.value -= draft.diff;
    }),
    [SET_DIFF]: (state, action) => produce(state, draft => {
        draft.diff = action.payload.diff;
    }),
}, counterInitialState);