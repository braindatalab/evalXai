# Backend Docs

- [Requirements](#requirements)
- [Project Structure](#project-structure)
- [API Endpoints](#api-endpoints)
  - [XAI Detail](#xai-detail)
  - [Score Detail](#score-detail)
  - [Dataset Detail](#dataset-detail)
  - [AI Detail](#ai-detail)
  - [XAI Template](#xai-template)
- [Data Model](#data-model)
  - [XAI Method Model](#xai-method-model)
  - [Score Model](#score-model)
  - [Dataset Model](#dataset-model)
  - [ML Model](#ml-model)

## Requirements

- Django==3.2.23 
- asgiref==3.7.2
- sqlparse==0.4.4
- psycopg2-binary==2.9.9
- djangorestframework==3.14.0
- docker==6.1.3

## Project Structure
│ `Dockerfile`
│ `manage.py`
│ `requirements.txt`
│ `__init__.py`
│
│ **``api``**
│ │ `__init__.py`
│ │ `apps.py`
│ │ `models.py`
│ │ `serializers.py`
│ │ `tests.py`
│ │ `views.py`
│ │ `worker_utils.py`
│ │
│ │ **``migrations``**
│ │ │ `0001_initial.py`
│ │ │ `__init__.py`
│  
│ **``backend``**
│
│ **``dataset``**
│ │ `train_data.pt`
│
│ **``ml_model``**
│ │ `linear_1d1p_0.18_uncorrelated_LLR_1_0.pt`
│
│ **``mysite``**
│ │ `settings.py`
│ │ `urls.py`
│ │ `wsgi.py`
│ │ `init.py`
│
│ **``template``**
│ │ `xai_template.py`

## *API Endpoints*

### *XAI Detail*

- **URL** `/api/xai/<int:challenge_id>/`
- **Method** POST
- **Description** 
  - Endpoint to for XAI script upload
  - Endpoint triggers creation of a worker (runs and evaluates xai method) container 
- **Parameters**
  - `challenge_id`: Number


### *Score Detail*

- **URL** `/api/score/<int:challenge_id>/`
- **Methods** GET, POST
- **Description** Endpoint to retrieve or update scores for a challenge.
- **Parameters**
  - `challenge_id`: Number
- **Response** 
  - GET:
    - `score`: Number
  - POST:
    - Newly create or update score

### *Dataset Detail*

- **URL** `/api/dataset/<int:challenge_id>/`
- **Method** GET
- **Description** Endpoint to download dataset associated with a challenge
- **Parameters**
  - `challenge_id`: Number
- **Response** 
  - Dataset file in binary format

### *AI Detail*

- **URL** `/api/mlmodel/<int:challenge_id>/`
- **Method** GET
- **Description** Endpoint to download trained machine learning model associated with a challenge
- **Parameters**
  - `challenge_id`: Number
- **Response** 
  - Trained machine learning model file in binary format

### *XAI Template*

- **URL** `/api/xai_template/<int:challenge_id>/`
- **Method** GET
- **Description** Endpoint to download XAI template file associated with a challenge.
- **Parameters**
  - `challenge_id`: Number
- **Response** 
  - XAI template file in binary format

## *Data Model*

### *XAI Method Model*
- **Description** Model representing the XAI  method associated with a challenge
- **Fields**
  - `challenge_id`: IntegerField (default: 1)
  - `xai_method`: JSONField (not final type, TODO)



### Score Model
- **Description** Model representing the score associated with a challenge 
- **Fields**
  - `challenge_id`: IntegerField (default: 1)
  - `score`: FloatField

### Dataset Model
- **Description** Model representing the dataset associated with a challenge
- **Fields**
  - `challenge_id`: IntegerField (default: 1)
  - `dataset`: JSONField (not final type)

### ML Model
- **Description** Model representing the machine learning model associated with a challenge
- **Fields**
  - `challenge_id`: IntegerField (default: 1)
  - `model`: JSONField (not final type)
