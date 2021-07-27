const fs = require('fs')

const listFiles = () => {
    const files = fs.readdir('/shareddata', (err, files) => {
        if (err) {
            console.error(err)
        } else {
            console.log('Files in the directory', files)
        }
    })
}

listFiles()