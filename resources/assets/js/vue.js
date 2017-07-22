/**
 * Initialize Vue
 */
import Vue from 'vue';

/**
 * Vee Validate
 */
import VeeValidate from 'vee-validate';
import french from 'vee-validate/dist/locale/fr';

VeeValidate.Validator.addLocale(french);

Vue.use(VeeValidate, {
    locale: locale
});

VeeValidate.Validator.extend('phone', (value, [inputId]) => {
    return $(`#${inputId}`).intlTelInput('isValidNumber');
});

// Components
import Panel from './components/Panel.vue';
Vue.component('panel', Panel);

// Bootstrap
import BootstrapVue from 'bootstrap-vue';
Vue.use(BootstrapVue);

import FormToggle from './components/FormToggle.vue';
Vue.component('b-form-toggle', FormToggle);

const app = new Vue({
    el: '#app',
    data: {
        iconUser: '<i class="icon-user"></i>',
        iconEnvelope: '<i class="icon-envelope"></i>',
        iconLock: '<i class="icon-lock"></i>',
        iconCalendar: '<i class="icon-calendar"></i>'
    }
});
