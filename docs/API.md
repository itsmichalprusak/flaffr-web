# Flaffr API documentation
Base URL: `flaffr.com/panel/api/`

All endpoints (also the parameters they take and responses they provide) are listed below.

## Error format
```json
{
    "error": true,
    "message": "Invalid username or password."
}
```

## Endpoints

### POST userPrefencesUpdate
##### Request:
```
AuthToken: string
id: String
date_pref: String
ethnicity: String
height: String
kids: String
que_ans: String
que_id: String
religion: String,
gender_pref: String
max_age_pref: String
max_dist_pref: String
min_age_pref: String
min_dist_pref: String
```

##### Response:
```json
{
  
}
```

### POST edit_gallery_images
##### Request:
```
AuthToken: String
id: String
key: File [image/jpg]
```

##### Response:
```json
{
  
}
```

### POST updatetoken
##### Request:
```
AuthToken: String
userid: String
device_token: String,
```

##### Response:
```json
{
  
}
```

### POST get_all_configuration
##### Request:
```
no params
```

##### Response:
```json
{
    "GOOGLE_PLACE_API_KEY": "AIzaSyDHceMFyruLORuJBNsKQjCYPpBRhQnh_y8",
    "FACEBOOK_KEY": "420526411756660",
    "XMPP_ENABLE": "true",
    "APP_XMPP_SERVER": "",
    "APP_XMPP_HOST": "",
    "XMPP_DEFAULT_PASSWORD": "",
    "PUSH_ENABLE_SANDBOX": "",
    "PUSH_SANDBOX_GATEWAY_URL": "",
    "PUSH_GATEWAY_URL": "",
    "ANDROID_FCM_KEY": "",
    "INSTAGRAM_CALLBACK_BASE": "",
    "INSTAGRAM_CLIENT_SECRET": "",
    "INSTAGRAM_CLIENT_ID": "",
    "adMobKey": "",
    "adMobVideoKey": "",
    "RemoveAddInAppPurchase": "",
    "RemoveAddInAppBilling": "",
    "TermsAndConditionsUrl": "http://localhost/cuplove/install/user/privacy"
}
```

### POST send_email
##### Request:
```
email: String
```

##### Response:
```json
{
    "error": false,
    "message": "Verification code has been sent to your registered Email address..",
    "verification_code": 1781
}
```

### POST email_verification
##### Request:
```
email: String
verification_code: String
```

##### Response:
```json
{
  
}
```

### POST register
##### Request:
```
about: String
access_location: String
date_pref: String
device: String
device_token: String
dob: String
education: String
email: String
ethnicity: String
fname: String
gender: String
height: String
kids: String
lname: String
location_lat: String
location_long: String
max_age_pref: String
max_dist_pref: String
min_age_pref: String
min_dist_pref: String
password: String
profession: String
profile_image: String
que_ans: String
que_id: String
religion: String
status: String
referal_code: String
```

##### Response:
```json
{
  
}
```

### POST verified_referal_code
##### Request:
```
referal_code: String
```

##### Response:
```json
{
  
}
```

### POST all_languages
##### Request:
```
no params
```

##### Response:
```
{
    "error": false,
    "language": [
        {
          "name": "english",
          "rtl": "0"
        }
    ]
}
```

### POST loginwithfb
##### Request:
```
Status: String
about: String
access_location: String
device: String
device_token: String
dob: String
education: String
email: String
fb_id: String
fname: String
lname: String
location_lat: String
location_long: String
profession: String
```

##### Response:
```json
{

}
```

### POST forgot_password
##### Request:
```
email: String
```

##### Response:
```json
{
    "error": false,
    "message": "We have sent you an email containing password reset information.  Please follow it to reset your password."
}
```

### POST login
##### Request:
```
email: String
password: String
device: String
device_token: String
```

##### Response:
```json
{
  
}
```

### GET instagram_images
##### Request:
```
AuthToken: String
```

##### Response:
```json
{
  
}
```

### POST api_logout
##### Request:
```
AuthToken: String
id: String
```

##### Response:
```json
{
  
}
```

### POST reporteuser
##### Request:
```
AuthToken: String
id: String
report_to_id: String
```

##### Response:
```json
{
  
}
```

### POST blockuser
##### Request:
```
AuthToken: String
id: String
blockid: String
blockstatus: String
```

##### Response:
```json
{
  
}
```

### POST userUnfriend
##### Request:
```
AuthToken: String
id: String
friendid: String
```

##### Response:
```json
{
  
}
```

### POST chat
##### Request:
```
AuthToken: String
id: String
```

##### Response:
```json
{
  
}
```

### POST getblockstatus
##### Request:
```
AuthToken: String
id: String
```

##### Response:
```json
{
  
}
```

### POST getNotificationCount
##### Request:
```
AuthToken: String
id: String
```

##### Response:
```json
{
  
}
```

### POST getuserdetails
##### Request:
```
AuthToken: String
id: String
userid: String
```

##### Response:
```json
{
  
}
```

### POST get_all_static
##### Request:
```
language: String
```

##### Response:
```json
{
  
}
```

### POST GetInstagramImages
##### Request:
```
AuthToken: String
friendid: String
userid: String
```

##### Response:
```json
{
  
}
```

### POST get_dashboard
##### Request:
```
user_id: String
is_agency: String
```

##### Response:
```json
{
  
}
```

### POST getagency
##### Request:
```
userid: String
```

##### Response:
```json
{
  
}
```
