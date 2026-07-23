-- Active: 1718260194363@@10.19.10.160@5432@sgicl
SELECT 'CREATE DATABASE SGICLTEST'
WHERE
    NOT EXISTS (
        SELECT
        FROM pg_database
        WHERE
            datname = 'SGICLTEST'
    );

CREATE TABLE IF NOT EXISTS cnic (
    cnic CHAR(15) PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    name_confidence FLOAT NOT NULL,
    all_details VARCHAR(1500) NOT NULL,
    cnic_img_path VARCHAR(100) NOT NULL
)

CREATE TABLE IF NOT EXISTS timestamp(
    id SERIAL PRIMARY KEY,
    cnic CHAR(15),
    timestamp TIMESTAMP NOT NULL,
    cam_id INT NOT NULL,
    FOREIGN KEY (cnic) REFERENCES cnic(cnic)
)

CREATE TABLE IF NOT EXISTS cam_type (
    type VARCHAR(20) PRIMARY KEY
)

CREATE TABLE IF NOT EXISTS location (
    id SERIAL PRIMARY KEY,
    coords VARCHAR(200) NOT NULL,
    description VARCHAR(200) NOT NULL
)

CREATE TABLE IF NOT EXISTS camera (
    id SERIAL PRIMARY KEY,
    name VARCHAR(20) NOT NULL,
    type VARCHAR(20) NOT NULL,
    location_id INT NOT NULL,
    crop VARCHAR(50) NOT NULL,
    cam_url VARCHAR(200) NOT NULL,
    thumbnail_path VARCHAR(200),
    FOREIGN KEY (location_id) REFERENCES location(id),
    FOREIGN KEY (type) REFERENCES cam_type(type)
)

DROP TABLE IF EXISTS camera;

ALTER TABLE timestamp RENAME cnic TO cnic_id;

DROP TRIGGER table_update_trigger ON timestamp;

CREATE TRIGGER table_update_trigger
AFTER INSERT
OR
UPDATE
OR DELETE ON timestamp FOR EACH STATEMENT
EXECUTE FUNCTION notify_table_update ();

INSERT INTO timestamp (cnic, timestamp) VALUES ('13101-3336126-9', now());

CREATE TABLE IF NOT EXISTS role (
    role CHAR(10) PRIMARY KEY
)

INSERT INTO role (role) VALUES ('admin');

CREATE TABLE IF NOT EXISTS "user" (
    username VARCHAR(200) PRIMARY KEY,
    name VARCHAR(100),
    password VARCHAR(200) NOT NULL,
    role CHAR(10),
    image_path VARCHAR(200)
)

CREATE OR REPLACE FUNCTION check_role() RETURNS TRIGGER AS $$
BEGIN
    IF NOT EXISTS (SELECT 1 FROM role WHERE role = NEW.role) THEN
        RAISE EXCEPTION 'Invalid role: %', NEW.role;
    END IF;
    RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER check_role_trigger BEFORE INSERT
OR
UPDATE ON "user" FOR EACH ROW
EXECUTE FUNCTION check_role ();

DROP TRIGGER check_role_trigger ON "user";

-- This will succeed
INSERT INTO
    "user" (
        username,
        name,
        password,
        role,
        image_path
    )
VALUES (
        'johndoe',
        'John Doe',
        'password123',
        'admin',
        '/images/johndoe.png'
    );

-- This will fail with an exception
INSERT INTO
    "user" (
        username,
        name,
        password,
        role,
        image_path
    )
VALUES (
        'janedoe',
        'Jane Doe',
        'password123',
        'inv',
        '/images/janedoe.png'
    );

CREATE OR REPLACE FUNCTION check_camera_type() RETURNS TRIGGER AS $$
BEGIN
    IF NOT EXISTS (SELECT 1 FROM cam_type WHERE type = NEW.type) THEN
        RAISE EXCEPTION 'Invalid camera type: %', NEW.type;
    END IF;
    RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER check_camera_type_trigger BEFORE INSERT
OR
UPDATE ON camera FOR EACH ROW
EXECUTE FUNCTION check_camera_type ();

-- update cam_id of timestamps where cam_id = 1 to 10

UPDATE timestamp SET cam_id = 10 WHERE cam_id = 1;

CREATE TABLE IF NOT EXISTS "number_plate_timestamp" (
    id SERIAL PRIMARY KEY,
    number_plate VARCHAR(20) NOT NULL,
    plate_confidence FLOAT NOT NULL,
    timestamp TIMESTAMP NOT NULL,
    img_path VARCHAR(100) NOT NULL,
    cam_id INT NOT NULL,
    FOREIGN KEY (cam_id) REFERENCES camera(id)
)

DROP TABLE IF EXISTS "number_plate_timestamp";

CREATE OR REPLACE FUNCTION notify_num_plate_table_update()
RETURNS TRIGGER
LANGUAGE plpgsql
AS $FUNCTION$
BEGIN
    PERFORM pg_notify('num_plate_table_update', 'Number plate table updated');
    RETURN NULL;
END;
$FUNCTION$;

CREATE TRIGGER notify_num_plate_table_update_trigger
AFTER INSERT
OR
UPDATE
OR DELETE ON timestamp FOR EACH STATEMENT
EXECUTE FUNCTION notify_num_plate_table_update ();