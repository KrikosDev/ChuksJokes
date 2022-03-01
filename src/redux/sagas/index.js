import {
  takeEvery,
  put,
  call,
} from 'redux-saga/effects';

const getJoke = async () => {
  const req = await fetch('https://api.chucknorris.io/jokes/random');

  const data = await req.json();

  return data;
};

export function* getNewJoke() {
  const data = yield call(getJoke);

  yield put({ type: 'SET_JOKE', payload: data.value });
}

export function* getJokes() {
  const data = localStorage.getItem('jokes');
  if (data) {
    const newData = JSON.parse(data);

    yield put({ type: 'GET_JOKES', payload: newData.joke });
  }
}

export function* watchClickSaga() {
  yield takeEvery('get', getJokes);
  yield takeEvery('kick', getNewJoke);
}

export default function* rootSaga() {
  yield watchClickSaga();
}
