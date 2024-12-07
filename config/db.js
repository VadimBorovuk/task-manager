import mongoose from 'mongoose'

const URI = `mongodb+srv://borovyk17vadym27:rjVpo4B0TgPCl6dB@cluster0.a7llv.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`

mongoose.connect(URI).then(()=>{
  console.log('connected mongodb');
}).catch(e =>{
  console.error(e);

})
