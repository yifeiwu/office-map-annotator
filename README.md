# Office Map Annotator

Create annotated maps for your indoor office or map layouts. [Try it!](https://yifeiwu.github.io/office-map-annotator/) 

![Preview](https://github.com/yifeiwu/office-map-annotator/blob/main/Screenshot%202025-08-28%20131737.png)


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
