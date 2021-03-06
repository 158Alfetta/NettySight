import mongoose from 'mongoose'
import { composeWithMongoose, composeWithMongooseDiscriminators } from 'graphql-compose-mongoose'

const { Schema } = mongoose

const groupSchema = new Schema({
    name: {type: String, required:true},
    group_desc: {type: String},
})

export const groupModel = mongoose.model('Group', groupSchema)
export const groupTC = composeWithMongoose(groupModel)

export default groupModel