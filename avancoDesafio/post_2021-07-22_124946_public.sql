DROP TABLE IF EXISTS post;
CREATE TABLE post(
    id integer PRIMARY KEY,
    title character varying,
    subTitle character varying,
    imageUrl text,
    content text
);
INSERT INTO post(id,title,subTitle,imageUrl,content) VALUES(1,'some title','some sub title',NULL,'some content goes here'),(2,'some title','some sub title',NULL,'some content goes here'),(3,'some title','some sub title',NULL,'some content goes here'),(4,'some title','some sub title',NULL,'some content goes here'),(5,'some title','some sub title',NULL,'some content goes here'),(6,'some title','some sub title',NULL,'some content goes here');