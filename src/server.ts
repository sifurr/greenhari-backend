import app from './app';
import mongoose from 'mongoose';
import config from './app/config';
import { ProductModel } from './app/modules/product/product.model';

async function main() {
  try {
    await mongoose.connect(config.database_url as string);
    
    // create index for the product collection
    await ProductModel.createIndexes();
    
    app.listen(config.port, () => {
      console.log(`App Polli Hut is listening on port ${config.port}`);
    });
  } catch (err) {
    console.log('Something went wrong: ', err);
  }
}

main();
