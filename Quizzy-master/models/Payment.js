
const mongoose = require('mongoose');

const PaymentSchema = new mongoose.Schema({
    PaymentId: {
            type: Number,
            unique: true,
            required: [true, 'A question paper must have a unique u ID']
        },
        user: {
            type: mongoose.Types.ObjectId,
            ref: 'User',
            required: [true, 'A payment must be done by a user']
        },
        Amount: {
            type: double,
            required: [true, 'Payment must be done with a particular amount'],
        },
        paymentDate:{
            type: Date,
            default: Date.now()
        },
        Paymentstatus: {
            type : boolean
        }
    })
    
    const Payment = mongoose.model('Payment', PaymentSchema);
    
    module.exports = Payment;