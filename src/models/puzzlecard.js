import request from '../utils/request';
import { setTimeout } from 'core-js';

const delay = (millisecond) => {
    return new Promise((resolve) => {
        setTimeout(resolve, millisecond);
    });
}

export default {
    namespace: 'puzzlecard',
    state: {
        data: [],
        counter: 0
    },
    effects: {
        // 3. 请求网络数据
        *queryInitCards(_, sagaEffects) {
            const { call, put } = sagaEffects;
            const endPointURL = 'https://08ad1pao69.execute-api.us-east-1.amazonaws.com/dev/random_joke';

            const puzzle = yield call(request, endPointURL);
            // 4. 数据请求成功后, 添加至模型中
            yield put({ type: 'addNewCard', payload: puzzle });
            // yield call(delay, 1000); // 延时 1s
            // const puzzle2 = yield call(request, endPointURL);
            // yield put({ type: 'addNewCard', payload: puzzle2 });
        }
    },
    // 改变状态
    reducers: {
        // 添加至模型
        addNewCard(state, { payload: newCard }) {
            const nextCounter = state.counter + 1;
            const newCardId = { ...newCard, id: nextCounter };
            const nextData = state.data.concat(newCardId);
            return {
                data: nextData,
                counter: nextCounter,
            }
        }
    }
};