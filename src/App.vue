<!-- eslint-disable vue/valid-v-else -->
<template>
<div class="bg-indigo-900 flex justify-between w-full p-6 items-center h-20">
        <div class="flex justify-between  items-center space-x-3 z-50">
            <img src="./assets/hotel.png" alt="logo" class="w-12" />
            <p class="text-2xl leading-6 text-white">Panel administrativo</p>
        </div>
        <div aria-label="toggler" class="flex justify-center items-center">
            <button aria-label="open" id="open" @click="showNav(true)"
                class="block sm:hidden focus:outline-none focus:ring-2">
                <img src="https://tuk-cdn.s3.amazonaws.com/can-uploader/sidebar2-svg2.svg" alt="menu" />
            </button>
            <button aria-label="close" id="close" @click="showNav(false)"
                class="sm:block hidden focus:outline-none focus:ring-2">
                <img src="https://tuk-cdn.s3.amazonaws.com/can-uploader/sidebar2-svg3.svg" alt="close" />
            </button>
        </div>
    </div>
    <div id="Main"
        class="transform ease-in-out transition duration-500 flex justify-start items-start h-full w-64 bg-indigo-900 flex-col fixed pt-[80px] top-0 bottom-0 overflow-y-auto sm:translate-x-0 translate-x-[-100%] z-40">
        <div
            class="mt-6 flex flex-col justify-start items-center  pl-4 w-full border-indigo-600 border-b space-y-3 pb-5 ">
            <button
                class="flex jusitfy-start items-center space-x-6 w-full  focus:outline-none  focus:text-indigo-400  text-white rounded ">
                <img class="fill-stroke " src="https://tuk-cdn.s3.amazonaws.com/can-uploader/sidebar2-svg4.svg"
                    alt="dashboard" />
                <a  href="./App.vue" class="text-base leading-4 ">Dashboard</a>
            </button>
        </div>
        <div class="flex flex-col justify-start items-center px-6 border-b border-indigo-600 w-full  ">
          <button @click="showMenu1(!menu1Visible)" class="focus:outline-none focus:text-indigo-400 text-left text-white flex justify-between items-center w-full py-5 space-x-14">
             <p class="text-sm leading-5  uppercase">Hotel</p>
                <img :class="{ 'rotate-180': menu1Visible }" src="https://tuk-cdn.s3.amazonaws.com/can-uploader/sidebar2-svg6.svg" alt="profile overview" />
          </button>
           <div :class="{ hidden: !menu1Visible }" class="flex justify-start flex-col w-full md:w-auto items-start pb-1">
              <a  href="#" @click="cargarListaHoteles" class="flex justify-start items-center space-x-6 hover:text-white focus:bg-indigo-700 focus:text-white hover:bg-indigo-700 text-indigo-400 rounded px-3 py-2  w-full md:w-52">
                  <i class="bi bi-bank"></i> 
                 <p class="text-base leading-4">Listado de hoteles</p>
              </a>
              <a href="#" @click="cargarAddHoteles" class="flex justify-start items-center space-x-6 hover:text-white focus:bg-indigo-700 focus:text-white hover:bg-indigo-700 text-indigo-400 rounded px-3 py-2  w-full md:w-52">
                 <i class="bi bi-plus-square"></i>
                 <p class="text-base leading-4">Agregar hotel</p>
              </a>
           </div>

        </div>
    </div>

<article>
  
 
  
<!---<component  :is="currentComponent"></component>-->
<component :is="componenteActual || 'Info'"></component>
 
  
</article>


    
</template>

<script>
import 'tailwindcss/base.css';
import 'tailwindcss/components.css';
import 'tailwindcss/utilities.css';

import Info from './components/info.vue';
import ListaHoteles from './components/ListaHoteles.vue';
//import Agregarhotel from './components/AgregarHotel.vue';
import Agregar from './components/Agregar.vue';
//import Detalles from './components/Detalles.vue';


export default {
  name: 'App',
  components: {
    Info
  },
  data() {
    return {
      menu1Visible: false, // Variable para controlar la visibilidad del menú 1
      navVisible: false, // Variable para controlar la visibilidad de la navegación
      //currentComponent: null,
      componenteActual: null,
    }; 

  },

  methods: {
    showMenu1(flag) {
      //  mostrar/ocultar el menú 1
      this.menu1Visible = flag;
    },
    showNav(flag) {
      //mostrar/ocultar la navegación
      this.navVisible = flag; 
    },

    /*loadComponent(nombreComponente) {
    if (nombreComponente === 'ListaHoteles') {
      this.currentComponent = ListaHoteles;
      @click="loadComponent('ListaHoteles')"
    } 
  },*/
  cargarInfo() {
    // Carga el contenido inicial si es necesario
    this.componenteActual = null;
  },
  mounted() {
    this.cargarInfo();
  },
  cargarListaHoteles() {
      this.componenteActual = ListaHoteles;
    },
    cargarAddHoteles(){
      this.componenteActual = Agregar;
    }
 

}
}
</script>


