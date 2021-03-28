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

  /*const surface = {
    name: 'Layer Summary',
    tab: 'Model Inspection'
  };
  tfvis.show.layer(surface, model.getLayer(undefined, 1));*/


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

  console.log(
    `\nEvaluation result:\n` +
    `  Loss = ${evalOutput[0].dataSync()[0].toFixed(3)}; ` +
    `Accuracy = ${evalOutput[1].dataSync()[0].toFixed(3)}`);

  if (modelSavePath != null) {
    await model.save(`file://${modelSavePath}`);
    console.log(`Saved model to path: ${modelSavePath}`);
  }

}


//const summaryWriter = tf.node.summaryFileWriter('/tmp/tfjs_tb_logdir');

/*for (let step = 0; step < 100; ++step) {
  summaryWriter.scalar('dummyValue', Math.sin(2 * Math.PI * step / 8), step);
}*/




run(20, 32, './model');