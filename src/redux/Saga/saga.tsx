import { takeLatest, call, put } from "redux-saga/effects";
import axios, { AxiosError } from "axios";

interface IDataActivity {
  data: {
    activity: string;
  };
}

function* fetchDataSaga() {
  try {
    const response: IDataActivity = yield call(
      axios.get,
      "https://www.boredapi.com/api/activity/"
    );

    yield put({
      type: "FETCH_TASKS_SUCCESS",
      payload: { activity: response.data.activity },
    });
  } catch (apiError: any) {
    console.log("Api error: ", apiError);

    yield put({
      type: "FETCH_TASKS_FAILURE",
      payload: { error: apiError.message },
    });
  }
}

export function* watchFetchData() {
  yield takeLatest("FETCH_DATA", fetchDataSaga);
}
