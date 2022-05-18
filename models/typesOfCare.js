//const careDetailsInterface=require('./careDetailsInterface');
const mongoose = require("mongoose");
const schema = mongoose.Schema;
const nurse = require('./nurse');

const eating = new schema < careDetailsInterface > ({
    dateTime: {
        type: Date,
        default: new Date()
    },
    nurse: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'nurse',
    },
    careDetails: {
        type: {
            enum: ['MOTHER_MILK', 'MATERNA', 'SIMILAC', 'NUTRIMIGEN'],
            require: true
        },
        ammount: {
            type: Number,
        }
    }
});

const diaper = new Schema < careDetailsInterface > ({
    dateTime: {
        type: Date,
        default: new Date()
    },
    nurse: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'nurse',
    },
    careDetails: {
        type: {
            enum: ['SMALL', 'BIG'],
            require: true
        },
        ammount: {
            type: Number,
            require: true
        }
    }
});

const shower = new Schema < careDetailsInterface > ({
    dateTime: {
        type: Date,
        default: new Date()
    },
    nurse: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'nurse',
    },
    careDetails: {}
});

const fever = new Schema < careDetailsInterface > ({
    dateTime: {
        type: Date,
        default: new Date()
    },
    nurse: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'nurse',
    },
    careDetails: {
        high: {
            type: Number,
            require: true
        }
    }
});

const jaundice = new Schema < careDetailsInterface > ({
    dateTime: {
        type: Date,
        default: new Date()
    },
    nurse: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'nurse',
    },
    careDetails: {
        high: {
            type: Number,
            require: true
        }
    }
});

const LengthWeight = new Schema < careDetailsInterface > ({
    dateTime: {
        type: Date,
        default: new Date()
    },
    nurse: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'nurse',
    },
    careDetails: {
        Length: {
            type: Number,
        },
        weight: {
            type: Number,
        }
    }
});

