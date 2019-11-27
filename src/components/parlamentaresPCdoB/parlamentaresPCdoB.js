
import PCdoBService from '../../services/parlamentaresPCdoBService';
import InfoPartidos from '../../services/informacaoPartidosService';

export default {
  name: 'parlamentaresPCdoB',
  components: {},
  props: [],
  data () {
    return {
      parlamentaresPCdoB: [],
      informacaoPCdoB: [],
      idPCdoB: 36779
    }
  },
  computed: {

  },
  mounted () {
    this.listar();
    this.listaInfoPCdoB();
  },
  methods: {

    listar() {
      PCdoBService.listar().then(response => {
          this.parlamentaresPCdoB = response.data.dados
        })
    },

    listaInfoPCdoB() {
      InfoPartidos.listarPorId(this.idPCdoB).then(response => {
        this.informacaoPCdoB = response.data.dados        
      })
    }

  }
}
