const express = require("express");
const nodeMailer = require("nodemailer");

const app = express();

const mailHandler = (res) => {
    const auth = nodeMailer.createTransport({
        service: "gmail",
        secure: true,
        port: 465,
        auth: {
            user: "151mc00003@gmail.com",
            pass: "edtb iplu pzpg uvao"
        }
    });

    const myMail = {
        from: "151mc00003@gmail.com",
        to: "bhanoolohar007@gmail.com",
        subject: "Node JS mail Testing",
        text: "This is Bhaanoo Lohar from another account only for test purpose. This is just a sample text message."
    };

    auth.sendMail(myMail, (error, info) => {
        if (error) {
            console.error("Error sending email:", error);
            res.status(500).send("Error sending email");
        } else {
            console.log("Mail sent to recipient:", info.response);
            res.status(200).send("Email sent successfully");
        }
    });
};

app.get("/", (req, res) => {
    res.send("Hello Mailer Friends").status(200, "Its look fine");
    mailHandler(res);
});

app.listen(3000, () => {
    console.log("Server is running @: 3000");
});



const authXy = nodeMailer.createTransport({
    service: "gmail",
    secure: true,
    port: 465,
    userdata : {
        user: "151mc00003@gmail.com",
        password: "edtb iplu pzpg uvao"
    }
})

const myXmail = {
    from: "151mc00003@gmail.com",
    to: "bhanoolohar007@gmail.com",
    subject: "this is just test mail",
    message: "Hello Bhaanoo I am from another your account just testing the Nodemailer functionality of Gmail"
}

authXy.sendMail(myXmail, (error, info) =>{
    if(error){
        console.log("Something went wrong in mailing", error);
        throw new Error.message()
    }
    console.log("Mail Send", info);
})