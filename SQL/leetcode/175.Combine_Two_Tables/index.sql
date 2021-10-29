SELECT 
	p.firstName,
    p.lastName,
    a.city,
    a.state
FROM 
	Person AS p
left join 
	Address AS a
on p.personId = a.personId;