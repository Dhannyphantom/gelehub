// // app/api/auth/login/route.js
// import { NextResponse } from 'next/server';
// import jwt from 'jsonwebtoken';
// import bcrypt from 'bcryptjs';

// const JWT_SECRET = process.env.JWT_SECRET;

// export async function POST(req) {
//   const { email, password } = await req.json();

//   // Find user from DB (mock here)
//   const user = { id: 1, email, passwordHash: bcrypt.hashSync("pass123", 10) };

//   if (!bcrypt.compareSync(password, user.passwordHash)) {
//     return NextResponse.json({ error: 'Invalid credentials' }, { status: 401 });
//   }

//   const token = jwt.sign({ id: user.id, email: user.email }, JWT_SECRET, { expiresIn: '7d' });

//   const res = NextResponse.json({ message: 'Logged in' });
//   res.cookies.set('token', token, {
//     httpOnly: true,
//     secure: true,
//     sameSite: 'lax',
//     maxAge: 60 * 60 * 24 * 7,
//     path: '/',
//   });

//   return res;
// }

import { connectDB } from "@/lib/db";
import { User } from "@/models/User";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

export async function POST(req) {
  await connectDB();
  const { email, password } = await req.json();

  const user = await User.findOne({ email });
  if (!user)
    return Response.json({ message: "Invalid credentials" }, { status: 401 });

  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch)
    return Response.json({ message: "Invalid credentials" }, { status: 401 });

  const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
    expiresIn: "7d",
  });

  return Response.json({
    message: "Login successful",
    token,
    user: {
      id: user._id,
      name: user.name,
      email: user.email,
      role: user.role,
    },
  });
}
