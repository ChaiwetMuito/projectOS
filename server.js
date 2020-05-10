const app = require('express')();
const bodyParser = require('body-parser');
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./swagger.json');


app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

// body
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
    extended: true
}));
app.use(bodyParser.json());


app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
// swagger ui

app.get("/test", function (req, res) {
    var message = `Hello world ${new Date()}`
    console.log(message)
    var resultAsJson = {
        "message": "ผ่านแล้ว",
        "result": message
    }
    res.json(resultAsJson)
})

app.post("/multi", function (req, res) {
    var valueA = parseFloat(req.body.A)
    var valueB = parseFloat(req.body.B)
    if (isNaN(valueA) || isNaN(valueB)) {
        if (isNaN(valueA) && isNaN(valueB)) {
            var message = {
                "ERROR": "A และ B ไม่ใช่ตัวเลข โปรดใส่ตัวเลขของ A และ B"
            }
            console.log(message)
            res.json(message)
        } else if (isNaN(valueA)) {
            var message = {
                "ERROR": "A ไม่ใช่ตัวเลข โปรดใส่ตัวเลขของ A"
            }
            console.log(message)
            res.json(message)
        } else if (isNaN(valueB)) {
            var message = {
                "ERROR": "B ไม่ใช่ตัวเลข โปรดใส่ตัวเลขของ B"
            }
            console.log(message)
            res.json(message)
        }
    } else if (valueA == null || valueB == null) {
        if (valueA == null && valueB == null) {
            var message = {
                "ERROR": "โปรดใส่ตัวเลขของ A และ B"
            }
            console.log(message)
            res.json(message)
        } else if (valueA == null) {
            var message = {
                "ERROR": "โปรดใส่ตัวเลขของ A "
            }
            console.log(message)
            res.json(message)
        } else if (valueB == null) {
            var message = {
                "ERROR": "โปรดใส่ตัวเลขของ B"
            }
            console.log(message)
            res.json(message)
        }
    } else {
        var result = parseFloat(valueA * valueB).toFixed(2)
        var message = {
            "Math": parseFloat(valueA).toFixed(2) + " * " + parseFloat(valueB).toFixed(2),
            "result": result
        }
        console.log(message)
        res.json(message)
    }
})

app.post("/plus", function (req, res) {
    var valueA = parseFloat(req.body.A)
    var valueB = parseFloat(req.body.B)
    if (isNaN(valueA) || isNaN(valueB)) {
        if (isNaN(valueA) && isNaN(valueB)) {
            var message = {
                "ERROR": "A และ B ไม่ใช่ตัวเลข โปรดใส่ตัวเลขของ A และ B"
            }
            console.log(message)
            res.json(message)
        } else if (isNaN(valueA)) {
            var message = {
                "ERROR": "A ไม่ใช่ตัวเลข โปรดใส่ตัวเลขของ A"
            }
            console.log(message)
            res.json(message)
        } else if (isNaN(valueB)) {
            var message = {
                "ERROR": "B ไม่ใช่ตัวเลข โปรดใส่ตัวเลขของ B"
            }
            console.log(message)
            res.json(message)
        }
    } else if (valueA == null || valueB == null) {
        if (valueA == null && valueB == null) {
            var message = {
                "ERROR": "โปรดใส่ตัวเลขของ A และ B"
            }
            console.log(message)
            res.json(message)
        } else if (valueA == null) {
            var message = {
                "ERROR": "โปรดใส่ตัวเลขของ A "
            }
            console.log(message)
            res.json(message)
        } else if (valueB == null) {
            var message = {
                "ERROR": "โปรดใส่ตัวเลขของ B"
            }
            console.log(message)
            res.json(message)
        }
    } else {
        var result = parseFloat(valueA + valueB).toFixed(2)
        var message = {
            "Math": parseFloat(valueA).toFixed(2) + " + " + parseFloat(valueB).toFixed(2),
            "result": result
        }
        console.log(message)
        res.json(message)
    }
})

