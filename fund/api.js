request = require('./request')

function listSearch(query) {
    return request({
        url: '/FundSearch/api/FundSearchAPI.ashx',
        method: 'get',
        params: query
    })
}

module.exports = listSearch