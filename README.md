# ChunkedWrites
Demonstration of writing chunked data using the HTTP protocol.

## Usage
You'll need Node.js and npm installed. To start the server, run:

```bash
$ npm start
```

To test it out, enter a URL route in the format `/:size/:perchunk/:delay`, for example:

```
http://localhost:8080/1024/128/500
```

The above route will send a total of 1,024 random character bytes, in chunks of 128 bytes in size each, with a 500 millisecond delay between each chunk.