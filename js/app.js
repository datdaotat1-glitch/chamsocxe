import { initNavigation } from './components/navigation.js';
import { initBooking } from './components/booking.js';
import { initSlider } from './components/slider.js';
import { initTracking } from './components/tracking.js';

console.log('App initialized');

document.addEventListener('DOMContentLoaded', () => {
    initNavigation();
    initBooking();
    initSlider();
    initTracking();
    console.log('DOM fully loaded and parsed');
});
