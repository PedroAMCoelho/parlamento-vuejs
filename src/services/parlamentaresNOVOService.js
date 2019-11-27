import { http } from './config'

export default	{

	salvar:(id) => {
		return http.post('parlamentaresNOVO', id);
  },
    
	atualizar: (id) => {
		return http.put('parlamentaresNOVO', id);
  },

  listar: () => {
		return http.get('partidos/37901/membros')
  },
    
	apagar: (id) => {
		return http.delete('parlamentaresNOVO', { data: id })
	}
}