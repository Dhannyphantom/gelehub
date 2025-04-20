// app/api/bookings/route.js
import { connectDB } from "@/lib/db";
import Booking from "@/models/Booking";

export async function POST(req) {
  try {
    await connectDB();
    const body = await req.json();

    const booking = new Booking(body);
    await booking.save();

    return new Response(JSON.stringify(booking), { status: 201 });
  } catch (error) {
    console.error("Booking API Error:", error);
    return new Response(JSON.stringify({ message: "Error saving booking" }), {
      status: 500,
    });
  }
}
