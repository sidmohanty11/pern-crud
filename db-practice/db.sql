create table restaurants (
    id BIGSERIAL NOT NULL Primary key,
    name VARCHAR(50) NOT NULL,
    location VARCHAR(50) NOT NULL,
    price_range int NOT NULL check(price_range >=1 and price_range <=5)
);