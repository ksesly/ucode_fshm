USE ucode_web;

SELECT heroes.name AS name, teams.name AS team FROM heroes
LEFT JOIN heroes_teams ON heroes.id = heroes_teams.hero_id
LEFT JOIN teams ON heroes_teams.team_id = teams.id;

SELECT heroes.name AS hero_name, powers.name AS power_name FROM heroes
CROSS JOIN powers;

SELECT heroes.name AS name, teams.name AS team, powers.name AS power FROM heroes
JOIN heroes_teams ON heroes.id = heroes_teams.hero_id
JOIN teams ON heroes_teams.team_id = teams.id
JOIN heroes_powers ON heroes.id = heroes_powers.hero_id
JOIN powers ON heroes_powers.power_id = powers.id;