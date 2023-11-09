import { extend } from 'vee-validate'
import { required } from 'vee-validate/dist/rules'

export default function () {
  extend('required', {
    ...required,
    message: 'Required!',
  })
}
