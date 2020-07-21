FROM php:7.4-fpm

RUN apt-get update && apt-get install -y \
        libzip-dev \
        zip \
		libicu-dev \
        wget \
        unzip \
        git \
        cron \
        vim \
	&& docker-php-ext-install zip \
	&& docker-php-ext-install mysqli pdo pdo_mysql \
	&& docker-php-ext-configure intl \
    && docker-php-ext-install intl \
	&& docker-php-ext-install opcache \
	&& pecl install xdebug-2.9.6 \
    && docker-php-ext-enable xdebug


COPY --from=composer:latest /usr/bin/composer /usr/bin/composer

RUN groupadd -g 1000 www
RUN useradd -u 1000 -ms /bin/bash -g www www

USER www

WORKDIR /var/www/raceplace