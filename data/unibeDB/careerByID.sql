
--carrera
SELECT 
    carrera.nombre
FROM matricula, carrera
WHERE matricula.estudianteID = @studentID
AND carrera.carreraID = matricula.carreraID
