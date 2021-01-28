import { addGuest as addPic, getGuest as getPic, deleGuest as delePic } from '@/services/guest';
import { message } from 'antd';
import { history } from 'umi';

const GuestModel = {
  namespace: 'guest',
  state: {
    guestList: [],
  },
  effects: {
    *addGuest({ payload }, { call }) {
      const response = yield call(addPic, payload);
      const { status } = response;
      if (status === 'ok') {
        message.success('录入成功！');
        setTimeout(() => {
          history.push('/guest/manage');
        }, 1000);
      } else {
        message.error('录入数据错误，请重试！');
      }
    },

    *getGuest(_, { call, put }) {
      const response = yield call(getPic);
      const { status, data } = response;
      if (status === 'ok') {
        data.filter((val, index) => {
          const arrData = val;
          const key = index + 1;
          arrData.key = key.toString();
          return arrData;
        });
        yield put({
          type: 'saveGuestModel',
          payload: data,
        });
      } else {
        message.error('获取数据错误，请刷新重试！');
      }
    },

    *deleGuest({ payload }, { call, put }) {
      const { value = {} } = payload;
      const response = yield call(delePic, value);
      const { status } = response;
      if (status === 'ok') {
        const res = yield call(getPic);
        const { data = [], status: sign } = res;
        if (sign === 'ok') {
          data.filter((val, index) => {
            const arrData = val;
            const key = index + 1;
            arrData.key = key.toString();
            return arrData;
          });
          yield put({
            type: 'saveGuestModel',
            payload: data,
          });
          message.success('删除成功！');
        } else {
          message.error('获取信息错误，请刷新重试');
        }
      } else {
        message.error('删除错误，请重试');
      }
    },
  },

  reducers: {
    saveGuestModel(state, action) {
      return { ...state, guestList: action.payload || [] };
    },
  },
};
export default GuestModel;
