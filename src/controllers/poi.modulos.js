const db = require('../db/index');

// Ver todos los módulos
const verModulos = async (req, res) => {
  try {
    const resultado = await db.query(
      'SELECT * FROM sis_catastro_verificacion.tbl_modulo ORDER BY codigo'
    );

    if (resultado.rows.length === 0) {
      return res.status(200).json({ mensaje: 'No hay módulos registrados', datos: [] });
    }

    res.status(200).json(resultado.rows);
  } catch (error) {
    console.error('Error al obtener módulos:', error);
    res.status(500).json({ error: 'Error al obtener los módulos' });
  }
};

// Ver un módulo por código
const verModulo = async (req, res) => {
  try {
    const { codigo } = req.params;

    const resultado = await db.query(
      'SELECT * FROM sis_catastro_verificacion.tbl_modulo WHERE codigo = $1',
      [codigo]
    );

    if (resultado.rows.length === 0) {
      return res.status(404).json({ error: 'Módulo no encontrado' });
    }

    res.status(200).json(resultado.rows[0]);
  } catch (error) {
    console.error('Error al obtener módulo:', error);
    res.status(500).json({ error: 'Error al obtener el módulo' });
  }
};

// Crear un nuevo módulo
const crearModulo = async (req, res) => {
  try {
    const { codigo, descripcion, codigo_proyecto } = req.body;

    const resultado = await db.query(
      `INSERT INTO sis_catastro_verificacion.tbl_modulo 
      (codigo, descripcion, codigo_proyecto) 
      VALUES ($1, $2, $3) RETURNING *`,
      [codigo, descripcion, codigo_proyecto]
    );

    res.status(201).json(resultado.rows[0]);
  } catch (error) {
    console.error('Error al crear módulo:', error);
    res.status(500).json({ error: 'Error al crear el módulo' });
  }
};

// Actualizar un módulo
const actualizarModulo = async (req, res) => {
  try {
    const { codigo } = req.params;
    const { descripcion, codigo_proyecto } = req.body;

    const resultado = await db.query(
      `UPDATE sis_catastro_verificacion.tbl_modulo 
      SET descripcion = $1, codigo_proyecto = $2 
      WHERE codigo = $3 RETURNING *`,
      [descripcion, codigo_proyecto, codigo]
    );

    if (resultado.rowCount === 0) {
      return res.status(404).json({ error: 'Módulo no encontrado' });
    }

    res.status(200).json(resultado.rows[0]);
  } catch (error) {
    console.error('Error al actualizar módulo:', error);
    res.status(500).json({ error: 'Error al actualizar el módulo' });
  }
};

module.exports = {
  verModulos,
  verModulo,
  crearModulo,
  actualizarModulo
};




