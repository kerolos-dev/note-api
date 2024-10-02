
// async function sendMassega(){

//     const transporter = nodemailer.createTransport({
//       host: "localhost",
//       port: 465,
//       secure: true, // Use `true` for port 465, `false` for all other ports
//       service: "gmail",
//       auth: {
//         user: "magedkerolos779@gmail.com",
//         pass: "vxra nzyw nfov nezx",
//       },
//     });
//     // async..await is not allowed in global scope, must use a wrapper
//       // send mail with defined transport object
//       const info = await transporter.sendMail({
//         from:  'magedkerolos779@gmail.com', // sender address
//         to: "saknquare45@gmail.com", // list of receivers
//         subject: "Hello ✔", // Subject line
//         text: "Hello world?", // plain text body
//         html: "<b>Hello world?</b>", // html body
//       });
    
//   //  console.log("Message sent: %s", info.messageId);
//       // Message sent: <d786aa62-4e0a-070a-47ed-0b0666549519@ethereal.email>
    
    
//     // main().catch(console.error);
//    if(info.accepted.length > 0) return  true;
//    return false;   
//   }
  
//   await sendMassega()