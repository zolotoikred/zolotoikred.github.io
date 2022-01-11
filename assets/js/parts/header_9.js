$(function() {

    let rangeSliderSum = document.getElementById('filter');

    noUiSlider.create(rangeSliderSum, {
        start: [2050],
        tooltips: true,
        range: {
            'min': [100],
            'max': [20000]
        },
        format: wNumb({
            decimals: 0
        }),
        connect: 'lower'
    });


    let rangeSliderSumValueElement = document.getElementById('filter_label_sum');
    let $filterSum = $("[data-filter-sum]");

    $("#update_filter_data_h").on('mousedown',function () {
        $filterSum.val(rangeSliderSum.noUiSlider.get());
    });

    rangeSliderSum.noUiSlider.on('update', function (values, handle) {
        rangeSliderSumValueElement.value = values[handle];
    });

    rangeSliderSumValueElement.addEventListener('change', function() {
        rangeSliderSum.noUiSlider.set(this.value);
    });

    $(window).on('resize', function() {
        if ($(window).width() > 580 && $(window).width() < 769) {
            $('.filter_item__slider').appendTo('.filter_item__label');
        }
        else {
            $('.filter_item__slider').appendTo('.filter .filter_item.top');
        }
    })

});