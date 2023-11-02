<!-- eslint-disable vue/multi-word-component-names -->
<template> 
    <div v-if="!showDetails" class="contenido ml-0 sm:ml-64 ease-in-out  transition-all duration-500 p-10" id="contenido">
        <h1 class="text-4xl font-bold"> Detalles del hoteles</h1>
        <div class="container mx-auto flex flex-wrap py-6">

           
            <section class ="w-full md:w-2/3 flex flex-col items-center px-3">
    
                
    
                <article class="flex flex-col shadow my-4">
                    <!-- Article Image -->
                    <a href="#" class="hover:opacity-75">
                        <img src="https://source.unsplash.com/collection/1346951/1000x500?sig=2">
                    </a>
                    <div class="bg-white flex flex-col justify-start p-6">
                        <a href="#" class="text-blue-700 text-sm font-bold uppercase pb-4">Automotive, Finance</a>
                        <a href="#" class="text-3xl font-bold hover:text-gray-700 pb-4">Lorem Ipsum Dolor Sit Amet Dolor Sit Amet</a>
                        <p href="#" class="text-sm pb-3">
                            By <a href="#" class="font-semibold hover:text-gray-800">David Grzyb</a>, Published on January 12th, 2020
                        </p>
                        <a href="#" class="pb-6">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus quis porta dui. Ut eu iaculis massa. Sed ornare ligula lacus, quis iaculis dui porta volutpat. In sit amet posuere magna..</a>
                        <a href="#" class="uppercase text-gray-800 hover:text-black">Continue Reading <i class="fas fa-arrow-right"></i></a>
                    </div>
                </article>
    
                <article class="flex flex-col shadow my-4">
                    <!-- Article Image -->
                    <a href="#" class="hover:opacity-75">
                        <img src="https://source.unsplash.com/collection/1346951/1000x500?sig=3">
                    </a>
                    <div class="bg-white flex flex-col justify-start p-6">
                        <a href="#" class="text-blue-700 text-sm font-bold uppercase pb-4">Sports</a>
                        <a href="#" class="text-3xl font-bold hover:text-gray-700 pb-4">Lorem Ipsum Dolor Sit Amet Dolor Sit Amet</a>
                        <p href="#" class="text-sm pb-3">
                            By <a href="#" class="font-semibold hover:text-gray-800">David Grzyb</a>, Published on October 22nd, 2019
                        </p>
                        <a href="#" class="pb-6">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus quis porta dui. Ut eu iaculis massa. Sed ornare ligula lacus, quis iaculis dui porta volutpat. In sit amet posuere magna..</a>
                        <a href="#" class="uppercase text-gray-800 hover:text-black">Continue Reading <i class="fas fa-arrow-right"></i></a>
                    </div>
                </article>
    
               
                <div class="flex items-center py-8">
                    <a href="#" class="h-10 w-10 bg-blue-800 hover:bg-blue-600 font-semibold text-white text-sm flex items-center justify-center">1</a>
                    <a href="#" class="h-10 w-10 font-semibold text-gray-800 hover:bg-blue-600 hover:text-white text-sm flex items-center justify-center">2</a>
                    <a href="#" class="h-10 w-10 font-semibold text-gray-800 hover:text-gray-900 text-sm flex items-center justify-center ml-3">Next <i class="fas fa-arrow-right ml-2"></i></a>
                </div>
    
            </section>
    
            
            <aside class="w-full md:w-1/3 flex flex-col items-center px-3">
    
                <div class="w-full bg-white shadow flex flex-col my-4 p-6">
                    <p class="text-xl font-semibold pb-5">About Us</p>
                    <p class="pb-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas mattis est eu odio sagittis tristique. Vestibulum ut finibus leo. In hac habitasse platea dictumst.</p>
                    <a href="#" class="w-full bg-blue-800 text-white font-bold text-sm uppercase rounded hover:bg-blue-700 flex items-center justify-center px-2 py-3 mt-4">
                        Get to know us
                    </a>
                </div>
    
                <div class="w-full bg-white shadow flex flex-col my-4 p-6">
                    <p class="text-xl font-semibold pb-5">Instagram</p>
                    <div class="grid grid-cols-3 gap-3">
                        <img class="hover:opacity-75" src="https://source.unsplash.com/collection/1346951/150x150?sig=1">
                        <img class="hover:opacity-75" src="https://source.unsplash.com/collection/1346951/150x150?sig=2">
                        <img class="hover:opacity-75" src="https://source.unsplash.com/collection/1346951/150x150?sig=3">
                        <img class="hover:opacity-75" src="https://source.unsplash.com/collection/1346951/150x150?sig=4">
                        <img class="hover:opacity-75" src="https://source.unsplash.com/collection/1346951/150x150?sig=5">
                        <img class="hover:opacity-75" src="https://source.unsplash.com/collection/1346951/150x150?sig=6">
                        <img class="hover:opacity-75" src="https://source.unsplash.com/collection/1346951/150x150?sig=7">
                        <img class="hover:opacity-75" src="https://source.unsplash.com/collection/1346951/150x150?sig=8">
                        <img class="hover:opacity-75" src="https://source.unsplash.com/collection/1346951/150x150?sig=9">
                    </div>
                    <a href="#" class="w-full bg-blue-800 text-white font-bold text-sm uppercase rounded hover:bg-blue-700 flex items-center justify-center px-2 py-3 mt-6">
                        <i class="fab fa-instagram mr-2"></i> Follow @dgrzyb
                    </a>
                </div>
    
            </aside>
    
        </div>
    
        <div class="container mx-auto mt-10">
            <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div class="relative">
                    <input type="nomber" id="nit"
                        class="bg-indigo-50 block rounded-t-lg px-2.5 pb-2.5 pt-5 w-full text-sm text-gray-900 border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-indigo-600 peer"
                        placeholder=" " value="846123002-2" disabled/>
                    <label for="nit"
                        class="absolute text-sm text-gray-500 duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] left-2.5 peer-focus:text-indigo-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4">NIT</label>
                </div>
                <div class="relative">
                    <input type="text" id="nombre"
                        class="bg-indigo-50 block rounded-t-lg px-2.5 pb-2.5 pt-5 w-full text-sm text-gray-900 border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-indigo-600 peer"
                        placeholder=" " value="GHL Hotel Barranquilla" disabled/> 
                    <label for="nombre"
                        class="absolute text-sm text-gray-500 duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] left-2.5 peer-focus:text-indigo-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4">Nombre del hotel</label>
                </div>
                <div class="relative">
                    <input type="text" id="ciudad"
                        class="bg-indigo-50 block rounded-t-lg px-2.5 pb-2.5 pt-5 w-full text-sm text-gray-900 border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-indigo-600 peer"
                        placeholder=" " value="Barranquilla" disabled/>
                    <label for="ciudad"
                        class="absolute text-sm text-gray-500 duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] left-2.5 peer-focus:text-indigo-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4">Ciudad</label>
                </div>
                <div class="relative">
                    <input type="text" id="direccion"
                        class="bg-indigo-50 block rounded-t-lg px-2.5 pb-2.5 pt-5 w-full text-sm text-gray-900 border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-indigo-600 peer"
                        placeholder=" " value="Calle 106 # 50-11 Villa Santos" disabled/>
                    <label for="direccion"
                        class="absolute text-sm text-gray-500 duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] left-2.5 peer-focus:text-indigo-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4">Dirección</label>
                </div>
                <div class="relative">
                    <input type="text" id="habitaciones"
                        class="bg-indigo-50 block rounded-t-lg px-2.5 pb-2.5 pt-5 w-full text-sm text-gray-900 border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-indigo-600 peer"
                        placeholder=" " value="226" disabled/>
                    <label for="habitaciones"
                        class="absolute text-sm text-gray-500 duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] left-2.5 peer-focus:text-indigo-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4">Numero de habitaciones</label>
                </div>
            </div>
            <a @click="loadComponent('Habitaciones')" class=" m-10 inline-block bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded-md">
              Habitaciones
            </a>

            <button @click ="loadComponent('ListaHoteles')" class="border-gray-500 text-gray-500 hover:bg-blue-500 hover:text-white font-bold py-2 px-4 rounded">
             Regresar
            </button>


            <div class="flex w-full justify-center mt-10 mb-2"> 
                <h2 class="m-8"><font Size="7">Estadisticas de Hotel</font></h2>
            </div>

            <div class="flex w-full ">
            <div class="bg-white shadow-lg p-4 h-64" id="chart"></div>
            <div class="bg-white shadow-lg p-4 h-64 m-5" id="charts"></div>

        </div>

        </div>
    </div>

    <article>
        <component :is= "currentComponent"></component>
    </article>

