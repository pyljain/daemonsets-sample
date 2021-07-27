const {Storage} = require('@google-cloud/storage')
const storage = new Storage({keyFilename: '/key/key.json'});
const bucketName = process.env.BUCKETNAME

const start = async () => {
    const [files] = await storage.bucket(bucketName).getFiles();
    console.log("FILES RETURNED FROM CS", files)
    files.forEach(async file => {
        console.log(file.name);
        await storage.bucket(bucketName).file(file.name).download({
            destination: `/shareddata/${file.name}`
        })
    })
}

setTimeout(async () => {
    await start()
}, 1000 * 60 * 30)

start()