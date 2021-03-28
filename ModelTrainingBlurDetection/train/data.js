const tf = require('@tensorflow/tfjs-node');

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

    console.log(i);
    var filePath = path.join(dataDir, files[i]);
    
    var buffer = fs.readFileSync(filePath); //Read the file into a buffer


    var imageTensor = tf.node.decodeImage(buffer) //Converting the image into a tensor 
      .resizeNearestNeighbor([120,90]) //keep the images in the original size
      .toFloat() //converting all the values to float
      .div(tf.scalar(255.0))  //dividing all values by 255 to normalize
      .expandDims(); //Converting a d3 tensor to a d4 tensor
    images.push(imageTensor); //Pushing the Tensor of the image to the Images array

    // imageTensor.print();

    // var buffer = fs.readFileSync(filePath);
    // var imageTensor = tf.node.decodeImage(buffer) //Converting the image into a tensor
    //   .resizeNearestNeighbor([120,90]) //keep the images in the original size
    //   .toFloat()
    //   .expandDims()
    // images.push(imageTensor);
    // imageTensor.print();


    //F = Defocused //M = Motion-Blurred //S = Sharp

    /*var hasHighQualityThumbnail = files[i].toLocaleLowerCase().endsWith("_1.jpg"); 
    labels.push(hasHighQualityThumbnail ? 1 : 0);*/
    
    var isDefocused = files[i].toLocaleLowerCase().endsWith("_F.jpg");

    var isMotionBlurred = files[i].toLocaleLowerCase().endsWith("_M.jpg");

    if(isDefocused){
      labels.push(0);
      //labels.push("F");
    }
    else if (isMotionBlurred){
      labels.push(1);
      //labels.push("M");
    }
    else{
      labels.push(2);
      //labels.push("S");
    } 
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
  loadTrainData() {
    console.log('Loading Training images...');
    this.trainData = loadImages(TRAIN_IMAGES_DIR);
    console.log('Training Images loaded successfully.')
  }

  loadTestData() {
    console.log('Loading Test images...');
    this.testData = loadImages(TEST_IMAGES_DIR);
    console.log('Testing Images loaded successfully.')
  }


  getTrainData() {

    return {
      images: tf.concat(this.trainData[0]),
      labels: tf.oneHot(tf.tensor1d(this.trainData[1], 'int32'), 3).toFloat()
    }
    
  }

  getTestData() {
    return {
      images: tf.concat(this.testData[0]),
      labels: tf.oneHot(tf.tensor1d(this.testData[1], 'int32'), 3).toFloat()
    }
  }
}

module.exports = new HighQualityThumbnailDataset();
