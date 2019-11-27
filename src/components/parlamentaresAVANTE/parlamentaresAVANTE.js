
import AVANTEService from '../../services/parlamentaresAVANTEService';
import InfoPartidos from '../../services/informacaoPartidosService';

export default {
  name: 'parlamentaresAVANTE',
  components: {},
  props: [],
  data () {
    return {
      parlamentaresAVANTE: [],
      informacaoAVANTE: [],
      idAVANTE: 36898
    }
  },
  computed: {

  },
  mounted () {
    this.listar();
    this.listaInfoAVANTE();
  },
  methods: {

    listar() {
      AVANTEService.listar().then(response => {
          this.parlamentaresAVANTE = response.data.dados
        })
    },

    listaInfoAVANTE() {
      InfoPartidos.listarPorId(this.idAVANTE).then(response => {
        this.informacaoAVANTE = response.data.dados        
      })
    }

  }
}
