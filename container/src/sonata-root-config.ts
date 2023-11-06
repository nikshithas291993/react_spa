import { registerApplication, start } from "single-spa";
import {
  constructApplications,
  constructRoutes,
  constructLayoutEngine,
} from "single-spa-layout";
import microfrontendLayout from "./microfrontend-layout.html";

const routes = constructRoutes(microfrontendLayout);
const applications = constructApplications({
  routes,
  loadApp({ name }) {
    return System.import(name);
  },
});
const productId = window.location.pathname.split('/pdp/')[1];
applications.forEach((app) => {
  console.log(app);
  registerApplication({
    ...app,
    customProps: {
      productId: productId, // Set the productId here
      // Add other custom props if needed
    },
  });
});
const layoutEngine = constructLayoutEngine({ routes, applications });

//applications.forEach(registerApplication);
layoutEngine.activate();
start();
