import Vue from 'vue';
import Vuex from 'vuex';
import tableList from './modules/testTable';
Vue.use(Vuex);

// const state = {
//     listData: [{
//         date: '2016-05-02',
//         name: '王小虎',
//         address: '上海市普陀区金沙江路 1518 弄'
//     }, {
//         date: '2016-05-04',
//         name: '王小虎',
//         address: '上海市普陀区金沙江路 1517 弄'
//     }, {
//         date: '2016-05-01',
//         name: '王小虎',
//         address: '上海市普陀区金沙江路 1519 弄'
//     }, {
//         date: '2016-05-03',
//         name: '王小虎',
//         address: '上海市普陀区金沙江路 1516 弄'
//     }]
// };

// const mutations = {
//     resetListData: (state, responseData) => {
//         state.listData = responseData.listData;
//     }
// };
const permissionList = {
    newBtn: true
};
Object.freeze(permissionList);
const state = {
    permissionList
};
export default new Vuex.Store({
    state,
    // mutations,
    modules: {
        tableList
    }

});
