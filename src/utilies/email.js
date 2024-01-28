import nodemailer from "nodemailer";


const sendEmail= async({to,cc,bcc,text,html,subject,attachments=[]}={})=>{
    const transporter = nodemailer.createTransport({
        service:"gmail",
    auth: {
      user: process.env.EMAIL,
      pass: process.env.EMAIL_PASSWORD
    }
  });
  async function main() {
    const info = await transporter.sendMail({
      from: `"Instagram" <${process.env.EMAIL}>`, 
      to,
      cc,
      bcc,
      subject, 
      text,
      html,
      attachments,

    });   
  }
  main()
}
export default sendEmail
  