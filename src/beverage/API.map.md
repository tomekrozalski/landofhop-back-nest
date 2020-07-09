# API map for beverage

## Admin

- Landing Page, Tiles, get recently added beverages
  GET beverage/get-last-tiles/:amount (admin/getLastTiles)

- Beverage Details, get beverage details
  GET beverage/:language/:shortId/:brand/:badge (admin/getTranslatedDetails)

- Dashboard, get beverage details:
  GET beverage/:shortId/:brand/:badge (admin/getDetails)

- Dashboard, add new beverage:
  POST beverage (admin/addNewBeverage)

- Dashboard, update beverage data:
  PUT beverage (admin/updateBeverage)

- Dashboard, get beverage images data:
  GET beverage/images/:language/:shortId/:brand/:badge (admin/getImagesData)

## Images

- Dashboard, add and remove cap
  POST beverage/cap (images/cap)
  DELETE beverage/cap (images/cap)

- Dashboard, add cover
  POST beverage/cover (images/cover)

- Dashboard, add and remove gallery
  POST beverage/gallery (images/gallery)
  DELETE beverage/gallery (images/gallery)

- Dashboard, add or update cover and gallery outlines
  GET beverage/update-cover-outline/:id/:shortId/:brand/:badge (images/outlines)
  GET beverage/update-container-outline/:id/:shortId/:brand/:badge (images/outlines)

## Prefetch (for Gatsby static sites)

- Get all beverages details
  GET beverage (prefetch/getAllBeveragesDetails)

## Public

- Search
  POST beverage/search (public/search)
