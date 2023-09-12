const http = require('http');
const url = require('url');

const server = http.createServer((req, res) => {
    const parsedUrl = url.parse(req.url, true);

    const scriptFileName = __filename;
    const scriptArguments = process.argv.slice(2);
    const serverIpAddress = req.connection.remoteAddress;
    const hostName = req.headers.host;
    const protocolName = req.protocol || 'HTTP';
    const queryMethod = req.method;
    const userAgent = req.headers['user-agent'];
    const clientIpAddress = req.connection.remoteAddress;
    const queryParams = parsedUrl.query;

    console.log('Name of executed script:', scriptFileName);
    console.log('Arguments passed to the script:', scriptArguments);
    console.log('IP address of the server:', serverIpAddress);
    console.log('Host that invokes the current script:', hostName);
    console.log('Name and version of the information protocol:', protocolName);
    console.log('Query method:', queryMethod);
    console.log('User-Agent information:', userAgent);
    console.log('IP address of the client:', clientIpAddress);
    console.log('List of parameters passed by URL:', queryParams);

    res.end('Check the console for the information.');
});

server.listen(3000, () => {
    console.log('Server started on http://localhost:');
});
