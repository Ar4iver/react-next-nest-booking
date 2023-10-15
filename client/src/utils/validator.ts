// Определение типа для конфигурации валидации
export interface ConfigFieldNameType {
  message: string
  value?: number | number[]
}

// Определение типа для конфигурации валидатора
export type ValidatorConfigType<T> = {
  [key in keyof T]?: {
    isRequired?: ConfigFieldNameType
    isEmail?: ConfigFieldNameType
    min?: ConfigFieldNameType
  }
}

interface FieldValidatorConfig {
  isRequired?: ConfigFieldNameType
  isEmail?: ConfigFieldNameType
  min?: ConfigFieldNameType
}

// Функция валидации
export const validator = <T extends Record<string, string>>(
  data: T,
  validatorConfig: ValidatorConfigType<T>
): Record<keyof T, string> => {
  const errors = {} as Record<keyof T, string> // приведение типа

  function validate(
    validateMethod: string,
    fieldData: string,
    config: ConfigFieldNameType
  ): string | undefined {
    let statusValidate: boolean
    switch (validateMethod) {
      case 'isRequired':
        statusValidate = String(fieldData).trim() === ''
        break
      case 'isEmail':
        const emailRegExp = /^\S+@\S+\.\S+$/g
        statusValidate = !emailRegExp.test(fieldData)
        break
      case 'min':
        if (typeof config.value === 'number') {
          statusValidate = fieldData.length < config.value
        } else {
          statusValidate = false
        }
        break
      default:
        statusValidate = false
        break
    }
    if (statusValidate) return config.message
  }

  for (const fieldName in data) {
    const fieldConfig = validatorConfig[fieldName]
    if (fieldConfig) {
      for (const validateMethod in fieldConfig) {
        const config = fieldConfig[validateMethod as keyof FieldValidatorConfig]
        if (config) {
          const error = validate(validateMethod, data[fieldName], config)
          if (error && !errors[fieldName]) {
            errors[fieldName] = error
          }
        }
      }
    }
  }

  return errors
}
