import Mock from 'mockjs';
import 'whatwg-fetch';
import $ from 'jquery';

const fetchData = function (params,cb) {
    var params = {
    }
    $.ajax({
        type: 'POST',
        url: '/searchTest',
        success: function (data) {
            cb(data);
        },
        dataType: 'json'
    });
};

const searchTest = function (condition, cb) {
    Mock.mock('/searchTest', {
        'listData|1-10': [
            {
                date: '@date',
                name: condition,
                address: '@county'
            }
        ]
    });
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
