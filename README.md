# evalXai

This web application provides users with ML models and datasets, and evaluates their XAI methods.

# Requirements:

The only requirement needed for this project is docker, and enough local storage (~10 Gb).

# How to run the platform:

### building images

inside the folder containing the repository, please run the following command:

`docker compose up`

The first time you run it, it might take a few minutes to finish installing all dependencies and building the images.

### running Django migrations

When connecting to the database for the first time (e.g. after the docker volumes are created for the
first time or deleted), you will need to create and run the migration script.
For this step, you will need to know the name of your backend container name, in order to execute commands inside it.
After running `docker ps`, copy the name of the container with image `{root_folder}-backend`.
If your root folder is called "evalXai", and you used docker compose to instantiate all containers, you can use the
same container names we used in the default commands below.

`docker exec -it evalxai-backend-1 python manage.py makemigrations`

`docker exec -it evalxai-backend-1 python manage.py migrate`

Alternatively, if you have the docker desktop app, you can follow these steps:

- On the left sidebar, go to the containers section.
- click on the three dots on the right side.
- click on "open in terminal"
- run the following commands:

  `python manage.py makemigrations`

  `python manage.py migrate`

### You're done! You can now access the platform at: localhost:3000

### MIT Liscense

Copyright (c) <2024>

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
