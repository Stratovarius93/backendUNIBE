--studentbyID
SELECT 
estudiante.estudianteID AS studentID,
estudiante.nombre AS name, 
estudiante.apellido AS lastName, 
carrera.nombre AS career 
FROM estudiante, carrera, matricula 
WHERE matricula.estudianteID  = @studentID
AND estudiante.estudianteID = matricula.estudianteID
AND carrera.carreraID = matricula.carreraID
AND carrera.nombre != 'Inglés'
