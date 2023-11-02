<template>
 <div v-if="!showDetails" class="contenido ml-0 sm:ml-64 ease-in-out transition-all duration-500 p-5" id="contenido">
        <h1 class="text-4xl font-bold">Listado de hoteles</h1>
        <div class="relative overflow-x-auto shadow-md sm:rounded-lg mt-16">
            <table class="w-full text-sm text-left bg-indigo-600 text-dark ">
                <thead class="text-xs text-white uppercase ">
                    <tr>
                        <th scope="col" class="px-6 py-3">
                            NIT
                        </th>
                        <th scope="col" class="px-6 py-3">
                            Nombre
                        </th>
                        <th scope="col" class="px-6 py-3">
                            Ciudad
                        </th>
                        <th scope="col" class="px-6 py-3">
                            Dirección
                        </th>
                        <th scope="col" class="px-6 py-3 text-center">
                            N° de habitaciones
                        </th>
                        <th scope="col" class="px-6 py-3 text-center">
                          Acciones
                        </th>
                    </tr>
                </thead>
                <tbody>
    <tr v-for="hotel in hotels" :key="hotel.id" class="border-b bg-indigo-100 hover:bg-indigo-200">
      <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
        {{ hotel.nit }}
      </th>
      <td class="px-6 py-4">
        {{ hotel.name }}
      </td>
      <td class="px-6 py-4">
        {{ hotel.city.name }}
      </td>
      <td class="px-6 py-4">
        {{ hotel.address }}
      </td>
      <td class="px-6 py-4 text-center">
        {{ hotel.num_rooms }}
      </td>
      <td class="px-6 py-4 flex items-center justify-center">
      <a @click="loadComponent('Detalles', hotel)"
        class="bg-yellow-500 p-1 rounded flex items-center justify-center font-medium text-white hover:bg-yellow-600 mr-2">
        Detalles
      </a>
      <a @click="deleteHotel(hotel.id)"
        class="bg-red-500 p-1 rounded flex items-center justify-center font-medium text-white hover:bg-red-600">
        Eliminar
      </a>
      <a @click="editHotel(hotel.id)"
    class="bg-blue-500 p-1 rounded flex items-center justify-center font-medium text-white hover:bg-blue-600 mr-2 m-4">
    Editar
      </a>
    </td>
    </tr>
  </tbody>
            </table>
        </div>
    </div>
    <component :is= "currentComponent"></component>
</template>

<script>
import 'tailwindcss/base.css';
import 'tailwindcss/components.css';
import 'tailwindcss/utilities.css';

import axios from 'axios';
import Detalles from './Detalles.vue';
import Swal from 'sweetalert2';

export default{ 
    data() {
  return{
    hotels: [],
      currentComponent: null,
      showDetails: false,
      currentHotel: null

  }
    },
    created() {
    axios.get('http://146.190.32.176/diplomado/api/hotels')
      .then(response => {
        this.hotels = response.data.data;
      })
      .catch(error => {
        console.error(error);
      });
  },
  methods: {
    
    loadComponent(nombreComponente) {
    if (nombreComponente === 'Detalles') {
      this.currentComponent = Detalles;
      this.showDetails = true;
    }
  },
  deleteHotel(id) {
  
  const hotel = this.hotels.find(hotel => hotel.id === id);

  Swal.fire({
    title: '¿Estás seguro?',
    text: `Estás a punto de eliminar el hotel ${hotel.name}. Esta acción no se puede deshacer.`,
    icon: 'warning',
    showCancelButton: true,
    confirmButtonText: 'Sí, eliminar',
    cancelButtonText: 'No, cancelar'
  }).then((result) => {
    if (result.isConfirmed) {
      axios.delete(`http://146.190.32.176/diplomado/api/hotels/${id}`)
        .then(() => {
          
          this.hotels = this.hotels.filter(hotel => hotel.id !== id);
          Swal.fire('Eliminado', 'El hotel ha sido eliminado.', 'success');
        })
        .catch(error => {
          console.error(error);
          Swal.fire('Error', 'Ha ocurrido un error al eliminar el hotel.', 'error');
        });
    }
  });
},

async editHotel(id) {
  // Encuentra el hotel por id
  const hotel = this.hotels.find(hotel => hotel.id === id);

  axios.get('http://146.190.32.176/diplomado/api/cities')
    .then((response) => {
      this.ciudades = response.data;

      Swal.fire({
        title: 'Editar hotel',
        html:
          `<select id="swal-input1" class="swal2-input">
             <option value="${hotel.city_id}" selected>${hotel.city.name}</option>
           </select>` +
          `<input id="swal-input2" class="swal2-input" placeholder="Nombre del hotel" value="${hotel.name}">` +
          `<input id="swal-input3" class="swal2-input" placeholder="NIT" value="${hotel.nit}">` +
          `<input id="swal-input4" class="swal2-input" placeholder="Dirección" value="${hotel.address}">` +
          `<input id="swal-input5" class="swal2-input" placeholder="Número de habitaciones" value="${hotel.num_rooms}">`,
        focusConfirm: false,
        preConfirm: () => {
          return [
            document.getElementById('swal-input1').value,
            document.getElementById('swal-input2').value,
            document.getElementById('swal-input3').value,
            document.getElementById('swal-input4').value,
            document.getElementById('swal-input5').value
          ]
        },
        onOpen: () => {
          // Aquí puedes agregar las opciones al select
          const select = document.getElementById('swal-input1');
          this.ciudades.forEach(ciudad => {
            const option = document.createElement('option');
            option.value = ciudad.id;
            option.text = ciudad.name;
            select.appendChild(option);
          });
        }
      }).then((result) => {
        if (result.value) {
          const updatedHotel = {
            city_id: result.value[0],
            name: result.value[1],
            nit: result.value[2],
            address: result.value[3],
            num_rooms: result.value[4]
          };

          axios.put(`http://146.190.32.176/diplomado/api/hotels/${id}`, updatedHotel)
            .then(() => {
              // Actualiza el hotel en la lista de la interfaz de usuario
              this.hotels = this.hotels.map(h => h.id === id ? { ...h, ...updatedHotel } : h);
            })
            .catch(error => {
              console.error(error);
            });
        }
      });
    })
    .catch((error) => {
      console.log(error);
    });
}



  },
}



</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->