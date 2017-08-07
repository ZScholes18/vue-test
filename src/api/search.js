import Mock from 'mockjs';
import 'whatwg-fetch';
import $ from 'jquery';
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

    // setTimeout(() => cb(responseData), 100);
    // fetch('./searchTest').then(
    //     response => {
    //         return response.json();
    //     }
    //     ).then(
    //     responseData => {
    //         cb(responseData);
    //     }
    // );
    $.ajax({
        type: 'POST',
        url: '/searchTest',
        success: function (data) {
            cb(data);
        },
        dataType: 'json'
    });
};
export default searchTest;
