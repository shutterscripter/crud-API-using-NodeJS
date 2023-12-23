<!-- api is build using node js and write documentation for it -->

# API Documentation

### Base URL: https://crud-api-using-nodejs.onrender.com/

## Endpoints

### 1. GET /api/projects
- Returns all projects
- Response:
```json
[
  {
    "id": "1a82b7c1-ae6e-4a56-9ef2-8d8db1524812",
    "title": "Project 01",
    "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla euismod, nisl eget ultricies aliquam, nunc nisl aliquet nunc, vitae",
    "image": "https://picsum.photos/200/300",
    "theme": "Sociaal",
    "partners": "Partners",
    "location": "Avasari",
    "date": "12-12-2020"
  }...
]
```

### 2. GET /api/projects/id
- Returns a project with the given id
- Response:
```json
{
  "id": "1a82b7c1-ae6e-4a56-9ef2-8d8db1524812",
  "title": "Project 01",
  "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla euismod, nisl eget ultricies aliquam, nunc nisl aliquet nunc, vitae",
  "image": "https://picsum.photos/200/300",
  "theme": "Sociaal",
  "partners": "Partners",
  "location": "Avasari",
  "date": "12-12-2020"
}
```

### 3. POST /api/projects
- Creates a new project
- Request Body:
```json
{
  "title": "Project 01",
  "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla euismod, nisl eget ultricies aliquam, nunc nisl aliquet nunc, vitae",
  "image": "https://picsum.photos/200/300",
  "theme": "Sociaal",
  "partners": "Partners",
  "location": "Avasari",
  "date": "12-12-2020"
}
```
- Response:
```json
{
  "id": "1a82b7c1-ae6e-4a56-9ef2-8d8db1524812",
  "title": "Project 01",
  "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla euismod, nisl eget ultricies aliquam, nunc nisl aliquet nunc, vitae",
  "image": "https://picsum.photos/200/300",
  "theme": "Sociaal",
  "partners": "Partners",
  "location": "Avasari",
  "date": "12-12-2020"
}
```

### 4. PUT /api/projects/id
- Updates a project with the given id
- Request Body:
```json
{
  "title": "Project 01",
  "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla euismod, nisl eget ultricies aliquam, nunc nisl aliquet nunc, vitae",
  "image": "https://picsum.photos/200/300",
  "theme": "Sociaal",
  "partners": "Partners",
  "location": "Avasari",
  "date": "12-12-2020"
}
```
- Response:
```json
{
  "title": "Success",
  "message": "The project was updated successfully."
}
```

### 5. DELETE /api/projects/id
- Deletes a project with the given id
- Response:
```json
{
  "title": "Success",
  "message": "The project was deleted successfully."
}
```

<!-- donors api  -->

### 6. GET /api/donors
- Returns all donors
- Response:
```json
[
  {
    "id": "d7b8a91c-ae15-471e-bbb2-98f165549482",
    "Donor Name": "Mr. Amit Chavan (America)",
    "Date": "null",
    "Donation": 24000
  },
  {
    "id": "f29b3519-f7c5-4f1e-a933-29e8ac837793",
    "Donor Name": "Mr. Bipin Abhang",
    "Date": "null",
    "Donation": 11000
  },
  ...
]
```


### 7. POST /api/donors 
- Creates a new donor
- Request Body:
```json
{
  "Donor Name": "Mr. Amit Chavan (America)",
  "Date": "null",
  "Donation": 24000
}
```
- Response:
```json
{
  "id": "d7b8a91c-ae15-471e-bbb2-98f165549482",
  "Donor Name": "Mr. Amit Chavan (America)",
  "Date": "null",
  "Donation": 24000
}
```

### 8. PUT /api/donors/id
- Updates a donor with the given id
- Request Body:
```json
{
  "Donor Name": "Mr. Amit Chavan (America)",
  "Date": "null",
  "Donation": 24000
}
```
- Response:
```json
{
  "title": "Success",
  "message": "The donor was updated successfully."
}
```


### 9. DELETE /api/donors/id
- Deletes a donor with the given id
- Response:
```json
{
  "title": "Success",
  "message": "The donor was deleted successfully."
}
```

<!-- gallary api -->

### 10. GET /api/gallary
- Returns all Images in gallary
- Response:
```json
[
  {
    "id": "91a2baba-5150-4f47-b3d4-c3c8c87ac5e7",
    "event": "test by jayesh",
    "image-url": "https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png"
  },
  {
    "id": "91a2baba-5150-4f47-b3d4-c3c8c97ac5e7",
    "event": "test",
    "image-url": "https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png"
  },
  ...
]
```

### 11. POST /api/gallary
- Creates a new image in gallary
- Request Body:
```json
{
  "event": "test by jayesh",
  "image-url": "https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png"
}
```
- Response:
```json
{
  "id": "91a2baba-5150-4f47-b3d4-c3c8c87ac5e7",
  "event": "test by jayesh",
  "image-url": "https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png"
}
```

### 12. PUT /api/gallary/id
- Updates a image in gallary with the given id
- Request Body:
```json
{
  "event": "test by jayesh",
  "image-url": "https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png"
}
```
- Response:
```json
{
  "title": "Success",
  "message": "The image was updated successfully."
}
```

### 13. DELETE /api/gallary/id
- Deletes a image in gallary with the given id
- Response:
```json
{
  "title": "Success",
  "message": "The image was deleted successfully."
}
```





