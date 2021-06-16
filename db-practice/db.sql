create table restaurants (
    id BIGSERIAL NOT NULL Primary key,
    name VARCHAR(50) NOT NULL,
    location VARCHAR(50) NOT NULL,
    price_range int NOT NULL check(price_range >=1 and price_range <=5)
);

create table reviews (
    id BIGSERIAL NOT NULL Primary key,
    restaurant_id BIGINT NOT NULL REFERENCES restaurants(id),
    name VARCHAR(50) NOT NULL,
    rating int NOT NULL check(rating >=1 and rating <= 5),
    review TEXT NOT NULL
);