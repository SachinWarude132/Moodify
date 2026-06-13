const songModel = require("../models/song.model");
const id3 = require("node-id3");
const StorageService = require("../services/storage.services");

async function uploadSong(req, res) {
  try {
    const { mood } = req.body;

    if (!req.file) {
      return res.status(400).json({
        message: "Song file is required",
      });
    }

    if (!mood) {
      return res.status(400).json({
        message: "Mood is required",
      });
    }

    const songBuffer = req.file.buffer;

    const tags = id3.read(songBuffer);

    console.log("TAGS:", tags);

    const title =
      tags.title || req.file.originalname.replace(".mp3", "");

    const [songFile, posterFile] = await Promise.all([
      StorageService.uploadFile({
        buffer: songBuffer,
        filename: `${title}.mp3`,
        folder: "cohrt-2/modify/songs",
      }),

      tags.image
        ? StorageService.uploadFile({
            buffer: tags.image.imageBuffer,
            filename: `${title}.jpeg`,
            folder: "cohrt-2/modify/songs",
          })
        : Promise.resolve({
            url: "",
          }),
    ]);

    const song = await songModel.create({
      title,
      url: songFile.url,
      posterUrl: posterFile.url,
      mood: mood.toLowerCase(),
    });

    return res.status(201).json({
      message: "Song uploaded successfully",
      song,
    });
  } catch (err) {
    console.error(err);

    return res.status(500).json({
      message: err.message,
    });
  }
}

async function getSong(req, res) {
  try {
    const { mood } = req.query;

    if (!mood) {
      return res.status(400).json({
        message: "Mood is required",
      });
    }

    const songs = await songModel.find({
      mood: mood.toLowerCase(),
    });

    if (!songs.length) {
      return res.status(404).json({
        message: "No songs found",
      });
    }

    const randomIndex = Math.floor(
      Math.random() * songs.length
    );

    const song = songs[randomIndex];

    return res.status(200).json({
      message: "Song fetched successfully",
      song,
    });
  } catch (err) {
    console.error(err);

    return res.status(500).json({
      message: err.message,
    });
  }
}

module.exports = {
  uploadSong,
  getSong,
};