-- ultimo periodo
SELECT 
matricula.matriculaID AS registrationID,
matricula.carreraID AS careerID,
carrera.nombre AS career
FROM matricula, carrera
WHERE matricula.estudianteID = @studentID
AND carrera.carreraID = matricula.carreraID
