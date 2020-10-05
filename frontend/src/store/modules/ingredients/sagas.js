import { takeLatest, put, all, call } from 'redux-saga/effects';

import { failure, getAllSuccess } from './actions';
import { toast } from 'react-toastify';
import api from '../../../services/api';

export function* getAll() {
  try {
    const response = yield call(api.get, 'ingredients');
    if (response.data.success) {
      yield put(getAllSuccess(response.data.content));
    } else {
      toast.error('Falha ao buscar ingredientes. ');
      yield put(failure());
    }
  } catch (e) {
    toast.error(
      e?.response?.data?.message || 'Falha ao buscar todas os ingredientes. 😓'
    );
    yield put(failure());
  }
}

export default all([takeLatest('@ingredients/REQUEST_INGREDIENTS', getAll)]);
