from fastapi import FastAPI, HTTPException, Request
from pydantic import BaseModel, HttpUrl
from datetime import datetime, timedelta
from typing import Dict

app = FastAPI()

# In-memory storage for short URLs
short_urls: Dict[str, dict] = {}

class ShortUrlRequest(BaseModel):
    url: HttpUrl
    validity: int  # in minutes
    shortcode: str

@app.post("/shorturls")
def create_short_url(data: ShortUrlRequest):
    if data.shortcode in short_urls:
        raise HTTPException(status_code=400, detail="Shortcode already exists.")
    expiry = datetime.utcnow() + timedelta(minutes=data.validity)
    short_urls[data.shortcode] = {
        "url": data.url,
        "created_at": datetime.utcnow(),
        "expiry": expiry,
        "hits": 0
    }
    return {
        "shortcode": data.shortcode,
        "short_url": f"/shorturls/{data.shortcode}",
        "expiry": expiry.isoformat()
    }

@app.get("/shorturls/{shortcode}")
def get_short_url_stats(shortcode: str, request: Request):
    entry = short_urls.get(shortcode)
    if not entry:
        raise HTTPException(status_code=404, detail="Shortcode not found.")
    if datetime.utcnow() > entry["expiry"]:
        raise HTTPException(status_code=410, detail="Short URL expired.")
    entry["hits"] += 1
    return {
        "shortcode": shortcode,
        "original_url": entry["url"],
        "created_at": entry["created_at"].isoformat(),
        "expiry": entry["expiry"].isoformat(),
        "hits": entry["hits"]
    } 