const express = require('express')
const app1 = express()
const path = require('path')
const fs = require('fs')
const port = process.env.port1||2000

app1.use(express.urlencoded({ extended: true }))
app1.use(express.static(path.join(__dirname, 'public')))

app1.post('/adminLog.html', (req, res) => {

    var check = ["AdeSam", "ForAllNations"]
    if (req.body.uname == check[0] && req.body.pword == check[1]) {
        let Evnt = req.body.Evnt
        fs.writeFile('public/post.txt', Evnt, {encoding:'utf8', flag: 'w'}, (err) => {
            if (err) 
            console.log(err)
          }
          )
          res.send('Welcome  ' + req.body.uname + ', Post Successfully Received!')
    }

    else {
        res.send('Login Details Incorrect')
    }
})
app1.listen(port, () => {
    console.log(`Server listening on ${port}`)
})


