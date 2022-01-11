$(function() {

    let rangeSliderSum = document.getElementById('filter_sum');
    let rangeSliderDate = document.getElementById('filter_date');

    noUiSlider.create(rangeSliderSum, {
        start: [2050],
        range: {
            'min': [100],
            'max': [20000]
        },
        format: wNumb({
            decimals: 0
        }),
        connect: 'lower'
    });

    noUiSlider.create(rangeSliderDate, {
        start: [15],
        range: {
            'min': [1],
            'max': [90]
        },
        format: wNumb({
            decimals: 0
        }),
        connect: 'lower'
    });

    let rangeSliderSumValueElement = document.getElementById('filter_label_sum');
    let rangeSliderDateValueElement = document.getElementById('filter_label_date');
    let $filterSum = $("[data-filter-sum]");
    let $filterPeriod = $("[data-filter-period]");

    $("#update_filter_data_h").on('mousedown',function () {
        $filterSum.val(rangeSliderSumValueElement.value);
        $filterPeriod.val(rangeSliderDateValueElement.value);
    });

    rangeSliderSum.noUiSlider.on('update', function (values, handle) {
        rangeSliderSumValueElement.value = values[handle];
    });

    rangeSliderSumValueElement.addEventListener('change', function() {
        rangeSliderSum.noUiSlider.set(this.value);
    });

    rangeSliderDate.noUiSlider.on('update', function (values, handle) {
        rangeSliderDateValueElement.value = values[handle];
    });

    rangeSliderDateValueElement.addEventListener('change', function() {
        rangeSliderDate.noUiSlider.set(this.value);
    });


    // function manualStepSum (direction){
    // 	let currentPosition = parseInt(rangeSliderSum.noUiSlider.get());
    // 	let stepSize = 50;
    // 	if(direction == 'f'){
    // 		currentPosition += stepSize;
    // 	}
    // 	if(direction == 'b'){
    // 		currentPosition -= stepSize;
    // 	}
    // 	currentPosition = (Math.round(currentPosition / stepSize) * stepSize);
    // 		rangeSliderSum.noUiSlider.set(currentPosition);
    // }
    //
    //
    // document.getElementById('filter_plus').onclick = function() {manualStepSum("f")};
    // document.getElementById('filter_minus').onclick = function() {manualStepSum("b")};
});









