import { ConfigOption } from '@ngx-formly/core';
import { validationMessages } from './helpers/validation-message.helper';
import { validators } from './helpers/custom-validators.helper';
import { fields } from './helpers/field.helper';

export const configNgxFormly: ConfigOption = {
  validationMessages: validationMessages,
  validators: validators,
  types: fields
};
