# Database server

## Problem

Before your interview, write a program that runs a server that is accessible on http://localhost:4000/. When your server receives a request on http://localhost:4000/set?somekey=somevalue it should store the passed key and value in memory. When it receives a request on http://localhost:4000/get?key=somekey it should return the value stored at somekey.

During your interview, you will pair on saving the data to a file. You can start with simply appending each write to the file, and work on making it more efficient if you have time.

## Next steps

1. Implement persistency, so data stored survives server restarts.

2. Improve memory efficiency, use an eviction policy to optimize memory usage.
