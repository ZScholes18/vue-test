import Mock from 'mockjs';
import 'whatwg-fetch';
import $ from 'jquery';
import axios from './http';
import router from '../router';
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
    return axios.post('/searchTest').then(response => {
        if (true) {
            router.push('/login');
        }
        return response.data;
    }).then(data => {
        cb(data);
    });
};
export default searchTest;
