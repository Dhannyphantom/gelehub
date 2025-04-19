// middleware.js
import { NextResponse } from 'next/server';
import jwt from 'jsonwebtoken';

const protectedRoutes = ['/dashboard'];

export function middleware(req) {
  const token = req.cookies.get('token')?.value;
  const isProtected = protectedRoutes.some((route) => req.nextUrl.pathname.startsWith(route));

  if (isProtected && !token) {
    return NextResponse.redirect(new URL('/login', req.url));
  }

  try {
    jwt.verify(token, process.env.JWT_SECRET);
    return NextResponse.next();
  } catch (e) {
    if (isProtected) return NextResponse.redirect(new URL('/login', req.url));
    return NextResponse.next();
  }
}
