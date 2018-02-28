import { fork, all } from 'redux-saga/effects';
import gtmSagas from './gtm';
import comScoreSagas from './comScore';

export default function* buildClientSagas({ stores }) {
  yield all([fork(gtmSagas, stores), fork(comScoreSagas, stores)]);
}
