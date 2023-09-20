USE ucode_web;

SELECT hero_id, SUM(power_points) AS power FROM heroes_powers
GROUP BY hero_id
ORDER BY power DESC, hero_id ASC
LIMIT 1;

SELECT hero_id, SUM(power_points) AS defense FROM heroes_powers
WHERE power_id IN (SELECT id FROM powers WHERE type = 'defense')
GROUP BY hero_id
ORDER BY defense ASC, hero_id ASC
LIMIT 1;

SELECT hero.id, hero.name AS hero_name, SUM(hp.power_points) AS power FROM heroes hero
    JOIN heroes_powers hp ON hero.id = hp.hero_id
    JOIN heroes_teams ht ON hero.id = ht.hero_id
    JOIN teams t ON ht.team_id = t.id
WHERE t.name = 'Avengers' AND hero.name != 'Scarlet Witch'
GROUP BY hero.id
ORDER BY power DESC;


SELECT team.name AS team_name, SUM(hp.power_points) AS team_power
FROM teams team
    LEFT JOIN heroes_teams ht ON team.id = ht.team_id
    LEFT JOIN heroes_powers hp ON ht.hero_id = hp.hero_id
GROUP BY team.name
ORDER BY team_power;