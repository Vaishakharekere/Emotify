const mongoose=require('mongoose');

const historySchema=new mongoose.Schema({
    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'User',
        required:true
    },
    songId: {
        type: String,
        required: true,
      },
      songName: {
        type: String,
        required: true,
      },
      artist: {
        type: String,
        required: true,
      },
      emotion: {
        type: String,
        required: true,
        enum: ['happy', 'sad', 'angry', 'neutral', 'relaxed', 'energetic'],
      },
      source: {
        type: String,
        enum: ['face', 'text', 'voice'],
        required: true,
      },
      timestamp: {
        type: Date,
        default: Date.now,
      },
    },
    { timestamps: true }
  );
  const History=mongoose.model('History',historySchema);
    module.exports=History;