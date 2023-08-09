const crybto=require('crypto')
const secreckey=crybto.randomBytes(32).toString('hex')

console.log('secret ky',secreckey)