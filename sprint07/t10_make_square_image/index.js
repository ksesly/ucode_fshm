const express = require("express");
const fs = require("fs");
const request = require("request");
const sharp = require("sharp");

const app = express();

const host = 'localhost';
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/public", express.static(__dirname + "/"));

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

app.get("/upload", async (req, res) => {
  const path = "./image.png";
  let url = req.query.url;
  request.head(url, async (err, response, body) => {
    request(url)
      .pipe(fs.createWriteStream(path))
      .on("close", async () => {
        let colors = [
          [
            [1, 0, 0],
            [0, 0, 0],
            [0, 0, 0],
          ],
          [
            [0, 0, 0],
            [1, 0, 0],
            [0, 0, 0],
          ],
          [
            [0, 0, 0],
            [0, 0, 0],
            [1, 0, 0],
          ],
        ];
        for (let i = 1; i <= 4; i++) {
          let img = sharp("image.png");
          if (i > 1) {
            img = img.recomb(colors[i - 2]);
          }
          img.resize(250, 250).toFile(`image${i}.png`, (err, info) => {
            if (i === 4) {
              res.json({
                img: [`image1.png`, `image2.png`, `image3.png`, `image4.png`],
              });
            }
          });
        }
      });
  });
});

app.get('/style.css', (req, res) => {
    res.sendFile(__dirname + '/style.css');
});

app.listen(PORT, () => {
    console.log(`Server start on http://${host}:${PORT}`);
});
