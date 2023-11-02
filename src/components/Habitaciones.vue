<!-- eslint-disable vue/multi-word-component-names -->
<template>



    <div v-if="!showDetails" class="contenido mt-0 ml-0 sm:ml-64 ease-in-out transition-all duration-500 p-5" id="contenido">

        <h1 class="text-4xl font-bold">Detalles del hoteles</h1>
        <div class="m-5 grid grid-cols-1 md:grid-cols-2 gap-4">
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


    <div class="flex justify-between items-center mb-8">
        <h1 class="text-4xl font-bold">Listado de habitaciones</h1>
        <div class="relative">
        <select class="block appearance-none w-full bg-white border border-gray-300 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500">
            <option>Todos</option>
            <option>Estandar</option>
            <option>Deluxe</option>
            <option>Suite</option>
        </select>
        <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
            <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                <path
                    d="M9 12h2.586L7.293 16.293a1 1 0 0 0 1.414 1.414L13 11.414V14a1 1 0 0 0 2 0V8a1 1 0 0 0-1-1H9v2a1 1 0 0 0 0 2z" />
            </svg>
        </div>
    </div>
</div>
        <div class="relative overflow-x-auto shadow-md sm:rounded-lg mt-16">
            <table class="w-full text-sm text-left bg-indigo-600 text-dark ">
                <thead class="text-xs text-white uppercase ">
                    <tr>
                        <th scope="col" class="px-6 py-3">
                            Codigo Habitacion
                        </th>
                        <th scope="col" class="px-6 py-3">
                            Tipo de Habitacion
                        </th>
                        <th scope="col" class="px-6 py-3">
                            Tipo de Acomodacion
                        </th>
                       
                    </tr>
                </thead>
                <tbody>
                    <tr class="border-b bg-indigo-100 hover:bg-indigo-200">
                        <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                            115325
                        </th>
                        <td class="px-6 py-4">
                            Estandar
                        </td>
                        <td class="px-6 py-4">
                            Doble
                        </td>
                        
                        <td class="px-6 py-4 flex items-center justify-center">
                            <a @click="loadComponent('DetallesHabitacion')"
                                class="bg-yellow-500 p-1 rounded flex items-center justify-center font-medium text-white hover:bg-yellow-600">
                                Detalles
                            </a>
                        </td>
                    </tr>
                   
                </tbody>
            </table>
        </div>

        <div class="flex justify-between items-center mt-10 mb-24 flex-wrap">
            <button @click ="loadComponent('Detalles')" class="border-gray-500 text-gray-500 hover:bg-blue-500 hover:text-white font-bold py-2 px-4 rounded">
             Regresar
            </button>
        </div>
               
        <a @click="loadComponent('AgregarHabitacion')" class=" m-10 inline-block bg-blue-500 hover:bg-green-500 text-white font-bold py-2 px-4 rounded float-right">
              Agregar habitación
             </a>
      

    </div>


    <article>
        <component :is= "currentComponent"></component>
    </article>


</template>

<script>
import DetallesHabitacion from './DetallesHabitacion.vue';
import AgregarHabitacion from './AgregarHabitacion.vue';
import Detalles from './Detalles.vue';

export default{
    data(){
        return{
            currentComponent: null,
            showDetails: false
        }
    },
    methods:{
    
    loadComponent(nombreComponente) {
    if (nombreComponente === 'DetallesHabitacion') {
      this.currentComponent = DetallesHabitacion;
      this.showDetails = true;
    }else if (nombreComponente === 'AgregarHabitacion') {
        this.currentComponent = AgregarHabitacion;
        this.showDetails = true;
    }else if (nombreComponente === 'Detalles') {
        this.currentComponent = Detalles;
        this.showDetails = true;
    }
  },
  }
}

</script>