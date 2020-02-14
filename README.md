# Rockset Website v1	

 ## Setup	

 First you'll need to create a .contentful.json file and fill with the contents of contentful-json	
in 1password.	

 ## Development	

 `gatsby develop` or `npm run dev`	


 ## Deploy to dev	

 Every Buildkite build on master pushes to dev.rockset.com. You can also do:	

 `cd public && aws s3 sync --delete . s3://dev.rockset.com`	

 ## Deploy to prod	

 Assume prod role, and do the same as dev except bucket is `rockset.com`	

 ## TODOs / Next Steps / Notes	

 Currently we push a static bundle to s3. In order to fetch new Contentful content, bundle has to	
be rebuilt, so for now will be a manual dev process. Probably will need to use [Contentful Delivery API]	
(https://www.contentful.com/developers/docs/references/content-delivery-api/)	
and something like [Travis CI](https://travis-ci.org/) or [Netlify](https://www.netlify.com/) 	
to automatically rebuild on new content.	

 We currently bring in webflow.js and jQuery in components/navigation.jsx. Let's migrate away from this.	

 Font isn't loading correctly. Let's fix this.	

 ## Additional commands	

 `npm run serve`	

 Spin up a production-ready server with your blog. Don't forget to build your page beforehand.
