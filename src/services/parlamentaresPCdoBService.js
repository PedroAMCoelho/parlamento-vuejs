import { http } from './config'

export default	{

	salvar:(id) => {
		return http.post('parlamentaresPCdoB', id);
  },
    
	atualizar: (id) => {
		return http.put('parlamentaresPCdoB', id);
  },

  listar: () => {
		return http.get('partidos/36779/membros')
  },
    
	apagar: (id) => {
		return http.delete('parlamentaresPCdoB', { data: id })
	}
}