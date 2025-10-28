const http = require('http')
const fs = require('fs')
const path = require('path')

function getExtName(pathname) {
    switch(pathname) {
        case '.html':
            return 'text/html'
        case '.css':
            return 'text/css'
        case '.js':
            return 'text/javascript'
        case '.json':
            return 'application/json'
    }
}

function fileReader(filePath) {
    let fileContent = null
    let error = null

    try{
        fileContent = fs.readFileSync(filePath, 'utf8')
    }catch (err){
        error = err
    }
    const contentType = getExtName(path.extname(filePath))


    return {fileContent, error, contentType}
}


const server = http.createServer((req, res) => {
    if (req.url === '/favicon.ico') return

    const filePath = path.join(
        __dirname,
        'public',
        req.url !== '/' 
            ? (!req.url.includes('.html') ? 
                req.url.concat('.html') : req.url)
            : '/index.html'
    );


    const file = fileReader(filePath)
    console.log(filePath)

    if(file.error?.code === 'ENOENT'){
        fs.readFile('./public/404.html', (err, data) => {
            res.writeHead(404, { "Content-Type": 'text/html'})
            res.end(data, 'utf8')
        })
        return
    }

    res.writeHead(200, { 'Content-Type': file.contentType})
    res.end(file.fileContent)

})

server.listen(8080, () => {
    console.log('Server listening on port 8080...')
})
