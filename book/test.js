require(["gitbook"], function(gitbook) {
    gitbook.events.bind("page.change", function() {
        // do something
        console.log('1');
    });

    gitbook.events.bind("exercise.submit", function() {
        // do something
        console.log(2);
    });
});