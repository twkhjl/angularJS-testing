app.directive('ttt',function(){
  return {
     /* 
    E:element
    A:attribute
    C:class
    M:comment

    */
    restrict:'E',

    /* 
    scope:
    = is two-way binding
    @ simply reads the value (one-way binding)
    & is used to bind functions
    */
    scope:{
      text:'@'
    },
    templateUrl:'directives/ttt/ttt.html',
  }
})