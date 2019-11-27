
import NOVOService from '../../services/parlamentaresNOVOService';
import InfoPartidos from '../../services/informacaoPartidosService';

export default {
  name: 'parlamentaresNOVO',
  components: {},
  props: [],
  data () {
    return {
      parlamentaresNOVO: [],
      informacaoNOVO: [],
      idNOVO: 37901
    }
  },
  computed: {

  },
  mounted () {
    this.listar();
    this.listaInfoNOVO();
  },
  methods: {

    listar() {
      NOVOService.listar().then(response => {
          this.parlamentaresNOVO = response.data.dados
        })
    },

    listaInfoNOVO() {
      InfoPartidos.listarPorId(this.idNOVO).then(response => {
        this.informacaoNOVO = response.data.dados        
      })
    }

  }
}
