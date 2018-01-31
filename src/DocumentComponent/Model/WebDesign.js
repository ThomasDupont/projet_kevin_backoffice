/**
 *
 *
 * @package
 * @licence MIT
 * @author Thomas Dupont
 */

/*
• Titre • Description • Screen Website • PP créateur • @ créateur • Tags
• Colors x4 • Website Link
 */
const mongoose = require('mongoose');
const schema = mongoose.Schema({
    title : String,
    description: String,
    screenPath: [Array],
    profilPictureCreator: String,
    creatorName: String,
    tags: [String],
    colors: [String],
    websiteLink: String
});

module.exports = mongoose.model('User', schema, 'user');