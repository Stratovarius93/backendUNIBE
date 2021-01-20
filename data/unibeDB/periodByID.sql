-- --periodo
-- SELECT 
-- periodo.periodoID AS periodID, 
-- periodo.ciclo AS cycle,
-- carrera.carreraID AS careerID
-- FROM matricula, carrera, estudiante, periodo
-- WHERE matricula.estudianteID = @studentID
-- AND carrera.carreraID = matricula.carreraID
-- AND estudiante.estudianteID = matricula.estudianteID
-- AND periodo.carreraID = matricula.carreraID

--periodo
SELECT 
periodo.periodoID AS periodID, 
periodo.ciclo AS cycle,
carrera.carreraID AS careerID
FROM matricula, carrera, estudiante, periodo
WHERE matricula.estudianteID = @studentID
AND carrera.carreraID = matricula.carreraID
AND estudiante.estudianteID = matricula.estudianteID
AND periodo.carreraID = matricula.carreraID
ORDER BY periodo.periodoID DESC;
