import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import cookie from 'cookie'
import { NextApiRequest, NextApiResponse } from 'next'
import prisma from '../../lib/prisma'

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const salt = bcrypt.genSaltSync()
  //Unpack the body from the request
    const user_signup_req = {
        email: req.body.email as string,
        password: req.body.password as string,
        firstName: req.body.firstName as string,
        lastName: req.body.lastName as string,
    }
    //Set default values for the firstName and lastName if they are not provided
    if(!user_signup_req.firstName){
        user_signup_req.firstName = "";
    }
    if(!user_signup_req.lastName){
        user_signup_req.lastName = "";
    }


  let user

  try {
    user = await prisma.user.create({
      data: {
        email: user_signup_req.email,
        password: bcrypt.hashSync(user_signup_req.password, salt),
        firstName: user_signup_req.firstName,
        lastName: user_signup_req.lastName,

      },
    })
  } catch (e) {
    res.status(401)
    res.json({ error: 'User already exists', code: e.code })
    return
  }

  const token = jwt.sign(
    {
      email: user.email,
      id: user.id,
      time: Date.now(),
    },
    'hello',
    { expiresIn: '8h' }
  )

  res.setHeader(
    'Set-Cookie',
    cookie.serialize('SPOTIFY_ACCESS_TOKEN', token, {
      httpOnly: true,
      maxAge: 8 * 60 * 60,
      path: '/',
      sameSite: 'lax',
      secure: process.env.NODE_ENV === 'production',
    })
  )

  res.json(user)
}