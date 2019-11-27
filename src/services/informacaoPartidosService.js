import { http } from './config'

export default	{

	salvar:(id) => {
		return http.post('parlamentaresPDT', id);
  },
    
	atualizar: (id) => {
		return http.put('parlamentaresPDT', id);
  },

  listar: () => {
		return http.get('partidos/')
  },

  listarPorId: (id) => {
    return http.get('partidos/' + id)
  },
    
	apagar: (id) => {
		return http.delete('produto', { data: id })
	}
}