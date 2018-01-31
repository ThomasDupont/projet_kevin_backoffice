/**
 *
 *
 * @package
 * @licence MIT
 * @author Thomas Dupont
 */

/*
• Titre • Description • Image • PP créateur • @ créateur • Tags
• Colors x4 • Post Link
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
    postLink: String
});

module.exports = mongoose.model('User', schema, 'user');