# Financial Health Backend

A FastAPI-based backend for the Financial Health Tool. Provides user management, financial data ingestion and processing, and JSON APIs for frontend consumption.

## Features
- REST API endpoints for users and financials
- Database integration (PostgreSQL)
- Modular routers and data processing utilities
- Designed for local development and production deployment

## Tech stack
- Python 3.9+
- FastAPI
- SQLAlchemy (or the project's ORM layer)
- PostgreSQL
- Uvicorn (ASGI server)

## Repository layout
- [app/main.py](app/main.py) - application entrypoint
- [app/database.py](app/database.py) - database session/config
- [app/models.py](app/models.py) - ORM models
- [app/schemas.py](app/schemas.py) - Pydantic schemas
- [app/crud.py](app/crud.py) - CRUD helpers
- [app/routers/financials.py](app/routers/financials.py) - financial endpoints
- [app/routers/users.py](app/routers/users.py) - user endpoints
- [app/utils/data_processor.py](app/utils/data_processor.py) - data processing helpers
- [.env](.env) - environment variables (not checked into VCS)
- [requirements.txt](requirements.txt) - Python dependencies

## Environment variables
Create a `.env` file in the project root (do not commit secrets). The app expects at minimum:
- `DATABASE_URL` — PostgreSQL connection string
- `SECRET_KEY` — application secret
- `OPENAI_API_KEY` — optional (if the project integrates with OpenAI)

Example (do not copy secrets into VCS):
```bash
DATABASE_URL=postgresql://user:password@localhost:5432/financial_health
SECRET_KEY=<your-secret>
OPENAI_API_KEY=<optional-key>
```

1. Install dependencies:
```bash
pip install -r requirements.txt
```

2. Prepare the database:
```bash
## Example using psql
createdb financial_health
##Or create a database as needed and set DATABASE_URL accordingly
```

3. Populate .env with the correct values (see .env).
4. Run the app with Uvicorn:
```bash
uvicorn app.main:app --reload
```

- The API will be available at http://127.0.0.1:8000 and automatic docs at:

- http://127.0.0.1:8000/docs
- http://127.0.0.1:8000/redoc

## Common commands
- Install deps: pip install -r requirements.txt
- Start server: uvicorn app.main:app --reload
- Run migrations: (if using Alembic) configure and run Alembic against app/database.py

## Development notes
- Keep secrets out of source control and rotate keys periodically.
- Implement tests for critical business logic in app/utils/data_processor.py and CRUD operations in app/crud.py.
- Modular routers are defined in app/routers/ — add new endpoint groups there.

## Troubleshooting
- Database connection errors: verify DATABASE_URL and that PostgreSQL is running.
- Dependency issues: recreate virtual environment and reinstall from requirements.txt.
