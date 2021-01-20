
--carrera
SELECT
    carrera.carreraID,
    carrera.nombre AS carrera
FROM carrera
WHERE carrera.carreraID = @studentID
