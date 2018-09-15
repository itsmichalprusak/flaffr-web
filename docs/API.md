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
AuthToken: string,
id: String,
key: File [image/jpg]
```

##### Response:
```json
{
  
}
```
