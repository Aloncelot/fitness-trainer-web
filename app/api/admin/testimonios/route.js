import { NextResponse } from 'next/server';
import { conectarDB } from '@/lib/db';
import sql from 'mssql';

// GET: Traer TODOS los testimonios (sin importar si están aprobados o no)
export async function GET() {
    try {
        const pool = await conectarDB();
        const result = await pool.request()
            .query('SELECT * FROM Testimonios ORDER BY Fecha DESC');
        
        return NextResponse.json(result.recordset);
    } catch (error) {
        return NextResponse.json({ error: 'Error al obtener testimonios' }, { status: 500 });
    }
}

// PATCH: Actualizar el estado (Aprobar or hide)
export async function PATCH(request) {
    try {
        const { id, aprobado } = await request.json();
        const pool = await conectarDB();

        await pool.request()
            .input('id', sql.Int, id)
            .input('aprobado', sql.Bit, aprobado ? 1 : 0)
            .query('UPDATE Testimonios SET Aprobado = @aprobado WHERE Id = @id');

        return NextResponse.json({ message: 'Estado actualizado correctamente' });
    } catch (error) {
        return NextResponse.json({ error: 'Error al actualizar' }, { status: 500 });
    }
}

// DELETE: Borrar el testimonio de la base de datos
export async function DELETE(request) {
    try {
        const { id } = await request.json();
        const pool = await conectarDB();

        await pool.request()
            .input('id', sql.Int, id)
            .query('DELETE FROM Testimonios WHERE Id = @id');

        return NextResponse.json({ message: 'Testimonio eliminado permanentemente' });
    } catch (error) {
        return NextResponse.json({ error: 'Error al eliminar' }, { status: 500 });
    }
}