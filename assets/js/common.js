$(function() {

	// tooltipster

	$('#gtmId').tooltipster({
		theme: ['tooltipster-noir', 'tooltipster-noir-customized']
	});

	$('.link').tooltipster({
		theme: ['tooltipster-noir', 'tooltipster-noir-customized'],
		multiple: true,
	});

	$('.view').tooltipster({
		theme: ['tooltipster-noir', 'tooltipster-noir-customized'],
		multiple: true,
	});

	$('.edit').tooltipster({
		theme: ['tooltipster-noir', 'tooltipster-noir-customized'],
		multiple: true,
	});

	$('.delete').tooltipster({
		theme: ['tooltipster-noir', 'tooltipster-noir-customized'],
		multiple: true,
	});

	// copy text

	$('#copyUrl').on('click', function(e){
		e.preventDefault();
        $('.tools_item__input').select();
		document.execCommand('copy');
        const Toast = Swal.mixin({
			toast: true,
			position: 'top-end',
			showConfirmButton: false,
			timer: 3000,
			timerProgressBar: true,
			onOpen: (toast) => {
			  toast.addEventListener('mouseenter', Swal.stopTimer)
			  toast.addEventListener('mouseleave', Swal.resumeTimer)
			}
		})
		
		Toast.fire({
			icon: 'success',
			title: 'Скопировано!'
		})
	});
	

	// delete showcase

	$('.delete').on('click', function(e) {
		e.preventDefault();
		Swal.fire({
			title: 'Удаление витрины',
			text: 'Вы уверены, что хотите удалить витрину? Все настройки будут обнулены',
			showCancelButton: true,
			confirmButtonText: 'Окей',
			cancelButtonText: 'Отменить',
			reverseButtons: true,
			buttonsStyling: false
		// }).then((result) => {
		// 	if (result.value) {
		// 		Swal.fire(
		// 			'Удалено!',
		// 			'',
		// 			'success'
		// 		)
		// 	}
		})
	})

	// connect domain

	$('#connectDomain').on('click', function(e) {
		e.preventDefault();
		Swal.fire({
			title: 'Подключение домена',
			html: 	'<p class="domain_desc">Пожалуйста, введите домен, к которому хотите подключить витрину:</p>' +
					'<input type="text" placeholder="Введите домен" class="domain_input">' +
					'<ul class="domain_list">' +
					'<li class="domain_list__title">Также, вам нужно будет добавить наши NS-сервера:</li>' +
					'<li class="domain_list__item">ns1.pdl-profit.com' + 
					'<li class="domain_list__item">ns2.pdl-profit.com' + 
					'<li class="domain_list__item">ns3.pdl-profit.com' +
					'</ul>' +
					'<p class="domain_desc">Если возникнут вопросы или проблемы с подключением, <a href="#" class="domain_link">пишите</a> нам в саппорт, будем рады помочь.</p>',
			showCancelButton: true,
			confirmButtonText: 'Окей',
			cancelButtonText: 'Отменить',
			reverseButtons: true,
			buttonsStyling: false
		});
	})


	// save btn check icon

	$('#saveBtn').on('click', function(e) {
		e.preventDefault();
		$(this).addClass('saved');
	})

	// change template buttons

	$('.editor_panel_numbers.calc').on('click', 'li:not(.active)', function() {
		$(this).addClass('active')
		.siblings()
		.removeClass('active');
		$('.headers')
		.find('.headers_item')
		.removeClass('active')
		.eq($(this).index() - 1)
		.addClass('active');
	})

	$('.editor_panel_numbers.logo').on('click', 'li:not(.active)', function() {
		$(this).addClass('active')
		.siblings()
		.removeClass('active');
		$('.logos')
		.find('.logos_item')
		.removeClass('active')
		.eq($(this).index() - 1)
		.addClass('active');
	})

	
	$('.editor_panel_tools__item__view').on('click', 'li:not(.active)', function() {
		$(this).addClass('active')
		.siblings()
		.removeClass('active');
		$('.views')
		.find('.views_item')
		.removeClass('active')
		.eq($(this).index())
		.addClass('active');
	})

	$('.editor_panel_tools__item__numbers.offer').on('click', 'li:not(.active)', function() {
		$(this).addClass('active')
		.siblings()
		.removeClass('active');
		
		$('.offers_horizontal')
		.find('.offers_horizontal__item')
		.removeClass('active')
		.eq($(this).index())
		.addClass('active');

		$('.offers_vertical')
		.find('.offers_vertical__item')
		.removeClass('active')
		.eq($(this).index())
		.addClass('active');
	})


	// change widget position

	var iframe = document.querySelectorAll(".widget_item_iframe")

	$('.editor_panel_numbers.widgets').on('click', 'li:not(.active)', function() {
		var classList = '.widget_preview';

		let classes = ['widget_left_top', 'widget_left_center', 'widget_left_bottom', 'widget_right_top', 'widget_right_center', 'widget_right_bottom'];
		
		$(this).addClass('active')
		.siblings()
		.removeClass('active');
		$('.widget')
		.find('.widget_item')
		.removeClass('active')
		.eq($(this).index() - 1)
		.addClass('active');
		$('.editor_panel_position.widgets .editor_panel_position__item').removeClass('active')
												.eq(1)
												.addClass('active');

		$('.widget_item').find('.widget_preview').removeClass(function() {
			return $.each(classes, function(item) {
				return item
			})
		});
	})

	$('.widgets').on('click', '.editor_panel_position__item:not(.active)', function(e) {
		var classList = '.widget_preview';
		$(this).addClass('active')
		.siblings()
		.removeClass('active');
		let newClass = $(e.target).data('class');
		iframe[0].onload = function() {
			let iframeDoc = iframe[0].contentWindow.document;
			$(iframeDoc).find('.widget_preview').removeClass()
												.addClass(classList)
												.addClass(newClass);
		}
		iframe[1].onload = function() {
			let iframeDoc = iframe[1].contentWindow.document;
			$(iframeDoc).find('.widget_preview').removeClass()
												.addClass(classList)
												.addClass(newClass);
		}
		iframe[2].onload = function() {
			let iframeDoc = iframe[2].contentWindow.document;
			$(iframeDoc).find('.widget_preview').removeClass()
												.addClass(classList)
												.addClass(newClass);
		}
		$('.widget .widget_item.active .widget_preview').removeClass()
														.addClass(classList)
														.addClass(newClass);
	})


	// function showPush() {
	// 	setInterval(function() {
	// 		var lastItem = $('.widget_notice.prev-used:last').next();
	// 		$('.widget_notice.prev-used:last').removeClass('prev-used');
	// 		lastItem.addClass('active');
	// 		setTimeout(function() {
	// 			$('.widget_notice.active').addClass('prev-used');
	// 			$('.widget_notice.active').removeClass('active');
	// 		}, 4000)
	// 	}, 8000)
	// }

	// showPush();


	

	// toggle faq

	$('.faq_top').on('click', function() {
		$(this).parent().find('.faq_content').slideToggle();
		$(this).find('.faq_toggle i').toggleClass('fa-plus fa-minus');
		$(this).parent().toggleClass('active');
	})

	$('.faq_second_top').on('click', function() {
		$(this).parent().find('.faq_second_content').slideToggle();
		$(this).find('.faq_second_toggle i').toggleClass('closed opened');
		$(this).parent().toggleClass('active');
	})

	$('.faq_third_top').on('click', function() {
		$(this).parent().find('.faq_third_content').slideToggle();
		$(this).find('.faq_third_toggle i').toggleClass('closed_third opened_third');
		$(this).parent().toggleClass('active');
	})


	$('.editor_panel_numbers.faq').on('click', 'li:not(.active)', function() {
		$(this).addClass('active')
		.siblings()
		.removeClass('active');
		$('.faqs')
		.find('.faqs_item')
		.removeClass('active')
		.eq($(this).index() - 1)
		.addClass('active');
	})

	$('.editor_panel_numbers.footer').on('click', 'li:not(.active)', function() {
		$(this).addClass('active')
		.siblings()
		.removeClass('active');
		$('.footers')
		.find('.footer_item')
		.removeClass('active')
		.eq($(this).index() - 1)
		.addClass('active');
	})


	// colorpicker


	$('.editor_colorpicker').colorPickerByGiro({
		preview: '',
	});

	appendColorPicker(render());
	createCloseElement();

	function appendColorPicker(template) {
		template.appendTo('.cpBG');
	}

	function replace(container) {
		$('.colorpicker_bottom').replaceWith(container);
	}


	function render(size=16, radius=6, value="Оформить заявку", color="#2A8181") {
		let valueSize = size;
		let valueRadius = radius;
		let valueColor = color;
		let editText = $(`<div class="colorpicker_bottom">
							${changeSize(size)}
							${changeRadius(radius)}
							${changeValue(value)}
							<div class="colorpicker_bottom_item colorpicker_sample">
								<button style="width: 100%; height: 35px; line-height: 35px; text-align: center; background: ${valueColor}; color: #fff; border-radius: ${valueRadius}px; padding: 0 15px; font-size: ${valueSize}px">
									${value}
								</button>
							</div>
							<a href="#" class="colorpicker_save">Сохранить</a>
						</div>`);
		replace(editText);
		return editText;
	}

	function changeSize(size) {
		let renderSizeInput = (`<div class="colorpicker_bottom_item colorpicker_size">
									<label for="colorPickerSize">Размер шрифта</label>
									<input type="text" value="${size}" id="colorPickerSize">
								</div>`);
		return renderSizeInput;
	}

	function changeRadius(radius) {
		let renderRadiusInput = (`<div class="colorpicker_bottom_item colorpicker_radius">
									<label for="colorPickerRadius">Закругленность</label>
									<input type="text" value="${radius}" id="colorPickerRadius">
								</div>`);
		return renderRadiusInput;
	}

	function changeValue(value) {
		let renderValueInput = (`<div class="colorpicker_bottom_item colorpicker_value">
									<label for="colorPickerValue">Текст кнопки</label>
									<input type="text" value="${value}" id="colorPickerValue">
								</div>`);
		return renderValueInput;
	}

	

	$('body').on('change','#colorPickerSize', function() {
		let size = $(this).val();
		render(size, $('#colorPickerRadius').val(), $('#colorPickerValue').val());
	})

	$('body').on('change', '#colorPickerRadius', function() {
		let radius = $(this).val();
		render($('#colorPickerSize').val(), radius, $('#colorPickerValue').val());
	})

	$('body').on('change', '#colorPickerValue', function() {
		let value = $(this).val();
		render($('#colorPickerSize').val(), $('#colorPickerRadius').val(), value);
	})

	$('body').on('click', '.cp-colors, .cp-hues, .cp-alpha', function() {
		let color = $('.cp-values i').css('background-color');
		render($('#colorPickerSize').val(), $('#colorPickerRadius').val(), $('#colorPickerValue').val(), color);
	})

	function createCloseElement() {
		let el = (`<div class="colorpicker_close" id="colorPickerClose">
					<i class="fas fa-times"></i>
				</div>`);
		$(el).appendTo('.cpBG');
	}

	function saveProps(size, radius, value, color) {
		let props = {
			size,
			radius,
			value,
			color
		}
		return props;
	}

	$('.colorpicker_save').on('click', function(e) {
		e.preventDefault();
		let props = saveProps($('#colorPickerSize').val(), $('#colorPickerRadius').val(), $('#colorPickerValue').val(), $('.cp-values i').css('background-color'));
		$('.cpBG').hide();
		console.log(props);
	})

	$('.colorpicker_close').on('click', function() {
		$(this).closest('.cpBG').hide();
	})


	// responsive preview

	function changeResponsive(type) {
		$('.editor_block_content').removeClass('desktop tablet mobile');
		$('.editor_block_content').addClass(type);
	}

	$('#responsDesktop').on('click', function(e) {
		e.preventDefault();
		changeResponsive('desktop');
	})

	$('#responsTablet').on('click', function(e) {
		e.preventDefault();
		changeResponsive('tablet');
	})

	$('#responsMobile').on('click', function(e) {
		e.preventDefault();
		changeResponsive('mobile');
	})
});








	

