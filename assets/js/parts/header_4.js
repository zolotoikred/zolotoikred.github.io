$(function() {

    let rangeSliderSum = document.getElementById('filter');


    noUiSlider.create(rangeSliderSum, {
        start: [2050],
        range: {
            'min': [100],
            'max': [20000]
        },
        format: wNumb({
            decimals: 0
        }),
        connect: 'lower',
        pips: {
            mode: 'positions',
            values: [0, 50, 100],
            density: 3,
            format: wNumb({
                decimals: 0,
                postfix: countryCurrency ? ` ${countryCurrency}` : ' грн'
            })
        },
    });

    let rangeSliderSumValueElement = document.getElementById('filter_input');
    let $filterSum = $("[data-filter-sum]");

    $("#update_filter_data_h").on('mousedown',function () {
        $filterSum.val(rangeSliderSumValueElement.value);
    });

    $("#update_filter_data_h2").on('mousedown',function () {
        $filterSum.val(rangeSliderSumValueElement.value);
    });

    rangeSliderSum.noUiSlider.on('update', function (values, handle) {
        rangeSliderSumValueElement.value = values[handle];
    });

    rangeSliderSumValueElement.addEventListener('change', function() {
        rangeSliderSum.noUiSlider.set(this.value);
    })


    function manualStepSum (direction){
        let currentPosition = parseInt(rangeSliderSum.noUiSlider.get());
        let stepSize = 50;
        if(direction == 'f'){
            currentPosition += stepSize;
        }
        if(direction == 'b'){
            currentPosition -= stepSize;
        }
        currentPosition = (Math.round(currentPosition / stepSize) * stepSize);
        rangeSliderSum.noUiSlider.set(currentPosition);
    }


    document.getElementById('filter_plus').onclick = function() {manualStepSum("f")};
    document.getElementById('filter_minus').onclick = function() {manualStepSum("b")};
});









