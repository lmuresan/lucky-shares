// const express = require("express");
import express from 'express';
import cors from "cors";
import { promises as fs } from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const PORT = 3000;

const app = express();

app.use(cors());

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.get("/api/games", async (req, res) => {
  const filePath = path.join(__dirname, '../data.json');

  try {
    const data = await fs.readFile(filePath, 'utf8');
    const users = JSON.parse(data);
    res.json(users);
  } catch (err) {
    res.status(500).json({ error: 'Failed to read or parse data' });
  }
});

app.all('*', function (req, res) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Content-Type,Content-Length, Authorization, Accept,X-Requested-With");
  res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
});

app.listen(PORT, () => {
  console.log("Server started on port: " + PORT);
});
