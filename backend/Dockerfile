FROM php:8.3-cli

# Installa librerie necessarie per SQLite
RUN apt-get update && apt-get install -y \
    libsqlite3-dev git unzip \
 && docker-php-ext-install pdo_sqlite \
 && rm -rf /var/lib/apt/lists/*

WORKDIR /var/www

# Espone la porta di Laravel
EXPOSE 8000

# Comando di default: avvia il server Laravel
CMD ["php", "artisan", "serve", "--host=0.0.0.0", "--port=8000"]
