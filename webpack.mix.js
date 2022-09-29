const mix = require('laravel-mix');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel applications. By default, we are compiling the CSS
 | file for the application as well as bundling up all the JS files.
 |
 */

// mix.js('resources/js/app.js', 'public/js')
//     .postCss('resources/css/app.css', 'public/css', [
//         //
//     ]);

mix.scripts([
    'node_modules/bootstrap-material-datetimepicker/js/bootstrap-material-datetimepicker.js',
    'node_modules/chartist-plugin-tooltip/chartist-plugin-tooltip.js',
    'node_modules/dropify/dist/js/dropify.js',
    'node_modules/dropzone/dist/dropzone.js',
    'node_modules/flot/dist/es5/jquery.flot.js',
    'node_modules/holderjs/holder.js',
    'node_modules/jquery-asColorPicker/dist/jquery-asColorPicker.js',
    'node_modules/jquery-steps/build/jquery-steps.js',
    'node_modules/jquery-wizard/dist/jquery-wizard.js',
    'node_modules/jqueryui/jquery-ui.js',
    'node_modules/jsgrid/dist/jsgrid.js',
    'node_modules/magnific-popup/dist/jquery.magnific-popup.js',
    'node_modules/morris.js06/dist/morris.js',
    'node_modules/select2/dist/js/select2.js',
    'node_modules/sidebar-nav/dist/sidebar-nav.min.js',
    'node_modules/tablesaw/dist/tablesaw.js',
    'node_modules/typeahead.js'
],  'public/js/app.js')

.styles([
    'node_modules/bootstrap/dist/css/bootstrap.css',
    'node_modules/selectize/dist/css/selectize.css',
    'resources/assets/css/app.css'
],  'public/css/app.css');
