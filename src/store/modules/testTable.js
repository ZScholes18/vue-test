import Axios from 'api/http';
import Mock from 'mockjs';
const state = {
    listData: [{
        date: '2016-05-02',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
    }, {
        date: '2016-05-04',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1517 弄'
    }, {
        date: '2016-05-01',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1519 弄'
    }, {
        date: '2016-05-03',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1516 弄'
    }]
};

const actions = {
    search ({ commit }, condition) {
        Mock.mock('/searchTest', {
            'listData|1-10': [
                {
                    date: '@date',
                    name: condition,
                    address: '@county'
                }
            ]
        });
        Axios.post('/searchTest', {
            condition
        }).then(response => {
            // if (true) {
            //     Message({
            //         message: '登录已失效',
            //         type: 'warning',
            //         showClose: true
            //     });
            //     router.push({ name: 'login' });
            // }
            return response.data;
        }).then(data => {
            commit('resetListData', data);
        });
    }
};
const mutations = {
    resetListData: (state, responseData) => {
        state.listData = responseData.listData;
    }
};

export default {
    state,
    actions,
    mutations
};
