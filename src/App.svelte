<script>
  import { library } from "@fortawesome/fontawesome-svg-core";
  import { faSmileWink as fasSmileWink } from "@fortawesome/free-solid-svg-icons";
  import {
    FontAwesomeIcon,
    FontAwesomeLayers,
    FontAwesomeLayersText,
  } from "fontawesome-svelte";
  import Router from "svelte-spa-router";
  import Navbar from "./components/Navbar.svelte";
  import AboutUs from "./pages/AboutUs.svelte";

  import Home from "./pages/Home.svelte";
  // library.add(faSmileWink);
  export let name;

  const routes = {
    // Exact path
    "/": Home,
    "/about": AboutUs,
    // // Using named parameters, with last being optional
    // '/author/:first/:last?': Author,

    // // Wildcard parameter
    // '/book/*': Book,

    // // Catch-all
    // // This is optional, but if present it must be the last
    // '*': NotFound,
  };
</script>

<main>
  <Navbar />
  <Router {routes} />
  <FontAwesomeIcon icon={fasSmileWink} />

  <h1 class="py-8 px-4 border border-orange shadow-lg bg-primary">
    Hello mau mau {name}!
  </h1>
  <p>
    Visit the <a href="https://svelte.dev/tutorial">Svelte tutorial</a> to learn
    how to build Svelte apps.
  </p>
</main>
