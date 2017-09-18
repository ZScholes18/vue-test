import Mock from 'mockjs';
import 'whatwg-fetch';
import $ from 'jquery';
import axios from './http';
import router from '../router';
import { Message } from 'element-ui';
// import vue from '../main';
var searchTest = function (condition, cb) {
    Mock.mock('/searchTest', {
        'listData|1-10': [
            {
                date: '@date',
                name: condition,
                address: '@county'
            }
        ]
    });

    // fetch('./searchTest').then(
    //     response => {
    //         return response.json();
    //     }
    //     ).then(
    //     responseData => {
    //         cb(responseData);
    //     }
    // );

    // $.ajax({
    //     type: 'POST',
    //     url: '/searchTest',
    //     success: function (data) {
    //         cb(data);
    //     },
    //     dataType: 'json'
    // });
    // console.log(vue);
    return vue.$http.post('/searchTest').then(response => {
        if (true) {
            Message({
                message: '登录已失效',
                type: 'warning',
                showClose: true
            });
            router.push({ name: 'login' });
        }
        return response.data;
    }).then(data => {
        cb(data);
    });
};
export default searchTest;
