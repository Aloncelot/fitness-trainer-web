import { NextResponse } from 'next/server';

export async function POST() {
  try {
    const response = NextResponse.json({ success: true, message: 'Sesión cerrada' });
    
    // Sobrescribimos la cookie actual con una que ya expiró
    response.cookies.set({
      name: 'admin_auth',
      value: '',
      expires: new Date(0), // El truco para borrarla: mandarla a 1970
      path: '/',
    });

    return response;
  } catch (error) {
    return NextResponse.json({ error: 'Error al cerrar sesión' }, { status: 500 });
  }
}