"use strict"

var JasmineReporter = require('protractor-jasmine2-html-reporter');

exports.config = {
    directConnect: true,
    //capabilities to be passed to web driver instance  
    capabilities: {
        'browserName': 'chrome',
        chromeOptions: {
            args: ['--window-size=1600,900']
        }
    },

    framework: 'jasmine',
    //protractor runs test cases, uses jasmine to write test cases
    specs: [
            '../tests/login.e2e.spec.js',
            '../tests/dashBoard.spec.js'
           ],
    onPrepare: function(){
        jasmine.getEnv().addReporter(
            new JasmineReporter({
                baseDirectory: '/tmp/screenshots'
            })
        );
    }
}