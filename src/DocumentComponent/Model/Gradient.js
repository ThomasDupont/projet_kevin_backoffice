/**
 *
 *
 * @package
 * @licence MIT
 * @author Thomas Dupont
 */

/*
• Nom • #Hex x2
 */
const mongoose = require('mongoose');
const schema = mongoose.Schema({
    name: String,
    hexa: String
});

module.exports = mongoose.model('User', schema, 'user');