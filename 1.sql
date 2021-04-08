SELECT
Child."ID", Child."UserName", Parent."UserName" AS "ParentUserName" 
FROM "USER" Child
LEFT JOIN "USER" Parent ON Child."Parent" = Parent."ID"
ORDER BY Child."ID" ;