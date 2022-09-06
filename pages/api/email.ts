import type { NextApiRequest, NextApiResponse } from 'next';
import nodemailer from 'nodemailer';

type Data = {
  email: string;
};

const transporter = nodemailer.createTransport({
  service: 'hotmail',
  auth: {
    user: 'omri.green1@outlook.com',
    pass: 'Ffick5ol',
  },
});

const handler = (req: NextApiRequest, res: NextApiResponse<Data>) => {
  //   const email: string = req.body.email;
  const email = 'test@gmail.com';

  transporter.sendMail(
    {
      from: 'omri.green1@outlook.com',
      to: email,
      subject: 'Omri Green: Form Submitted Successfully',
      text: `Thank you for your interest! I've received your email (${email}) and will reach out to you as soon as I can.`,
    },
    (err, info) => {
      if (err) {
        console.log(err);
        res.status(500);
      } else {
        res.status(200).json({ email });
      }
    }
  );
};

export default handler;
