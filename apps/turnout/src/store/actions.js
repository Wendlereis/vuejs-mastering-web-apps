import * as types from './mutation-types';

export const signin = ({commit}, user_payload) => {
    commit(types.SIGN_IN, user_payload)
}

export const signout = ({commit}) => {
    commit(types.SIGN_OUT)
}
