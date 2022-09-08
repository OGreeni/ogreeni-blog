import type { NextApiRequest, NextApiResponse } from 'next';
import nodemailer from 'nodemailer';
import multiparty from 'multiparty';
import { Console } from 'console';

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

const handler = async (req: NextApiRequest, res: NextApiResponse<Data>) => {
  let email: string;

  const form = new multiparty.Form();
  const data = (await new Promise((resolve, reject) => {
    form.parse(req, (err, fields) => {
      if (err) {
        reject({ err });
      }
      resolve({ fields });
    });
  })) as { fields: { email: string } }; // temp solution

  email = data.fields.email;

  transporter.sendMail(
    {
      from: 'omri.green1@outlook.com',
      to: email,
      subject: 'Omri Green: Form Submitted Successfully',
      text: `Thank you for your interest! I've received your email (${email}) and will reach out to you as soon as I can.`,
    },
    (err, info) => {
      if (err) {
        res.status(500);
      } else {
        res.status(200).json({ email });
      }
    }
  );
};

export default handler;

export const config = {
  api: {
    bodyParser: false,
  },
};
