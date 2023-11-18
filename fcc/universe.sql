--
-- PostgreSQL database dump
--

-- Dumped from database version 12.9 (Ubuntu 12.9-2.pgdg20.04+1)
-- Dumped by pg_dump version 12.9 (Ubuntu 12.9-2.pgdg20.04+1)

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

DROP DATABASE universe;
--
-- Name: universe; Type: DATABASE; Schema: -; Owner: freecodecamp
--

CREATE DATABASE universe WITH TEMPLATE = template0 ENCODING = 'UTF8' LC_COLLATE = 'C.UTF-8' LC_CTYPE = 'C.UTF-8';


ALTER DATABASE universe OWNER TO freecodecamp;

\connect universe

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- Name: galaxy; Type: TABLE; Schema: public; Owner: freecodecamp
--

CREATE TABLE public.galaxy (
    galaxy_id integer NOT NULL,
    name character varying,
    int2 integer NOT NULL,
    int1 integer NOT NULL,
    "numeric" numeric,
    text text,
    boolean1 boolean,
    boolean2 boolean
);


ALTER TABLE public.galaxy OWNER TO freecodecamp;

--
-- Name: galaxy_id_seq; Type: SEQUENCE; Schema: public; Owner: freecodecamp
--

CREATE SEQUENCE public.galaxy_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.galaxy_id_seq OWNER TO freecodecamp;

--
-- Name: galaxy_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: freecodecamp
--

ALTER SEQUENCE public.galaxy_id_seq OWNED BY public.galaxy.galaxy_id;


--
-- Name: moon; Type: TABLE; Schema: public; Owner: freecodecamp
--

CREATE TABLE public.moon (
    moon_id integer NOT NULL,
    name character varying,
    int1 integer NOT NULL,
    int2 integer NOT NULL,
    "numeric" numeric,
    text text,
    boolean1 boolean,
    boolean2 boolean,
    planet_id integer
);


ALTER TABLE public.moon OWNER TO freecodecamp;

--
-- Name: moon_id_seq; Type: SEQUENCE; Schema: public; Owner: freecodecamp
--

CREATE SEQUENCE public.moon_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.moon_id_seq OWNER TO freecodecamp;

--
-- Name: moon_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: freecodecamp
--

ALTER SEQUENCE public.moon_id_seq OWNED BY public.moon.moon_id;


--
-- Name: planet; Type: TABLE; Schema: public; Owner: freecodecamp
--

CREATE TABLE public.planet (
    planet_id integer NOT NULL,
    name character varying,
    int2 integer NOT NULL,
    int1 integer NOT NULL,
    "numeric" numeric,
    boolean2 boolean,
    boolean1 boolean,
    star_id integer
);


ALTER TABLE public.planet OWNER TO freecodecamp;

--
-- Name: planet_id_seq; Type: SEQUENCE; Schema: public; Owner: freecodecamp
--

CREATE SEQUENCE public.planet_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.planet_id_seq OWNER TO freecodecamp;

--
-- Name: planet_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: freecodecamp
--

ALTER SEQUENCE public.planet_id_seq OWNED BY public.planet.planet_id;


--
-- Name: star; Type: TABLE; Schema: public; Owner: freecodecamp
--

CREATE TABLE public.star (
    star_id integer NOT NULL,
    name character varying,
    int1 integer NOT NULL,
    int2 integer NOT NULL,
    "numeric" numeric,
    text text,
    boolean2 boolean,
    boolean1 boolean,
    galaxy_id integer
);


ALTER TABLE public.star OWNER TO freecodecamp;

--
-- Name: star_id_seq; Type: SEQUENCE; Schema: public; Owner: freecodecamp
--

CREATE SEQUENCE public.star_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.star_id_seq OWNER TO freecodecamp;

--
-- Name: star_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: freecodecamp
--

ALTER SEQUENCE public.star_id_seq OWNED BY public.star.star_id;


--
-- Name: sun; Type: TABLE; Schema: public; Owner: freecodecamp
--

