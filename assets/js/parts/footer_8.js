$(function () {

    let rangeSliderSumSecond = document.getElementById('filter_sum_f');
    let rangeSliderDateSecond = document.getElementById('filter_date_f');

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

    let rangeSliderSumValueElementSecond = document.querySelector('.footer #filter_label_sum_f');
    let rangeSliderDateValueElementSecond = document.querySelector('.footer #filter_label_date_f');
    let $filterSum = $("[data-filter-sum]");
    let $filterPeriod = $("[data-filter-period]");

    $("#update_filter_data_f8").on('mousedown',function () {
        $filterSum.val(rangeSliderSumValueElementSecond.value);
        $filterPeriod.val(rangeSliderDateValueElementSecond.value);
    });

    rangeSliderSumSecond.noUiSlider.on('update', function (values, handle) {
        rangeSliderSumValueElementSecond.value = values[handle];
        $filterSum.val(values[handle]);
    });

    rangeSliderSumValueElementSecond.addEventListener('change', function () {
        rangeSliderSumSecond.noUiSlider.set(this.value);
        $filterSum.val(this.value);
    });

    rangeSliderDateSecond.noUiSlider.on('update', function (values, handle) {
        rangeSliderDateValueElementSecond.value = values[handle];
        $filterPeriod.val(values[handle]);
    });

    rangeSliderDateValueElementSecond.addEventListener('change', function () {
        rangeSliderSumSecond.noUiSlider.set(this.value);
        $filterPeriod.val(this.value);
    });

});