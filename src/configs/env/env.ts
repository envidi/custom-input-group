import { envVariablesConfig, getEnvVariable } from '../env';

export type EnvVariableConfig = {
  type: 'string' | 'number' | 'boolean';
  required: boolean;
};

// get env variable keys from envConfig file
export type EnvVariableKeys = keyof typeof envVariablesConfig;

// define env variable value
export type EnvVariableValue = string | number | boolean;

// Check env variables
export class EnvVariable {
  constructor(
    private key: EnvVariableKeys,
    private value: string | undefined,
    private config: EnvVariableConfig,
    private type: 'string' | 'number' | 'boolean',
  ) {}

  // Check validate for env variable
  private validate() {
    if (this.config.required && this.value === undefined) {
      throw new Error(`Environment variable ${this.key} is required but missing`);
    }
    return this;
  }

  // convert value to string
  string(): string {
    this.validate();
    if (this.value === undefined) {
      throw new Error(`Environment variable ${this.key} is missing`);
    }
    return this.value;
  }

  //  convert value to number
  number(): number {
    this.validate();
    if (this.value === undefined) {
      throw new Error(`Environment variable ${this.key} is missing`);
    }
    const parsed = parseInt(this.value, 10);
    if (isNaN(parsed)) {
      throw new Error(`Invalid number value for ${this.key}: ${this.value}`);
    }
    return parsed;
  }

  //  convert value to boolean
  boolean(): boolean {
    this.validate();
    if (this.value === undefined) {
      throw new Error(`Environment variable ${this.key} is missing`);
    }
    const parsed = this.value?.toLowerCase() === 'true';
    return parsed;
  }

  getValue(): EnvVariableValue {
    switch (this.type) {
      case 'string':
        return this.string();
      case 'number':
        return this.number();
      case 'boolean':
        return this.boolean();
      default:
        throw new Error(`Unsupported type for environment variable ${this.key}.`);
    }
  }
}

// Check env variables
export const checkEnvVariables = () => {
  try {
    Object.keys(envVariablesConfig).forEach((key) => {
      const config = envVariablesConfig[key as EnvVariableKeys];
      getEnvVariable(key as EnvVariableKeys);
      switch (config.type as 'string' | 'number' | 'boolean') {
        case 'string':
          break;
        case 'number':
          break;
        case 'boolean':
          break;
        default:
          throw new Error(`Unsupported type for ${key}`);
      }
    });
  } catch (error) {
    throw new Error(error as string);
  }
};
