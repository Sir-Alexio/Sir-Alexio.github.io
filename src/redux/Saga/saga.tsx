import { takeLatest, call, put } from "redux-saga/effects";
import axios from "axios";
import { types } from "../Actions/types";

interface IDataActivity {
  data: {
    activity: string;
  };
}

function* fetchDataSaga() {
  const url = "https://www.boredapi.com/api/activity/";
  try {
    const response: IDataActivity = yield call(axios.get, url);

    yield put({
      type: types.ACTIVITY.SUCCESS,
      payload: { activity: response.data.activity },
    });
  } catch (apiError: any) {
    console.log("Api error: ", apiError);

    yield put({
      type: types.ACTIVITY.ERROR,
      payload: { error: apiError.message },
    });
  }
}

export function* watchFetchData() {
  yield takeLatest(types.ACTIVITY.DATA, fetchDataSaga);
}
