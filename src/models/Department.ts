import { IDepartmentDoc } from './../client/src/types/department'
import { model, Schema } from 'mongoose'

const departmentSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  foo: {
    type: String,
    required: true,
  },
}, { timestamps: true })

export default model<IDepartmentDoc>('Department', departmentSchema)
