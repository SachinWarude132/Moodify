const mongoose = require("mongoose")
const songModel = require("../models/song.model")
const id3 = require("node-id3")
const StorageService = require("../services/storage.services")

async function uploadSong(req,res){
    
    const{mood} =req.body
    const songBuffer = req.file.buffer
    const tags = id3.read(songBuffer)
    console.log(tags)
   
 

const [songFile ,PosterFile] =await Promise.all([
    StorageService.uploadFile({
    buffer : songBuffer,
    filename : tags.title + ".mp3",
    folder:"cohrt-2/modify/songs" 
      }),

   StorageService.uploadFile({
    buffer:tags.image.imageBuffer,
    filename : tags.title + ".jpeg",
     folder:"cohrt-2/modify/songs"
})

])



 const song = await songModel.create({
        title:tags.title,

        url:songFile.url,

        posterUrl:PosterFile.url,
 
        mood
 })

     return res.status(201).json({
        message : "Song uploaded sucessfully",
        song

     })

}

async function getSong(req, res) {
  const { mood } = req.query

  const songs = await songModel.find({
    mood: mood.toLowerCase()
  })

  if (!songs.length) {
    return res.status(404).json({
      message: "No songs found"
    })
  }

  const randomIndex = Math.floor(
    Math.random() * songs.length
  )

  const song = songs[randomIndex]

  res.status(200).json({
    message: "song fetched successfully",
    song
  })
}

module.exports= {
    uploadSong,
    getSong
}