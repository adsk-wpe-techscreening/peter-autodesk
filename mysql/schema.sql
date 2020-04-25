
-- -----------------------------------------------------
-- Schema librarydb
-- -----------------------------------------------------
DROP SCHEMA IF EXISTS `librarydb` ;

-- -----------------------------------------------------
-- Schema librarydb
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `librarydb` DEFAULT CHARACTER SET utf8 ;
USE `librarydb` ;

-- -----------------------------------------------------
-- Table `librarydb`.`authors`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `librarydb`.`authors` ;

CREATE TABLE IF NOT EXISTS `librarydb`.`authors` (
  `author_id` INT NOT NULL AUTO_INCREMENT,
  `author_name` VARCHAR(200) NULL,
  PRIMARY KEY (`author_id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `librarydb`.`books`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `librarydb`.`books` ;

CREATE TABLE IF NOT EXISTS `librarydb`.`books` (
  `book_id` INT NOT NULL AUTO_INCREMENT,
  `isbn_number` VARCHAR(20) NULL,
  `book_title` VARCHAR(200) NOT NULL,
  `available` TINYINT NULL DEFAULT 0,
  `year_published` INT NULL,
  `author_id` INT NOT NULL,
  `genre_id` INT NOT NULL,
  `book_requested` TINYINT NULL DEFAULT 0,
  PRIMARY KEY (`book_id`),
  INDEX `fk_books_authors1_idx` (`author_id` ASC) VISIBLE,
  INDEX `fk_books_genres1_idx` (`genre_id` ASC) VISIBLE,
  CONSTRAINT `fk_books_authors1`
    FOREIGN KEY (`author_id`)
    REFERENCES `librarydb`.`authors` (`author_id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_books_genres1`
    FOREIGN KEY (`genre_id`)
    REFERENCES `librarydb`.`genres` (`genre_id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `librarydb`.`genres`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `librarydb`.`genres` ;

CREATE TABLE IF NOT EXISTS `librarydb`.`genres` (
  `genre_id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(100) NOT NULL,
  PRIMARY KEY (`genre_id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `librarydb`.`user_interests`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `librarydb`.`user_interests` ;

CREATE TABLE IF NOT EXISTS `librarydb`.`user_interests` (
  `user_id` INT NOT NULL,
  `author_id` INT NULL,
  `book_id` INT NULL,
  `user_interest_id` INT NOT NULL AUTO_INCREMENT,
  `genre_id` INT NOT NULL,
  INDEX `fk_user_interests_USER_idx` (`user_id` ASC) VISIBLE,
  INDEX `fk_user_interests_authors1_idx` (`author_id` ASC) VISIBLE,
  INDEX `fk_user_interests_books1_idx` (`book_id` ASC) VISIBLE,
  PRIMARY KEY (`user_interest_id`),
  INDEX `fk_user_interests_genres1_idx` (`genre_id` ASC) VISIBLE,
  CONSTRAINT `fk_user_interests_USER`
    FOREIGN KEY (`user_id`)
    REFERENCES `librarydb`.`users` (`user_id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_user_interests_books1`
    FOREIGN KEY (`book_id`)
    REFERENCES `librarydb`.`books` (`book_id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_user_interests_genres1`
    FOREIGN KEY (`genre_id`)
    REFERENCES `librarydb`.`genres` (`genre_id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `librarydb`.`users`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `librarydb`.`users` ;

CREATE TABLE IF NOT EXISTS `librarydb`.`users` (
  `user_id` INT NOT NULL AUTO_INCREMENT,
  `first_name` VARCHAR(1024) NOT NULL,
  `last_name` VARCHAR(100) NOT NULL,
  `email` VARCHAR(100) NOT NULL,
  `phone` INT NULL,
  `profile_photo_url` VARCHAR(1024) NULL,
  PRIMARY KEY (`user_id`))
ENGINE = InnoDB;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