</template>

<script>
  
import Habitaciones from './Habitaciones.vue';
import ListaHoteles from './ListaHoteles.vue';

import ApexCharts from 'apexcharts';

export default{
    data() {
        return{
            currentComponent: null,
            showDetails: false,
        }
  },
  mounted() {
    this.renderChart();
    this.createChart();
  },
  methods:{
    
    loadComponent(nombreComponente) {
    if (nombreComponente === 'Habitaciones') {
      this.currentComponent = Habitaciones;
      this.showDetails = true;
    }else if (nombreComponente === 'ListaHoteles') {
        this.currentComponent = ListaHoteles;
        this.showDetails = true;
    }
  },
  renderChart() {
      if (!document.querySelector('#chart').classList.contains('apexcharts-canvas')) {
        var options = {
          chart: {
            type: 'bar',
            height: 350,
            width: 400
          },
          plotOptions: {
            bar: {
              horizontal: false,
              columnWidth: '30%',
              endingShape: 'rounded'
            },
          },
          dataLabels: {
            enabled: false
          },
          stroke: {
            show: true,
            width: 2,
            colors: ['transparent']
          },
          series: [{
            name: 'Reservas',
            data: [44, 55,  75] // Aquí debes poner los datos reales de las reservas
          }],
          xaxis: {
            categories: ['Estandar', 'Deluxe', 'Suite' ],
          },
          yaxis: {
            title: {
              text: 'Reservas por Tipo de Habitacion'
            }
          },
          fill: {
            opacity: 1
          },
        };

        var chart = new ApexCharts(document.querySelector('#chart'), options);
        chart.render();
      }
    },
    createChart() {
      const options = {
        chart: {
          type: 'pie',
          height: 350,
          width: 490
        },
        series: [44, 55, 13],
        labels: ['Doble', 'Sencilla', 'Triple'],
        responsive: [{
          breakpoint: 480,
          options: {
            chart: {
            width: 500
            },
            legend: {
              position: 'bottom'
            }
          }
        }]
      };

      const chart = new ApexCharts(document.querySelector("#charts"), options);
      chart.render();
    }
  }
}

</script>