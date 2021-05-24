import mongoose from 'mongoose'
import { composeWithMongoose, composeWithMongooseDiscriminators } from 'graphql-compose-mongoose'

const { Schema } = mongoose

const interfaceSchema = new Schema({
    name: {type: String},
    ip_address: {type: String},
    vlan: {type: String},
    enable: {type: String},
  })

const configDataSchema = new Schema({
    hostname: {type: String},
    interfaces: {type: [ interfaceSchema ]},
})

export const configDataModel = mongoose.model('configData', configDataSchema)
export const configDataTC = composeWithMongoose(configDataModel)

export const interfacesModel = mongoose.model('interfaces', interfaceSchema)
export const interfacesTC = composeWithMongoose(interfacesModel)

export default configDataModel