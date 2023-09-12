const http = require('http');
const url = require('url');

const server = http.createServer((req, res) => {
    const parsedUrl = url.parse(req.url, true);

    // const scriptFileName = __filename;
    // const scriptArguments = process.argv.slice(2);
    // const serverIpAddress = req.connection.remoteAddress;
    // const hostName = req.headers.host;
    // const protocolName = req.protocol || 'HTTP';
    // const queryMethod = req.method;
    // const userAgent = req.headers['user-agent'];
    // const clientIpAddress = req.connection.remoteAddress;
    // const queryParams = parsedUrl.query;

    console.log('Name of executed script:', __filename);
    console.log('Arguments passed to the script:', process.argv.slice(2));
    console.log('IP address of the server:', req.connection.remoteAddress);
    console.log('Host that invokes the current script:', req.headers.host);
    console.log('Name and version of the information protocol:', req.protocol || 'HTTP');
    console.log('Query method:', req.method);
    console.log('User-Agent information:', req.headers['user-agent']);
    console.log('IP address of the client:', req.connection.remoteAddress);
    console.log('List of parameters passed by URL:', parsedUrl.query);

    res.end('Check the console for the information.');
});

server.listen(3000, () => {
    console.log('Server started on http://localhost:');
});
