import type { Attribute, Schema } from '@strapi/strapi';

export interface SocialSocialMetaTags extends Schema.Component {
  collectionName: 'components_social_social_meta_tags';
  info: {
    description: '';
    displayName: 'SocialMetaTags';
  };
  attributes: {
    Description: Attribute.Text &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        maxLength: 200;
      }>;
    Image: Attribute.Media<'images'>;
    Keywords: Attribute.Text & Attribute.Required;
    Title: Attribute.Text;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'social.social-meta-tags': SocialSocialMetaTags;
    }
  }
}
