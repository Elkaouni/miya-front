import { env } from './.env';

export const environment = {
  production: true,
  hmr: true,
  name: 'dev-env',
  version: env['npm_package_version'] + ' - LOCAL',
  DEFAULT_MODEL : env['DEFAULT_MODEL'],
  NEXT_PUBLIC_DEFAULT_SYSTEM_PROMPT : env['NEXT_PUBLIC_DEFAULT_SYSTEM_PROMPT'],
  NEXT_PUBLIC_DEFAULT_TEMPERATURE : env['NEXT_PUBLIC_DEFAULT_TEMPERATURE'],
  GPT_API_HOST : env['GPT_API_HOST'],
  GPT_API_TYPE : env['GPT_API_TYPE'],
  GPT_API_VERSION : env['GPT_API_VERSION'],
  GPT_ORGANIZATION : env['GPT_ORGANIZATION'],
  AZURE_DEPLOYMENT_ID : env['AZURE_DEPLOYMENT_ID'],
  GOOGLE_API_KEY : env['GOOGLE_API_KEY'],  
  GOOGLE_CSE_ID : env['GOOGLE_CSE_ID'], 
};
