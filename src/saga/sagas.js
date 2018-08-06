import * as actions from '../actions/'
import { takeEvery,all } from 'redux-saga/effects'

function* fetchPosts(){
  let value = yield takeEvery(actions.FETCH_POSTS, actions.fetchPosts );
  console.log(value);
}

export default function* rootSaga() {
  yield all([
    fetchPosts(),
  ])
}