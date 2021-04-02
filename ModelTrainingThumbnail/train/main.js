const tf = require('@tensorflow/tfjs-node');

const data = require('./data');
const model = require('./model');

async function run(epochs, batchSize, modelSavePath) {


  data.loadTrainData();

  const {
    images: trainImages,
    labels: trainLabels
  } = data.getTrainData();

  console.log("Training Images (Shape): " + trainImages.shape);
  console.log("Training Labels (Shape): " + trainLabels.shape);

  model.summary();

  const validationSplit = 0.15;

  await model.fit(trainImages, trainLabels, {
    epochs,
    batchSize,
    validationSplit
  });


  data.loadTestData();



  const {
    images: testImages,
    labels: testLabels
  } = data.getTestData();


  const evalOutput = model.evaluate(testImages, testLabels);



  console.log(evalOutput);

 


// accuracy.print();

  console.log(
      `\nEvaluation result:\n` +
      `  Loss = ${evalOutput[0].dataSync()[0].toFixed(3)}; `+
      `Accuracy = ${evalOutput[1].dataSync()[0].toFixed(3)}`);


  console.log("Testing Metrics : "+evalOutput);





  if (modelSavePath != null) {
    await model.save(`file://${modelSavePath}`);
    console.log(`Saved model to path: ${modelSavePath}`);
  }

}




run(1, 32, './model');