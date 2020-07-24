import Vue from 'vue'

new Vue({
  el: '#app',
   data: { 
         nombre: '',
         apellido: '',
         tamanoFuente: 20,
         colorParrafo: '#000',
         articulos: [{
                    codigo: 1, 
                    descripcion: 'papas',
                    precio: 12.52,
                    stock: 10
                   },{
                    codigo: 2, 
                    descripcion: 'naranjas',
                    precio: 21,
                    stock: 0
                   },{
                    codigo: 3, 
                    descripcion: 'peras',
                    precio: 18.20,
                    stock: 0
                   },{
                    codigo: 4, 
                    descripcion: 'duraznos',
                    precio: 35,
                    stock: 20                     
                   }]
       },
       computed:{
        nombreCompleto: function () {
           return this.nombre + ' ' + this.apellido;
        }
       }
  // template: '<h1>hello Vue</h1>'
})