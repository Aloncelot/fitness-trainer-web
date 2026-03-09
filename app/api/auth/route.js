import { NextResponse } from 'next/server';

export async function POST(request) {
  try {
    const { password } = await request.json();

    // Comparamos con la variable de entorno
    if (password === process.env.ADMIN_PASSWORD) {
      const response = NextResponse.json({ success: true });
      
      // Creamos la cookie de seguridad que expira en 8 horas
      response.cookies.set({
        name: 'admin_auth',
        value: 'autenticado',
        httpOnly: true, // Evita ataques XSS
        secure: process.env.NODE_ENV === 'production',
        path: '/',
        maxAge: 60 * 60 * 8, // 8 horas
      });

      return response;
    }

    return NextResponse.json({ error: 'Contraseña incorrecta' }, { status: 401 });
  } catch (error) {
    return NextResponse.json({ error: 'Error en el servidor' }, { status: 500 });
  }
}