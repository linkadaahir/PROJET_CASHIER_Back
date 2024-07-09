# Utilisation d'une image Node.js comme base
FROM node:14

# Création du répertoire de travail
WORKDIR /usr/src/app

# Installation des dépendances
COPY package*.json ./
RUN npm install

# Copie du code source
COPY . .

# Exposition du port
EXPOSE 8080

# Commande pour démarrer l'application
CMD ["npm", "run", "serve"]