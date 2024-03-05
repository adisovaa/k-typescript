import {reducer, StateType, TOGGLE_COLLAPSED} from "./reducer";

test('reducer should change value to opposite value', () => {
    // data
    const state: StateType = {
        collapsed: false
    }

    // action
    const newState = reducer(state, {type: TOGGLE_COLLAPSED})

    //expectation
    expect(newState.collapsed).toBe(true)
})

test('collapsed should be false', () => {
    //data
    const state: StateType = {
        collapsed: false
    }

    //action
    const newState = reducer(state, {type: TOGGLE_COLLAPSED})

    //expectation
    expect(newState.collapsed).toBe(true)
})

test('throw error case in reducer', () => {
    //data
    const state: StateType = {
        collapsed: true
    }

    //expectation
    expect(() => {
        reducer(state, {type: 'FAKE'})
    }).toThrowError()
})


