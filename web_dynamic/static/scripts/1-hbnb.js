$( document ).ready(function() {
	const amenities = {};
	$("li input[type=checkbox]").change(function () {
		if (this.checked) {
			amenities[this.dataset.name] = this.dataset.id;
		} else {
			delete amenities[this.dataset.name];
		}
		$(".amenities h4").text(Object.keys(amenities).sort().join(", "));
		$(".amenities h4").css('text-overflow', 'ellipsis');
		$(".amenities h4").css('overflow', 'hidden');
		$(".amenities h4").css('width', '240px');
		$(".amenities h4").css('height', '1.2em');
		$(".amenities h4").css('white-space', 'nowrap');
	})
});
