// ver todos los pois
const veractividades = async (req, res) => {
  try {
    const resultado = await db.query('SELECT * FROM sis_catastro_verificacion.tbl_actividad ORDER BY id_actividad');

    if (resultado.rows.length === 0) {
      return res.status(200).json({ mensaje: 'La tabla POIs está vacía', datos: [] });
    }

    res.status(200).json(resultado.rows);
  } catch (error) {
    console.error('Error al obtener la lista de POIs:', error);
    res.status(500).json({ error: 'Error al obtener la lista de POIs' });
  }
};

// ver POI por id
const verActividad = async (req, res) => {
  try {
    const { codigo } = req.params;

    const resultado = await db.query('SELECT * FROM sis_catastro_verificacion.tbl_actividad WHERE codigo = $1', [codigo]);

    if (resultado.rows.length === 0) {
      return res.status(404).json({ error: 'POI no encontrado' });
    }

    res.status(200).json(resultado.rows[0]);
  } catch (error) {
    console.error('Error al obtener el POI:', error);
    res.status(500).json({ error: 'Error al obtener el POI' });
  }
};


// Crear un nuevo POI
const crearActividad = async (req, res) => {
  try {
    const { codigo, nombre, descripcion, fecha_inicio, fecha_fin, estado, responsable } = req.body;

    const resultado = await db.query(
      'INSERT INTO sis_catastro_verificacion.tbl_proyectos (codigo, nombre, descripcion, fecha_inicio, fecha_fin, estado, responsable) VALUES ($1, $2, $3, $4, $5, $6, $7) RETURNING *',
      [codigo, nombre, descripcion, fecha_inicio, fecha_fin, estado, responsable]
    );

    res.status(201).json(resultado.rows[0]);
  } catch (error) {
    console.error('Error al insertar POI:', error);
    res.status(500).json({ error: 'Error al insertar el POI' });
  }
};


// Actualizar un POI existente
const actualizarActividad = async (req, res) => {
  try {
    const { id } = req.params;
    const { nombre, descripcion, fecha_inicio, fecha_fin, estado, responsable } = req.body;

    const resultado = await db.query(
      'UPDATE sis_catastro_verificacion.tbl_proyectos SET nombre = $1, descripcion = $2, fecha_inicio = $3, fecha_fin = $4, estado = $5, responsable = $6 WHERE id = $7 RETURNING *',
      [ nombre, descripcion, fecha_inicio, fecha_fin, estado, responsable, id]
    );

    if (resultado.rowCount === 0) {
      return res.status(404).json({ error: 'POI no encontrado' });
    }

    res.status(200).json(resultado.rows[0]);
  } catch (error) {
    console.error('Error al actualizar POI:', error);
    res.status(500).json({ error: 'Error al actualizar el POI' });
  }
};