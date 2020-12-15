// cors code - source: https://github.com/Rob--W/cors-anywhere/#client
(function() {
    var cors_api_host = 'cors-anywhere.herokuapp.com';
    var cors_api_url = 'https://' + cors_api_host + '/';
    var slice = [].slice;
    var origin = window.location.protocol + '//' + window.location.host;
    var open = XMLHttpRequest.prototype.open;
    XMLHttpRequest.prototype.open = function() {
        var args = slice.call(arguments);
        var targetOrigin = /^https?:\/\/([^\/]+)/i.exec(args[1]);
        if (targetOrigin && targetOrigin[0].toLowerCase() !== origin &&
            targetOrigin[1] !== cors_api_host) {
            args[1] = cors_api_url + args[1];
        }
        return open.apply(this, args);
    };
})();

// Fetching data - API/gist
// fetch('https://gist.github.com/joordy/f9fc0bdc0c7ae742dcfd1176466fde8e')
fetch('https://gist.githubusercontent.com/joordy/f9fc0bdc0c7ae742dcfd1176466fde8e/raw/9e8b33d14b51dd1dd120a6ec3c554a05ed5e0bdb/geojson-ringring.json')
	.then(response => response.json())
	.then((data) => console.log(data));

    // ERROR; Uncaught (in promise) SyntaxError: Unexpected end of JSON input 
    // something is incorrect with the fetch url    