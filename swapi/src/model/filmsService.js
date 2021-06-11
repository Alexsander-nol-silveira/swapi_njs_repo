const request = require('request');

const constants = require('./constants');

exports.listAllFilms = function(funcReturn){

    console.log('serviço para listar filmes...');
    request(constants.STAR_WARS_URL, function (error, response, body) {

        console.log(`HTTP STATUS: [${response.statusCode}]`);
        if (!error && response.statusCode === 200) {
            let returnService = JSON.parse(body);
            for(item in returnService.results){
                returnService.results[item].version = 0;
            }
            funcReturn(returnService);
         }
    })
}


