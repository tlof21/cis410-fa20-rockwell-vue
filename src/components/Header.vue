<template>
<nav class="navbar navbar-expand-lg navbar-light bg-light">
  <router-link class="navbar-brand" to='/'>Rockwell</router-link>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav ml-auto">

      <li class="nav-item">
        <router-link class="nav-link" to="/movies">Movies</router-link>
      </li>

      <li class="nav-item">
        <router-link class="nav-link" to="/account">My Account</router-link>
      </li>

      <li class="nav-item">
        <router-link class="nav-link" to="/signin">
        <button class='btn btn-warning'>Sign In</button>
        </router-link>
      </li>
      <li class="nav-item">
        <router-link class="nav-link" to="/signup">
        <button class='btn btn-outline-warning text-dark'>Sign Up</button>
        </router-link>
      </li>

      <li class="nav-item">
        <button class='btn btn-warning'>Log Out</button>
      </li>
     
      
      
    </ul>
   
  </div>
</nav>
</template>


<script>
export default {
    
}
</script>

<style scoped>

</style>