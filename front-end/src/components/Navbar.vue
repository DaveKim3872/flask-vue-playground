<style scoped>
  .container-fluid{
    width: 100%;
    padding-left: 70px;
    padding-right:70px;
    margin-right: auto;
    margin-left: auto;
  }
</style>
<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light" style="margin-bottom: 20px;">
    <div class="container-fluid">
      <router-link to="/table" class="navbar-brand">
        <img src="../assets/roche-logo-vector.png" width="35" height="35" class="d-inline-block align-top" alt="">
        Roche BMS
      </router-link>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mr-auto ml-2 mt-2 mt-lg-0">
          <li class="nav-item active">
            <router-link to="/table" class="nav-link" >MPR Data<span class="sr-only">(current)</span></router-link>
          </li>
          <li class="nav-item">
            <router-link to="nav-link" class="nav-link">Milestone Timeline By Theme</router-link>
          </li>
          <li class="nav-item">
            <router-link to="nav-link" class="nav-link">Milestone Timeline By Type</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/table" class="nav-link">China Launch Chart</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/table" class="nav-link">NDA Approval</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/table" class="nav-link">China Portfolio Chart</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/table" class="nav-link">None MPR Data</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/table" class="nav-link">Setting</router-link>
          </li>
        </ul>

<!--        <form class="form-inline navbar-left mr-auto">-->
<!--          <input class="form-control mr-sm-2" type="search" placeholder="Search">-->
<!--          &lt;!&ndash; 暂时先禁止提交，后续实现搜索再改回 type="submit" &ndash;&gt;-->
<!--          <button class="btn btn-outline-primary my-2 my-sm-0" type="button">Search</button>-->
<!--        </form>-->

<!--        <ul class="nav navbar-nav navbar-right">-->
<!--          <li class="nav-item">-->
<!--            <a class="nav-link disabled" href="#">Messages</a>-->
<!--          </li>-->
<!--          <li class="nav-item">-->
<!--            <router-link to="/profile" class="nav-link">Profile</router-link>-->
<!--          </li>-->
<!--          <li class="nav-item">-->
<!--            <router-link to="/login" class="nav-link">Login</router-link>-->
<!--          </li>-->
<!--        </ul>-->
      </div>
    </div>
  </nav>
</template>

<script>
  export default {
    name: 'Navbar'  //this is the name of the component
  }
</script>

<style scoped>

</style>
