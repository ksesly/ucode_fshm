USE ucode_web;

SELECT DISTINCT hero.id, hero.name AS hero_name FROM heroes hero
	JOIN heroes_teams ht ON hero.id = ht.hero_id
WHERE
	(SELECT COUNT(DISTINCT team_id) FROM heroes_teams WHERE hero_id = hero.id) >= 2 
	AND hero.race_id IS NOT NULL 
	AND hero.name LIKE '%a%'
	AND (hero.class_role = 'tankman' OR hero.class_role = 'healer') 
ORDER BY hero.id
LIMIT 1;
