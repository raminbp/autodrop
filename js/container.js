(function ($) {

	var defaultsConfig = {
		slideDuration: 300,
		rtl: true
	};

	/**
	 *
	 * @param options
	 * @returns {*}
	 * @constructor
	 */
	function Container (options) {
		"use strict";
		this.options = $.extend({}, defaultsConfig, options);
		return this.buildContainerElement();
	}

	/**
	 *
	 * @type {{buildContainerElement: Function}}
	 */
	Container.prototype = {
		//Not implemented yet
		buildContainerElement: function () {
			"use strict";
			var options = this.options,
				el = $('<div class="cntr">'+ options.content+'</div>');
			if (options.rtl) {
				el.addClass('rtl-container');
			}
			el.addClass(options.containerCss);
			return el;	
		}
	};


	/**
	 *
	 * @param options
	 * @returns {$.fn}
	 */
	$.fn.autoContainer = function (options) {
		"use strict";
		this.each(function () {
			$(this).click(function () {
				var $this = $(this);
				if ($this.hasClass('open-marker')) {
					$this.removeClass('open-marker');
					$this.addClass('close-marker');
					if (!$this.next().hasClass('cntr')) {
						$this.after((new Container(options)).hide());
					}
					$this.next().slideDown(defaultsConfig.slideDuration);
				} else {
					$this.removeClass('close-marker').addClass('open-marker');
					$this.next().slideUp(defaultsConfig.slideDuration);
				}
			});
		});
		return this;
	}
})(jQuery);