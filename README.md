# Project OS
## วิธีการลง run โปรแกรม
1. npm install 
    * ต้องมี node.js
2. node server.js 
    * ต้องมี node.js 
3. enjoy!! localhost:3000/api-docs 

## การสร้าง images และ container
1. docker build -t dockerID/respository .
2. docker run --name projectos -p 3000:3000 dockerID/respository
3. enjoy!! 

## ได้ทำการสร้าง images ไว้แล้ว ลองใช้ได้เลย
* docker run --name projectos -p 3000:3000 patcwmt/projectos