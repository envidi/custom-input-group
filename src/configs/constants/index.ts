export * from './endpoints';

export const JOTAI_LOCAL_STORAGE_KEY = {
  AUTH: 'auth',
  WIDGETS_LAYOUT: 'widgets-layout',
  COMPONENTS_IN_ACTIVE: 'components-in-active',
  WIDGETS_LAYOUT_UPDATED_AT: 'widgets-layout-updated-at',
  COLUMN_PROSPECT_TABLE: 'column-prospect-table',
  COLUMN_PROSPECT_TABLE_UPDATED_AT: 'column-prospect-table-updated-at',
  COLUMN_MY_MEMBER_TABLE: 'column-my-member-table',
  COLUMN_MY_MEMBER_TABLE_UPDATED_AT: 'column-my-member-table-updated-at',
  TIMEZONE_NAME: 'timezone-name',
  SELECTED_COUNTRY_EVENT_FILTER: 'selected-country-event-filter',
  SELECTED_EVENT_TYPE_FILTER: 'selected-event-type-filter',
  MAX_LOGIN_ATTEMPTS: 'max-login-attempts',
  MASTER_CONTACT_TYPE: 'master-contact-type',
  RELATIONSHIP_CALL_ACTIVITIES: 'relationship-call-activities',
  INVITATION_CALL_ACTIVITIES: 'invitation-call-activities',
};

export const API_URL = import.meta.env.VITE_API_URL;

export const SKYNET_URL = import.meta.env.VITE_SKYNET_URL;

export const TIME_INTERVAL = 10000; // Update every 10 seconds

export const DATE_FORMAT = {
  DATE_FORMAT_CALENDAR: 'DD.MM.YYYY',
  DATE_FORMAT_HALF_MONTH: 'DD-MMM-YYYY',
  MONTH_FORMAT: 'MMM',
  DATE_FORMAT_FULL_TIME: 'YYYY-MM-DD HH:mm',
  FORMAT_TIME: 'hh:mm a',
  FORMAT_TIME_AND_TIMEZONE: 'hh:mm a ([UTC]Z)',
  CALENDAR_DATE_FORMAT: 'YYYY/MM/DD',
};

export const LINK_SUPPORT_LOGIN = import.meta.env.VITE_LINK_SUPPORT_LOGIN;

export const DEBOUNCE_TIME_UPDATE_TABLE_COLUMN = 1000;

export const DEFAULT_PAGE_QUERY = {
  PAGE: 1,
  PAGE_SIZE: 10,
};

export const TENANT_ID = import.meta.env.VITE_OUTLOOK_TENANT_ID;
export const CLIENT_ID = import.meta.env.VITE_OUTLOOK_CLIENT_ID;
export const APP_DOMAIN = import.meta.env.VITE_APP_DOMAIN;
export const PHONE_REGEX =
  /^((\+\d{1,2}(-| )?(| )\(?\d\)?(-| )?\d{1,3})|(\(?\d{2,3}\)?)?(\\d{4}(| )(\\-\\d{4})?)?)(-| )?(\d{3,4})(-| )?(\d{4})(( x| ext)\d{1,4}){0,1}|(\+\d{2}(| )\(\d{3}\)(| )\d{3}(| )\d{4})$/;

export const ACTIVITY_CHANNEL_ID = 12;
