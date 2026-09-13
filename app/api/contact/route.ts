import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, phone, institution, message } = body;

    if (!name || !email || !phone || !institution || !message) {
      return NextResponse.json(
        { success: false, message: "Semua field (nama, email, telepon, instansi, pesan) wajib diisi." },
        { status: 400 }
      );
    }

    // In a real application, send an email or save to DB here
    console.log("Contact submission received:", { name, email, phone, institution, message });

    return NextResponse.json({
      success: true,
      message: "Terima kasih! Pesan Anda berhasil dikirim. Tim SIMGPS akan segera menghubungi Anda.",
    });
  } catch {
    return NextResponse.json({ success: false, message: "Terjadi kesalahan server. Silakan coba lagi." }, { status: 500 });
  }
}
