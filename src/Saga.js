import { all, takeEvery, put } from 'redux-saga/effects';

function* addCart({ item }) {
    yield all([
      put({
          type: 'ON_ADD_CART',
          item
      }),
      put({
        type: 'WHILE_ADDING_TO_CART',
        item
      })
    ])
}

function* whileAddingToCartDoThis({ item }) {
  // yield alert(`Item has been aded [${item.product}]`)
  yield console.log(`Item has been aded [${item.product}]`);
}

export default function* rootSaga() {
    yield all([
        takeEvery('ADD_CART', addCart),
        takeEvery('WHILE_ADDING_TO_CART', whileAddingToCartDoThis)
    ])
}