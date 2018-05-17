const Slider = function(elemSelector) {
    this.currentSlide = 0;
    this.sliderSelector = elemSelector;
    this.elem = null;
    this.slider = null;
    this.slides = null;
    this.prev = null;
    this.next = null;
    this.dots = [];
}