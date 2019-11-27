import { http } from './config'

export default	{

	salvar:(id) => {
		return http.post('parlamentaresMBD', id);
  },
    
	atualizar: (id) => {
		return http.put('parlamentaresMBD', id);
  },

  listar: () => {
		return http.get('partidos/36899/membros')
  },
    
	apagar: (id) => {
		return http.delete('parlamentaresMBD', { data: id })
	}
}