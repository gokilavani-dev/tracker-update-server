import express from "express";
import path from "path";

const app = express();
const PORT = process.env.PORT || 3000;

app.get("/version", (req, res) => {
  res.sendFile(path.join(process.cwd(), "public/version.json"));
});

app.get("/apk", (req, res) => {
  res.download(
    path.join(process.cwd(), "public/app-release.apk"),
    "app-release.apk"
  );
});

app.listen(PORT, () => {
  console.log("Update server running");
});
