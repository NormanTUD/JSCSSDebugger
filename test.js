var data = {
	"_comment": "Taken from https://www.w3.org/TR/CSS21/propidx.html",
	"good_to_parse": {
		"background-attachment": [ "scroll", "fixed", "inherit" ],
		"caption-side": [ "top", "bottom", "inherit" ],
		"clear": [ "none", "left", "right", "both", "inherit" ],
		"white-space": [ "normal", "pre", "nowrap", "pre-wrap", "pre-line", "inherit" ],
		"direction": [ "ltr", "rtl", "inherit" ],
		"display": [ "inline", "block", "list-item", "inline-block", "table", "inline-table", "table-row-group", "table-header-group", "table-footer-group", "table-row", "table-column-group", "table-column", "table-cell", "table-caption", "none", "inherit" ],
		"speak-header": [ "once", "always", "inherit" ],
		"speak-numeral": [ "digits", "continuous", "inherit" ],
		"speak-punctuation": [ "code", "none", "inherit" ],
		"font-weight": [ "normal", "bold", "bolder", "lighter", "100", "200", "300", "400", "500", "600", "700", "800", "900", "inherit" ],
		"unicode-bidi": [ "normal", "embed", "bidi-override", "inherit" ],
		"visibility": [ "visible", "hidden", "collapse", "inherit" ],
		"outline": [ "outline-color", "outline-style", "outline-width", "inherit" ],
		"empty-cells": [ "show", "hide", "inherit" ],
		"float": [ "left", "right", "none", "inherit" ],
		"text-transform": [ "capitalize", "uppercase", "lowercase", "none", "inherit" ],
		"page-break-after": [ "auto", "always", "avoid", "left", "right", "inherit" ],
		"page-break-before": [ "auto", "always", "avoid", "left", "right", "inherit" ],
		"page-break-inside": [ "avoid", "auto", "inherit" ],
		"list-style-position": [ "inside", "outside", "inherit" ],
		"list-style-type": [ "disc", "circle", "square", "decimal", "decimal-leading-zero", "lower-roman", "upper-roman", "lower-greek", "lower-latin", "upper-latin", "armenian", "georgian", "lower-alpha", "upper-alpha", "none", "inherit" ],
		"table-layout": [ "auto", "fixed", "inherit" ],
		"text-align": [ "left", "right", "center", "justify", "inherit" ],
		"text-decoration": [ "none", "underline", "overline", "line-through", "blink", "inherit" ],
		"border-collapse": [ "collapse", "separate", "inherit" ],
		"font-style": [ "normal", "italic", "oblique", "inherit" ],
		"font-variant": [ "normal", "small-caps", "inherit" ],
		"height": [ "<length>", "<percentage>", "auto", "inherit" ],
		"left": [ "<length>", "<percentage>", "auto", "inherit" ],
		"pitch-range": [ "<number>", "inherit" ],
		"stress": [ "<number>", "inherit" ],
		"richness": [ "<number>", "inherit" ],
		"speech-rate": [ "<number>", "x-slow", "slow", "medium", "fast", "x-fast", "faster", "slower", "inherit" ],
		"volume": [ "<number>", "<percentage>", "silent", "x-soft", "soft", "medium", "loud", "x-loud", "inherit" ],
		"max-height": [ "<length>", "<percentage>", "none", "inherit" ],
		"max-width": [ "<length>", "<percentage>", "none", "inherit" ],
		"min-height": [ "<length>", "<percentage>", "inherit" ],
		"min-width": [ "<length>", "<percentage>", "inherit" ],
		"max-height": [ "<length>", "<percentage>", "none", "inherit" ],
		"top": [ "<length>", "<percentage>", "auto", "inherit" ],
		"width": [ "<length>", "<percentage>", "auto", "inherit" ],
		"font-size": [ "<absolute-size>", "<relative-size>", "<length>", "<percentage>", "inherit" ],
		"word-spacing": [ "normal", "<length>", "inherit" ],
		"cue": [ "cue-before", "cue-after", "inherit" ],
		"cursor": [ "auto", "crosshair", "default", "pointer", "move", "e-resize", "ne-resize", "nw-resize", "n-resize", "se-resize", "sw-resize", "s-resize", "w-resize", "text", "wait", "help", "progress", "inherit" ],
		"elevation": [ "<angle>", "below", "level", "above", "higher", "lower", "inherit" ],
		"vertical-align": [ "baseline", "sub", "super", "top", "text-top", "middle", "bottom", "text-bottom", "<percentage>", "<length>", "inherit" ],
		"max-width": [ "<length>", "<percentage>", "none", "inherit" ],
		"bottom": [ "<length>", "<percentage>", "auto", "inherit" ],
		"background": [ "background-color", "background-image", "background-repeat", "background-attachment", "background-position", "inherit" ],
		"z-index": [ "auto", "<integer>", "inherit" ],
		"letter-spacing": [ "normal", "<length>", "inherit" ],
		"background-color": [ "<color>", "transparent", "inherit" ],
		"line-height": [ "normal", "<number>", "<length>", "<percentage>", "inherit" ],
		"min-height": [ "<length>", "<percentage>", "inherit" ],
		"min-width": [ "<length>", "<percentage>", "inherit" ],
		"orphans": [ "<integer>", "inherit" ],
		"azimuth": [ "<angle>", "left-side", "far-left", "left", "center-left", "center", "center-right", "right", "far-right", "right-side behind", "leftwards", "rightwards", "inherit" ],
		"color": [ "<color>", "inherit" ]
	}
};

