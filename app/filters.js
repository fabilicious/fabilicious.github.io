angular.module('app.filters', [])
.filter('fuzzyFilter', function() {
    var options = {
        shouldSort: true,
        tokenize: true,
        matchAllTokens: true,
        threshold: 0.6,
        location: 0,
        distance: 100,
        maxPatternLength: 32,
        minMatchCharLength: 1,
        keys: [
            "title",
            "author.firstName"
        ]
    };
    var fuse = new Fuse(input, options); // "list" is the item array  
    return fuse.search("Remy");
      /*return function(input, uppercase) {
        input = input || '';
        var out = '';
        for (var i = 0; i < input.length; i++) {
          out = input.charAt(i) + out;
        }
        // conditional based on optional argument
        if (uppercase) {
          out = out.toUpperCase();
        }
        return out;
      };*/
});