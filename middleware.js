import { NextResponse } from 'next/server';

export function middleware(request) {
  // Verificamos si existe la cookie de sesión del admin
  const cookieAuth = request.cookies.get('admin_auth');
  const urlActual = request.nextUrl.pathname;

  // Si intenta entrar a /admin (pero no al login) y NO tiene la cookie...
  if (urlActual.startsWith('/admin') && !urlActual.startsWith('/admin/login')) {
    if (!cookieAuth || cookieAuth.value !== 'autenticado') {
      // ...lo pateamos de vuelta a la pantalla de login
      return NextResponse.redirect(new URL('/admin/login', request.url));
    }
  }

  return NextResponse.next();
}

// Configuración para que el middleware solo vigile las rutas de admin
export const config = {
  matcher: '/admin/:path*',
};