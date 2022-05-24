const nodeMailer = require(`nodemailer`)
const path = require(`path`)
//config the dotenv to give access from .env file to  process.env 
require(`dotenv`).config({ path: path.resolve(`C:/web-server/NodeMailer/.env`) })

//Sender Authentication Details
const sender = nodeMailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.SENDERMAIL,
        pass: process.env.PASSWORD
    }
});

//Compose the mail
const composeMail = {
    from: process.env.SENDERMAIL,
    to: process.env.RECEIVERMAIL,
    subject: 'Testing Mail',
    html: `<h5><strong>Dear User!<strong></h5></br><h5>Congratulations!</h5>`


}

//Send the mail and Verify
sender.sendMail(composeMail, (err, message) => {
    if (err) {
        console.log(err)
    }
    console.log(`Mail Send Successfully`)
})