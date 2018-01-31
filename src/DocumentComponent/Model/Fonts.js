/**
 *
 *
 * @package
 * @licence MIT
 * @author Thomas Dupont
 */

/*
• Nom • Tags • Download Link
 */

const mongoose = require('mongoose');
const schema = mongoose.Schema({
    name: String,
    tags: [String],
    downloadLink: String
});

module.exports = mongoose.model('User', schema, 'user');