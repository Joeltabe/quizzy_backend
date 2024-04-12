const mongoose = require('mongoose');
const { boolean } = require('webidl-conversions');

const SubscriptionSchema = new mongoose.Schema({
    subsrciptionId: {
        type: Number,
        unique: true,
        required: [true, 'A category must have a a unique category ID']
    },
    startDate:[Date],
    endDate:[Date],
    isActive: {
        type: boolean,
        default: true,
        required: [true, 'A Category must have a name'],
    },
})
const Subscription = mongoose.model('Subscription', SubscriptionSchema);
module.exports = Subscription;