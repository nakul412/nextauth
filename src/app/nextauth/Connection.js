import mongoose from 'mongoose';


async function connect() {

  try {
    await mongoose.connect("mongodb+srv://Nakul:recipeapp@cluster0.xx7nb6c.mongodb.net/logins?retryWrites=true&w=majority", {
      useUnifiedTopology: true,
    });
    console.log('Connected to MongoDB');
  } catch (error) {
    console.error('MongoDB connection error:', error);
    process.exit(1);
  }
}

async function disconnect() {

  try {
    await mongoose.disconnect();
    console.log('Disconnected from MongoDB');
  } catch (error) {
    console.error('Error disconnecting from MongoDB:', error);
    process.exit(1);
  }
}

export { connect, disconnect };
