const tf = require('@tensorflow/tfjs-node-gpu');

const fs = require('fs');
const path = require('path');

const TRAIN_IMAGES_DIR = './data/train';
const TEST_IMAGES_DIR = './data/test';

function loadImages(dataDir) {

  const images = []; 
  const labels = [];
  
  var files = fs.readdirSync(dataDir); //Reading data Syncrounously to speed up the process
  for (let i = 0; i < files.length; i++) { 
    if (!files[i].toLocaleLowerCase().endsWith(".jpg")) {
      continue;
    }

    var filePath = path.join(dataDir, files[i]);
    
    var buffer = fs.readFileSync(filePath); //Read the file into a buffer
    var imageTensor = tf.node.decodeImage(buffer) //Converting the image into a tensor
      .resizeNearestNeighbor([120,90]) //keep the images in the original size
      .toFloat()
      .div(tf.scalar(255.0))
      .expandDims(); //Converting a d3 tenor to a d4 tensor
    images.push(imageTensor); //Pushing the Tensor of the image to the Images array

    console.log(imageTensor);


    var hasHighQualityThumbnail = files[i].toLocaleLowerCase().endsWith("_1.jpg");
    labels.push(hasHighQualityThumbnail ? 1 : 0);
  }

  return [images, labels];

}

/** Helper class to handle loading training and test data. */
class HighQualityThumbnailDataset {
  constructor() {
    this.trainData = [];
    this.testData = [];
  }

  /** Loads training and test data. */
  loadData() {
    console.log('Loading images...');
    this.trainData = loadImages(TRAIN_IMAGES_DIR);
    this.testData = loadImages(TEST_IMAGES_DIR);
    console.log('Images loaded successfully.')
  }

  getTrainData() {
    return {
      images: tf.concat(this.trainData[0]),
      labels: tf.oneHot(tf.tensor1d(this.trainData[1], 'int32'), 2).toFloat()
    }
  }

  getTestData() {
    return {
      images: tf.concat(this.testData[0]),
      labels: tf.oneHot(tf.tensor1d(this.testData[1], 'int32'), 2).toFloat()
    }
  }
}

module.exports = new HighQualityThumbnailDataset();
