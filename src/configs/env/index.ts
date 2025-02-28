import { EnvVariable, EnvVariableKeys, EnvVariableValue } from './env';

export { checkEnvVariables } from './env';

export const envVariablesConfig = {
  VITE_API_URL: { type: 'string', required: true },
  // Add more env variables here
} as const; // ensure that the object is treated as a readonly object

//  get env variable from envConfig file
export const getEnvVariable = (key: EnvVariableKeys): EnvVariableValue => {
  const config = envVariablesConfig[key];
  const value = import.meta.env[key] as string | undefined;
  const envVariable = new EnvVariable(key, value, config, config.type);
  return envVariable.getValue();
};
