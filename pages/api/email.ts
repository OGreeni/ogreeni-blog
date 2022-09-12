import type { NextApiRequest, NextApiResponse } from 'next';
import nodemailer from 'nodemailer';
import multiparty from 'multiparty';

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
  let subject: string;
  let email: string;

  const form = new multiparty.Form();
  const data = (await new Promise((resolve, reject) => {
    form.parse(req, (err, fields) => {
      if (err) {
        reject({ err });
      }
      resolve({ fields });
    });
  })) as { fields: { subject: string; email: string } };

  subject = data.fields.subject;
  email = data.fields.email;

  // promisify transporter.sendMail to await sending the email
  const sendMailAsync = ({
    from,
    to,
    subject,
    text,
  }: {
    from: string;
    to: string;
    subject: string;
    text: string;
  }) => {
    return new Promise((resolve, reject) => {
      transporter.sendMail(
        {
          from,
          to,
          subject,
          text,
        },
        (err, info) => {
          if (err) {
            reject(err);
          } else {
            resolve(info);
          }
        }
      );
    });
  };
  try {
    await sendMailAsync({
      from: 'omri.green1@outlook.com',
      to: email,
      subject: 'omrigreen.com: Form Submitted Successfully',
      text: `Thank you for your interest! I've received your email (${email}) and will reach back to you as soon as I can.`,
    });

    await sendMailAsync({
      from: 'omri.green1@outlook.com',
      to: 'omri.green1@gmail.com',
      subject: `omrigreen.com: Form Submission Alert`,
      text: `email: ${email}\nsubject: ${subject}`,
    });
  } catch (err) {
    return res.status(500).json(err);
  }

  res.status(200).json({ email });
};

export default handler;

export const config = {
  api: {
    bodyParser: false,
  },
};
