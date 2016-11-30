exports.config = {
    directConnect: true,
    //capabilities to be passed to web driver instance  
    capabilities: {
        'browserName': 'chrome'
    },

    framework: 'jasmine',
    //protractor runs test cases uses jasmine to write test cases
    specs: ['../tests/login.e2e.spec.js',
            '../tests/forgotPassword.spec.js'
           ]

}