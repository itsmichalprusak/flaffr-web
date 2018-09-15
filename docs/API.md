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

#### login
##### Request:
```
email: String
password: String
device: String [CONST "android"]
```

##### Response:
```json
{
  
}
```