CREATE TABLE public.sun (
    sun_id integer NOT NULL,
    name character varying,
    boolean1 boolean NOT NULL,
    boolean2 boolean NOT NULL
);


ALTER TABLE public.sun OWNER TO freecodecamp;

--
-- Name: sun_id_seq; Type: SEQUENCE; Schema: public; Owner: freecodecamp
--

CREATE SEQUENCE public.sun_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.sun_id_seq OWNER TO freecodecamp;

--
-- Name: sun_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: freecodecamp
--

ALTER SEQUENCE public.sun_id_seq OWNED BY public.sun.sun_id;


--
-- Name: galaxy galaxy_id; Type: DEFAULT; Schema: public; Owner: freecodecamp
--

ALTER TABLE ONLY public.galaxy ALTER COLUMN galaxy_id SET DEFAULT nextval('public.galaxy_id_seq'::regclass);


--
-- Name: moon moon_id; Type: DEFAULT; Schema: public; Owner: freecodecamp
--

ALTER TABLE ONLY public.moon ALTER COLUMN moon_id SET DEFAULT nextval('public.moon_id_seq'::regclass);


--
-- Name: planet planet_id; Type: DEFAULT; Schema: public; Owner: freecodecamp
--

ALTER TABLE ONLY public.planet ALTER COLUMN planet_id SET DEFAULT nextval('public.planet_id_seq'::regclass);


--
-- Name: star star_id; Type: DEFAULT; Schema: public; Owner: freecodecamp
--

ALTER TABLE ONLY public.star ALTER COLUMN star_id SET DEFAULT nextval('public.star_id_seq'::regclass);


--
-- Name: sun sun_id; Type: DEFAULT; Schema: public; Owner: freecodecamp
--

ALTER TABLE ONLY public.sun ALTER COLUMN sun_id SET DEFAULT nextval('public.sun_id_seq'::regclass);


--
-- Data for Name: galaxy; Type: TABLE DATA; Schema: public; Owner: freecodecamp
--

INSERT INTO public.galaxy VALUES (1, 'galaxy', 2, 1, 3, 'text', false, true);
INSERT INTO public.galaxy VALUES (2, 'galaxy1', 2, 1, 3, 'text', false, true);
INSERT INTO public.galaxy VALUES (3, 'galaxy2', 2, 1, 3, 'text', false, true);
INSERT INTO public.galaxy VALUES (4, 'galaxy3', 2, 1, 3, 'text', false, true);
INSERT INTO public.galaxy VALUES (5, 'galaxy4', 2, 1, 3, 'text', false, true);
INSERT INTO public.galaxy VALUES (6, 'galaxy5', 2, 1, 3, 'text', false, true);


--
-- Data for Name: moon; Type: TABLE DATA; Schema: public; Owner: freecodecamp
--

