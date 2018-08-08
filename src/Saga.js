import { all, takeEvery, put } from 'redux-saga/effects';

function* addCart({ item }) {

    yield put({
        type: 'ON_ADD_CART',
        item
    })
}

export default function* rootSaga() {
    yield all([
        takeEvery('ADD_CART', addCart)
    ])
}