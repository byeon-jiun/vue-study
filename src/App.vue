<template>
  <div id="app">

    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link> |
      <router-link to="/databinding">DataBinding</router-link> |
      <router-link to="/databindinghtml">DataBindingHtml</router-link> |
      <router-link to="/databindinginputtext">DataBindingInputText</router-link> |
      <router-link to="/databindinginputnumber">DataBindingInputNumber</router-link> |
      <router-link to="/databindinginputtextarea">DataBindingInputTextarea</router-link>
      <br>
      <router-link to="/databindingselect">DataBindingSelect</router-link> |
      <router-link to="/databindingcheckbox">DataBindingCheckbox</router-link> |
      <router-link to="/databindingcheckbox2">DataBindingCheckbox2</router-link> |
      <router-link to="/databindingradio">DataBindingRadio</router-link> |
      <router-link to="/databindingattribue">DataBindingAttribue</router-link> |
      <router-link to="/databindingbutton">DataBindingButton</router-link>
      <br>
      <router-link to="/databindingclass">DataBindingClass</router-link> |
      <router-link to="/databindingclass2">DataBindingClass2</router-link> |
      <router-link to="/databindingstyle">DataBindingStyle</router-link> |
      <router-link to="/databindinglist">DataBindingList</router-link> |
      <router-link to="/databindinglist2">DataBindingList2</router-link>
      <br>
      <br>
      <router-link to="/renderingvif">RenderingVIf</router-link> |
      <router-link to="/renderingvshow">RenderingVShow</router-link>
      <br>
      <br>
      <router-link to="/eventclick">EventClick</router-link> |
      <router-link to="/eventclick2">EventClick2</router-link> |
      <router-link to="/eventclick3">EventClick3</router-link> |
      <router-link to="/eventchange">EventChange</router-link> |
      <router-link to="/eventkey">EventKey</router-link>
      <br>
      <br>
      <router-link to="/computed">Computed</router-link>
      <br>
      <br>
      <router-link to="/watch">Watch</router-link> |
      <router-link to="/watch2">Watch2</router-link>
      <br>
      <br>
      <router-link to="/nestedcomponent">NestedComponent</router-link> |
      <router-link to="/nestedcomponent2">NestedComponent2</router-link> |
      <router-link to="/nestedcomponent3">NestedComponent3</router-link>
      <br>
      <br>
      <router-link to="/parentcomponent">ParentComponent</router-link> |
      <router-link to="/parentcomponent2">ParentComponent2</router-link> |
      <router-link to="/parentcomponent3">ParentComponent3</router-link> |
      <router-link to="/parentcomponent4">ParentComponent4</router-link> |
      <router-link to="/parentcomponent5">ParentComponent5</router-link>
      <br>
      <br>
      <router-link to="/calculator">Calculator</router-link> |
      <router-link to="/calculator2">Calculator2</router-link> |
      <router-link to="/calculator3">Calculator3</router-link>
    </div>
    <router-view>
    </router-view>

  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>