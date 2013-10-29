/*
 * File: app/controller/ControllerWithSimpleRoute.js
 *
 * This file was generated by Sencha Architect version 3.0.0.
 * http://www.sencha.com/products/architect/
 *
 * This file requires use of the Sencha Touch 2.3.x library, under independent license.
 * License of Sencha Architect does not include license for Sencha Touch 2.3.x. For more
 * details see http://www.sencha.com/license or contact license@sencha.com.
 *
 * This file will be auto-generated each and everytime you save your project.
 *
 * Do NOT hand edit this file.
 */

Ext.define('MyApp.controller.ControllerWithSimpleRoute', {
    extend: 'Ext.app.Controller',

    requires: [
        'Ext.app.Route'
    ],

    config: {
        routes: {
            'login': 'showLogin',
            'user/:user': 'showUserId'
        },

        refs: {
            main: '#mainTabPanel'
        }
    },

    showLogin: function() {
        alert('Route was handled by showLogin()');
    },

    showUserId: function(user) {
        alert('Route was handled by showUserId(' + user + ')');
    }

});