#!/bin/bash
# kill any process already using port 4000
PORT=4000
PID=$(lsof -ti :$PORT)
if [ -n "$PID" ]; then
  echo "🧹 Cleaning port $PORT (PID $PID)..."
  kill -9 $PID
fi

# start dev server
echo "🚀 Starting MeDeviceUSA server on port $PORT..."
pnpm dev --port $PORT
