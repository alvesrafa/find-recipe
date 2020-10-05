import { all } from 'redux-saga/effects';

import ingredients from './ingredients/sagas';

export default function* rootSaga() {
  return yield all([ingredients]);
}