var delay = ms => new Promise(res => setTimeout(res, ms));

function get_random_angle() {
	return Math.floor(Math.random() * 360);
}

function get_random_percentage() {
	return Math.floor(Math.random() * 101);
}

function get_random_color() {
	var letters = '0123456789ABCDEF';
	var color = '#';
	for (var i = 0; i < 6; i++) {
		color += letters[Math.floor(Math.random() * 16)];
	}
	return color;
}

var test_css_params = async (element) => {
	for (name in data["good_to_parse"]) {
		var values = data["good_to_parse"][name];
		var old_value =  element.style.getPropertyValue(name);
		for (value_id in values) {
			var value = values[value_id];

			console.log("Setting ", name, " to ", value, " for ", element);
			if(/^<percentage>$/.test(value)) {
				for (var counter = 0; counter < 5; counter++) {
					value = get_random_percentage();
					element.style.setProperty(name, value);
					await delay(900);
				}
			} else if(/^<length>$/.test(value)) {
				for (var counter = 0; counter < 5; counter++) {
					value = counter;
					element.style.setProperty(name, value + "em");
					await delay(900);
				}
			} else if(/^<number>$/.test(value)) {
				for (var counter = 0; counter < 5; counter++) {
					value = counter * 10;
					element.style.setProperty(name, value);
					await delay(900);
				}
			} else if(/^<angle>$/.test(value)) {
				for (var counter = 0; counter < 5; counter++) {
					value = get_random_angle();
					element.style.setProperty(name, value);
					await delay(900);
				}
			} else if(/^<color>$/.test(value)) {
				for (var counter = 0; counter < 5; counter++) {
					value = get_random_color();
					element.style.setProperty(name, value);
					await delay(900);
				}
			} else {
				element.style.setProperty(name, value);
				await delay(900);
			}
			
		}
		element.style.setProperty(name, old_value);
	}
	console.log("Done ID");
}

function test_css_params_by_id (id) {
	var element = document.getElementById(id);
	test_css_params(element);
}

function test_css_params_by_class (classname) {
	var items  = document.getElementsByClassName(classname);
	console.log(items);
	for (var i = 0; i < items.length; i++) {
		console.log(items[i]);
		test_css_params(items[i]);
	}
	console.log("Done class");
}

