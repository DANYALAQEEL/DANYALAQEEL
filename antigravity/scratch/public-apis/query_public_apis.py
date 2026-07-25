#!/usr/bin/env python3
"""
================================================================================
🌐 PUBLIC APIS QUERY ENGINE & NAVIGATOR
================================================================================
Author: Antigravity AI Engine (for DANYALAQEEL)
Database: 1,602+ Free Public APIs across 52 Categories
Features: Keyword search, Category filtering, Auth type filter, CORS filter
================================================================================
"""

import os
import sys
import json
import argparse

DB_PATH = os.path.join(os.path.dirname(__file__), "public_apis_db.json")

def load_db():
    if not os.path.exists(DB_PATH):
        print(f"Error: Database file not found at {DB_PATH}")
        return []
    with open(DB_PATH, "r", encoding="utf-8") as f:
        return json.load(f)

def search_apis(query=None, category=None, no_auth=False, cors_only=False, limit=20):
    apis = load_db()
    results = []

    for api in apis:
        match = True
        
        if query:
            q = query.lower()
            text = f"{api['name']} {api['description']} {api['category']} {api['url']}".lower()
            if q not in text:
                match = False

        if category and category.lower() not in api['category'].lower():
            match = False

        if no_auth and api['auth'] != 'No Auth' and api['auth'] != '`apiKey`':
            if api['auth'] != 'No':
                match = False

        if cors_only and api['cors'].lower() != 'yes':
            match = False

        if match:
            results.append(api)

    return results

def main():
    parser = argparse.ArgumentParser(description="Query 1,602+ Free Public APIs")
    parser.add_argument("query", nargs="?", default=None, help="Search keyword (e.g. weather, crypto, finance, music)")
    parser.add_argument("-c", "--category", help="Filter by category (e.g. Animals, Books, Development, Weather)")
    parser.add_argument("--no-auth", action="store_true", help="Only show APIs that require no API key or auth")
    parser.add_argument("--cors", action="store_true", help="Only show APIs with CORS support")
    parser.add_argument("-l", "--limit", type=int, default=15, help="Number of results to display (default: 15)")
    args = parser.parse_args()

    results = search_apis(query=args.query, category=args.category, no_auth=args.no_auth, cors_only=args.cors, limit=args.limit)

    print("=" * 80)
    print(f"🌐 PUBLIC APIS SEARCH RESULTS ({len(results)} matches found)")
    print("=" * 80)

    if not results:
        print("No matching APIs found.")
        return

    for idx, api in enumerate(results[:args.limit], 1):
        print(f" {idx:2d}. [{api['name']}] ({api['category']})")
        print(f"     URL        : {api['url']}")
        print(f"     Description: {api['description']}")
        print(f"     Auth       : {api['auth']} | HTTPS: {api['https']} | CORS: {api['cors']}\n")

if __name__ == "__main__":
    main()
