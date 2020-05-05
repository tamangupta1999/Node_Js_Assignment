const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const itemSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    quantity: {
        type: Number,
        required: true
    },
    isSanatized: Boolean,
    unit: {
        type: String,
        required: true
    },
    expiryDate: {
        type: String
    },
    createdDate: {
        type: Date,
        default: Date.now
    },
    updateDate: {
        type: Date,
        default: Date.now
    },
    category: {
        type: String,
        enum: ['Grocery', 'Medical', 'Fruits & Veg', 'Berverages', 'Babycare', 'Cleaning'],
        required: true
    },
    location: {
        type: String,
        enum: ['Store', 'Kitchen'],
        required: true
    }

});
itemSchema.path('category').options.enum;
itemSchema.path('location').options.enum;

itemSchema.pre('find', (next) => {
    // we will add some stuff and anything related to  find query
    if (true) {
        console.log('pre middleware-->>');
        // return next();
        next();
    }
    console.log('after if will run only next is called')
});

itemSchema.post('find', function (data) {
    // we will add some stuff and anything related to  find query

    data.value = 'Addeed from post middleware ';
    console.log('post middleware-->>')
});
itemSchema.post('init', function (doc) {
    console.log('%s has been initialized from the db', doc._id);
});

const ItemModel = mongoose.model('Items', itemSchema);
module.exports = ItemModel;