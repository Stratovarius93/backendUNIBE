INSERT INTO [accounts] VALUES (
    @studentID,
    @name,
    @lastName,
    @career,
    @email
)
SELECT SCOPE_IDENTITY() AS studentID
