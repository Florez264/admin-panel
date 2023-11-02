import Swal from 'sweetalert2';
import axios from 'axios';

export default (await import('vue')).defineComponent({
data() {
return {
showModal: false
};
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
openMesaje() {
this.showModal = true;
},
confirm() {
this.showModal = false;

Swal.fire({
icon: 'success',
title: '¡ GUARDADO !',
text: 'El Hotel se Agrego con Exito.'
});
},
cancele() {
this.showModal = false;
},
onMounted() { }
}()
});
