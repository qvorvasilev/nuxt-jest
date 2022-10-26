export default {
  validation: {
    alreadyExists: '{0} {1} already exists', // example with placeholders. Don't remove yet
    signup_failed: 'Sign up failed',
    required: 'This field is required',
    email: 'Please enter a valid email format',
    numeric: 'Must be a numeric value',
    minLengthOf: 'Minimum length is {0}',
    maxLengthOf: 'Maximum length is {0}',
    minValue: 'Minimum value is ',
    maxValue: 'Maximum value is ',
    repeatPassword: 'Password does not match',
    notValidRange: 'Value is outside of range',
    alpha: 'Must be a alphabetic value',
    invalid_credentials: 'Invalid credentials',
    strongPassword: 'Must have at least 8 characters with one number and one uppercase letter',
    not_properly_formatted: 'Field is not properly formatted.',
    invalid_phone_number: 'Invalid phone number',
    password_is_weak: 'Must have at least 8 characters with one uppercase letter and a special character',
    password_hint: 'Must have at least 8 characters with one number and one uppercase letter',
    namesMinLength: 'Names must have more than one letter',
    required_field: 'This field is required',
    invalid_country_code: 'Invalid country code',
    internal_server_error: 'Oops, something went wrong'
  },
  menu: {
    settings: 'Settings',
    general_settings: 'General settings',
    cities: 'Citites'
  },
  btn: {
    profile: 'Profile',
    change_password: 'Change password',
    logout: 'Logout',
    clear_all_cache: 'Clear All Caches',
    re_init_rbac: 'Re-init RBAC',
    login: 'Login',
    forgotten_password: 'Forgot password',
    submit: 'Submit',
    create: 'Create',
    cancel: 'Cancel'
  },
  form: {
    create: 'Create',
    edit: 'Edit',
    Email: 'Email',
    Password: 'Password',
    Name: 'Name',
    Tolerance: 'Tolerance',
    RepatriationAfterTyreBlockInMinutes: 'Repatration after (min)',
    ExpireParkingReminderAfterInMinutes: 'Expiration reminder (min)',
    Status: 'Status',
    SMSProviderMobicaSettings: {
      Username: 'Mobica username',
      Password: 'Mobica password'
    },
    TimeZoneID: 'Time zone',
    DefaultLanguage: 'Default language',
    CountryID: 'Country',
    HasSubscriptions: 'Subscriptions',
    HasDailyCards: 'Daily cards',
    PaymentProviderIDs: 'Payment providers',
    SMSProviderID: 'SMS provider',
    SMSProviderLinkMobilitySettings: {
      Shortcode: 'Shortcode',
      Service: 'Service',
      Secret: 'Secret',
      Key: 'Key'
    }
  },
  page: {
    login: 'Login',
    forgotten_password: 'Forgot password',
    cities: 'Cities',
    city: 'City'
  },
  router: {
    '/': 'home',
    '/city': 'city'
  },
  months: {
    Jan: 'Jan',
    Feb: 'Feb',
    Mar: 'Mar',
    Apr: 'Apr',
    May: 'May',
    Jun: 'Jun',
    Jul: 'Jul',
    Aug: 'Aug',
    Sep: 'Sep',
    Oct: 'Oct',
    Nov: 'Nov',
    Dec: 'Dec'
  }
}
