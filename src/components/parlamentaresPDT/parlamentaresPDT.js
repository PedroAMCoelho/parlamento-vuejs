
import PDTService from '../../services/parlamentaresPDTService';
import InfoPartidos from '../../services/informacaoPartidosService';

export default {
  name: 'parlamentaresPDT',
  components: {},
  props: [],
  data () {
    return {
      parlamentaresPDT: [],
      informacaoPDT: [],
      idPDT: 36786
    }
  },
  computed: {

  },
  mounted () {
    this.listar();
    this.listaInfoPDT();
  },
  methods: {

    listar() {
      PDTService.listar().then(response => {
          this.parlamentaresPDT = response.data.dados
        })
    },

    listaInfoPDT() {
      InfoPartidos.listarPorId(this.idPDT).then(response => {
        this.informacaoPDT = response.data.dados        
      })
    }

  }
}
