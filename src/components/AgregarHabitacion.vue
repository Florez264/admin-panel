<template>

<div  v-if="!showDetails" class="contenido ml-0 sm:ml-64 ease-in-out transition-all duration-500 p-10" id="contenido">
    <h1 class="text-4xl font-bold">Agregar Habitacion <font Size="2">GHL Hotel Barranquilla</font></h1>
    <div class="container mx-auto mt-10">
        <form class="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div class="relative">
                <input type="nomber" id="nit"
                    class="bg-indigo-100 block rounded-t-lg px-2.5 pb-2.5 pt-5 w-full text-sm text-gray-900 border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-indigo-600 peer"
                    placeholder=" " />
                <label for="nit"
                    class="absolute text-sm text-gray-500 duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] left-2.5 peer-focus:text-indigo-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4">Codigo de Habitacion
                    </label>
                <p class="mt-1 text-sm text-red-600 font-medium">*Mensaje de error!</p>
            </div>
            <div class="relative">
                <div>
                    <select class="bg-indigo-100 block rounded-t-lg px-2.5 pb-2.5 pt-5 w-full text-sm text-gray-900 border-0 border-b-2 border-gray-300 focus:outline-none focus:ring-0 focus:border-indigo-600 peer"
                     data-te-select-init>
                        <option class="" value="1">Estandar</option>
                        <option value="2">Junior</option>
                        <option value="3">Suit</option>
                       
                      </select>
                </div>
                               <p class="mt-1 text-sm text-red-600 font-medium">*Mensaje de error!</p>
            </div>
            <div class="relative">
                <div>
                    <select class="bg-indigo-100 block rounded-t-lg px-2.5 pb-2.5 pt-5 w-full text-sm text-gray-900 border-0 border-b-2 border-gray-300 focus:outline-none focus:ring-0 focus:border-indigo-600 peer"
                     data-te-select-init>
                        <option class="" value="1">Sencilla</option>
                        <option value="2">Doble</option>
                        <option value="3">Triple</option>
                        <option value="4">Cuadruple</option>
                      </select>
                </div>
                <p class="mt-1 text-sm text-red-600 font-medium">*Mensaje de error!</p>
            </div>
            
        </form>
        <div class="flex justify-between items-center mt-10">
            <button @click="openModal" class="bg-teal-500 hover:bg-teal-700 active:bg-teal-400 text-white font-bold py-2 px-4 rounded-md">
            Agregar
            </button>

            <button @click ="loadComponent('Habitaciones')" class="border-gray-500 text-gray-500 hover:bg-blue-500 hover:text-white font-bold py-2 px-4 rounded">
             Regresar
            </button>
        </div>
    </div>

</div>

<div v-if="showModal" class="fixed z-10 inset-0 overflow-y-auto">
    <div class="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
      <div class="fixed inset-0 transition-opacity">
        <div class="absolute inset-0 bg-gray-500 opacity-75"></div>
      </div>
      <div class="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
        <div class="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
          <h2 class="text-lg leading-6 font-medium text-gray-900">Agregar Habiatcion</h2>
          <div class="mt-2">
            <p class="text-sm leading-5 text-gray-500">¿Desea  Guardar la Habitacion?</p>
            <p class="text-sm leading-5 text-gray-500">Se Guardara dentro del GHL Hotel Barranquilla</p>
          </div>
        </div>
        <div class="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
          <span class="flex w-full rounded-md shadow-sm sm:ml-3 sm:w-auto">
            <button @click="confirm" class="inline-flex justify-center w-full rounded-md border border-transparent px-4 py-2 bg-red-600 text-base leading-6 font-medium text-white shadow-sm hover:bg-red-500 focus:outline-none focus:border-red-700 focus:shadow-outline-red transition ease-in-out duration-150 sm:text-sm sm:leading-5">Aceptar</button>
          </span>
          <span class="mt-3 flex w-full rounded-md shadow-sm sm:mt-0 sm:w-auto">
            <button @click="cancel" class="inline-flex justify-center w-full rounded-md border border-gray-300 px-4 py-2 bg-white text-base leading-6 font-medium text-gray-700 shadow-sm hover:text-gray-500 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue transition ease-in-out duration-150 sm:text-sm sm:leading-5">Cancelar</button>
          </span>
        </div>
      </div>
    </div>
  </div>


    <article>
        <component :is= "currentComponent"></component>
    </article>

</template>

<script>
import Swal from 'sweetalert2';
import Habitaciones from './Habitaciones.vue';

export default{
    data(){
        return{
            currentComponent: null,
            showDetails: false,
            showModal: false
        }
    },

    methods:{
    
    loadComponent(nombreComponente) {
    if (nombreComponente === 'Habitaciones') {
      this.currentComponent = Habitaciones;
      this.showDetails = true;
    }
  },
  openModal() {
      this.showModal = true;
    },
    confirm() {
      this.showModal = false;
      //alert('La habitación ha sido eliminada');
      Swal.fire({
        icon: 'success',
        title: '¡ GUARDADO !',
        text: 'La Habitacion se Agrego correctamente.',
      })
    },
    cancel() {
      this.showModal = false;
    },
  }
}

</script>