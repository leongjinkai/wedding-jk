import { defineStorage } from '@aws-amplify/backend';

export const storage = defineStorage({
  name: 'publicAssets',
  access: (allow) => ({
    'media/*': [
      allow.guest.to(['read']),
    ]})
});