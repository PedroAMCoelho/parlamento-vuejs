
import MDBService from '../../services/parlamentaresMDBService';
import InfoPartidos from '../../services/informacaoPartidosService';

export default {
  name: 'parlamentaresMDB',
  components: {},
  props: [],
  data () {
    return {
      parlamentaresMDB: [],
      informacaoMDB: [],
      idMDB: 36899
    }
  },
  computed: {

  },
  mounted () {
    this.listar();
    this.listaInfoMDB();
  },
  methods: {

    listar() {
      MDBService.listar().then(response => {
          this.parlamentaresMDB = response.data.dados
        })
    },

    listaInfoMDB() {
      InfoPartidos.listarPorId(this.idMDB).then(response => {
        this.informacaoMDB = response.data.dados        
      })
    }

  }
}
