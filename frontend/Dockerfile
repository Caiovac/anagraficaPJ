FROM node:20-alpine

WORKDIR /app

# Copio solo package per poter fare install prima (caching)
COPY package*.json ./

RUN npm install

# Copio il resto del codice
COPY . .

EXPOSE 5173

# Avvio Vite dev server, esposto su tutte le interfacce
CMD ["npm", "run", "dev", "--", "--host", "0.0.0.0", "--port", "5173"]
