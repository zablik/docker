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
        libcurl4-openssl-dev \
        pkg-config \
        libssl-dev \
	&& docker-php-ext-install zip \
	&& docker-php-ext-install mysqli pdo pdo_mysql \
	&& docker-php-ext-configure intl \
    && docker-php-ext-install intl \
	&& docker-php-ext-install opcache \
	&& pecl install xdebug-2.9.6 mongodb \
    && docker-php-ext-enable xdebug mongodb

RUN apt-get -y install locales
RUN sed -i -e 's/# en_US.UTF-8 UTF-8/en_US.UTF-8 UTF-8/' /etc/locale.gen && locale-gen
ENV LANG en_US.UTF-8
ENV LANGUAGE en_US:en
ENV LC_ALL en_US.UTF-8

COPY --from=composer:latest /usr/bin/composer /usr/bin/composer
RUN composer self-update

RUN mkdir -p ~/tools && cd ~/tools
RUN curl -sL https://deb.nodesource.com/setup_14.x | bash -
RUN apt-get install -y nodejs
RUN npm install -g yarn

RUN groupadd -g 1000 www
RUN useradd -u 1000 -ms /bin/bash -g www www

WORKDIR /var/www/raceplace

RUN cd /var/www/raceplace
RUN yarn set version berry

USER www