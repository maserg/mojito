
YUI.add('PageLayout-tests', function(Y, NAME) {

    var suite = new YUITest.TestSuite('PageLayout-tests'),
        controller = null,
        A = YUITest.Assert;

    suite.add(new YUITest.TestCase({
        
        name: 'PageLayout user tests',
        
        setUp: function() {
            controller = Y.mojito.controllers.PageLayout;
        },
        tearDown: function() {
            controller = null;
        },
        
        'test mojit': function() {
            var ac,
                doneResults;
            ac = {
                composite: {
                    done: function(data) {
                        doneResults = data;
                    }
                }
            };

            A.isNotNull(controller);
            A.isFunction(controller.index);
            controller.index(ac);
            A.isObject(doneResults);
            A.areSame("Trib - Contribute to the Tribe", doneResults.title);
        }
        
    }));
    
    YUITest.TestRunner.add(suite);
    
}, '0.0.1', {requires: ['mojito-test', 'PageLayout']});
