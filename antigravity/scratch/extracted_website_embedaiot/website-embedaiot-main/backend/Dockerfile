FROM node:20

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .

# Hugging Face Spaces require the container to listen on port 7860
EXPOSE 7860
ENV PORT=7860

CMD ["node", "server.js"]
