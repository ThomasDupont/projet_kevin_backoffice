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
    screenPath: [String],
    profilPictureCreator: String,
    creatorName: String,
    tags: [String],
    colors: [String],
    websiteLink: String,
    createdAt: Date
});

module.exports = mongoose.model('WebDesign', schema, 'webdesign');
