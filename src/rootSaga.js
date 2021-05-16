import actions, {GET_TODO, GET_TODOS, SET_TODOS} from './actions';
import { put, call, all, takeLatest } from "redux-saga/effects";
import getTodosApi from './todoApi';


function* getTodos(action){
    try {

        const data = yield call(getTodosApi, {});

        yield console.log('API DATA:: ', data);

        yield put(actions.setTodos({todos: data.slice(0, 10)}));
        
    } catch (error) {
        console.error(error)
    }
}

export default function* rootSaga(){
    yield all([
        yield takeLatest(GET_TODOS, getTodos)
    ]);
}