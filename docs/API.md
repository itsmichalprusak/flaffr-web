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
```json
{
  
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