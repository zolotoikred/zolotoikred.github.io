$(function() {

    let rangeSliderSumSecond = document.getElementById('filter_sum');
    let rangeSliderDateSecond = document.getElementById('filter_date');

    noUiSlider.create(rangeSliderSumSecond, {
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

    noUiSlider.create(rangeSliderDateSecond, {
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

    let rangeSliderSumValueElementSecond = document.getElementById('filter_label_sum');
    let rangeSliderDateValueElementSecond = document.getElementById('filter_label_date');
    let $filterSum = $("[data-filter-sum]");
    let $filterPeriod = $("[data-filter-period]");

    $("#update_filter_data_h").on('mousedown',function () {
        $filterSum.val(rangeSliderSumValueElementSecond.value);
        $filterPeriod.val(rangeSliderDateValueElementSecond.value);
    });

    rangeSliderSumSecond.noUiSlider.on('update', function (values, handle) {
        rangeSliderSumValueElementSecond.value = values[handle];
    });

    rangeSliderSumValueElementSecond.addEventListener('change', function() {
        rangeSliderSumSecond.noUiSlider.set(this.value);
    });

    rangeSliderDateSecond.noUiSlider.on('update', function (values, handle) {
        rangeSliderDateValueElementSecond.value = values[handle];
    });

    rangeSliderDateValueElementSecond.addEventListener('change', function() {
        rangeSliderDateSecond.noUiSlider.set(this.value);
    });

});