INSERT INTO public.moon VALUES (1, 'moon', 1, 2, 3, 'text', false, true, 1);
INSERT INTO public.moon VALUES (2, 'moon1', 1, 2, 3, 'text', false, true, 1);
INSERT INTO public.moon VALUES (3, 'moon2', 1, 2, 3, 'text', false, true, 1);
INSERT INTO public.moon VALUES (4, 'moon3', 1, 2, 3, 'text', false, true, 1);
INSERT INTO public.moon VALUES (5, 'moon4', 1, 2, 3, 'text', false, true, 1);
INSERT INTO public.moon VALUES (6, 'moon5', 1, 2, 3, 'text', false, true, 1);
INSERT INTO public.moon VALUES (7, 'moon6', 1, 2, 3, 'text', false, true, 1);
INSERT INTO public.moon VALUES (8, 'moon7', 1, 2, 3, 'text', false, true, 1);
INSERT INTO public.moon VALUES (9, 'moon8', 1, 2, 3, 'text', false, true, 1);
INSERT INTO public.moon VALUES (10, 'moon9', 1, 2, 3, 'text', false, true, 1);
INSERT INTO public.moon VALUES (11, 'moon10', 1, 2, 3, 'text', false, true, 1);
INSERT INTO public.moon VALUES (12, 'moon11', 1, 2, 3, 'text', false, true, 1);
INSERT INTO public.moon VALUES (13, 'moon12', 1, 2, 3, 'text', false, true, 1);
INSERT INTO public.moon VALUES (14, 'moon13', 1, 2, 3, 'text', false, true, 1);
INSERT INTO public.moon VALUES (15, 'moon14', 1, 2, 3, 'text', false, true, 1);
INSERT INTO public.moon VALUES (16, 'moon15', 1, 2, 3, 'text', false, true, 1);
INSERT INTO public.moon VALUES (17, 'moon16', 1, 2, 3, 'text', false, true, 1);
INSERT INTO public.moon VALUES (18, 'moon17', 1, 2, 3, 'text', false, true, 1);
INSERT INTO public.moon VALUES (19, 'moon18', 1, 2, 3, 'text', false, true, 1);
INSERT INTO public.moon VALUES (20, 'moon19', 1, 2, 3, 'text', false, true, 1);


--
-- Data for Name: planet; Type: TABLE DATA; Schema: public; Owner: freecodecamp
--

INSERT INTO public.planet VALUES (1, 'planet', 2, 1, 3, true, false, 2);
INSERT INTO public.planet VALUES (2, 'planet1', 2, 1, 3, true, false, 2);
INSERT INTO public.planet VALUES (3, 'planet2', 2, 1, 3, true, false, 2);
INSERT INTO public.planet VALUES (4, 'planet3', 2, 1, 3, true, false, 2);
INSERT INTO public.planet VALUES (5, 'planet4', 2, 1, 3, true, false, 2);
INSERT INTO public.planet VALUES (6, 'planet5', 2, 1, 3, true, false, 2);
INSERT INTO public.planet VALUES (7, 'planet6', 2, 1, 3, true, false, 2);
INSERT INTO public.planet VALUES (8, 'planet7', 2, 1, 3, true, false, 2);
INSERT INTO public.planet VALUES (9, 'planet8', 2, 1, 3, true, false, 2);
INSERT INTO public.planet VALUES (10, 'planet9', 2, 1, 3, true, false, 2);
INSERT INTO public.planet VALUES (11, 'planet10', 2, 1, 3, true, false, 2);
INSERT INTO public.planet VALUES (12, 'planet11', 2, 1, 3, true, false, 2);


--
-- Data for Name: star; Type: TABLE DATA; Schema: public; Owner: freecodecamp
--

INSERT INTO public.star VALUES (2, 'star', 1, 2, 3, 'text', true, false, 1);
INSERT INTO public.star VALUES (4, 'star1', 1, 2, 3, 'text', true, false, 1);
INSERT INTO public.star VALUES (5, 'star2', 1, 2, 3, 'text', true, false, 1);
INSERT INTO public.star VALUES (6, 'star3', 1, 2, 3, 'text', true, false, 1);
INSERT INTO public.star VALUES (7, 'star4', 1, 2, 3, 'text', true, false, 1);
INSERT INTO public.star VALUES (8, 'star5', 1, 2, 3, 'text', true, false, 1);


--
-- Data for Name: sun; Type: TABLE DATA; Schema: public; Owner: freecodecamp
--

INSERT INTO public.sun VALUES (1, 'sun', false, true);
INSERT INTO public.sun VALUES (2, 'sun1', false, true);
INSERT INTO public.sun VALUES (3, 'sun2', false, true);


--
-- Name: galaxy_id_seq; Type: SEQUENCE SET; Schema: public; Owner: freecodecamp
--

SELECT pg_catalog.setval('public.galaxy_id_seq', 6, true);


--
-- Name: moon_id_seq; Type: SEQUENCE SET; Schema: public; Owner: freecodecamp
--

SELECT pg_catalog.setval('public.moon_id_seq', 20, true);


