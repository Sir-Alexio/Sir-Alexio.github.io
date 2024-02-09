import { takeLatest, call, put } from "redux-saga/effects";
import axios from "axios";
import { types } from "../Actions/types";
import { activityUrl } from "../../constants";

interface IDataActivity {
  data: {
    activity: string;
  };
}

function* fetchDataSaga() {
  try {
    const response: IDataActivity = yield call(axios.get, activityUrl);

    yield put({
      type: types.ACTIVITY.SUCCESS,
      payload: response.data.activity,
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
