import { http } from './config'

export default	{

	salvar:(id) => {
		return http.post('parlamentaresAVANTE', id);
  },
    
	atualizar: (id) => {
		return http.put('parlamentaresAVANTE', id);
  },

  listar: () => {
		return http.get('partidos/36898/membros')
  },
    
	apagar: (id) => {
		return http.delete('parlamentaresAVANTE', { data: id })
	}
}