--
-- Name: planet_id_seq; Type: SEQUENCE SET; Schema: public; Owner: freecodecamp
--

SELECT pg_catalog.setval('public.planet_id_seq', 12, true);


--
-- Name: star_id_seq; Type: SEQUENCE SET; Schema: public; Owner: freecodecamp
--

SELECT pg_catalog.setval('public.star_id_seq', 8, true);


--
-- Name: sun_id_seq; Type: SEQUENCE SET; Schema: public; Owner: freecodecamp
--

SELECT pg_catalog.setval('public.sun_id_seq', 3, true);


--
-- Name: galaxy galaxy_pkey; Type: CONSTRAINT; Schema: public; Owner: freecodecamp
--

ALTER TABLE ONLY public.galaxy
    ADD CONSTRAINT galaxy_pkey PRIMARY KEY (galaxy_id);


--
-- Name: moon moon_pkey; Type: CONSTRAINT; Schema: public; Owner: freecodecamp
--

ALTER TABLE ONLY public.moon
    ADD CONSTRAINT moon_pkey PRIMARY KEY (moon_id);


--
-- Name: planet planet_pkey; Type: CONSTRAINT; Schema: public; Owner: freecodecamp
--

ALTER TABLE ONLY public.planet
    ADD CONSTRAINT planet_pkey PRIMARY KEY (planet_id);


--
-- Name: star star_pkey; Type: CONSTRAINT; Schema: public; Owner: freecodecamp
--

ALTER TABLE ONLY public.star
    ADD CONSTRAINT star_pkey PRIMARY KEY (star_id);


--
-- Name: sun sun_pkey; Type: CONSTRAINT; Schema: public; Owner: freecodecamp
--

ALTER TABLE ONLY public.sun
    ADD CONSTRAINT sun_pkey PRIMARY KEY (sun_id);


--
-- Name: galaxy unique_galaxy_name; Type: CONSTRAINT; Schema: public; Owner: freecodecamp
--

ALTER TABLE ONLY public.galaxy
    ADD CONSTRAINT unique_galaxy_name UNIQUE (name);


--
-- Name: moon unique_moon_name; Type: CONSTRAINT; Schema: public; Owner: freecodecamp
--

ALTER TABLE ONLY public.moon
    ADD CONSTRAINT unique_moon_name UNIQUE (name);


--
-- Name: planet unique_planet_name; Type: CONSTRAINT; Schema: public; Owner: freecodecamp
--

ALTER TABLE ONLY public.planet
    ADD CONSTRAINT unique_planet_name UNIQUE (name);


--
-- Name: star unique_star_name; Type: CONSTRAINT; Schema: public; Owner: freecodecamp
--

ALTER TABLE ONLY public.star
    ADD CONSTRAINT unique_star_name UNIQUE (name);


--
-- Name: sun unique_sun_name; Type: CONSTRAINT; Schema: public; Owner: freecodecamp
--

ALTER TABLE ONLY public.sun
    ADD CONSTRAINT unique_sun_name UNIQUE (name);


--
-- Name: star galaxy_id; Type: FK CONSTRAINT; Schema: public; Owner: freecodecamp
--

ALTER TABLE ONLY public.star
    ADD CONSTRAINT galaxy_id FOREIGN KEY (galaxy_id) REFERENCES public.galaxy(galaxy_id);


--
-- Name: moon planet_id; Type: FK CONSTRAINT; Schema: public; Owner: freecodecamp
--

ALTER TABLE ONLY public.moon
    ADD CONSTRAINT planet_id FOREIGN KEY (planet_id) REFERENCES public.planet(planet_id);


--
-- Name: planet star_id; Type: FK CONSTRAINT; Schema: public; Owner: freecodecamp
--

ALTER TABLE ONLY public.planet
    ADD CONSTRAINT star_id FOREIGN KEY (star_id) REFERENCES public.star(star_id);


--
-- PostgreSQL database dump complete
--

