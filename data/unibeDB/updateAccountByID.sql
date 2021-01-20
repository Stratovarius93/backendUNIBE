UPDATE [accounts] SET email = @email 
WHERE accounts.studentID = @studentID
SELECT 
*
FROM 
[accounts] WHERE accounts.studentID = @studentID
