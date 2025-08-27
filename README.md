# Office Map Annotator

Create annotated maps for your indoor office or map layouts. 

https://private-user-images.githubusercontent.com/8293149/482514710-b36ec4d1-74f6-44db-9f19-46a1218404c4.png?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3NTYyNzcyNTYsIm5iZiI6MTc1NjI3Njk1NiwicGF0aCI6Ii84MjkzMTQ5LzQ4MjUxNDcxMC1iMzZlYzRkMS03NGY2LTQ0ZGItOWYxOS00NmExMjE4NDA0YzQucG5nP1gtQW16LUFsZ29yaXRobT1BV1M0LUhNQUMtU0hBMjU2JlgtQW16LUNyZWRlbnRpYWw9QUtJQVZDT0RZTFNBNTNQUUs0WkElMkYyMDI1MDgyNyUyRnVzLWVhc3QtMSUyRnMzJTJGYXdzNF9yZXF1ZXN0JlgtQW16LURhdGU9MjAyNTA4MjdUMDY0MjM2WiZYLUFtei1FeHBpcmVzPTMwMCZYLUFtei1TaWduYXR1cmU9MDM5NGQ5MGY4NjFiMmYzNzVkOTBjOTQ3MWM3ZTg4ZWM5MDljMjBmYjZlM2M2MDM0YTIxODRhMmZhOTMzODczMiZYLUFtei1TaWduZWRIZWFkZXJzPWhvc3QifQ.AOfhJ6YCjEhzgNfvwVQedCzd6OIw4dC3rt2qrbu8j3w

## Usage

1. Gather the map(s) of your event or office. 
2. Go to the editing endpoint
3. Choose the map picture to annotate
4. Add points of interest e.g. meeting room names, toilets, fire exits.
5. Save the list of points of interest. 
6. Use it with the readonly view.


http://localhost:5173/ - Add/Edit annotations

http://localhost:5173/view - Read Only. This will load the default room and annotations located in the assets directory


## Development

```js

// Add dependencies
npm install 

// Run the dev server
npm run dev 

// Productionize
npx vite build

```
