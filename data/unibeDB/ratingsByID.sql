--calificaciones
SELECT
periodo.periodoID AS periodID,
asignatura.nombre AS signatureName,
calificaciones.matriculaID AS registrationID,
calificaciones.asignaturaID AS signatureID,
CAST(calificaciones.aporte1 as decimal(18,2)) AS ap1,
CAST(calificaciones.aporte2 as decimal(18,2)) AS ap2,
CAST(calificaciones.aporte3 as decimal(18,2)) AS ap3,
CAST(calificaciones.aporteFinal as decimal(18,2)) AS finalRating,
calificaciones.inasistencia1 AS in1,
calificaciones.inasistencia2 AS in2,
calificaciones.inasistencia3 AS in3,
calificaciones.inasistenciaFinal AS finalIn,
calificaciones.supletorio AS supplementaryExam,
calificaciones.estado AS stateSignature
FROM matricula, carrera, estudiante, periodo, asignatura, calificaciones
WHERE matricula.estudianteID = @studentID
AND carrera.carreraID = matricula.carreraID
AND estudiante.estudianteID = matricula.estudianteID
AND periodo.carreraID = matricula.carreraID
AND asignatura.periodoID = periodo.periodoID
AND calificaciones.asignaturaID = asignatura.asignaturaID
AND calificaciones.matriculaID = matricula.matriculaID
