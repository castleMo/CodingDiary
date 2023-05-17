SELECT 
	e.name as Employee 
from 
	Employee AS em 
left join 
	Employee AS e 
ON
	e.managerId = em.id
WHERE
	e.salary > em.salary;