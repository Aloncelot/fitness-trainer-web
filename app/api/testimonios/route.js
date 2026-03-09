import { NextResponse } from 'next/server';
import { conectarDB } from '@/lib/db';
import sql from 'mssql';

// GET: Obtener testimonios aprobados
export async function GET() {
    try {
        const pool = await conectarDB();
        const result = await pool.request()
            .query('SELECT * FROM Testimonios WHERE Aprobado = 1 ORDER BY Fecha DESC');
        
        return NextResponse.json(result.recordset);
    } catch (error) {
        return NextResponse.json({ error: 'Error al obtener testimonios' }, { status: 500 });
    }
}

// POST: Enviar un nuevo testimonio
export async function POST(request) {
    try {
        const { nombre, comentario, rating, modalidad } = await request.json();
        const pool = await conectarDB();
        
        if (!pool) throw new Error("No se pudo establecer conexión con la base de datos");

        await pool.request()
            .input('nombre', sql.NVarChar, nombre)
            .input('comentario', sql.NVarChar, comentario)
            .input('rating', sql.Int, rating)
            .input('modalidad', sql.NVarChar, modalidad)
            .query(`
                INSERT INTO Testimonios (Nombre, Comentario, Calificacion, Modalidad, Aprobado)
                VALUES (@nombre, @comentario, @rating, @modalidad, 0)
            `);

        return NextResponse.json({ message: 'Testimonio enviado con éxito' }, { status: 201 });
    } catch (error) {
        console.error("DETALLE DEL ERROR EN API:", error.message);
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}