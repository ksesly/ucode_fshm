INSERT INTO powers (name, type) VALUES
    ('bloody fist', 'attack'),
    ('iron shield', 'defense');

INSERT INTO heroes_powers (hero_id, power_id, power_points) VALUES
    (1, 2, 200), 
    (2, 1, 110);

INSERT INTO races (name) VALUES
    ('Human'),
    ('Kree');
    
INSERT INTO teams (name) VALUES
    ('Avengers'),
    ('Hydra');

INSERT INTO heroes_teams (hero_id, team_id)
VALUES
    (1, 1), 
    (2, 1), 
    (3, 1), 
    (4, 1), 
    (5, 2);
    