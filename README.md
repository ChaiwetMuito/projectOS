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
* docker pull patcwmt/projectos
* docker run --name projectos -p 3000:3000 patcwmt/projectos

## สมาชิกกลุ่ม
1. 61050147 นายจักรพันธ์  ลาภวิสุทธิสาโรจน์
2. 61050165 นายชัยเวท  หมุ่ยโท
3. 61050166 นายชานน  หลี่
4. 61050203 นายธนินทร์  ผลึกเพชร