<template>
  <div id="app">
    <!-- code in this file serves as the template for all other pages -->
    <!-- i.e the jumbotron and nav will persist across all children pages -->
    <!-- insert jumbotron -->
    <b-jumbotron class="my-0"> 
      <h1 class="display-3 mb-2">Movie Explorer</h1>
      <p class="lead">Your one stop to find movie trends and stats.</p>
    </b-jumbotron>
  
    <div id="nav">
      <b-navbar toggleable="lg" type="dark" variant="dark">
        <b-navbar-brand href="#"><i class="fas fa-film fa-2x"></i></b-navbar-brand>

        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

        <b-collapse id="nav-collapse" is-nav>
          <b-navbar-nav>
            <!-- embed router-links to -->
            <b-nav-item to="/">Home</b-nav-item>
            <b-nav-item to="Trends">Trends</b-nav-item>
            <b-nav-item to="Images">Images</b-nav-item>
            <b-nav-item to="About">About</b-nav-item>
          </b-navbar-nav>
        </b-collapse>
      </b-navbar>
       <!-- <router-link  to="/">Home</router-link>
       <router-link  to="/about">About</router-link> -->
    </div>
    <router-view/>
  </div>
</template>

<style>

</style>
