# Usar uma imagem base do Node.js
FROM node:14

# Criar e definir o diretório de trabalho no contêiner
WORKDIR /app

# Copiar package.json e package-lock.json
COPY package*.json ./

# Instalar as dependências do projeto
RUN npm install

# Copiar o restante do código da aplicação
COPY . .

# Expor a porta que a aplicação usará
EXPOSE 3000

# Definir o comando para rodar a aplicação
CMD ["node", "index.js"]
