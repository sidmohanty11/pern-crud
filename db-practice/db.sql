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

select trunc(avg(rating), 2) as average_rating from reviews where restaurant_id = 1;
select count(rating) from reviews where restaurant_id = 1;
select location, count(location) from restaurants group by location;
select restaurant_id, count(restaurant_id) from reviews group by restaurant_id;
select * from restaurants inner join reviews on restaurants.id = reviews.restaurant_id;
select * from restaurants left join reviews on restaurants.id = reviews.restaurant_id;


-- this is the one
select * from restaurants left join (select restaurant_id, count(*), trunc(avg(rating),1) as average_rating from reviews group by restaurant_id) reviews on restaurants.id = reviews.restaurant_id;