app.post("/minus", function (req, res) {
    var valueA = parseFloat(req.body.A)
    var valueB = parseFloat(req.body.B)
    if (isNaN(valueA) || isNaN(valueB)) {
        if (isNaN(valueA) && isNaN(valueB)) {
            var message = {
                "ERROR": "A และ B ไม่ใช่ตัวเลข โปรดใส่ตัวเลขของ A และ B"
            }
            console.log(message)
            res.json(message)
        } else if (isNaN(valueA)) {
            var message = {
                "ERROR": "A ไม่ใช่ตัวเลข โปรดใส่ตัวเลขของ A"
            }
            console.log(message)
            res.json(message)
        } else if (isNaN(valueB)) {
            var message = {
                "ERROR": "B ไม่ใช่ตัวเลข โปรดใส่ตัวเลขของ B"
            }
            console.log(message)
            res.json(message)
        }
    } else if (valueA == null || valueB == null) {
        if (valueA == null && valueB == null) {
            var message = {
                "ERROR": "โปรดใส่ตัวเลขของ A และ B"
            }
            console.log(message)
            res.json(message)
        } else if (valueA == null) {
            var message = {
                "ERROR": "โปรดใส่ตัวเลขของ A "
            }
            console.log(message)
            res.json(message)
        } else if (valueB == null) {
            var message = {
                "ERROR": "โปรดใส่ตัวเลขของ B"
            }
            console.log(message)
            res.json(message)
        }
    } else {
        var result = parseFloat(valueA - valueB).toFixed(2)
        var message = {
            "Math": parseFloat(valueA).toFixed(2) + " - " + parseFloat(valueB).toFixed(2),
            "result": result
        }
        console.log(message)
        res.json(message)
    }
})

app.post("/divide", function (req, res) {
    var valueA = parseFloat(req.body.A)
    var valueB = parseFloat(req.body.B)
    if (isNaN(valueA) || isNaN(valueB)) {
        if (isNaN(valueA) && isNaN(valueB)) {
            var message = {
                "ERROR": "A และ B ไม่ใช่ตัวเลข โปรดใส่ตัวเลขของ A และ B"
            }
            console.log(message)
            res.json(message)
        } else if (isNaN(valueA)) {
            var message = {
                "ERROR": "A ไม่ใช่ตัวเลข โปรดใส่ตัวเลขของ A"
            }
            console.log(message)
            res.json(message)
        } else if (isNaN(valueB)) {
            var message = {
                "ERROR": "B ไม่ใช่ตัวเลข โปรดใส่ตัวเลขของ B"
            }
            console.log(message)
            res.json(message)
        }
    } else if (valueA == null || valueB == null) {
        if (valueA == null && valueB == null) {
            var message = {
                "ERROR": "โปรดใส่ตัวเลขของ A และ B"
            }
            console.log(message)
            res.json(message)
        } else if (valueA == null) {
            var message = {
                "ERROR": "โปรดใส่ตัวเลขของ A "
            }
            console.log(message)
            res.json(message)
        } else if (valueB == null) {
            var message = {
                "ERROR": "โปรดใส่ตัวเลขของ B"
            }
            console.log(message)
            res.json(message)
        }
    } else if(valueB == 0){
        var message = {
            "ERROR": "B ต้องไม่ใช่ 0"
        }
        console.log(message)
        res.json(message)
    }
    else {
        var result = parseFloat(valueA / valueB).toFixed(2)
        var message = {
            "Math": parseFloat(valueA).toFixed(2) + " / " + parseFloat(valueB).toFixed(2),
            "result": result
        }
        console.log(message)
        res.json(message)
    }
})

const port = process.env.PORT || 3000
app.listen(port, function () {
    console.log(`Server localhost : ${port}`)
    console.log("Swagger http://localhost:3000/api-docs")
})

module.exports=app