$("#image-selector").change(function () {  //Selecting the Image Function
	let reader = new FileReader();
	reader.onload = function () {
		let dataURL = reader.result;
		$("#selected-image").attr("src", dataURL);
		$("#prediction-list").empty();
	}
	
	let file = $("#image-selector").prop('files')[0];
	reader.readAsDataURL(file);
});





let model;
$( document ).ready(async function () { //Progress bar and Loading of the Model
	$('.progress-bar').show();
    console.log( "Loading model..." );
    model = await tf.loadLayersModel('model/model.json');
    console.log( "Model loaded." );
	$('.progress-bar').hide();
});





$("#predict-button").click(async function () {
	let image = $('#selected-image').get(0);
	
	// Pre-processing  the image
	let tensor = tf.browser.fromPixels(image)
		.resizeNearestNeighbor([120,90]) // the image is reduced size here
		.toFloat()
		.div(tf.scalar(255.0))
		.expandDims();

	let predictions = await model.predict(tensor).data();
	let top5 = Array.from(predictions)
		.map(function (p, i) { // this is Array.map
			return {
				probability: p,
				className: TARGET_CLASSES[i] // we are selecting the value from the obj
			};
		}).sort(function (a, b) {
			return b.probability - a.probability;
		}).slice(0, 3);

	$("#prediction-list").empty();
	top5.forEach(function (p) {
		$("#prediction-list").append(`<li>${p.className}: ${p.probability.toFixed(6)}</li>`);
		});
});

